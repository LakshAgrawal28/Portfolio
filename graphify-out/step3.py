import sys, json, os
from graphify.extract import collect_files, extract
from graphify.cache import check_semantic_cache
from pathlib import Path

# Step 3A - AST Extraction
def load_json(path):
    try:
        return json.loads(Path(path).read_text(encoding="utf-8-sig"))
    except:
        return json.loads(Path(path).read_text(encoding="utf-16"))

detect = load_json("graphify-out/.graphify_detect.json")

code_files = []
for f in detect.get("files", {}).get("code", []):
    p = Path(f)
    if p.exists():
        code_files.extend(collect_files(p) if p.is_dir() else [p])

if code_files:
    result = extract(code_files, cache_root=Path("."))
    Path("graphify-out/.graphify_ast.json").write_text(json.dumps(result, indent=2), encoding="utf-8")
    print(f"AST: {len(result['nodes'])} nodes, {len(result['edges'])} edges")
else:
    Path("graphify-out/.graphify_ast.json").write_text(json.dumps({"nodes":[],"edges":[],"input_tokens":0,"output_tokens":0}), encoding="utf-8")
    print("No code files - skipping AST extraction")

# Step 3B - Semantic Cache Check
all_files = [f for files in detect["files"].values() for f in files]
cached_nodes, cached_edges, cached_hyperedges, uncached = check_semantic_cache(all_files)

if cached_nodes or cached_edges or cached_hyperedges:
    Path("graphify-out/.graphify_cached.json").write_text(json.dumps({"nodes": cached_nodes, "edges": cached_edges, "hyperedges": cached_hyperedges}), encoding="utf-8")
else:
    Path("graphify-out/.graphify_cached.json").write_text(json.dumps({"nodes":[], "edges":[], "hyperedges":[]}), encoding="utf-8")

Path("graphify-out/.graphify_uncached.txt").write_text("\n".join(uncached), encoding="utf-8")
print(f"Cache: {len(all_files)-len(uncached)} files hit, {len(uncached)} files need extraction")

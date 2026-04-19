import sys, json
from graphify.build import build_from_json
from graphify.cluster import cluster, score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from graphify.export import to_json, to_html
from pathlib import Path

def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8-sig"))

ast = load_json("graphify-out/.graphify_ast.json")
sem = load_json("graphify-out/.graphify_semantic.json")
detection = load_json("graphify-out/.graphify_detect.json")

# Merge extraction
seen = {n["id"] for n in ast["nodes"]}
merged_nodes = list(ast["nodes"])
for n in sem["nodes"]:
    if n["id"] not in seen:
        merged_nodes.append(n)
        seen.add(n["id"])

merged_edges = ast["edges"] + sem["edges"]
extraction = {"nodes": merged_nodes, "edges": merged_edges, "input_tokens": sem.get("input_tokens", 0), "output_tokens": sem.get("output_tokens", 0)}
Path("graphify-out/.graphify_extract.json").write_text(json.dumps(extraction, indent=2), encoding="utf-8")

G = build_from_json(extraction)
communities = cluster(G)
cohesion = score_all(G, communities)
tokens = {"input": extraction["input_tokens"], "output": extraction["output_tokens"]}
gods = god_nodes(G)
surprises = surprising_connections(G, communities)
labels = {cid: f"Community {cid}" for cid in communities}
questions = suggest_questions(G, communities, labels)

report = generate(G, communities, cohesion, labels, gods, surprises, detection, tokens, ".", suggested_questions=questions)
Path("graphify-out/GRAPH_REPORT.md").write_text(report, encoding="utf-8")
to_json(G, communities, "graphify-out/graph.json")
to_html(G, communities, "graphify-out/graph.html", community_labels=labels)

print(f"Graph: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges, {len(communities)} communities")

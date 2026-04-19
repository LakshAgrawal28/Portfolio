import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface WormholeLoaderProps {
  onComplete: () => void;
}

export const WormholeLoader: React.FC<WormholeLoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const scene = new THREE.Scene();
    // Add a very slight fog for depth
    scene.fog = new THREE.FogExp2(0x000000, 0.05);

    const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create points for the tube path
    const points = [];
    for (let i = 0; i < 20; i += 1) {
      points.push(new THREE.Vector3(
        Math.sin(i * 0.2) * 5,
        Math.cos(i * 0.2) * 5,
        -i * 10
      ));
    }
    
    const path = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(path, 100, 3, 24, false);
    
    // Wireframe material for the grid look
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    
    const tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    // Floating particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);
    for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20; // Spread wide
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleMesh);

    let progress = 0;
    let animationId: number;
    let speed = 0.002;
    
    const animate = () => {
      progress += speed;
      if (progress > 1) progress = 0;
      
      // Move camera along path
      const camPos = path.getPointAt(progress);
      const camTarget = path.getPointAt((progress + 0.01) % 1);
      
      camera.position.copy(camPos);
      camera.lookAt(camTarget);
      
      // Rotate particles slowly
      particleMesh.rotation.z -= 0.001;
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Accelerate the warp factor over time
    const accelInterval = setInterval(() => {
        speed += 0.0005;
    }, 500);

    // Simulate load completion after 4 seconds
    const timeout = setTimeout(() => {
      onComplete();
    }, 4000);

    const container = containerRef.current;

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(accelInterval);
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (container?.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black overflow-hidden flex flex-col items-center justify-center"
    >
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Overlay UI */}
      <div className="relative z-10 flex flex-col items-center gap-8 mt-40">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-heading text-4xl md:text-6xl tracking-[0.3em] uppercase text-white mix-blend-difference"
        >
          Initializing
        </motion.div>
        
        <div className="w-64 h-[1px] bg-white/20 relative overflow-hidden">
          <motion.div 
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </div>
        
        <div className="text-white/50 font-primary text-xs uppercase tracking-widest flex items-center gap-4">
          <span>Temporal Alignment</span>
          <span className="w-1 h-1 bg-white animate-pulse" />
          <span>Synchronizing</span>
        </div>
      </div>
    </motion.div>
  );
};

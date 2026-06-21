import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const SealingCrest = () => {
  const groupRef = useRef<THREE.Group>(null);
  const circleRef = useRef<THREE.Mesh>(null);

  // Generate a swirling chakra tail (spiral) starting behind the photo and extending out
  const spiralCurve = useMemo(() => {
    const points = [];
    const turns = 1.2; // 1.2 turns for a clean, non-cluttered look
    const startRadius = 0.9; // starts behind the profile image
    const endRadius = 2.15; // extends past the profile image
    
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const angle = t * Math.PI * 2 * turns;
      const r = startRadius + t * (endRadius - startRadius);
      points.push(new THREE.Vector3(Math.cos(angle) * r, Math.sin(angle) * r, 0));
    }
    return new THREE.CatmullRomCurve3(points);
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    
    // Rotate the dual chakra spirals slowly
    if (groupRef.current) {
      groupRef.current.rotation.z = elapsed * 0.4;
    }
    // Rotate the framing blue circle along 3D axes
    if (circleRef.current) {
      circleRef.current.rotation.x = elapsed * 0.25;
      circleRef.current.rotation.y = elapsed * 0.15;
    }
  });

  return (
    <group>
      {/* Swirling Orange Chakra Crest (Double Spiral) */}
      <group ref={groupRef}>
        {/* Tail 1 */}
        <mesh>
          <tubeGeometry args={[spiralCurve, 60, 0.045, 8, false]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={2.5}
            roughness={0.1}
          />
        </mesh>
        {/* Tail 2 (rotated 180 degrees for symmetry) */}
        <mesh rotation={[0, 0, Math.PI]}>
          <tubeGeometry args={[spiralCurve, 60, 0.045, 8, false]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={2.5}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Framing Rasengan Blue thin circle orbiting close to the photo edge */}
      <mesh ref={circleRef}>
        <torusGeometry args={[2.25, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={2.0}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full min-h-[320px] md:min-h-[420px] absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 55 } as any}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />

        {/* Ambient point lights for vibrant glows */}
        <pointLight position={[-6, -6, -4]} intensity={1.2} color="#0ea5e9" />
        <pointLight position={[6, 6, 4]} intensity={1.5} color="#f97316" />

        <Float speed={2.0} rotationIntensity={1.0} floatIntensity={1.0}>
          <SealingCrest />
        </Float>

        {/* Enable rotating the crest with mouse drag, but disable zoom and pan */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Hero3D;

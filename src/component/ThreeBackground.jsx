import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    if (!mountNode) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const isLowPower = prefersReducedMotion || isMobile;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#070916", isLowPower ? 0.1 : 0.085);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isLowPower,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isLowPower ? 1 : 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountNode.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight("#66d9ff", isLowPower ? 0.9 : 0.7);
    const pointLight = new THREE.PointLight("#a855f7", isLowPower ? 1.4 : 2.1, 24, 2);
    pointLight.position.set(6, 4, 8);

    const fillLight = new THREE.PointLight("#ff6b35", isLowPower ? 1.1 : 1.5, 22, 2);
    fillLight.position.set(-7, -5, 6);

    scene.add(ambientLight, pointLight, fillLight);

    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    const planetMaterial = new THREE.MeshStandardMaterial({
      color: "#4cc9f0",
      emissive: "#0f1d45",
      roughness: 0.9,
      metalness: 0.08,
    });

    const moonMaterial = new THREE.MeshStandardMaterial({
      color: "#c4b5fd",
      emissive: "#21103a",
      roughness: 0.82,
      metalness: 0.1,
    });

    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, isLowPower ? 18 : 24, isLowPower ? 18 : 24),
      planetMaterial,
    );
    planet.position.set(3.1, -0.7, -2.8);

    const moonPivot = new THREE.Group();
    moonPivot.position.set(3.1, -0.7, -2.8);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.34, isLowPower ? 12 : 16, isLowPower ? 12 : 16),
      moonMaterial,
    );
    moon.position.set(2.15, 0.6, 0.4);

    const orbitRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.03, 8, isLowPower ? 48 : 72),
      new THREE.MeshBasicMaterial({
        color: "#7dd3fc",
        transparent: true,
        opacity: isLowPower ? 0.12 : 0.18,
      }),
    );
    orbitRing.position.set(3.1, -0.7, -2.8);
    orbitRing.rotation.set(1.1, 0.3, 0.28);

    const distantPlanet = new THREE.Mesh(
      new THREE.SphereGeometry(0.78, isLowPower ? 14 : 18, isLowPower ? 14 : 18),
      new THREE.MeshStandardMaterial({
        color: "#fb7185",
        emissive: "#3b1020",
        roughness: 0.88,
        metalness: 0.06,
        transparent: true,
        opacity: 0.7,
      }),
    );
    distantPlanet.position.set(-3.9, 1.7, -4.5);

    moonPivot.add(moon);
    heroGroup.add(planet, moonPivot, orbitRing, distantPlanet);

    const starCount = prefersReducedMotion ? 0 : isMobile ? 180 : 420;
    const starPositions = new Float32Array(starCount * 3);

    for (let index = 0; index < starCount; index += 1) {
      const stride = index * 3;
      starPositions[stride] = (Math.random() - 0.5) * 30;
      starPositions[stride + 1] = (Math.random() - 0.5) * 24;
      starPositions[stride + 2] = (Math.random() - 0.5) * 26;
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

    const starsMaterial = new THREE.PointsMaterial({
      color: "#d7f9ff",
      size: isLowPower ? 0.045 : 0.05,
      transparent: true,
      opacity: isLowPower ? 0.45 : 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const nebula = new THREE.Mesh(
      new THREE.PlaneGeometry(22, 22),
      new THREE.MeshBasicMaterial({
        color: "#6d28d9",
        transparent: true,
        opacity: isLowPower ? 0.07 : 0.1,
      }),
    );
    nebula.position.set(0, 0, -12);
    scene.add(nebula);

    const pointer = { x: 0, y: 0 };
    let frameId = 0;
    let isVisible = !document.hidden;
    let lastTime = 0;
    const targetFps = isLowPower ? 24 : 36;
    const frameInterval = 1000 / targetFps;

    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1 : 1.25));
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    const clock = new THREE.Clock();

    const animate = (time) => {
      if (!isVisible) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      if (time - lastTime < frameInterval) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      lastTime = time;
      const elapsed = clock.getElapsedTime();

      planet.rotation.y = elapsed * 0.09;
      planet.rotation.z = Math.sin(elapsed * 0.15) * 0.08;
      moonPivot.rotation.z = elapsed * 0.22;
      moon.rotation.y = elapsed * 0.2;
      orbitRing.rotation.z = 0.28 + elapsed * 0.025;
      distantPlanet.rotation.y = elapsed * 0.05;
      distantPlanet.position.y = 1.7 + Math.sin(elapsed * 0.22) * 0.22;
      nebula.rotation.z = Math.sin(elapsed * 0.04) * 0.08;

      heroGroup.position.x += ((pointer.x * 1.1) - heroGroup.position.x) * 0.02;
      heroGroup.position.y += ((pointer.y * 0.7) - heroGroup.position.y) * 0.02;
      heroGroup.rotation.y += (((pointer.x * 0.18) + elapsed * 0.03) - heroGroup.rotation.y) * 0.02;
      heroGroup.rotation.x += (((-pointer.y * 0.12) + Math.sin(elapsed * 0.25) * 0.04) - heroGroup.rotation.x) * 0.02;

      stars.rotation.y = elapsed * 0.008;
      stars.rotation.x = Math.sin(elapsed * 0.08) * 0.04;

      pointLight.position.x = 6 + Math.sin(elapsed * 0.45) * 1;
      fillLight.position.y = -5 + Math.cos(elapsed * 0.38) * 0.8;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pointermove", handlePointerMove);

      starsGeometry.dispose();
      starsMaterial.dispose();
      planet.geometry.dispose();
      planetMaterial.dispose();
      moon.geometry.dispose();
      moonMaterial.dispose();
      orbitRing.geometry.dispose();
      orbitRing.material.dispose();
      distantPlanet.geometry.dispose();
      distantPlanet.material.dispose();
      nebula.geometry.dispose();
      nebula.material.dispose();

      renderer.dispose();

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="three-background" ref={mountRef} aria-hidden="true" />;
}

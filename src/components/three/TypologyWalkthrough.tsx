"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";
import { loadThree } from "@/lib/loadThree";
import { createWoodTexture } from "@/lib/proceduralWoodTexture";

export type WalkthroughRoom = {
  name: string;
  /** Along-corridor dimension, metres. */
  length: number;
  /** Fixed module width, metres. */
  width: number;
  /** Ceiling height, metres. */
  height: number;
};

type WalkthroughLabels = {
  instructions: string;
  controlsHint: string;
  unsupported: string;
};

type Status = "loading" | "instructions" | "active" | "unsupported";

const WALL_COLOR = "#c4956a";
const FLOOR_COLOR = "#8B6343";
const EXTERIOR_COLOR = 0x87ceab;
const EYE_HEIGHT = 1.6;
const PLAYER_RADIUS = 0.35;
const MOVE_SPEED = 2.4;
const LOOK_SENSITIVITY = 0.0022;

export default function TypologyWalkthrough({
  room,
  labels,
  onClose,
}: {
  room: WalkthroughRoom;
  labels: WalkthroughLabels;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>(() =>
    typeof document !== "undefined" && "requestPointerLock" in document.body
      ? "loading"
      : "unsupported",
  );

  // Close on Escape even before pointer lock is engaged.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !("requestPointerLock" in document.body)) return;

    let cancelled = false;
    let cleanup = () => {};

    loadThree()
      .then((THREE: any) => {
        if (cancelled || !container) return;
        cleanup = setupScene(THREE, container, room, {
          onReady: () => setStatus("instructions"),
          onLocked: () => setStatus("active"),
          onUnlocked: () => onClose(),
        });
      })
      .catch(() => {
        if (!cancelled) setStatus("unsupported");
      });

    return () => {
      cancelled = true;
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnterClick = () => {
    if (status === "instructions") {
      containerRef.current?.requestPointerLock();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-charcoal">
      <div ref={containerRef} className="h-full w-full" onClick={handleEnterClick} />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-colors duration-300 hover:border-cream hover:text-cream"
      >
        <span aria-hidden className="text-xl leading-none">
          ×
        </span>
      </button>

      {status === "loading" && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <p className="tracking-wide-label text-[0.7rem] uppercase text-cream/50">{room.name}</p>
        </div>
      )}

      {status === "instructions" && (
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-charcoal/40"
          onClick={handleEnterClick}
        >
          <p className="tracking-wide-label max-w-md px-6 text-center text-[0.72rem] uppercase text-cream [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
            {labels.instructions}
          </p>
        </div>
      )}

      {status === "active" && (
        <div className="pointer-events-none absolute bottom-6 left-6 z-10">
          <p className="tracking-wide-label text-[0.65rem] uppercase text-cream/70 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
            {labels.controlsHint}
          </p>
        </div>
      )}

      {status === "unsupported" && (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="tracking-wide-label max-w-sm text-[0.72rem] uppercase text-cream">
            {labels.unsupported}
          </p>
        </div>
      )}
    </div>
  );
}

function setupScene(
  THREE: any,
  container: HTMLDivElement,
  room: WalkthroughRoom,
  callbacks: {
    onReady: () => void;
    onLocked: () => void;
    onUnlocked: () => void;
  },
): () => void {
  const { length, width, height } = room;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(EXTERIOR_COLOR);

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    100,
  );
  camera.rotation.order = "YXZ";
  let yaw = Math.PI; // face +Z, into the room, matching the entry opening at z=0
  let pitch = 0;
  camera.position.set(width / 2, EYE_HEIGHT, Math.min(1, length / 4));
  camera.rotation.y = yaw;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // --- Lighting ---
  const ambient = new THREE.AmbientLight(0xfff4e0, 0.6);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x8a6d4a, 0.3);
  scene.add(hemi);

  const makeDoorLight = (z: number) => {
    const light = new THREE.DirectionalLight(0xfff1d8, 0.9);
    light.position.set(width / 2, height * 1.6, z);
    light.target.position.set(width / 2, EYE_HEIGHT, length / 2);
    light.castShadow = true;
    light.shadow.mapSize.set(1024, 1024);
    light.shadow.camera.left = -Math.max(width, length) / 1.5;
    light.shadow.camera.right = Math.max(width, length) / 1.5;
    light.shadow.camera.top = Math.max(width, length) / 1.5;
    light.shadow.camera.bottom = -Math.max(width, length) / 1.5;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 40;
    scene.add(light);
    scene.add(light.target);
  };
  makeDoorLight(-2);
  makeDoorLight(length + 2);

  // --- Room shell ---
  const wallTexture = createWoodTexture(THREE, WALL_COLOR, {
    repeatX: length / 2,
    repeatY: height / 1.4,
  });
  const floorTexture = createWoodTexture(THREE, FLOOR_COLOR, {
    repeatX: width / 1.2,
    repeatY: length / 1.2,
  });
  const ceilingTexture = createWoodTexture(THREE, WALL_COLOR, {
    repeatX: width / 1.2,
    repeatY: length / 1.2,
  });

  const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture, roughness: 0.85 });
  const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture, roughness: 0.75 });
  const ceilingMaterial = new THREE.MeshStandardMaterial({ map: ceilingTexture, roughness: 0.9 });
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: 0xeaf6ff,
    transparent: true,
    opacity: 0.18,
    roughness: 0.08,
    metalness: 0.25,
    side: THREE.DoubleSide,
  });

  const group = new THREE.Group();

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(width, length), floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(width / 2, 0, length / 2);
  floor.receiveShadow = true;
  group.add(floor);

  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(width, length), ceilingMaterial);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(width / 2, height, length / 2);
  ceiling.receiveShadow = true;
  group.add(ceiling);

  const wallLeft = new THREE.Mesh(new THREE.PlaneGeometry(length, height), wallMaterial);
  wallLeft.rotation.y = Math.PI / 2;
  wallLeft.position.set(0, height / 2, length / 2);
  wallLeft.receiveShadow = true;
  group.add(wallLeft);

  const wallRight = new THREE.Mesh(new THREE.PlaneGeometry(length, height), wallMaterial);
  wallRight.rotation.y = -Math.PI / 2;
  wallRight.position.set(width, height / 2, length / 2);
  wallRight.receiveShadow = true;
  group.add(wallRight);

  const glassFront = new THREE.Mesh(new THREE.PlaneGeometry(width, height), glassMaterial);
  glassFront.position.set(width / 2, height / 2, 0);
  group.add(glassFront);

  const glassBack = new THREE.Mesh(new THREE.PlaneGeometry(width, height), glassMaterial);
  glassBack.rotation.y = Math.PI;
  glassBack.position.set(width / 2, height / 2, length);
  group.add(glassBack);

  scene.add(group);

  // --- Input state ---
  const keys: Record<string, boolean> = {};
  const onKeyDown = (e: KeyboardEvent) => {
    keys[e.code] = true;
  };
  const onKeyUp = (e: KeyboardEvent) => {
    keys[e.code] = false;
  };
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  const onMouseMove = (e: MouseEvent) => {
    if (document.pointerLockElement !== container) return;
    yaw -= e.movementX * LOOK_SENSITIVITY;
    pitch -= e.movementY * LOOK_SENSITIVITY;
    const maxPitch = Math.PI / 2 - 0.05;
    pitch = Math.max(-maxPitch, Math.min(maxPitch, pitch));
  };
  document.addEventListener("mousemove", onMouseMove);

  const onPointerLockChange = () => {
    if (document.pointerLockElement === container) {
      callbacks.onLocked();
    } else {
      callbacks.onUnlocked();
    }
  };
  const onPointerLockError = () => {
    callbacks.onUnlocked();
  };
  document.addEventListener("pointerlockchange", onPointerLockChange);
  document.addEventListener("pointerlockerror", onPointerLockError);

  const onResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  window.addEventListener("resize", onResize);

  // --- Animation loop ---
  const clock = new THREE.Clock();
  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  let frameId = 0;

  const tick = () => {
    const delta = Math.min(clock.getDelta(), 0.1);

    camera.rotation.y = yaw;
    camera.rotation.x = pitch;

    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    right.crossVectors(forward, up).normalize();

    let moveX = 0;
    let moveZ = 0;
    if (keys.KeyW || keys.ArrowUp) {
      moveX += forward.x;
      moveZ += forward.z;
    }
    if (keys.KeyS || keys.ArrowDown) {
      moveX -= forward.x;
      moveZ -= forward.z;
    }
    if (keys.KeyD || keys.ArrowRight) {
      moveX += right.x;
      moveZ += right.z;
    }
    if (keys.KeyA || keys.ArrowLeft) {
      moveX -= right.x;
      moveZ -= right.z;
    }

    const len = Math.hypot(moveX, moveZ);
    if (len > 0.0001) {
      moveX /= len;
      moveZ /= len;
      const nextX = camera.position.x + moveX * MOVE_SPEED * delta;
      const nextZ = camera.position.z + moveZ * MOVE_SPEED * delta;
      camera.position.x = Math.max(PLAYER_RADIUS, Math.min(width - PLAYER_RADIUS, nextX));
      camera.position.z = Math.max(PLAYER_RADIUS, Math.min(length - PLAYER_RADIUS, nextZ));
    }

    renderer.render(scene, camera);
    frameId = requestAnimationFrame(tick);
  };
  frameId = requestAnimationFrame(tick);

  callbacks.onReady();

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("pointerlockchange", onPointerLockChange);
    document.removeEventListener("pointerlockerror", onPointerLockError);
    if (document.pointerLockElement === container) {
      document.exitPointerLock();
    }

    scene.traverse((object: any) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material: any) => {
          if (material.map) material.map.dispose();
          material.dispose();
        });
      }
    });
    renderer.dispose();
    if (renderer.domElement.parentElement === container) {
      container.removeChild(renderer.domElement);
    }
  };
}

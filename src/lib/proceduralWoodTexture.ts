/* eslint-disable @typescript-eslint/no-explicit-any */

type WoodTextureOptions = {
  repeatX?: number;
  repeatY?: number;
};

/**
 * Generates a subtle, tileable wood-grain texture on an offscreen canvas —
 * no image asset, drawn procedurally at runtime. Requires the THREE
 * namespace loaded from the CDN (see loadThree.ts) to wrap the canvas in a
 * CanvasTexture.
 */
export function createWoodTexture(
  THREE: any,
  baseColorHex: string,
  options: WoodTextureOptions = {},
): any {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    const fallback = new THREE.Texture();
    return fallback;
  }

  const base = hexToRgb(baseColorHex);

  ctx.fillStyle = baseColorHex;
  ctx.fillRect(0, 0, size, size);

  // Many thin horizontal streaks, jittered in shade and opacity.
  for (let i = 0; i < 110; i++) {
    const y = Math.random() * size;
    const h = 1 + Math.random() * 2.5;
    const shade = (Math.random() - 0.5) * 34;
    const alpha = 0.06 + Math.random() * 0.14;
    ctx.fillStyle = shadeColor(base, shade, alpha);
    ctx.fillRect(0, y, size, h);
  }

  // A handful of longer, gently wavering grain lines for realism.
  for (let i = 0; i < 16; i++) {
    const startY = Math.random() * size;
    ctx.strokeStyle = shadeColor(base, (Math.random() - 0.5) * 24, 0.16);
    ctx.lineWidth = 0.6 + Math.random() * 1.2;
    ctx.beginPath();
    let y = startY;
    ctx.moveTo(0, y);
    for (let x = 0; x <= size; x += 32) {
      y += (Math.random() - 0.5) * 6;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(options.repeatX ?? 2, options.repeatY ?? 2);
  texture.needsUpdate = true;
  return texture;
}

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function shadeColor(base: { r: number; g: number; b: number }, amount: number, alpha: number) {
  const r = clamp255(base.r + amount);
  const g = clamp255(base.g + amount);
  const b = clamp255(base.b + amount);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function clamp255(value: number) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

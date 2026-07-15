const THREE_CDN_URL = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

declare global {
  interface Window {
    THREE?: unknown;
  }
}

let threePromise: Promise<unknown> | null = null;

/**
 * Loads Three.js from the CDN on demand (never bundled), caching the
 * promise so repeated opens of the 3D walkthrough don't re-inject the
 * script tag.
 */
export function loadThree(): Promise<unknown> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("loadThree can only run in the browser"));
  }
  if (window.THREE) {
    return Promise.resolve(window.THREE);
  }
  if (!threePromise) {
    threePromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = THREE_CDN_URL;
      script.async = true;
      script.onload = () => {
        if (window.THREE) resolve(window.THREE);
        else reject(new Error("Three.js loaded but window.THREE is missing"));
      };
      script.onerror = () => {
        threePromise = null;
        reject(new Error("Failed to load Three.js from CDN"));
      };
      document.head.appendChild(script);
    });
  }
  return threePromise;
}

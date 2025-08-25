// Utility helper functions

let idCounter = 0;

export function uniqueId(): string {
  return `${++idCounter}`;
}

export function getWindowDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

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

// Z-index manager for window stacking
let zIndexCounter = 900;
const windowStack: Set<string> = new Set();

export function bringToFront(id: string): number {
  windowStack.add(id);
  return ++zIndexCounter;
}

export function removeFromStack(id: string): void {
  windowStack.delete(id);
}

export function getContainerBounds(container: HTMLElement | null): {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
} {
  if (!container) {
    const { width, height } = getWindowDimensions();
    return { left: 0, top: 0, right: width, bottom: height, width, height };
  }
  const rect = container.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height,
  };
}

export declare global {
  interface Document {
    startViewTransition: (callback: () => void) => void;
  }
}

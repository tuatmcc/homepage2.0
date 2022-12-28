import { RefObject, useRef } from 'react';

export class CustomItersectionObserver {
  private observer: IntersectionObserver;
  private elements: HTMLElement[] = [];
  private callbacks: ((entries: IntersectionObserverEntry[]) => void)[] = [];
  ref: RefObject;

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      this.callbacks.forEach((callback) => callback(entries));
    });
    this.ref = this.useRef();
  }

  createRef<T>() {
    const ref = useRef<T>(null);
    return ref;
  }

  observe(ref) {
    this.elements.push(element

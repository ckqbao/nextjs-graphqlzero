import { useEffect, useRef } from 'react';

export type Timeout = ReturnType<typeof setTimeout>;

/**
 * Creates a debounced version of a callback function.
 * @param callback - The function to be debounced.
 * @param delay - The delay in milliseconds before the callback is executed.
 * @returns A debounced callback function.
 */
export function useDebounce(callback: (...args: any[]) => any, delay: number) {
  const timeoutRef = useRef<Timeout | null>(null);

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...(args as []));
    }, delay);
  };

  return debouncedCallback;
}

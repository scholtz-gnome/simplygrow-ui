import { useEffect } from 'react';

type Key = 'Escape' | 'Tab' | 'Enter';

export function useKeydown(keyCodes: Array<Key | string>, callback: () => void): void {
  const handler = ({ code }: KeyboardEvent) => {
    if (keyCodes.includes(code)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);
}

import { MutableRefObject, useEffect } from 'react';

export const useClickOutsideElement = (inputRef: MutableRefObject<HTMLElement | null>, onPress: () => void) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        onPress();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onPress, inputRef]);
};

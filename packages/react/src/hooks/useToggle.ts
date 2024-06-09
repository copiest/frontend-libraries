import { useCallback, useState } from 'react';

export function useToggle(defaultValue = false): readonly [boolean, () => void] {
  const [state, setState] = useState(defaultValue);

  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);

  return [state, toggle] as const;
}
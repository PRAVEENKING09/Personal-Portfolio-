import { useState, useEffect } from 'react';

export const useProgrammaticScroll = () => {
  const [isProgrammatic, setIsProgrammatic] = useState(false);

  useEffect(() => {
    const handleScrollEvent = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setIsProgrammatic(customEvent.detail);
    };
    window.addEventListener('programmaticScroll', handleScrollEvent);
    return () => window.removeEventListener('programmaticScroll', handleScrollEvent);
  }, []);

  return isProgrammatic;
};

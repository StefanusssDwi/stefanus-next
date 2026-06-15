"use client";

import { useState, useEffect, createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './SplashScreen';

export const SplashContext = createContext({ isHeroReady: false });

export default function SplashWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isHeroReady, setIsHeroReady] = useState(false);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => {
        setIsHeroReady(true);
      }, 1000); 
      
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <SplashContext.Provider value={{ isHeroReady }}>
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>
      
      <div className="bg-neutral">
        {children}
      </div>
    </SplashContext.Provider>
  );
}
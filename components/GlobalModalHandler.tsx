"use client";
import React, { useEffect, useState } from 'react';
import EnquireModal from './EnquireModal';

export default function GlobalModalHandler() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers modal if they clicked on any element containing the class 'enquire-button'
      if (target.closest('.enquire-button')) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  if (!isOpen) return null;
  return <EnquireModal onClose={() => setIsOpen(false)} />;
}

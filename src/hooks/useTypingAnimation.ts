import { useState, useEffect, useCallback } from 'react';
import type { TypingState } from '../types';

interface UseTypingAnimationOptions {
  phrases: readonly string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

interface UseTypingAnimationReturn {
  displayText: string;
  currentPhrase: number;
  isDeleting: boolean;
}

export const useTypingAnimation = ({
  phrases,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: UseTypingAnimationOptions): UseTypingAnimationReturn => {
  const [state, setState] = useState<TypingState>({
    displayText: '',
    currentPhrase: 0,
    isDeleting: false,
  });

  const updateState = useCallback((updates: Partial<TypingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  useEffect(() => {
    const currentPhraseText = phrases[state.currentPhrase];
    const speed = state.isDeleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!state.isDeleting && state.displayText === currentPhraseText) {
        // Pause at the end of the phrase
        setTimeout(() => updateState({ isDeleting: true }), pauseDuration);
      } else if (state.isDeleting && state.displayText === '') {
        // Move to next phrase
        updateState({
          isDeleting: false,
          currentPhrase: (state.currentPhrase + 1) % phrases.length,
        });
      } else {
        // Type or delete the next character
        const nextLength = state.isDeleting 
          ? state.displayText.length - 1 
          : state.displayText.length + 1;
        
        updateState({
          displayText: currentPhraseText.substring(0, nextLength),
        });
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [state, phrases, typeSpeed, deleteSpeed, pauseDuration, updateState]);

  return {
    displayText: state.displayText,
    currentPhrase: state.currentPhrase,
    isDeleting: state.isDeleting,
  };
};
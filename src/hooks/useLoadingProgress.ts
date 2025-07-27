import { useState, useEffect, useCallback } from 'react';
import type { LoadingState } from '../types';

interface UseLoadingProgressOptions {
  stages: readonly string[];
  duration?: number;
  progressIncrement?: { min: number; max: number };
}

interface UseLoadingProgressReturn {
  loadingText: string;
  progress: number;
  isComplete: boolean;
}

export const useLoadingProgress = ({
  stages,
  duration = 3000,
  progressIncrement = { min: 5, max: 20 },
}: UseLoadingProgressOptions): UseLoadingProgressReturn => {
  const [state, setState] = useState<LoadingState>({
    text: stages[0] || 'LOADING...',
    progress: 0,
  });
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const updateProgress = useCallback(() => {
    setState(prevState => {
      const increment = Math.random() * (progressIncrement.max - progressIncrement.min) + progressIncrement.min;
      const newProgress = Math.min(prevState.progress + increment, 100);
      
      // Determine current stage based on progress
      const stageIndex = Math.min(
        Math.floor((newProgress / 100) * stages.length),
        stages.length - 1
      );
      
      const newText = stages[stageIndex] || prevState.text;

      if (newProgress >= 100) {
        setIsComplete(true);
      }

      return {
        text: newText,
        progress: newProgress,
      };
    });
  }, [stages, progressIncrement]);

  useEffect(() => {
    const interval = setInterval(updateProgress, duration / 50); // Update 50 times over duration
    
    return () => clearInterval(interval);
  }, [updateProgress, duration]);

  return {
    loadingText: state.text,
    progress: Math.floor(state.progress),
    isComplete,
  };
};
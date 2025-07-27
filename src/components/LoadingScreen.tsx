import React from 'react';
import { useLoadingProgress } from '../hooks';
import { LOADING_STAGES } from '../constants';
import type { BaseComponentProps } from '../types';

interface LoadingScreenProps extends BaseComponentProps {
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  className = '',
  duration = 3000,
  'data-testid': testId = 'loading-screen'
}) => {
  const { loadingText, progress } = useLoadingProgress({
    stages: LOADING_STAGES,
    duration,
    progressIncrement: { min: 5, max: 20 },
  });

  return (
    <div className={`loading-screen ${className}`} data-testid={testId}>
      <div className="loading-content">
        <h1 className="glitch" data-text="LOVRO_DEV.EXE">
          LOVRO_DEV.EXE
        </h1>
        <div className="loading-status">
          <p aria-live="polite" role="status">{loadingText}</p>
          <div className="loading-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div 
              className="loading-fill" 
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>
          <p className="loading-percent" aria-hidden="true">{progress}%</p>
        </div>
        <div className="loading-sprites" aria-hidden="true">
          <div className="pixel-sprite sprite-1">█</div>
          <div className="pixel-sprite sprite-2">▄</div>
          <div className="pixel-sprite sprite-3">▀</div>
          <div className="pixel-sprite sprite-4">█</div>
        </div>
      </div>
    </div>
  );
};

LoadingScreen.displayName = 'LoadingScreen';

export default React.memo(LoadingScreen);

import React from 'react';
import { useTypingAnimation } from '../hooks';
import { TYPING_PHRASES } from '../constants';
import type { BaseComponentProps } from '../types';

interface HeroProps extends BaseComponentProps {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const Hero: React.FC<HeroProps> = ({ 
  className = '',
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  'data-testid': testId = 'hero'
}) => {
  const { displayText } = useTypingAnimation({
    phrases: TYPING_PHRASES,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
  });

  return (
    <section id="hero" className={`hero-section ${className}`} data-testid={testId}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title" data-text="LOVRO">
            LOVRO
          </h1>
          <div className="hero-subtitle">
            <span className="typing-prefix" aria-hidden="true">{"> "}</span>
            <span className="typing-text" aria-live="polite">{displayText}</span>
          </div>
          <p className="hero-description">
            Full-stack engineer with 6+ years of experience specializing in React, Next.js, and blockchain technologies.
            Building performant, scalable web applications with focus on user experience.
          </p>
          <div className="hero-buttons">
            <a 
              href="#projects" 
              className="btn btn-primary"
              aria-label="View my projects"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
              aria-label="Contact me"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="pixel-avatar" role="img" aria-label="Pixel art avatar">
            <div className="avatar-container">
              <div className="avatar-face">
                <div className="avatar-eyes">
                  <div className="eye left-eye" aria-hidden="true"></div>
                  <div className="eye right-eye" aria-hidden="true"></div>
                </div>
                <div className="avatar-mouth" aria-hidden="true"></div>
              </div>
              <div className="avatar-body">
                <div className="shirt" aria-hidden="true"></div>
              </div>
            </div>
          </div>
          <div className="floating-icons" aria-hidden="true">
            <div className="floating-icon icon-1">{"<>"}</div>
            <div className="floating-icon icon-2">{"{}"}</div>
            <div className="floating-icon icon-3">{"[]"}</div>
            <div className="floating-icon icon-4">{"()"}</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow" aria-hidden="true">▼</div>
        <p>SCROLL DOWN</p>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';

export default React.memo(Hero);
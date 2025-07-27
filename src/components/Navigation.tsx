import React from 'react';
import { useScrollSpy, useScrollToSection } from '../hooks';
import { NAVIGATION_ITEMS } from '../constants';
import type { BaseComponentProps, ButtonClickHandler } from '../types';

interface NavigationProps extends BaseComponentProps {
  offset?: number;
  visibilityThreshold?: number;
}

const Navigation: React.FC<NavigationProps> = ({ 
  className = '',
  offset = 100,
  visibilityThreshold = 0.5,
  'data-testid': testId = 'navigation'
}) => {
  const sectionIds = NAVIGATION_ITEMS.map(item => item.id);
  const { activeSection, isVisible } = useScrollSpy({
    sectionIds,
    offset,
    visibilityThreshold,
  });
  const { scrollToSection } = useScrollToSection();

  const handleNavigationClick: ButtonClickHandler = (event) => {
    const sectionId = event.currentTarget.getAttribute('data-section');
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav 
      className={`pixel-navigation ${isVisible ? 'visible' : ''} ${className}`}
      data-testid={testId}
      role="navigation"
      aria-label="Portfolio navigation"
    >
      <ul className="nav-list" role="list">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.id} className="nav-item" role="listitem">
            <button
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={handleNavigationClick}
              data-section={item.id}
              title={`Navigate to ${item.label} section`}
              aria-label={`Navigate to ${item.label} section`}
              aria-current={activeSection === item.id ? 'page' : undefined}
              type="button"
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.displayName = 'Navigation';

export default React.memo(Navigation);

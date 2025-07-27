import React, { useState, useCallback } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import type { BaseComponentProps, ButtonClickHandler } from '../types';

type SkillsProps = BaseComponentProps;

type SkillCategoryKey = keyof typeof SKILL_CATEGORIES;

interface SpecializationItem {
  readonly icon: string;
  readonly text: string;
}

const SPECIALIZATIONS: readonly SpecializationItem[] = [
  { icon: '⚡', text: 'Performance Optimization' },
  { icon: '🔌', text: 'Code Splitting' },
  { icon: '⛓️', text: 'Web3 Expert' },
  { icon: '🏗️', text: 'Architecture Design' },
] as const;

const Skills: React.FC<SkillsProps> = ({ 
  className = '',
  'data-testid': testId = 'skills'
}) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryKey>('frontend');

  const categories = Object.keys(SKILL_CATEGORIES) as SkillCategoryKey[];

  const handleCategoryChange: ButtonClickHandler = useCallback((event) => {
    const category = event.currentTarget.getAttribute('data-category') as SkillCategoryKey;
    if (category && category in SKILL_CATEGORIES) {
      setActiveCategory(category);
    }
  }, []);

  const activeSkillCategory = SKILL_CATEGORIES[activeCategory];

  return (
    <section id="skills" className={`skills-section ${className}`} data-testid={testId}>
      <div className="section-container">
        <h2 className="section-title">SKILL_TREE.JSON</h2>

        <div className="skills-navigation" role="tablist" aria-label="Skill categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`nav-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={handleCategoryChange}
              data-category={category}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls={`skills-panel-${category}`}
              id={`skills-tab-${category}`}
              type="button"
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div 
            className="skills-category"
            role="tabpanel"
            id={`skills-panel-${activeCategory}`}
            aria-labelledby={`skills-tab-${activeCategory}`}
          >
            <h3 className="category-title">{activeSkillCategory.title}</h3>

            <div className="skills-grid" role="list">
              {activeSkillCategory.skills.map((skill, index) => (
                <div key={skill.name} className="skill-card" role="listitem">
                  <div className="skill-header">
                    <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level" aria-label={`Proficiency: ${skill.level} percent`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency: ${skill.level}%`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="pixel-container">
            <h3>SPECIALIZATION BONUS</h3>
            <div className="specializations" role="list">
              {SPECIALIZATIONS.map((spec, index) => (
                <div key={index} className="spec-item" role="listitem">
                  <span className="spec-icon" aria-hidden="true">{spec.icon}</span>
                  <span>{spec.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Skills.displayName = 'Skills';

export default React.memo(Skills);
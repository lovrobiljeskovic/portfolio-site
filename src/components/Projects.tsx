import React, { useState, useCallback, useMemo } from 'react';
import { PROJECTS, PROJECT_FILTERS } from '../constants';
import type { BaseComponentProps, ButtonClickHandler, Project } from '../types';

type ProjectsProps = BaseComponentProps;

interface ProjectStatsItem {
  readonly label: string;
  readonly value: number;
}

const Projects: React.FC<ProjectsProps> = ({ 
  className = '',
  'data-testid': testId = 'projects'
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleFilterChange: ButtonClickHandler = useCallback((event) => {
    const filter = event.currentTarget.getAttribute('data-filter');
    if (filter) {
      setActiveFilter(filter);
    }
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const projectStats: ProjectStatsItem[] = useMemo(() => [
    { label: 'Total Projects', value: PROJECTS.length },
    { label: 'Live Projects', value: PROJECTS.filter((p) => p.status === 'live').length },
    { label: 'Technologies Used', value: new Set(PROJECTS.flatMap((p) => p.tech)).size },
  ], []);

  const handleProjectLink = useCallback((url: string) => {
    if (url.startsWith('#')) {
      console.warn('Project link is placeholder:', url);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section id="projects" className={`projects-section ${className}`} data-testid={testId}>
      <div className="section-container">
        <h2 className="section-title">PROJECTS.DIR</h2>

        <div className="projects-filter" role="tablist" aria-label="Project filters">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={handleFilterChange}
              data-filter={filter.key}
              role="tab"
              aria-selected={activeFilter === filter.key}
              aria-controls="projects-grid"
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div id="projects-grid" className="projects-grid" role="tabpanel">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onLinkClick={handleProjectLink}
            />
          ))}
        </div>

        <div className="projects-stats">
          <div className="pixel-container">
            <h3>PROJECT STATISTICS</h3>
            <div className="stats-row">
              {projectStats.map((stat) => (
                <div key={stat.label} className="stat">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  onLinkClick: (url: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, onLinkClick }) => {
  const handleGithubClick = useCallback(() => {
    if (project.github) {
      onLinkClick(project.github);
    }
  }, [project.github, onLinkClick]);

  const handleLiveClick = useCallback(() => {
    if (project.live) {
      onLinkClick(project.live);
    }
  }, [project.live, onLinkClick]);

  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-icon" role="img" aria-label={`${project.title} icon`}>
          {project.image}
        </div>
        <div className="project-status">
          <span className={`status-badge ${project.status.replace(/\s+/g, '-')}`}>
            {project.status.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech" role="list" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag" role="listitem">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-actions">
        {project.github && (
          <button
            onClick={handleGithubClick}
            className="btn btn-secondary"
            aria-label={`View source code for ${project.title}`}
            type="button"
          >
            Code
          </button>
        )}
        {project.live && (
          <button
            onClick={handleLiveClick}
            className="btn btn-primary"
            aria-label={`View live demo of ${project.title}`}
            type="button"
          >
            Live Demo
          </button>
        )}
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

Projects.displayName = 'Projects';

export default React.memo(Projects);
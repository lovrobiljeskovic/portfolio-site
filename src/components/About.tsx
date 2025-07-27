import React from "react";
import type { BaseComponentProps } from "../types";

type AboutProps = BaseComponentProps;

interface Achievement {
  readonly icon: string;
  readonly text: string;
}

const ACHIEVEMENTS: readonly Achievement[] = [
  { icon: "🏆", text: "Built multiple projects from the ground up to production ready" },
  { icon: "🚀", text: "Web3 Expert" },
  { icon: "📈", text: "75% Page Load Time Reduction" },
  { icon: "⚡", text: "60% API Response Time Improvement" },
  { icon: "🎨", text: "30% User Retention Increase" },
] as const;

interface SystemInfoItem {
  readonly label: string;
  readonly value: string;
}

const SYSTEM_INFO: readonly SystemInfoItem[] = [
  { label: "NAME", value: "Lovro Biljeskovic" },
  { label: "ROLE", value: "Frontend/Fullstack Engineer" },
  { label: "LOCATION", value: "Samobor, Croatia" },
  { label: "STATUS", value: "Available for new adventures" },
] as const;

const BIOGRAPHY_INFO: readonly SystemInfoItem[] = [
  { label: "EXPERTISE", value: "Full-stack, Frontend-focused engineer with 6+ years experience" },
  { label: "STACK", value: "JavaScript/TypeScript ecosystem - React, Next.js, Redux, Node.js, NestJS" },
  { label: "SPECIALIZATION", value: "Performance optimization, code splitting, lazy loading, state management" },
  { label: "WEB3", value: "Web3.js, Ethers.js, blockchain & decentralized technologies" },
  { label: "APIS", value: "REST APIs, WebSockets, GraphQL, The Graph protocol" },
  { label: "APPROACH", value: "Pragmatic, action-oriented, collaborative development" },
  { label: "FOCUS", value: "High-quality features, rapid iteration, team impact" },
] as const;

const About: React.FC<AboutProps> = ({ className = "", "data-testid": testId = "about" }) => {
  return (
    <section id="about" className={`about-section ${className}`} data-testid={testId}>
      <div className="section-container">
        <h2 className="section-title">ABOUT.EXE</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="pixel-container">
              <h3>SYSTEM INFORMATION</h3>
              <div className="system-info">
                {SYSTEM_INFO.map((item) => (
                  <p key={item.label}>
                    <span className="info-label">{item.label}:</span> {item.value}
                  </p>
                ))}
              </div>
            </div>

            <div className="pixel-container">
              <h3>BIOGRAPHY</h3>
              <div className="system-info">
                {BIOGRAPHY_INFO.map((item) => (
                  <p key={item.label}>
                    <span className="info-label">{item.label}:</span> {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="achievement-section">
              <h3>ACHIEVEMENTS UNLOCKED</h3>
              <div className="achievements" role="list">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <div key={index} className="achievement" role="listitem">
                    <span aria-hidden="true">{achievement.icon}</span> {achievement.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.displayName = "About";

export default React.memo(About);

import React from "react";
import { useContactForm } from "../hooks";
import { SOCIAL_LINKS, COLLABORATION_INTERESTS } from "../constants";
import type { BaseComponentProps, EmailJSConfig } from "../types";

interface ContactProps extends BaseComponentProps {
  emailJSConfig?: Partial<EmailJSConfig>;
}

interface StatusIndicatorItem {
  readonly label: string;
  readonly className?: string;
}

const STATUS_INDICATORS: readonly StatusIndicatorItem[] = [
  { label: "Currently Available", className: "online" },
  { label: "Response Time: < 24hrs" },
  { label: "Timezone: GMT+2" },
] as const;

const getEmailJSConfig = (): EmailJSConfig => ({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
});

const Contact: React.FC<ContactProps> = ({ className = "", emailJSConfig, "data-testid": testId = "contact" }) => {
  const config = { ...getEmailJSConfig(), ...emailJSConfig };

  const { formData, isSubmitting, submitStatus, handleInputChange, handleSubmit } = useContactForm(config);

  const renderStatusMessage = () => {
    if (submitStatus === "success") {
      return (
        <div className="form-success" role="alert" aria-live="polite">
          <p>✅ MESSAGE SENT SUCCESSFULLY!</p>
          <p>I'll get back to you soon.</p>
        </div>
      );
    }

    if (submitStatus === "error") {
      return (
        <div className="form-error" role="alert" aria-live="polite">
          <p>❌ MESSAGE FAILED TO SEND!</p>
          <p>Please try again later or contact me directly.</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="contact" className={`contact-section ${className}`} data-testid={testId}>
      <div className="section-container">
        <h2 className="section-title">CONTACT.SYS</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="pixel-container">
              <h3>SYSTEM STATUS</h3>
              <div className="status-indicators">
                {STATUS_INDICATORS.map((indicator, index) => (
                  <div key={index} className="status-item">
                    <span className={`status-dot ${indicator.className || ""}`} aria-hidden="true" />
                    <span>{indicator.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pixel-container">
              <h3>CONNECT WITH ME</h3>
              <div className="social-links" role="list">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url.startsWith("http") ? link.url : `mailto:${link.url}`}
                    className="social-link"
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`Connect with me on ${link.name}`}
                    role="listitem"
                  >
                    <span className="social-icon" aria-hidden="true">
                      {link.icon}
                    </span>
                    <span className="social-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pixel-container">
              <h3>COLLABORATION INTERESTS</h3>
              <ul className="interests-list" role="list">
                {COLLABORATION_INTERESTS.map((interest, index) => (
                  <li key={index} role="listitem">
                    • {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="pixel-container">
              <h3>SEND MESSAGE</h3>

              {renderStatusMessage()}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    NAME <span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    aria-describedby="name-error"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    EMAIL <span aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                    aria-describedby="email-error"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    SUBJECT <span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="What's this about?"
                    aria-describedby="subject-error"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    MESSAGE <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    aria-describedby="message-error"
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary form-submit ${isSubmitting ? "loading" : ""}`}
                  disabled={isSubmitting}
                  aria-describedby={isSubmitting ? "submit-status" : undefined}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {isSubmitting && (
                  <div id="submit-status" className="sr-only" aria-live="polite">
                    Sending message, please wait...
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <footer className="portfolio-footer">
          <div className="footer-content">
            <p className="footer-text">© 2025 Crafted with ❤️</p>
            <p className="footer-subtext">Made with React • TypeScript • Vite</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

Contact.displayName = "Contact";

export default React.memo(Contact);

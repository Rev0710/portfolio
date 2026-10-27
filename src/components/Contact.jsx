import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT_EMAIL = "delarosa.johnrev071004@gmail.com";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

function Contact() {
  const [status, setStatus] = useState({
    type: "idle",
    message: "If the online form service is not configured, your email app will open with a ready-to-send draft.",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("project_type") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const honeypot = String(formData.get("company") || "").trim();

    if (honeypot) {
      setStatus({ type: "success", message: "Thanks for reaching out." });
      form.reset();
      return;
    }

    const hasEmailJsConfig = Object.values(emailJsConfig).every((value) => Boolean(value));

    if (hasEmailJsConfig) {
      setIsSending(true);
      setStatus({ type: "sending", message: "Sending your project note…" });

      try {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          {
            from_name: name,
            reply_to: email,
            email,
            project_type: projectType,
            budget: budget || "Not specified",
            message,
          },
          {
            publicKey: emailJsConfig.publicKey,
            limitRate: { id: "portfolio-contact", throttle: 30000 },
          },
        );
        setStatus({ type: "success", message: "Thanks. Your project note has been sent." });
        form.reset();
      } catch {
        setStatus({
          type: "error",
          message: "The form could not send right now. Please email me directly at " + CONTACT_EMAIL + ".",
        });
      } finally {
        setIsSending(false);
      }

      return;
    }

    const subject = "Project inquiry from " + name;
    const body = [
      "Name: " + name,
      "Email: " + email,
      "Project type: " + projectType,
      "Estimated budget: " + (budget || "Not specified"),
      "",
      message,
    ].join("\n");
    const mailto = "mailto:" + CONTACT_EMAIL + "?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    setStatus({ type: "fallback", message: "Your email app should open with the project details ready to send." });
    window.location.href = mailto;
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section__inner contact-layout">
        <div className="contact-copy" data-reveal>
          <h2 className="section-title" id="contact-title">Have a project in mind? Let’s build something useful.</h2>
          <p>
            Tell me what you’re planning, what needs to work better, and where you’d like to start.
            I’ll follow up by email.
          </p>
          <a className="contact-email" href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>

          <div className="contact-socials" aria-label="Professional links">
            <a href="https://github.com/Rev0710" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/john-rev-dela-rosa-056483372" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/delarosajohnrev" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook aria-hidden="true" />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="contact-form__trap" aria-hidden="true">
            <label htmlFor="contact-company">Company website</label>
            <input id="contact-company" name="company" type="text" autoComplete="off" tabIndex="-1" />
          </div>

          <div className="contact-form__grid">
            <div className="contact-form__field">
              <label htmlFor="contact-name">Full name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" maxLength="120" required />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" maxLength="254" required />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-project-type">Project type</label>
              <select id="contact-project-type" name="project_type" required defaultValue="">
                <option value="" disabled>Select a project type</option>
                <option>Website</option>
                <option>Web application</option>
                <option>Backend or API</option>
                <option>Business workflow tool</option>
                <option>Other</option>
              </select>
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-budget">Estimated budget <span>(optional)</span></label>
              <input
                id="contact-budget"
                name="budget"
                type="text"
                maxLength="80"
                placeholder="Range and currency, if known"
              />
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-message">Project description</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              minLength="20"
              maxLength="4000"
              placeholder="What are you hoping to build? Include any goals, timing, or constraints."
              required
            />
          </div>

          <button className="button button--primary" type="submit" disabled={isSending}>
            {isSending ? "Sending…" : "Start a conversation"} <span aria-hidden="true">↗</span>
          </button>
          <p className={"contact-form__status contact-form__status--" + status.type} role="status" aria-live="polite">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;

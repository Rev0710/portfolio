# John Rev Dela Rosa — Portfolio

A React and Vite portfolio for presenting selected web projects, development services, and a clear project inquiry path.

## Run locally

    npm install
    npm run dev

Create a production build with npm run build. Run source lint with npx eslint src.

## Contact form

The form uses EmailJS when the service, template, and public key are configured in a local .env.local file:

~~~env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
~~~

The EmailJS template should use these parameters: from_name, reply_to, email, project_type, budget, and message. The form includes native field validation, a honeypot field, and an EmailJS per-browser rate limit. When the service is not configured, submitting opens an email draft addressed to the portfolio contact email.

The EmailJS public key is intended for client-side use. Restrict allowed origins and configure abuse controls in the EmailJS dashboard before enabling direct sending on a public deployment.

## Portfolio content

- Featured case studies: CareTrail and Votara
- Additional projects: AwesomeTodos, Music Player, HyperX Mouse, and DocLock
- Dark and light themes, responsive navigation, reduced-motion support, and a downloadable CV

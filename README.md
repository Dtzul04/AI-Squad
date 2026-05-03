# AI-Squad

AI-Squad helps job seekers get fast AI feedback on resume content so they can identify clearer wording, stronger impact statements, and gaps before applying.

## Live Demo

[AI-Squad Live](https://ai-squad-fpiz.onrender.com)

If this Render deployment changes, update this link before sending the project to employers.

## Tech Stack

- **Python**: I chose Python because it is straightforward for building API-backed tools and works well with AI SDKs.
- **Flask**: I chose Flask because it keeps the backend small and readable while still supporting server-side routes, templates, and JSON endpoints.
- **Groq API**: I chose Groq because it provides fast hosted LLM inference for generating resume feedback without running a model locally.
- **Llama 3.3 70B Versatile**: I chose this model because it can produce detailed natural-language critique for resume text.
- **Jinja templates**: I chose Flask's built-in templating because this app only needs one server-rendered page and does not require a larger frontend framework.
- **Tailwind CSS**: I chose Tailwind because it lets me build a responsive interface quickly with consistent utility classes.
- **Alpine.js**: I chose Alpine because it adds lightweight interactivity for form state, loading state, and API calls without a full React/Vue setup.
- **Gunicorn**: I chose Gunicorn because it is a production-ready WSGI server for deploying Flask apps on platforms like Render.

## Architecture Overview

The Flask backend serves the main HTML page and exposes a `/process` JSON endpoint. The browser uses Alpine.js to collect resume text, send it to `/process`, and render the AI response returned by the Groq chat completion API. Environment variables keep the Groq API key out of source control, while Gunicorn runs the Flask app in deployment.

## Local Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Dtzul04/AI-Squad.git
cd AI-Squad
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate
```

On Windows:

```bash
venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the project root:

```bash
GROQ_API_KEY=your_groq_api_key_here
FLASK_ENV=development
```

You need to provide your own Groq API key. Do not commit `.env`.

5. Run the app locally:

```bash
python app.py
```

6. Open the app:

```text
http://127.0.0.1:5000
```

## Known Limitations / What I Would Improve With More Time

- Add stronger input validation and clearer user-facing errors for empty, very large, or malformed resume submissions.
- Move the AI prompt into a dedicated prompt module and make the feedback criteria more specific to job descriptions, seniority level, and target role.
- Add automated tests for the Flask routes and the `/process` API behavior, including mocked Groq responses.
- Remove duplicate Alpine component code between `templates/index.html` and `static/js/script.js` so the frontend state lives in one place.
- Add rate limiting and request size limits before treating this as a public production app.
- Add a structured results format, such as sections for summary, bullet rewrites, keywords, and action items, instead of returning one free-form response.
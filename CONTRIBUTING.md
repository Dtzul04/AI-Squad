# Contributing

This is a solo-developer project, so the goal is not process for its own sake. Use clear, consistent commits that make the project history easy to scan during code review.

## Conventional Commits

Use this format:

```text
type: short description
```

For larger changes, add a body explaining why the change was made:

```text
type: short description

Explain the reason for the change, any tradeoffs, and anything future-you should know.
```

Keep the subject line direct, lowercase after the type, and under 72 characters when practical.

## Allowed Types

- `feat`: Adds a new user-facing feature.
- `fix`: Fixes a bug or broken behavior.
- `docs`: Updates documentation only.
- `refactor`: Changes code structure without changing behavior.
- `chore`: Handles maintenance, tooling, dependencies, or project setup.
- `test`: Adds or updates tests.
- `style`: Changes formatting, CSS, or visual presentation without changing application logic.

## Project-Specific Examples

```text
feat: add resume feedback request flow
```

```text
fix: handle missing resume text before calling Groq
```

```text
docs: document Groq API key setup for local development
```

```text
refactor: move resume processing logic out of the route handler
```

```text
chore: add Gunicorn start command for Render deployment
```

```text
test: cover process endpoint with mocked Groq responses
```

```text
style: improve suggestion panel spacing on mobile screens
```

## Solo Developer Workflow

Before committing, run the app locally and verify the resume form still submits successfully. If the change touches the Groq integration, test with a real API key locally or mock the API in tests before pushing.

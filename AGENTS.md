# Agents in this repository

This project includes AI agent guidance and helper files used to automate planning and code tasks. This document explains conventions, where agents live, and how to add or update them.

## Purpose
- Document AI agent files and conventions used by contributors and automated tooling.
- Provide a simple template and contribution guidance so new agents are consistent and discoverable.

## Location
- Repository agent files live under `.github/agents/` and may be referenced by other `.github` automation or used by local tooling.
- Example: `.github/agents/planner.agent.md` (present in this repo).

## File format and conventions
- Agent files are Markdown documents with human-readable instructions and optional front-matter metadata.
- Keep the agent focused and concise (goal, constraints, expected outputs, and any repository-specific hints).
- Prefer short sections: Goal, Inputs, Outputs, Steps, and Safety/Permissions.

### Recommended front-matter (YAML)
- If you use YAML front-matter, include minimal metadata such as:

```yaml
name: planner
role: planning
scope: repo
``` 

- The body should explain what the agent is expected to do and any repository conventions it must follow.

## Naming and responsibilities
- Use clear names: `{role}.agent.md` or `{name}.agent.md`.
- Roles examples: `planner`, `tester`, `refactorer`.
- Each agent should include the single-sentence goal and acceptance criteria.

## Template
- Minimal template to copy into a new agent file:

```
# Agent: <name>

Goal
- One-sentence description of what the agent should accomplish.

Inputs
- List of inputs (files, commands, constraints).

Outputs
- Exact artifacts expected (files changed, tests added, PR created).

Steps
- Short, numbered plan the agent should follow.

Constraints
- Project-specific conventions to respect (tests, linting, commit messages, env files).
```

## Adding or updating an agent
- Create or edit a file under `.github/agents/`.
- Keep changes small and focused; include examples when useful.
- If an agent requires environment variables or secrets, document approved usage and do not store secrets in the repo.

## Local usage and testing
- Agents are documentation; how they are executed depends on tooling or CI that consumes them. If this repo uses a bot or automation that executes agent files, follow that tooling's README for running agents locally.

## Contribution notes
- Preserve existing repository conventions: run tests (`npm run test`) and linting before submitting changes.
- If an agent will change behavior that affects code, add a short test or checklist in the agent file describing expected changes.

---

If you'd like, I can create a new agent from this template for a specific task (for example: "add i18n scaffolding" or "update API URL builder").

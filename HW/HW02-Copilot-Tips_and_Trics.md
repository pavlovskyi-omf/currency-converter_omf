# 🏠 Homework: GitHub Copilot Tips & Tricks

## Goal
Apply the GitHub Copilot techniques from the **Tips & Tricks** workshop in a real project and reflect on how they improve your daily development workflow.

---

## Part 1. Choose the Right Copilot Tool

Perform the same task using different Copilot tools:

- **Inline suggestions**: generate or refactor a small code block
- **Chat (Ask/Edit)**: explain or improve existing code
- **Agent mode**: implement a small feature or refactor from a high-level requirement

Document:
- Which tool you used
- Why it was the best choice for the task

---

## Part 2. Effective Prompting

1. Start with a general prompt, then refine it
2. Apply at least three techniques:
   - Break the task into steps
   - Add constraints (style, libraries, limitations)
   - Provide examples or expected output
3. Use workspace context:
   - Select files or reference `#codebase`

Save:
- Initial prompt
- Improved prompt
- Final Copilot output

---

## Part 3. Personalize Copilot with Instructions

1. Create at least one instruction file:
   - `.github/copilot-instructions.md` or `*.instructions.md`
2. Include:
   - Coding style rules
   - Naming conventions
   - Testing or documentation preferences
3. Use `applyTo` to target relevant files

Verify that Copilot follows your instructions in chat responses.

---

## Part 4. Reusable Prompt

1. Create a prompt file in `.github/prompts/`
2. The prompt should solve a repeatable task, for example:
   - Generate a component
   - Create unit tests
   - Prepare a pull request description
3. Run the prompt using `/prompt-name` in chat

Ensure the prompt is clear, reusable, and well-scoped.

---

## Part 5. Custom Agent or Subagent (Optional, Advanced)

Choose one:
- Create a custom agent for planning, review, or testing
- Run a subagent for research or analysis using `#runSubagent`

Document:
- The delegated task
- The result
- Whether it reduced context noise

---

## Deliverables

Please prepare:
- Short summary (5–10 bullet points)
- One key insight:
  - What changed in your workflow after applying these techniques?

Feel free to share your experience with the class during our next session!

---

Use AI and stay smart!

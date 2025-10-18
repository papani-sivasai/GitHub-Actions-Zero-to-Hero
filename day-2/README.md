# GitHub Actions — Workflow Syntax Deep Dive
 
In this task, you’ll extend the **say-hello** app to understand how **YAML structure, jobs, and dependencies** work inside GitHub Actions.

Read the full article for detailed guidance:  
[Workflow Syntax Deep Dive — YAML Demystified](https://github-actions-workflow-part2.hashnode.dev/github-actions-workflow-syntax-deep-dive)

---

## Task Objective
We will use the same app that we have worked on day-1. Perform the below task using that app.

Add **another job** in your workflow that depends on the existing `say-hello` job.

Your new job should:

1. Be named **`check-node-version`**  
2. Run **after** the `say-hello` job finishes successfully  
3. Print the Node.js version running in the workflow runner

---

## Hints

- Look for the `needs:` keyword to define dependencies between jobs.  
  Example:
  ```yaml
  needs: say-hello
  ```
- Use a simple shell command in the new job’s step:

  ```bash
  run: node -v
  ```
- Make sure indentation (spaces) in YAML is consistent, use two spaces per level.
---

## Need Help?

If you get stuck or your workflow fails to run:

Re-read the article carefully for syntax examples.

Then open .github/workflows/task-1.yml, it contains a working solution example.

Keep experimenting, that’s the best way to learn.

## What You’ll Learn

1. How multiple jobs work inside one workflow
2. How to define dependencies between jobs

# GitHub Actions - Your First CI/CD Workflow

> A simple **Node.js demo app** built to help you learn **GitHub Actions fundamentals** — workflows, jobs, steps, and artifacts.

This project is part of the **GitHub Actions Series** on Hashnode:

**Article 1:** *Introduction to GitHub Actions — Automate Everything in Your DevOps Workflow*
[Full Article](https://github-actions-part1.hashnode.dev/introduction-to-github-actions)
---

## What This App Does

This app prints a friendly greeting using your GitHub username, writes it to a file, and uploads that file as a **workflow artifact**.

When you push code to the `main` branch:

1. A **GitHub Actions workflow** automatically runs.
2. It installs Node.js, executes the script, and generates a log file.
3. The workflow uploads the log file (`output.log`) so you can download it from the workflow summary.

---

## Project Structure

```bash
hello-github-actions/
├── .github/
│   └── workflows/
│       └── hello.yml        # The GitHub Actions workflow
├── index.js                 # Node.js app entry point
├── package.json             # Project config and dependencies
├── package-lock.json                
└── README.md
```

---

## Setup Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/papani-sivasai/GitHub-Actions-Zero-to-Hero
cd GitHub-Actions-Zero-to-Hero/day-1
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

You’ll see output similar to:

```
Hello DevOps Enthusiast! Welcome to GitHub Actions
Log file created: output.log
```

---

## Workflow Explained

The workflow file lives at:

```bash
.github/workflows/hello.yml
```

### Here’s what it does:

```yaml
name: Hello GitHub Actions

on:
  push:
    branches: [ main ]

jobs:
  say-hello:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci || npm install

      - name: Run the app
        run: npm start
        env:
          USERNAME: ${{ github.actor }} 

      - name: Upload output log
        uses: actions/upload-artifact@v4
        with:
          name: hello-log
          path: output.log
```

---

## Key Concepts

| Concept                  | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| `on: push`               | Triggers the workflow on every push to the `main` branch |
| `jobs`                   | Define a set of steps to execute                         |
| `runs-on: ubuntu-latest` | Specifies the virtual machine environment                |
| `actions/checkout`       | Pulls your repository code into the runner               |
| `actions/setup-node`     | Sets up a Node.js runtime environment                    |
| `${{ github.actor }}`    | Built-in variable representing your GitHub username      |
| `upload-artifact`        | Saves generated files for later download                 |

---

## Learning Outcomes

After completing this project, you’ll understand:

* How to structure a workflow (`.github/workflows/*.yml`)
* How jobs and steps execute in sequence
* How to use Marketplace Actions effectively
* How to upload and download artifacts

---

**Author:** *Siva Sai Papani*

**Article Source:** [Introduction to GitHub Actions](https://github-actions-part1.hashnode.dev/introduction-to-github-actions)

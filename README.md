# Real Estate App - Git Guide

A modern full-stack real estate application built with React, TypeScript, and Tailwind CSS.

## 📋 Table of Contents
- [Getting Started with Git](#getting-started-with-git)
- [Common Git Commands](#common-git-commands)
- [Branch Workflow](#branch-workflow)
- [Troubleshooting](#troubleshooting)

## 🚀 Getting Started with Git

### Initial Setup

1. **Clone the repository**
```bash
git clone https://github.com/LN-09/Real_Estate.git
cd Real_Estate
```

2. **Configure Git (first time only)**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

3. **Check remote connection**
```bash
git remote -v
```

### If Remote Already Exists
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/LN-09/Real_Estate.git

# Or update existing remote
git remote set-url origin https://github.com/LN-09/Real_Estate.git
```

## 📝 Common Git Commands

### Basic Workflow

```bash
# Check status of your files
git status

# Add files to staging
git add .                    # Add all files
git add filename.txt         # Add specific file
git add src/                 # Add specific folder

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin branch-name
git push -u origin setup     # First time push with tracking
```

### Viewing Changes

```bash
# See what changed
git diff                     # Unstaged changes
git diff --staged           # Staged changes

# View commit history
git log                     # Full history
git log --oneline          # Compact history
git log --graph --oneline  # Visual branch history
```

### Undoing Changes

```bash
# Unstage files (keep changes)
git reset filename.txt
git reset                   # Unstage all

# Discard changes in working directory
git checkout -- filename.txt
git restore filename.txt    # New Git syntax

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## 🌿 Branch Workflow

### Creating and Switching Branches

```bash
# Create new branch
git branch feature-name

# Switch to branch
git checkout feature-name
git switch feature-name      # New Git syntax

# Create and switch in one command
git checkout -b feature-name
git switch -c feature-name   # New Git syntax

# List all branches
git branch                   # Local branches
git branch -a               # All branches (local + remote)
```

### Working with Branches

```bash
# Push new branch to GitHub
git push -u origin feature-name

# Pull latest changes
git pull origin main

# Merge branch into current branch
git merge feature-name

# Delete branch
git branch -d feature-name           # Local (safe delete)
git branch -D feature-name           # Local (force delete)
git push origin --delete feature-name # Remote
```

### Recommended Branch Strategy

```
main (or master)     → Production-ready code
├── develop          → Integration branch
├── feature/navbar   → New features
├── fix/bug-123      → Bug fixes
└── setup            → Initial setup
```

## 🔧 Troubleshooting

### Problem: "Remote origin already exists"
```bash
# Solution 1: Remove and re-add
git remote remove origin
git remote add origin https://github.com/LN-09/Real_Estate.git

# Solution 2: Update URL
git remote set-url origin https://github.com/LN-09/Real_Estate.git
```

### Problem: Merge Conflicts
```bash
# 1. Pull latest changes
git pull origin main

# 2. Git will mark conflicts in files like:
# <<<<<<< HEAD
# Your changes
# =======
# Incoming changes
# >>>>>>> branch-name

# 3. Edit files to resolve conflicts
# 4. Add resolved files
git add .

# 5. Complete the merge
git commit -m "Resolve merge conflicts"
```

### Problem: Accidentally committed to wrong branch
```bash
# Move commit to correct branch
git log                              # Copy commit hash
git checkout correct-branch
git cherry-pick <commit-hash>
git checkout wrong-branch
git reset --hard HEAD~1
```

### Problem: Need to sync with remote
```bash
# Fetch remote changes without merging
git fetch origin

# See what would be pulled
git fetch origin
git log HEAD..origin/main

# Pull and rebase
git pull --rebase origin main
```

## 📋 Daily Workflow Example

```bash
# 1. Start your day - get latest changes
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/property-search

# 3. Make changes to your files
# ... edit code ...

# 4. Check what changed
git status
git diff

# 5. Stage and commit
git add .
git commit -m "Add property search functionality"

# 6. Push to GitHub
git push -u origin feature/property-search

# 7. Create Pull Request on GitHub
# Go to: https://github.com/LN-09/Real_Estate

# 8. After PR is merged, cleanup
git checkout main
git pull origin main
git branch -d feature/property-search
```

## 🔐 .gitignore

Make sure you have a `.gitignore` file to exclude:

```gitignore
# Dependencies
node_modules/
package-lock.json

# Production
build/
dist/

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

## 📚 Useful Git Aliases

Add these to `~/.gitconfig` for shortcuts:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
git config --global alias.lg "log --graph --oneline --all"
```

Now use: `git st` instead of `git status`, etc.

## 🆘 Quick Reference

| Command | Description |
|---------|-------------|
| `git status` | Check file status |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Commit with message |
| `git push` | Push to remote |
| `git pull` | Pull from remote |
| `git branch` | List branches |
| `git checkout -b name` | Create & switch branch |
| `git merge name` | Merge branch |
| `git log` | View history |
| `git diff` | View changes |

## 📞 Need Help?

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

⭐ **Pro Tip**: Commit often, push regularly, and write clear commit messages!

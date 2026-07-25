# Week 3 Notes: Version Control with Git and GitHub

## Topics Covered

- Version Control Concepts
- Distributed Version Control System (DVCS)
- Git Workflow
- Local vs Remote Repositories
- Add, Commit, Push, Pull, Fetch, Clone and Fork
- Branching
- Merge Conflicts
- GitHub Collaboration
- Pull Requests and Code Reviews

Follow the slides shared on Google Classroom to learn more about the topics.

---

## Common Git Commands Summary

| Command                                | Purpose                                       |
| -------------------------------------- | --------------------------------------------- |
| `git--version`                         | Verify installation                           |
| `git init`                             | Initialize a repository                       |
| `git config user.name "<your_name>"`   | Set User Name                                 |
| `git config user.email "<your_email>"` | Set User E-mail                               |
| `git config --list`                    | Check configuration                           |
| `git status`                           | Show repository status                        |
| `git add <file>`                       | Stage a file                                  |
| `git add .`                            | Stage all changes                             |
| `git commit -m "<message>"`            | Save staged changes/snapshot                  |
| `git log`                              | Show commit history                           |
| `git log --oneline`                    | View concise commit history                   |
| `git branch`                           | List branches                                 |
| `git switch -c <branch>`               | Create and switch to a branch                 |
| `git switch <branch>`                  | Switch to a branch                            |
| `git merge <branch>`                   | Merge a branch                                |
| `git restore <file>`                   | Disard changes of a file                      |
| `git restore --staged <file>`          | Unstage a file                                |
| `git revert HEAD`                      | Revert the last commit                        |
| `git revert <commit-hash>`             | Revert a specific commit                      |
| `git remote add origin "<url>`         | Connect local repository to remote repository |
| `git remote -v`                        | List remote repositories                      |
| `git push`                             | Upload local commits                          |
| `git pull`                             | Download and integrate remote changes         |
| `git fetch`                            | Download updates from remote                  |
| `git clone <url>`                      | Clone a remote repository                     |

---

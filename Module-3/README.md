# Module 3 Notes: Version Control with Git and GitHub

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
| `git checkout -b <branch>`             | Create and switch to a branch                 |
| `git switch -c <branch>`               | Create and switch to a branch                 |
| `git checkout <branch>`                | Switch to a branch                            |
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

## Recommended Hands-on Lab Exercises

By the end of Module 3, complete the following practical tasks:

1. Develop a simple website using HTML and CSS (from Module 2), manage it with Git, and host the source code on GitHub. Make at least **five meaningful commits** with descriptive messages. You may follow the steps below:
   - **Create Your Repository**
     - Create a project folder.
     - Initialize a Git repository.
     - Add an `index.html` file.
     - Commit the file with the message _"Initial commit"_.
   - **Track Changes**
     - Modify `index.html`.
     - Use `git status` to inspect changes.
     - Stage and commit the modifications.
     - View the commit history using `git log --oneline`.
   - **Working with Branches**
     - Create a branch named `feature-navbar`.
     - Add a simple navigation bar to `index.html`.
     - Commit the changes.
     - Merge the branch into `main`.
   - **GitHub Integration**
     - Create a GitHub repository.
     - Connect your local repository using `git remote add origin`.
     - Push the project to GitHub.
     - Verify that the repository appears online.
   - **Pull Request Simulation**
     - Ask your teammate/friend/classmate to create a feature branch and push it to GitHub.
     - Review the changes and open a Pull Request.
     - Discuss the review comments and merge the Pull Request after approval.

---

2.  Practice collaborative Git workflows, including cloning repositories, creating branches, and submitting pull requests for code review. Follow the steps below:
    - **Accept Repository Invitation**
      - Check your email for a repository collaborator invitation.
      - Click the acceptance link to gain access to the repo.

    - **Clone the Repository**
      - Clone the repository to your local machine.

        ```bash
        git clone <repository-url>
        cd <repository-name>
        ```

      > **Note:** You may alternatively fork the repository first, then clone your fork, if you have not received the invitation.

    - **Create a Branch**
      - Create a new branch using the following naming fomats: `submission-StudentID`. **Replace `StudentID` with your actual student ID number.** Example:

        ```bash
        git checkout -b submission-1234567890
        ```

    - **Navigate to Your Assigned Folder**
      - Open the folder assigned to you in the repository.

        ```bash
        cd <assigned-folder-name>
        ```

    - **Create Your Student Profile File**
      - Each student must upload one text file following these requirements:
        - **Filename:** `StudentID.txt` (e.g., `1234567890.txt`)
        - **Location:** Your assigned folder
        - **File Contents:**
          Create a text file with the following information:

          ```
          Name: [Your Full Name]
          Student ID: [Your Full Student ID]
          Department: [Your Department]
          Favourite Programming Language: [Your Preferred Language]
          ```

    - **Submit via Pull Request**
      - Stage and commit your changes.

        ```bash
        git add .
        git commit -m "Add lab task - [Your ID]"
        ```

      - Push your branch.

        ```bash
        git push origin <branch-name>
        ```

      - Go to the repository on GitHub and create a Pull Request from your branch to `main`.

> **Note:** Branch protection is enabled on the repository. This means you cannot push directly to the main branch. All changes must be submitted and reviewed through Pull Requests before merging.

---

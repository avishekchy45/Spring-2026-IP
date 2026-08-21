### Step 1: Go to the Project Directory

Use the `cd` command to navigate to the directory where you want to create your project.

| Platform      | Command          |
| ------------- | ---------------- |
| **Windows**   | `cd E:\Projects` |
| **Mac/Linux** | `cd ~/Projects`  |

> It is recommended to keep all your projects in a dedicated folder (e.g., `Projects` or `Dev`) for better organization.

### Step 2: Create a Project Folder

Use the `mkdir` command to create a new project folder:

| Platform      | Command                                   | Description              |
| ------------- | ----------------------------------------- | ------------------------ |
| **Windows**   | `mkdir <folder-name>`                     | Creates a directory      |
| **Windows**   | `mkdir <parent-folder>\<child-folder>`    | Creates nested directory |
| **Mac/Linux** | `mkdir <folder-name>`                     | Creates a directory      |
| **Mac/Linux** | `mkdir -p <parent-folder>/<child-folder>` | Creates nested directory |

> Use lowercase letters and hyphens (`-`) instead of spaces for folder names (e.g., `my-project`). Avoid special characters to ensure cross-platform compatibility.

### Step 3: Navigate to the Folder

Use the `cd` command to move into your project folder:

```bash
cd <folder-name>
```

You can verify your working directory using `cd` _(Windows)_ or `pwd` _(Mac/Linux)_ to avoid making changes in the wrong folder.

> You can combine **Step 2 & 3** into one command:
>
> ```bash
> mkdir <folder-name> && cd <folder-name>
> ```

### Step 4: Create or Open a File

| Platform      | Command                 | Description                                 |
| ------------- | ----------------------- | ------------------------------------------- |
| **Windows**   | `type nul > <filename>` | Creates an empty file                       |
| **Windows**   | `echo. > <filename>`    | Creates a file containing a single new-line |
| **Windows**   | `notepad <filename>`    | Creates and opens file in Notepad           |
| **Mac/Linux** | `touch <filename>`      | Creates an empty file                       |
| **Mac/Linux** | `nano <filename>`       | Creates and opens file in terminal editor   |

### Step 5: Open a Code Editor

Open your preferred code editor.

For **VS Code**, run the following in your terminal/cmd inside your project folder:

```bash
code .
```

The `code .` command opens the **current directory** in VS Code. Make sure the `code` command is added to your system's PATH:

| OS          | Steps                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| **Windows** | PATH is set automatically during VS Code installation. If not, add it manually via **System Environment Variables** |
| **Mac**     | Press `Cmd+Shift+P` in VS Code and select **"Shell Command: Install 'code' command in PATH"**                       |
| **Linux**   | Press `Ctrl+Shift+P` in VS Code and select **"Shell Command: Install 'code' command in PATH"**                      |

Alternatively, you can:

| Platform    | Alternative                                                                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Windows** | Open **VS Code** manually → **File → Open Folder** or right-click the folder → **"Open with Code"**                                                                              |
| **Mac**     | Open **VS Code** manually → **File → Open Folder** or drag the folder into the VS Code icon in the Dockor right-click the folder → **"Open with VS Code"** _(may require setup)_ |
| **Linux**   | Open **VS Code** manually → **File → Open Folder** or right-click the folder → **"Open with Code"** _(if supported by your file manager)_                                        |

### Step 6: Install Recommended Extensions

Install the suggested extensions during class via the **Extensions panel**.

> You can also use the **`.code-workspace`** file to automatically load all workspace settings and recommended extensions. Using a `.code-workspace` file ensures consistent extension settings across your team or projects.

| Platform          | Command                                                      |
| ----------------- | ------------------------------------------------------------ |
| **Windows/Linux** | `code <project-name>.code-workspace`                         |
| **Mac**           | `open -a "Visual Studio Code" <project-name>.code-workspace` |

---

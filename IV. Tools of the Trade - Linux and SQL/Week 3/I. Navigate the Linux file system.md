# **Basics of Linux Shell Commands**

In this section, we'll delve into the fundamental skills needed to communicate effectively with the Linux operating system through the shell. Proficiency in Linux commands is a core competency for security professionals, as it enables remote file navigation, management, and analysis—especially in environments without a graphical user interface. You'll also need to configure user access, set file permissions, and authorize operations, making command-line proficiency a critical aspect of your role as a security analyst.

## **Understanding the [[Bash]] Shell**
- **[[Bash]]**: **Bash** (Bourne Again Shell) is the default shell in most Linux distributions. While there are different shells available, the key Linux commands you'll learn in this section are applicable across most shells.
- **[[Commands as Instructions]]**: In the shell, commands act as instructions that tell the computer what to do. These commands initiate various actions, from finding specific files to launching programs or outputting text.

## **Exploring Commands and Arguments**
- **[[Prompt and Dollar Sign]]**: When using the **[[Bash]]** shell, you'll notice a dollar sign ($) prompt before the cursor, indicating that you can input a new command.
- **[[Commands and Arguments]]**: A command is typically followed by arguments, which provide specific information required for the command's execution. Arguments help commands to perform their intended tasks.
- **[[Case Sensitivity]]**: It's important to remember that all commands, arguments, file names, and directory names in Linux are case-sensitive. Precision in command input is crucial as you progress in your Linux proficiency.

## **Practical Example: Echo Command**
- **[[Echo Command]]**: The **[[echo]]** command is used to display a specified string of text as output.
- **[[Providing Arguments]]**: To use the **[[echo]]** command effectively, you need to specify what text you want to display as output. This text is provided as an argument.
- **[[Case Sensitivity Reminder]]**: Linux commands and arguments, like the **[[echo]]** command and its arguments, must be entered with precise case sensitivity.

With a grasp of these fundamental concepts, you are well-prepared to dive into specific Linux commands in the following video, setting the stage for your journey to becoming a proficient security analyst.

Certainly, here are the important terms with "**[[]]**" for emphasis:

# Core commands for navigation and reading files

In this section, we'll delve into the fundamental skills needed to navigate the Linux file system, which is a crucial skill for security professionals. Effective file system navigation allows you to locate and analyze logs, manage files and directories, and perform various tasks essential to security analysis.

## **Understanding the Filesystem Hierarchy Standard (FHS)
- **[[FHS]]**: The **[[Filesystem Hierarchy Standard (FHS)]]** is a vital component of the Linux OS that organizes data. Everything in Linux is considered a file somewhere within the directory structure.
- **[[Root Directory]]**: The root directory is the highest-level directory in Linux, denoted by a single slash (/). All other directories branch out from the root directory in a hierarchical structure.

## **Key Commands for File System Navigation**
- **[[pwd (Print Working Directory)]]**: This command prints the current working directory onto the screen, showing you where you are within the file system.
- **[[ls (List)]]**: The `ls` command displays the names of files and directories in the current working directory.
- **[[cd (Change Directory)]]**: The `cd` command is used to navigate between directories. It allows you to change your working directory.

## **Practical File System Navigation**
- **Executing Commands in Bash**: To execute commands in the Bash shell, you input the command followed by any necessary arguments and press Enter.
- **Examples**: In the video, practical examples demonstrate how to use the **[[pwd]]** command to display the current working directory, the **[[ls]]** command to list files and directories, and the **[[cd]]** command to change directories.

## **Reading File Content**
- **Reading Files**: Security analysts often need to read the content of files, such as configuration settings, user access reports, or logs.
- **Useful Commands**: The **[[cat]]** command displays the full content of a file, while the **[[head]]** command shows the beginning of a file (typically the first ten lines).

With these essential file system navigation and file reading commands in your toolkit, you're well-equipped to begin managing the Linux system, an integral aspect of your role as a security analyst. Stay tuned for the next video, where we'll explore system management in greater detail.

# Navigate Linux and read file content

In this reading, you’ll review how to navigate the file system using Linux commands in Bash. You’ll further explore the organization of the Linux Filesystem Hierarchy Standard, review several common Linux commands for navigation and reading file content, and learn a couple of new commands.

## Filesystem Hierarchy Standard (FHS)

Previously, you learned that the **[[Filesystem Hierarchy Standard (FHS)]]** is the component of Linux that organizes data. The FHS is important because it defines how directories, directory contents, and other storage is organized in the operating system.

This diagram illustrates the hierarchy of relationships under the FHS:

![L'organigramme commence par le répertoire racine et se divise en plusieurs sous-répertoires.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/j0RYvFG7TpGNNfni5SSa0Q_012d7d577b564b4fa3ead21d3f69ebf1_Dvcfull14z4M8iWFX3SE6wnrTefQLql8gas9ICAiKpixcG31SsHLbQmACjE1B4qfpEwTcHfkiD1hxEVGhjyYngw0-fXASC-TSuTgXTBpz_qS4pmXtp-Y7i7giD3GJKCkvajg0PzNebmAf6wDKOBNL-SrMDhBJhsE4yH5Es2_bKRVPC0goRafLVPJs81beg?expiry=1695772800000&hmac=pqH6YGQcEBWBnkJe7Vg3NV0QjJgH0lkap9qR-lDcwCE)

Under the FHS, a file’s location can be described by a file path. A **file path** is the location of a file or directory. In the file path, the different levels of the hierarchy are separated by a forward slash (`/`).

### Root directory

The **[[root directory]]** is the highest-level directory in Linux, and it’s always represented with a forward slash (`/`).  All subdirectories branch off the root directory. Subdirectories can continue branching out to as many levels as necessary.

### Standard FHS directories

Directly below the root directory, you’ll find standard FHS directories. In the diagram, `home`, `bin`, and `etc` are standard FHS directories. Here are a few examples of what standard directories contain:

- `/home`: Each user in the system gets their own home directory.
- `/bin`: This directory stands for “binary” and contains binary files and other executables. Executables are files that contain a series of commands a computer needs to follow to run programs and perform other functions.
- `/etc`: This directory stores the system’s configuration files.
- `/tmp`: This directory stores many temporary files. The `/tmp` directory is commonly used by attackers because anyone in the system can modify data in these files.
- `/mnt`: This directory stands for “mount” and stores media, such as USB drives and hard drives.

**Pro Tip**: You can use the `man hier` command to learn more about the FHS and its standard directories.

### **User-specific subdirectories**

Under `home` are subdirectories for specific users. In the diagram, these users are  `analyst` and `analyst2`. Each user has their own personal subdirectories, such as `projects`, `logs`, or `reports`.

**Note:** When the path leads to a subdirectory below the user’s home directory, the user’s home directory can be represented as the tilde (`~`). For example, `/home/analyst/logs` can also be represented as `~/logs`.

You can navigate to specific subdirectories using their absolute or relative file paths. The **[[absolute file path]]** is the full file path, which starts from the root. For example, `/home/analyst/projects` is an absolute file path. The **[[relative file path]]** is the file path that starts from a user's current directory.

**Note:** Relative file paths can use a dot (`.`) to represent the current directory, or two dots (`..`) to represent the parent of the current directory. An example of a relative file path could be `../projects`.

## Key commands for navigating the file system

The following Linux commands can be used to navigate the file system: `pwd`, `ls`, and `cd`.

### **[[pwd]]**

The `pwd` command prints the working directory to the screen. Or in other words, it returns the directory that you’re currently in. 

The output gives you the absolute path to this directory. For example, if you’re in your `home` directory and your username is `analyst`, entering `pwd` returns `/home/analyst`. 

**Pro Tip**: To learn what your username is, use the `whoami` command. The `whoami` command returns the username of the current user. For example, if your username is `analyst`, entering `whoami` returns `analyst`.

### **[[ls]]**

The `ls` command displays the names of the files and directories in the current working directory. For example, in the video, `ls` returned directories such as `logs`, and a file called `updates.txt`. 

**Note**: If you want to return the contents of a directory that’s not your current working directory, you can add an argument after ls with the absolute or relative file path to the desired directory. For example, if you’re in the `/home/analyst` directory but want to list the contents of its `projects` subdirectory, you can enter `ls /home/analyst/projects` or just `ls projects`.

### **[[cd]]**

The `cd` command navigates between directories. When you need to change directories, you should use this command.

To navigate to a subdirectory of the current directory, you can add an argument after `cd` with the subdirectory name. For example, if you’re in the `/home/analyst` directory and want to navigate to its projects subdirectory, you can enter `cd projects`.

You can also navigate to any specific directory by entering the absolute file path. For example, if you’re in `/home/analyst/projects`, entering `cd /home/analyst/logs` changes your current directory to /home/analyst/logs.

**Pro Tip**: You can use the relative file path and enter `cd ..` to go up one level in the file structure. For example, if the current directory is `/home/analyst/projects`, entering `cd ..` would change your working directory to `/home/analyst`. 

## Common commands for reading file content

The following Linux commands are useful for reading file content: `cat`, `head`, `tail`, and `less`.

### **[[cat]]**

The `cat` command displays the content of a file. For example, entering `cat updates.txt` returns everything in the `updates.txt` file.

### **[[head]]**

The `head` command displays just the beginning of a file, by default 10 lines. The `head` command can be useful when you want to know the basic contents of a file but don’t need the full contents. Entering `head updates.txt` returns only the first 10 lines of the `updates.txt` file.

**Pro Tip**: If you want to change the number of lines returned by `head`, you can specify the number of lines by including `-n`. For example, if you only want to display the first five lines of the updates.txt file, enter `head -n 5 updates.txt`.

### **[[tail]]**

The `tail` command does the opposite of `head`. This command can be used to display just the end of a file, by default 10 lines. Entering `tail updates.txt` returns only the last 10 lines of the `updates.txt` file.

**Pro Tip**: You can use `tail` to read the most recent information in a log file.

### **[[less]]**

The `less` command returns the content of a file one page at a time. For example, entering `less updates.txt` changes the terminal window to display the contents of `updates.txt` one page at a time. This allows you to easily move forward and backward through the content. 

Once you’ve accessed your content with the `less` command, you can use several keyboard controls to move through the file:

- `Space bar`: Move forward one page
- `b`: Move back one page
- `Down arrow`: Move forward one line
- `Up arrow`: Move back one line
- `q`: Quit and return to the previous terminal window

## Key takeaways

It’s important for security analysts to be able to navigate Linux and the file system of the FHS. Some key commands for navigating the file system include `pwd`, `ls`, and `cd`. Reading file content is also an important skill in the security profession. This can be done with commands such as `cat`, `head`, `tail`, and `less`.


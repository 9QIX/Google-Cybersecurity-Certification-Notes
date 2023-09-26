# Find what you need with Linux

### **Filtering in Linux as a Security Analyst**
   - **Purpose**: As a security analyst, the ability to filter information within the Linux file system is crucial. Filtering involves searching the system for specific data to solve complex problems, such as identifying malware signatures within files.
### **Using the `grep` Command**
   - **`grep` Command**: `grep` is a powerful command in Linux used for searching and filtering text within files.
   - **Usage**: It searches a specified file for lines containing a specified string and returns those lines.
   - **Example**: For instance, if you have a file named `updates.txt` and want to find lines containing the word "OS," you can use the following command:
     ```
     grep OS updates.txt
     ```
   - **Arguments**: The `grep` command takes two arguments: the search string ("OS") and the name of the file to search within (`updates.txt`).
### **Understanding Piping**
   - **Piping Concept**: Piping in Linux is a command used to redirect the standard output of one command as the standard input of another command for further processing.
   - **Representation**: Piping is represented by the vertical bar character (`|`).
   - **Analogy**: It can be likened to a physical pipe, which has two ends. In the context of Linux, it involves redirecting output from one command through a "pipe" to another command.
   - **Use in Filtering**: Piping is particularly useful for filtering data within the Linux system.
### **Example of Piping**
   - **Scenario**: Suppose you want to list the contents of a directory and then filter the results.
   - **Command**: You can use the following command:
     ```
     ls | grep users
     ```
   - **Explanation**: Here, the `ls` command lists the contents of a directory. Instead of displaying it on the screen, its output is sent as input to the `grep` command, which searches for the word "users" within the directory contents.
### **Exploring Piping in Bash**
   - **Scenario**: To better understand how filtering works with piping, let's consider an example.
   - **Output Display**: Initially, we can use the `ls` command to display everything in the "reports" directory.
   - **Command**: The command to achieve this, assuming we're not already in the directory, would be:
     ```
     ls /path/to/reports
     ```
   - **Result**: This command would output a list of files and directories within the "reports" directory, which could be many items. 
### **Combining `ls` and `grep` with Piping**
   - **Filtering Objective**: To filter and return only files that contain the word "users" within the "reports" directory.
   - **Command**: We can achieve this by combining the `ls` command with piping and the `grep` command:
     ```
     ls /path/to/reports | grep users
     ```
   - **Result**: Linux processes this command to display only files within the "reports" directory that contain the specified string "users." Files not containing this string are excluded from the output.
### **Two Filtering Methods**
   - **Summary**: As a security analyst, you now have two different methods for filtering data within Linux:
     1. Using the `grep` command directly to search for specific strings within files.
     2. Combining commands like `ls` and `grep` with piping to filter and search for data within directories.
   - **Importance**: These filtering techniques are valuable for identifying relevant data when investigating security incidents or searching for specific patterns in logs.

Filtering data efficiently is a crucial skill for a security analyst, and understanding these Linux commands and concepts enhances your ability to extract valuable information from the system effectively. Continue exploring the Linux command line to further develop your proficiency as a security professional.

# Filter content in Linux

In this reading, you'll continue exploring Linux commands, which can help you filter for the information you need. You'll learn a new Linux command, `grep`, which can help you search files and directories for specific information.

### Filtering for information

You previously explored how filtering for information is an important skill for security analysts. **[[Filtering]]** is selecting data that match a certain condition. For example, if you had a virus in your system that only affected the .txt files, you could use filtering to find these files quickly. Filtering allows you to search based on specific criteria, such as file extension or a string of text.

### [[grep]]

The `grep` command searches a specified file and returns all lines in the file containing a specified string. The `grep` command commonly takes two arguments: a specific string to search for and a specific file to search through.

For example, entering `grep OS updates.txt` returns all lines containing `OS` in the `updates.txt` file. In this example, `OS` is the specific string to search for, and `updates.txt` is the specific file to search through.

### [[Piping]]

The pipe commend is accessed using the pipe character (`|`). **Piping** sends the **standard output** of one command as standard input to another command for further processing. As a reminder, **standard output** is information returned by the DB through the shell, and standard input is information received by the OS is the command line

The pipe character (`|`) is located in various places on a keyboard. On many keyboards, it's located on the same key es the backslash character (`\`). On some keyboards, the can look different and have a small space through the middle of the line if you can't find the `|`, search online for its location on your particular keyboard

When used with `grep`, the pipe can help you find directories and files containing specific word in their names. For example, `ls /home/analyst/reports | grep users` returns the file and directory names in the `reports` directory that contain `users`. Before the pipe, `ls` indicates to list the names of the flies and directories in `reports`. Then, it sends this output to the command after the pipe in this case, `grep users` returns all of the file or directory names containing `users` from the input it received

Note: Piping is a general form of redirection in Linux and can be used for multiple tasks other then filtering, you can think of piping es a general tool that you can use whenever you want the output of one command to become the input of another command

### [[find]]

The `find` command searches for directories and files that meet specified criteria. There’s a wide range of criteria that can be specified with `find`. For example, you can search for files and directories that

- Contain a specific string in the name,
- Are a certain file size, or
- Were last modified within a certain time frame.

When using `find`, the first argument after `find` indicates where to start searching. For example, entering `find /home/analyst/projects` searches for everything starting at the `projects` directory.

After this first argument, you need to indicate your criteria for the search. If you don’t include a specific search criteria with your second argument, your search will likely return a lot of directories and files. 

Specifying criteria involves options. **[[Options]]** modify the behavior of a command and commonly begin with a hyphen (`-`).

### [[-name and -iname]]

One key criteria analysts might use with `find` is to find file or directory names that contain a specific string. The specific string you're searching for must be entered in quotes after the `-name` or `-iname` options. The difference between these two options is that `-name` is case-sensitive, and `-iname` is not.

For example, you might want to find all files in the `projects` directory that contain the word "log" in the file name. To do this, you'd enter `find /home/analyst/projects -name "*log*"`. You could also enter `find /home/analyst/projects -iname "*log*"`.

In these examples, the output would be all files in the `projects` directory that contain `log` surrounded by zero or more characters. The `"*log*"` portion of the command is the search criteria that indicates to search for the string "log". When `-name` is the option, files with names that include `Log` or `LOG`, for example, wouldn't be returned because this option is case-sensitive. However, they would be returned when `-iname` is the option.

Note: An asterisk (`*`) is used as a wildcard to represent zero or more unknown characters.
### [[-mtime]]

Security analysts might also use find to `find` files or directories last modified within a certain time frame. The `-mtime` option can be used for this search. For example, entering `find /home/analyst/projects -mtime -3` returns all files and directories in the `projects` directory that have been modified within the past three days. 

The `-mtime `option search is based on days, so entering `-mtime +1` indicates all files or directories last modified more than one day ago, and entering `-mtime -1` indicates all files or directories last modified less than one day ago. 

**Note:** The option `-mmin` can be used instead of `-mtime` if you want to base the search on minutes rather than days.

## Key takeaways

Filtering for information using Linux commands is an important skill for security analysts so that they can customize data to fit their needs. Three key Linux commands for this are `grep`, piping (`|`), and `find`. These commands can be used to navigate and filter for information in the file system.

# Create and modify directories and files
   - **Concept**: In the context of the Linux file system, directories and subdirectories can be visualized as branches of a tree connected to the same root. This tree structure forms the directory hierarchy in Linux.
   - **Importance**: Organizing data within this tree structure is crucial for efficient data management and security.

### **Importance of Organization in Security**
   - **Significance**: Organizational structure within a file system is essential for effective data management and security. Knowing where information is located simplifies issue detection and ensures information security.

### **Directories in Linux**
   - **Analogous to Folders**: In Linux, directories serve a similar purpose to folders in other operating systems. They are used to organize files and subdirectories.
   - **Example**: Within a directory for "reports," an analyst might need to create subdirectories for "drafts" and "final reports" to further organize data.

### **Linux Commands for Directory and File Management**
   - **Creation and Removal of Directories**:
     - `mkdir`: The `mkdir` command is used to create a new directory.
     - `rmdir`: The `rmdir` command removes or deletes a directory. It includes a built-in warning to prevent accidental deletion if the directory is not empty.
   - **Creation and Removal of Files**:
     - `touch`: The `touch` command creates a new file.
     - `rm`: The `rm` command removes or deletes a file.
   - **Copying and Moving Files/Directories**:
     - `mv`: The `mv` command moves a file or directory to a new location.
     - `cp`: The `cp` command copies a file or directory to a new location.

### **Demonstration of Commands**
   - **Usage of Commands**: A practical demonstration of various Linux commands for directory and file management.
   - **Commands Used**:
     - `pwd`: Prints the current working directory.
     - `ls`: Lists the names of files and directories in the current working directory.
     - `cd`: Changes the current working directory.
     - `rmdir`: Removes an empty directory.
     - `mkdir`: Creates a new directory.
     - `touch`: Creates a new file.
     - `rm`: Removes a file.
     - `mv`: Moves a file or directory.
     - `cp`: Copies a file or directory.

### **Examples of Commands in Action**
   - **Scenario**: Demonstrations of the practical application of Linux commands.
   - **Actions Performed**:
     - Removing the "oldreports" directory using `rmdir`.
     - Creating a new "drafts" directory using `mkdir`.
     - Creating two new files, "email_patches.txt" and "OS_patches.txt," using `touch`.
     - Deleting the "email_patches.txt" file using `rm`.
     - Moving the "email_policy.txt" file to a new directory using `mv`.
     - Copying the "vulnerabilities.txt" file to another directory using `cp`.

### **Using File Editors (nano)**
   - **File Editors**: File editors, like "nano," are essential tools for security analysts. They are used for tasks such as writing or editing reports.
   - **Introduction to nano**: "nano" is a beginner-friendly file editor in Linux.
   - **Usage of nano**: Explanation of how to access and use the "nano" file editor.
   - **Editing a File with nano**: A practical demonstration of using "nano" to edit a file, including saving and exiting.

By understanding these Linux commands and concepts, you can effectively manage directories and files, ensuring data organization and security in your role as a security analyst. Continue exploring Linux commands to enhance your proficiency in managing data and systems.


# Manage directories and files

Previously, you explored how to manage the file system using Linux commands. The following commands were introduced: `mkdir`, `rmdir`, `touch`, `rm`, `mv`, and `cp`. In this reading, you'll review these commands, the `nano` text editor, and learn another way to write to files.

## Creating and modifying directories

### **[[mkdir]]**

The `mkdir` command creates a new directory. Like all of the commands presented in this reading, you can either provide the new directory as the absolute file path, which starts from the root, or as a relative file path, which starts from your current directory.

For example, if you want to create a new directory called `network` in your `/home/analyst/logs` directory, you can enter `mkdir /home/analyst/logs/network` to create this new directory. If you're already in the `/home/analyst/logs` directory, you can also create this new directory by entering `mkdir network`.

*Pro Tip*: You can use the `ls` command to confirm the new directory was added.

### **[[rmdir]]**

The `rmdir` command removes, or deletes, a directory. For example, entering `rmdir /home/analyst/logs/network` would remove this empty directory from the file system.

*Note*: The `rmdir` command cannot delete directories with files or subdirectories inside. For example, entering `rmdir /home/analyst` returns an error message.

## Creating and modifying files

### **[[touch]] and [[rm]]**

The `touch` command creates a new file. This file won't have any content inside. If your current directory is `/home/analyst/reports`, entering `touch permissions.txt` creates a new file in the reports subdirectory called `permissions.txt`.

The `rm` command removes, or deletes, a file. This command should be used carefully because it's not easy to recover files deleted with `rm`. To remove the permissions file you just created, enter `rm permissions.txt`.

*Pro Tip*: You can verify that `permissions.txt` was successfully created or removed by entering `ls`.

### **[[mv]] and [[cp]]**

You can also use `mv` and `cp` when working with files. The `mv` command moves a file or directory to a new location, and the `cp` command copies a file or directory into a new location. The first argument after `mv` or `cp` is the file or directory you want to move or copy, and the second argument is the location you want to move or copy it to.

To move `permissions.txt` into the logs subdirectory, enter `mv permissions.txt /home/analyst/logs`. Moving a file removes the file from its original location. However, copying a file doesn't remove it from its original location. To copy `permissions.txt` into the logs subdirectory while also keeping it in its original location, enter `cp permissions.txt /home/analyst/logs`.

*Note*: The `mv` command can also be used to rename files. To rename a file, pass the new name in as the second argument instead of the new location. For example, entering `mv permissions.txt perm.txt` renames the `permissions.txt` file to `perm.txt`.

## [[nano]] text editor

`nano` is a command-line file editor that is available by default in many Linux distributions. Many beginners find it easy to use, and it's widely used in the security profession. You can perform multiple basic tasks in `nano`, such as creating new files and modifying file contents.

To open an existing file in `nano` from the directory that contains it, enter `nano` followed by the file name. For example, entering `nano permissions.txt` from the `/home/analyst/reports` directory opens a new `nano` editing window with the `permissions.txt` file open for editing. You can also provide the absolute file path to the file if you're not in the directory that contains it.

You can also create a new file in `nano` by entering `nano` followed by a new file name. For example, entering `nano authorized_users.txt` from the `/home/analyst/reports` directory creates the `authorized_users.txt` file within that directory and opens it in a new `nano` editing window.

Since there isn't an auto-saving feature in `nano`, it's important to save your work before exiting. To save a file in `nano`, use the keyboard shortcut `Ctrl + O`. You'll be prompted to confirm the file name before saving. To exit out of `nano`, use the keyboard shortcut `Ctrl + X`.

*Note*: Vim and Emacs are also popular command-line text editors.

## Standard output redirection

There's an additional way you can write to files. Previously, you learned about standard input and standard output. Standard input is information received by the OS via the command line, and standard output is information returned by the OS through the shell.

You've also learned about piping. Piping sends the standard output of one command as standard input to another command for further processing. It uses the pipe character (`|`).

In addition to the pipe (`|`), you can also use the right angle bracket (`>`) and double right angle bracket (`>>`) operators to redirect standard output.

When used with `echo`, the `>` and `>>` operators can be used to send the output of `echo` to a specified file rather than the screen. The difference between the two is that `>` overwrites your existing file, and `>>` adds your content to the end of the existing file instead of overwriting it. The `>` operator should be used carefully, because it's not easy to recover overwritten files.

When you're inside the directory containing the `permissions.txt` file, entering `echo "last updated date" >> permissions.txt` adds the string "last updated date" to the file contents. Entering `echo "time" > permissions.txt` after this command overwrites the entire file contents of `permissions.txt` with the string "time".

*Note*: Both the `>` and `>>` operators will create a new file if one doesn't already exist with your specified name.

## Key takeaways

Knowing how to manage the file system in Linux is an important skill for security analysts. Useful commands for this include: `mkdir`, `rmdir`, `touch`, `rm`, `mv`, and `cp`. When security analysts need to write to files, they can use the `nano` text editor, or the `>` and `>>` operators.
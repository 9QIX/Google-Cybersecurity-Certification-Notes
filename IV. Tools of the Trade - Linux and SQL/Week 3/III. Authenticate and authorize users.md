# File permissions and ownership

**Permissions and Authorization**
- **Definition**: **[[Permissions]]** in Linux refer to the type of access granted to files and directories. They are related to authorization, which controls access to specific resources in the system.
- **Importance**: **[[Authorization]]** ensures that access is granted only to those who need it, enhancing system security.

**Three Types of Permissions**
- **[[Read Permissions]]**:
  - On Files: Allows reading the contents of the file.
  - On Directories: Permits listing the files within the directory.
- **[[Write Permissions]]**:
  - On Files: Enables modifying the contents of the file.
  - On Directories: Allows creating new files within the directory.
- **[[Execute Permissions]]**:
  - On Files: Permits executing the file if it's an executable program.
  - On Directories: Allows users to enter the directory and access its files.

**Permission Owners**
- **[[User]]**: The owner of the file or directory. By default, the creator becomes the owner, but ownership can be changed.
- **[[Group]]**: Users are organized into groups, and files or directories can be assigned to specific groups.
- **[[Other]]**: Represents all other users on the system, essentially anyone else with access.

**Permission Representation**
- Permissions are represented in Linux using a **10-character string**. For example, "drwxrwxrwx" represents full permissions for a directory accessible by the user, group, and others.
- The first character indicates the file type ("d" for directory, "-" for regular file).
- Characters 2-4 represent permissions for the user (read, write, execute).
- Characters 5-7 represent permissions for the group (read, write, execute).
- Characters 8-10 represent permissions for others (read, write, execute).
- A hyphen "`-`" is used to indicate a missing permission.

**Security Implications**
- Correctly setting file and directory permissions is crucial for protecting sensitive information and maintaining system security.
- Inappropriate permissions, such as **[[world-writable files]]**, can pose significant security risks.

**Checking Permissions**
- The `ls` command, when combined with options, can be used to check permissions.
- `ls -l`: Displays permissions for files and directories in long format.
- `ls -a`: Displays hidden files (those starting with a period) and their permissions.
- `ls -la`: Combines both options to display permissions for all files and hidden files.

**Practical Usage**
- Demonstration of checking permissions using `ls -l`, `ls -a`, and `ls -la`.
- Permissions are displayed in the format explained earlier, including user, group, and other permissions.

**Conclusion**
- Understanding file and directory permissions is essential for security analysts to monitor and set the correct permissions, ensuring data protection and system security.

By grasping these concepts, you can effectively manage and secure files and directories in a Linux environment, which is crucial in the role of a security analyst.

Certainly! Here's a detailed breakdown of the information from the video on changing file and directory permissions using the `chmod` command:

# Change permissions

**Reasons for Changing Permissions**
- **Scenario**: Security analysts often need to change permissions for users due to various reasons, such as department changes, project assignments, or security requirements.
- **Importance**: Adjusting permissions is essential to protect system files from accidental or deliberate alterations or deletions.

**Introduction to `chmod`**
- **Definition**: `chmod` is a Linux command used to change permissions on files and directories. It stands for "change mode."
- **Modes**: There are two modes for changing permissions, but this video focuses on symbolic mode.

**Understanding Symbolic Mode**
- **Symbolic Mode**: Symbolic mode involves using symbols and operators to specify permission changes.
- **Example**: The following example demonstrates how to use symbolic mode with `chmod`.

**Components of `chmod` Syntax**
- **Target**: The target specifies the file or directory for which permissions will be adjusted. It's the final argument after the `chmod` command.
- **Owner Types**: To identify owners, use "u" for user, "g" for group, and "o" for other. These are separated by commas in the argument.
- **Operators**: Operators determine whether permissions should be added or removed. Use "+" to add permissions and "-" to remove them.
- **Permissions**: Permissions are represented by symbols. For example, "r" represents read, "w" represents write, and "x" represents execute.

**Working Example**
- **Scenario**: Suppose you want to give write permissions to the group and remove read permissions from others.
- **Command**: To achieve this, you would use the following `chmod` command:

```bash
chmod g+w,o-r filename
```

**Practical Implementation**
- **Demonstration**: The video demonstrates how to use `chmod` to adjust permissions for a file named "access.txt" in the "logs" sub-directory.
- **Initial Permissions**: Initially, the permissions for "access.txt" show that the user has read and write permissions, the group has read permissions, and others have read permissions.
- **Adjustments**: To make changes, you use `chmod` with symbolic mode. You add write permissions to the group and remove read permissions from others.
- **Resulting Permissions**: After applying the `chmod` command, the permissions for "access.txt" are modified. The group now has write permissions (indicated by "w"), while others have lost all permissions (indicated by "-").

**Practice and Mastery**
- **Complexity**: While these concepts may seem complex at first, practice and experience will make working in Linux more intuitive.
- **No Need to Memorize**: You don't need to memorize every detail; you can always reference these commands when needed.

Understanding how to use `chmod` to change permissions is a valuable skill for a security analyst, as it allows you to control access to files and directories effectively.

Here's the text with inline code formatting for commands and options to be easily read in Markdown:

# Permission commands

Previously, you explored file permissions and the commands that you can use to display and change them. In this reading, you'll review these concepts and also focus on an example of how these commands work together when putting the principle of least privilege into practice.

## Reading permissions

In Linux, permissions are represented with a 10-character string. Permissions include:
- **[[read]]**: for files, this is the ability to read the file contents; for directories, this is the ability to read all contents in the directory including both files and subdirectories
- **[[write]]**: for files, this is the ability to make modifications on the file contents; for directories, this is the ability to create new files in the directory
- **[[execute]]**: for files, this is the ability to execute the file if it’s a program; for directories, this is the ability to enter the directory and access its files

These permissions are given to these types of owners:
- **[[user]]**: the owner of the file
- **[[group]]**: a larger group that the owner is a part of
- **[[other]]**: all other users on the system

Each character in the 10-character string conveys different information about these permissions. The following table describes the purpose of each character:

| Character | Example       | Meaning                 |
|-----------|---------------|-------------------------|
| 1st       | ***d***rwxrwxrwx | file type               |
|           |               | `d` for directory       |
|           |               | `-` for a regular file  |
| 2nd       | d***r***wxrwxrwx | read permissions for the user |
|           |               | `r` if the user has read permissions |
|           |               | `-` if the user lacks read permissions |
| 3rd       | dr***w***xrwxrwx | write permissions for the user |
|           |               | `w` if the user has write permissions |
|           |               | `-` if the user lacks write permissions |
| 4th       | drw***x***rwxrwx | execute permissions for the user |
|           |               | `x` if the user has execute permissions |
|           |               | `-` if the user lacks execute permissions |
| 5th       | drwx***r***wxrwx | read permissions for the group |
|           |               | `r` if the group has read permissions |
|           |               | `-` if the group lacks read permissions |
| 6th       | drwxr***w***xrwx | write permissions for the group |
|           |               | `w` if the group has write permissions |
|           |               | `-` if the group lacks write permissions |
| 7th       | drwxrw***x***rwx | execute permissions for the group |
|           |               | `x` if the group has execute permissions |
|           |               | `-` if the group lacks execute permissions |
| 8th       | drwxrwx***r***wx | read permissions for other |
|           |               | `r` if the other owner type has read permissions |
|           |               | `-` if the other owner type lacks read permissions |
| 9th       | drwxrwxr***w***x | write permissions for other |
|           |               | `w` if the other owner type has write permissions |
|           |               | `-` if the other owner type lacks write permissions |
| 10th      | drwxrwxrw***x*** | execute permissions for other |
|           |               | `x` if the other owner type has execute permissions |
|           |               | `-` if the other owner type lacks execute permissions |

## Exploring existing permissions

You can use the `ls` command to investigate who has permissions on files and directories. Previously, you learned that `ls` displays the names of files in directories in the current working directory.

There are additional options you can add to the `ls` command to make your command more specific. Some of these options provide details about permissions. Here are a few important `ls` options for security analysts:

- `ls -a`: Displays hidden files. Hidden files start with a period (.) at the beginning.
- `ls -l`: Displays permissions to files and directories. Also displays other additional information, including owner name, group, file size, and the time of last modification.
- `ls -la`: Displays permissions to files and directories, including hidden files. This is a combination of the other two options.

## Changing permissions

The **[[principle of least privilege]]** is the concept of granting only the *minimal access and authorization required to complete a task or function*. In other words, users should not have privileges that are beyond what is necessary. Not following the principle of least privilege can create security risks.

The `chmod` command can help you manage this authorization. The `chmod` command changes permissions on files and directories.

### **Using [[chmod]]**

The `chmod` command requires two arguments. The first argument indicates how to change permissions, and the second argument indicates the file or directory that you want to change permissions for. For example, the following command would add all permissions to `login_sessions.txt`:

```bash
chmod u+rwx,g+rwx,o+rwx login_sessions.txt
```

If you wanted to take all the permissions away, you could use:

```bash
chmod u-rwx,g-rwx,o-rwx login_sessions.txt
```

Another way to assign these permissions is to use the equals sign (=) in this first argument. Using = with `chmod` sets, or assigns, the permissions exactly as specified. For example, the following command would set read permissions for `login_sessions.txt` for user, group, and other:

```bash
chmod u=r,g=r,o=r login_sessions.txt
```

This command overwrites existing permissions. For instance, if the user previously had write permissions, these write permissions are removed after you specify only read permissions with =.

The following table reviews how each character is used within the first argument of `chmod`:

| Character | Description                                         |
|-----------|-----------------------------------------------------|
| `u`       | indicates changes will be made to user permissions |
| `g`       | indicates changes will be made to group permissions |
| `o`       | indicates changes will be made to other permissions |
| `+`       | adds permissions to the user, group, or other      |
| `-`       | removes permissions from the user, group, or other |
| `=`       | assigns permissions for the user, group, or other  |

*Note*: When there are permission changes to more than one owner type, commas are needed to separate changes for each owner type. You should not add spaces after those commas.

### **The principle of least privilege in action**

As a security analyst, you may encounter a situation like this one: There's a file called `bonuses.txt` within a `compensation` directory. The owner of this file is a member of the Human Resources department with a username of `hrrep1`. It has been decided that `hrrep1` needs access to this file. But, since this file contains confidential information, no one else in the `hr` group needs access.

You run `ls -l` to check the permissions of files in the `compensation` directory and discover that the permissions for `bonuses.txt` are `-rw-rw----`. The group owner type has read and write permissions that do not align with the principle of least privilege.

To remedy the situation, you input `chmod g-rw bonuses.txt`. Now, only the user who needs to access this file to carry out their job responsibilities can access this file.

**Key takeaways**

Managing directory and file permissions may be a part of your work as a security analyst. Using `ls` with the `-l` and `-la` options allows you to investigate directory and file permissions. Using `chmod` allows you to change user permissions and ensure they are aligned with the principle of least privilege.

Certainly! Here's a detailed explanation of the concepts and commands covered in the video on adding and deleting users in Linux:

# Add and delete users

**Introduction to Authentication and User Management**
- **Authentication**: Authentication is the process of verifying a user's identity within the system.
- **Access Control**: Not all users should have unrestricted access to a system, and managing user access is essential for security.

**Adding and Deleting Users**
- **Adding Users**: New users may join an organization or be assigned to specific groups due to organizational changes.
- **Deleting Users**: Users who leave the organization or change roles should be removed from the system to ensure they no longer have access.

**Root User and Superuser Privileges**
- **Root User**: The root user, also known as the superuser, has elevated privileges to modify the system. Regular users have limitations.
- **Temporary Root Access**: Users who need to perform specific tasks can be temporarily granted root privileges.

**Issues with Using the Root User**
- **Security Risks**: The root account is a prime target for malicious attacks, and it's recommended to disable root logins.
- **Risk of Mistakes**: Running commands as root can lead to irreversible mistakes, such as accidental file deletions.
- **Accountability**: Running as root can make it challenging to track which user performed specific actions.

**Introduction to `sudo`**
- **`sudo`**: `sudo` (super-user-do) is a command that temporarily grants elevated permissions to specific users.
- **Controlled Approach**: `sudo` offers controlled access to root privileges, unlike running every command as root.
- **Password Authentication**: When using `sudo`, users are prompted to enter their own password.

**Adding Users with `useradd`**
- **`useradd`**: `useradd` is a command that adds a user to the system.
- **Prerequisites**: Only the root user or users with sudo privileges can use `useradd`.
- **Example**: To add a user named "salesrep7," use the command `sudo useradd salesrep7`.

**Deleting Users with `userdel`**
- **`userdel`**: `userdel` is a command to delete a user from the system.
- **Root Permissions**: Similar to `useradd`, `userdel` requires root or sudo permissions.
- **Example**: To delete a user, use the command `sudo userdel username`.

**Responsibility and Security**
- **Use of `sudo`**: Users with `sudo` privileges must exercise responsible use to maintain a secure system.
- **Secure Practices**: Special privileges should be used judiciously to prevent security breaches or unintended damage to the system.

Learning how to add and delete users, especially when combined with `sudo` for controlled access, is crucial for maintaining a secure and organized Linux system as a security analyst.
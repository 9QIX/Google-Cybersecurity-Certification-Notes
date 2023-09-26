`nano` is a command-line file editor that is available by default in many Linux distributions. Many beginners find it easy to use, and it's widely used in the security profession. You can perform multiple basic tasks in `nano`, such as creating new files and modifying file contents.

To open an existing file in `nano` from the directory that contains it, enter `nano` followed by the file name. For example, entering `nano permissions.txt` from the `/home/analyst/reports` directory opens a new `nano` editing window with the `permissions.txt` file open for editing. You can also provide the absolute file path to the file if you're not in the directory that contains it.

You can also create a new file in `nano` by entering `nano` followed by a new file name. For example, entering `nano authorized_users.txt` from the `/home/analyst/reports` directory creates the `authorized_users.txt` file within that directory and opens it in a new `nano` editing window.

Since there isn't an auto-saving feature in `nano`, it's important to save your work before exiting. To save a file in `nano`, use the keyboard shortcut `Ctrl + O`. You'll be prompted to confirm the file name before saving. To exit out of `nano`, use the keyboard shortcut `Ctrl + X`.

*Note*: Vim and Emacs are also popular command-line text editors.
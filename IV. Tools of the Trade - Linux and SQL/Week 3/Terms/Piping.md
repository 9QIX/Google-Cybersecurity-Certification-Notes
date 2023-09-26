### [[Piping]]

The pipe commend is accessed using the pipe character (`|`). **Piping** sends the **standard output** of one command as standard input to another command for further processing. As a reminder, **standard output** is information returned by the DB through the shell, and standard input is information received by the OS is the command line

The pipe character (`|`) is located in various places on a keyboard. On many keyboards, it's located on the same key es the backslash character (`\`). On some keyboards, the can look different and have a small space through the middle of the line if you can't find the `|`, search online for its location on your particular keyboard

When used with `grep`, the pipe can help you find directories and files containing specific word in their names. For example, `ls /home/analyst/reports | grep users` returns the file and directory names in the `reports` directory that contain `users`. Before the pipe, `ls` indicates to list the names of the flies and directories in `reports`. Then, it sends this output to the command after the pipe in this case, `grep users` returns all of the file or directory names containing `users` from the input it received

Note: Piping is a general form of redirection in Linux and can be used for multiple tasks other then filtering, you can think of piping es a general tool that you can use whenever you want the output of one command to become the input of another command
**Deleting Users with [[userdel]]**
- **`userdel`**: `userdel` is a command to delete a user from the system.
- **Root Permissions**: Similar to `useradd`, `userdel` requires root or sudo permissions.
- **Example**: To delete a user, use the command `sudo userdel username`.

### **[[userdel]]**

The `userdel` command deletes a user from the system. For example, entering `sudo userdel fgarcia` deletes `fgarcia` as a user. Be careful before you delete a user using this command.

The `userdel` command doesn’t delete the files in the user’s home directory unless you use the `-r` option. Entering `sudo userdel -r fgarcia` would delete `fgarcia` as a user and delete all files in their home directory. Before deleting any user files, you should ensure you have backups in case you need them later.

**Note**: Instead of deleting the user, you could consider deactivating their account with `usermod -L`. This prevents the user from logging in while still giving you access to their account and associated permissions. For example, if a user left an organization, this option would allow you to identify which files they have ownership over, so you could move this ownership to other users.
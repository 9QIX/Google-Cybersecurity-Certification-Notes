**Introduction to `chmod`**
- **Definition**: `chmod` is a Linux command used to change permissions on files and directories. It stands for "change mode."
- **Modes**: There are two modes for changing permissions, but this video focuses on symbolic mode.

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


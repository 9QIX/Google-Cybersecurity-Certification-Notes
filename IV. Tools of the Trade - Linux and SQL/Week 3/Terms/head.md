The **[[cat]]** command displays the full content of a file, while the **[[head]]** command shows the beginning of a file (typically the first ten lines).

### **[[head]]**

The `head` command displays just the beginning of a file, by default 10 lines. The `head` command can be useful when you want to know the basic contents of a file but don’t need the full contents. Entering `head updates.txt` returns only the first 10 lines of the `updates.txt` file.

**Pro Tip**: If you want to change the number of lines returned by `head`, you can specify the number of lines by including `-n`. For example, if you only want to display the first five lines of the updates.txt file, enter `head -n 5 updates.txt`.
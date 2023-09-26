### [[-mtime]]

Security analysts might also use find to `find` files or directories last modified within a certain time frame. The `-mtime` option can be used for this search. For example, entering `find /home/analyst/projects -mtime -3` returns all files and directories in the `projects` directory that have been modified within the past three days. 

The `-mtime `option search is based on days, so entering `-mtime +1` indicates all files or directories last modified more than one day ago, and entering `-mtime -1` indicates all files or directories last modified less than one day ago. 

**Note:** The option `-mmin` can be used instead of `-mtime` if you want to base the search on minutes rather than days.
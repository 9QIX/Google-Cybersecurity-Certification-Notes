### [[find]]

The `find` command searches for directories and files that meet specified criteria. There’s a wide range of criteria that can be specified with `find`. For example, you can search for files and directories that

- Contain a specific string in the name,
- Are a certain file size, or
- Were last modified within a certain time frame.

When using `find`, the first argument after `find` indicates where to start searching. For example, entering `find /home/analyst/projects` searches for everything starting at the `projects` directory.

After this first argument, you need to indicate your criteria for the search. If you don’t include a specific search criteria with your second argument, your search will likely return a lot of directories and files. 

Specifying criteria involves options. **Options** modify the behavior of a command and commonly begin with a hyphen (`-`).
# Reference guide: Python concepts from module 4

#### File Operations

##### `with`
Handles errors and manages external resources.
```python
with open("logs.txt", "r") as file:
    # Code to handle the file within this block
    pass  # Placeholder for actual code
```
##### `open()`
Opens a file in Python.
```python
with open("login_attempts.txt", "r") as file:
    # Code to handle reading the file
```

```python
with open("update_log.txt", "w") as file:
    # Code to handle writing to the file
```

```python
import_file = "example.txt"
with open(import_file, "a") as file:
    # Code to handle appending to the file
```
##### `as`
Assigns a variable that references another object.
```python
with open("logs.txt", "r") as file:
    # Code to handle the file within this block
    # The variable file references the output of the open() function
```
##### `.read()`
Converts files into strings; returns the content of an open file as a string by default.
```python
with open("login_attempts.txt", "r") as file:
    file_text = file.read()
```
##### `.write()`
Writes string data to a specified file.
```python
with open("access_log.txt", "a") as file:
    file.write("jrafael")
```

#### Parsing

##### `.split()`
Converts a string into a list.
```python
approved_users = "elarson,bmoreno,tshah".split(",")
```

```python
removed_users = "wjaffrey jsoto abernard".split()
```

##### `.join()`
Concatenates the elements of an iterable into a string.
```python
approved_users = ",".join(["elarson", "bmoreno", "tshah"])
```

Make sure to replace the `pass` statement with the actual code you want to execute within the block where the file is opened for reading.
```python
with open("logs.txt", "r") as file:
    # Actual code to handle the file within this block
```

```python
with open("login_attempts.txt", "r") as file:
    # Actual code to handle reading the file
```

```python
with open("update_log.txt", "w") as file:
    # Actual code to handle writing to the file
```

```python
import_file = "example.txt"
with open(import_file, "a") as file:
    # Actual code to handle appending to the file
```
```python
with open("logs.txt", "r") as file:
    # Actual code to handle the file within this block
    # The variable file references the output of the open() function
```

```python
with open("login_attempts.txt", "r") as file:
    file_text = file.read()
    # Code to handle the content stored in file_text
```

```python
with open("access_log.txt", "a") as file:
    file.write("jrafael")
    # Code to handle writing to the file
```

```python
approved_users = "elarson,bmoreno,tshah".split(",")
# Code to handle the list of approved_users
```

```python
removed_users = "wjaffrey jsoto abernard".split()
# Code to handle the list of removed_users
```

```python
approved_users_string = ",".join(["elarson", "bmoreno", "tshah"])
# Code to handle the concatenated string of approved_users_string
```


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

# Glossary terms from module 4

## **Terms and definitions from Course 7, Module 4**

Certainly, here are the terms and definitions from the provided list, with the **[[ ]]** notation:

**A**
- **[[Automation]]**: The use of technology to reduce human and manual effort to perform common and repetitive tasks

**C**
- **[[Conditional statement]]**: A statement that evaluates code to determine if it meets a specified set of conditions

**D**
- **[[Debugger]]**: A software tool that helps to locate the source of an error and assess its causes
- **[[Debugging]]**: The practice of identifying and fixing errors in code
- **[[Exception]]**: An error that involves code that cannot be executed even though it is syntactically correct

**F**
- **[[File path]]**: The location of a file or directory 
- **[[Function]]**: A section of code that can be reused in a program

**I**
- **[[Integrated development environment (IDE)]]**: A software application for writing code that provides editing assistance and error correction tools
- **[[Iterative statement]]**: Code that repeatedly executes a set of instructions

**L**
- **[[Log]]**: A record of events that occur within an organization's systems 
- **[[Logic error]]**: An error that results when the logic used in code produces unintended results

**P**
- **[[Parsing]]**: The process of converting data into a more readable format

**S**
- **[[Syntax error]]**: An error that involves invalid usage of a programming language

**V**
- **[[Variable]]**: A container that stores data


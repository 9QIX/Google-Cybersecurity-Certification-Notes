
# Reference guide: Python concepts from module 4

#### Comments

Comments in Python can be created using the following syntax:

- `#`: Starts a line that contains a Python comment.
  ```python
  # Print approved usernames
  ```

- `"""`: Starts and ends a multi-line string that is often used as a Python comment.
  ```python
  """
  The estimate_attempts() function takes in a monthly
  login attempt total and a number of months and
  returns their product.
  """
  ```

#### Conditional Statements

Conditional statements in Python use the following keywords and operators:

- `if`: Starts a conditional statement.
  ```python
  if device_id != "la858zn":
  ```

- `elif`: Precedes a condition that is only evaluated when previous conditions evaluate to False.
  ```python
  elif status == 500:
  ```

- `else`: Precedes a code section that only evaluates when all preceding conditions evaluate to False.
  ```python
  else:
  ```

- `and`: Requires both conditions on either side of the operator to evaluate to True.
  ```python
  if username == "bmoreno" and login_attempts < 5:
  ```

- `or`: Requires only one of the conditions on either side of the operator to evaluate to True.
  ```python
  if status == 100 or status == 102:
  ```

- `not`: Negates a given condition.
  ```python
  if not account_status == "removed":
  ```

#### Iterative Statements

Keywords used in iterative statements:

- `for`: Signals the beginning of a for loop.
  ```python
  for username in ["bmoreno", "tshah", "elarson"]:
  ```

- `while`: Signals the beginning of a while loop.
  ```python
  while login_attempts < 5:
  ```

- `break`: Used to break out of a loop.
- `continue`: Used to skip a loop iteration and continue with the next one.

#### User-Defined Functions

Keywords used when creating user-defined functions:

- `def`: Placed before a function name to define a function.
  ```python
  def greet_employee():
  ```

- `return`: Used to return information from a function.
  ```python
  def calculate_fails(total_attempts, failed_attempts):
      fail_percentage = failed_attempts / total_attempts
      return fail_percentage
  ```

#### Built-In Functions

Commonly used built-in functions in Python:

- `print()`: Outputs a specified object to the screen.
  ```python
  print("login success")
  ```

- `type()`: Returns the data type of its input.
  ```python
  print(type(51.1))
  ```

- `range()`: Generates a sequence of numbers.
  ```python
  range(0, 5, 1)
  ```

- `max()`: Returns the largest numeric input passed into it.
  ```python
  print(max(10, 15, 5))
  ```

- `min()`: Returns the smallest numeric input passed into it.
  ```python
  print(min(10, 15, 5))
  ```

- `sorted()`: Sorts the components of a list (or other iterable).
  ```python
  print(sorted([10, 15, 5]))
  ```

- `str()`: Converts the input object to a string.
  ```python
  str(10)
  ```

- `len()`: Returns the number of elements in an object.
  ```python
  print(len("security"))
  ```

#### Importing Modules and Libraries

Keyword used to import a module or library:

- `import`: Searches for a module or library in a system and adds it to the local Python environment.
  ```python
  import statistics
  ```

  ```python
  from statistics import mean
  ```

  ```python
  from statistics import mean, median
  ```

#### String Methods

Methods that can be applied to strings:

- `.upper()`: Returns a copy of the string in all uppercase letters.
  ```python
  print("Security".upper())
  ```

- `.lower()`: Returns a copy of the string in all lowercase letters.
  ```python
  print("Security".lower())
  ```

- `.index()`: Finds the first occurrence of the input in a string and returns its location.
  ```python
  print("Security".index("c"))
  ```

#### List Methods

Methods that can be applied to lists:

- `.insert()`: Adds an element in a specific position inside the list.
  ```python
  username_list = ["elarson", "fgarcia", "tshah"]
  username_list.insert(2, "wjaffrey")
  ```

- `.remove()`: Removes the first occurrence of a specific element inside a list.
  ```python
  username_list = ["elarson", "bmoreno", "wjaffrey", "tshah"]
  username_list.remove("elarson")
  ```

- `.append()`: Adds input to the end of a list.
  ```python
  username_list = ["bmoreno", "wjaffrey", "tshah"]
  username_list.append("btang")
  ```

- `.index()`: Finds the first occurrence of an element in a list and returns its index.
  ```python
  username_list = ["bmoreno", "wjaffrey", "tshah", "btang"]
  print(username_list.index("tshah"))
  ```

#### Additional Syntax for Working with Strings and Lists

Syntax useful when working with strings and lists:

- `+` (Concatenation): Combines two strings or lists together.
  ```python
  device_id = "IT" + "nwp12"
  ```

  ```python
  users = ["elarson", "bmoreno"] + ["tshah", "btang"]
  ```

- `[]` (Bracket Notation): Uses indices to extract parts of a string or list.
  ```python
  print("h32rb17"[0])
  ```

  ```python
  print("h32rb17"[0:3])
  ```

  ```python
  username_list = ["elarson", "fgarcia", "tshah"]
  print(username_list[2])
  ```

#### Regular Expressions

Regular expressions using the `re` module function and symbols:

- `re.findall()`: Returns a list of matches to a regular expression.
  ```python
  import re
  re.findall("a53", "a53-32c .E")
  ```

- `\w`: Matches with any alphanumeric character; also matches with the underscore (_).
  ```python
  import re
  re.findall("\w", "a53-32c .E")
  ```

- `.` (Dot): Matches to all characters, including symbols.
  ```python
  import re
  re.findall(".", "a53-32c .E")
  ```

- `\d`: Matches to all single digits.
  ```python
  import re
  re.findall("\d", "a53-32c .E")
  ```

- `\s`:

 Matches to all single spaces.
  ```python
  import re
  re.findall("\s", "a53-32c .E")
  ```

- `\.`: Matches to the period character.
  ```python
  import re
  re.findall("\.", "a53-32c .E")
  ```

- `+`: Represents one or more occurrences of a specific character.
  ```python
  import re
  re.findall("\w+", "a53-32c .E")
  ```

- `*`: Represents zero, one, or more occurrences of a specific character.
  ```python
  import re
  re.findall("\w*", "a53-32c .E")
  ```

- `{}`: Represents a specified number of occurrences of a specific character.
  ```python
  import re
  re.findall("\w{3}", "a53-32c .E")
  ```

#### File Operations

Functions, methods, and keywords used with file operations:

- `with`: Handles errors and manages external resources.
  ```python
  with open("logs.txt", "r") as file:
  ```

- `open()`: Opens a file in Python.
  ```python
  with open("login_attempts.txt", "r") as file:
  ```

  ```python
  with open("update_log.txt", "w") as file:
  ```

  ```python
  import_file = "example.txt"
  with open(import_file, "a") as file:
  ```

- `as`: Assigns a variable that references another object.
  ```python
  with open("logs.txt", "r") as file:
  ```

- `.read()`: Converts files into strings; returns the content of an open file as a string by default.
  ```python
  with open("login_attempts.txt", "r") as file:
      file_text = file.read()
  ```

- `.write()`: Writes string data to a specified file.
  ```python
  with open("access_log.txt", "a") as file:
      file.write("jrafael")
  ```

#### Parsing

Methods useful when parsing data:

- `.split()`: Converts a string into a list.
  ```python
  approved_users = "elarson,bmoreno,tshah".split(",")
  ```

  ```python
  removed_users = "wjaffrey jsoto abernard".split()
  ```

- `.join()`: Concatenates the elements of an iterable into a string.
  ```python
  approved_users = ",".join(["elarson", "bmoreno", "tshah"])
  ```
  
# Glossary
## Terms and definitions from Course 7

**A**
- **[[Algorithm]]**: A set of rules that solve a problem
- **[[Argument (Python)]]**: The data brought into a function when it is called
- **[[Automation]]**: The use of technology to reduce human and manual effort to perform common and repetitive tasks

**B**
- **[[Boolean data]]**: Data that can only be one of two values: either True or False
- **[[Bracket notation]]**: The indices placed in square brackets
- **[[Built-in function]]**: A function that exists within Python and can be called directly

**C**
- **[[Command-line interface]]**: A text-based user interface that uses commands to interact with the computer
- **[[Comment]]**: A note programmers make about the intention behind their code
- **[[Conditional statement]]**: A statement that evaluates code to determine if it meets a specified set of conditions

**D**
- **[[Data type]]**: A category for a particular type of data item
- **[[Debugger]]**: A software tool that helps to locate the source of an error and assess its causes
- **[[Debugging]]**: The practice of identifying and fixing errors in code
- **[[Dictionary data]]**: Data that consists of one or more key-value pairs

**E**
- **[[Exception]]**: An error that involves code that cannot be executed even though it is syntactically correct

**F**
- **[[File path]]**: The location of a file or directory
- **[[Float data]]**: Data consisting of a number with a decimal point
- **[[Function]]**: A section of code that can be reused in a program

**G**
- **[[Global variable]]**: A variable that is available through the entire program

**I**
- **[[Immutable]]**: An object that cannot be changed after it is created and assigned a value
- **[[Indentation]]**: Space added at the beginning of a line of code
- **[[Index]]**: A number assigned to every element in a sequence that indicates its position
- **[[Integer data]]**: Data consisting of a number that does not include a decimal point
- **[[Integrated development environment (IDE)]]**: A software application for writing code that provides editing assistance and error correction tools
- **[[Interpreter]]**: A computer program that translates Python code into runnable instructions line by line
- **[[Iterative statement]]**: Code that repeatedly executes a set of instructions

**L**
- **[[Library]]**: A collection of modules that provide code users can access in their programs
- **[[List concatenation]]**: The concept of combining two lists into one by placing the elements of the second list directly after the elements of the first list
- **[[List data]]**: Data structure that consists of a collection of data in sequential form
- **[[Local variable]]**: A variable assigned within a function
- **[[Log]]**: A record of events that occur within an organization's systems
- **[[Logic error]]**: An error that results when the logic used in code produces unintended results
- **[[Loop variable]]**: A variable that is used to control the iterations of a loop

**M**
- **[[Method]]**: A function that belongs to a specific data type
- **[[Module]]**: A Python file that contains additional functions, variables, classes, and any kind of runnable code

**N**
- **[[Notebook]]**: An online interface for writing, storing, and running code

**P**
- **[[Parameter (Python)]]**: An object that is included in a function definition for use in that function
- **[[Parsing]]**: The process of converting data into a more readable format
- **[[PEP 8 style guide]]**: A resource that provides stylistic guidelines for programmers working in Python
- **[[Programming]]**: A process that can be used to create a specific set of instructions for a computer to execute tasks
- **[[Python Standard Library]]**: An extensive collection of Python code that often comes packaged with Python

**R**
- **[[Regular expression (regex)]]**: A sequence of characters that forms a pattern
- **[[Return statement]]**: A Python statement that executes inside a function and sends information back to the function call

**S**
- **[[Set data]]**: Data that consists of an unordered collection of unique values
- **[[String concatenation]]**: The process of joining two strings together
- **[[String data]]**: Data consisting of an ordered sequence of characters
- **[[Style guide]]**: A manual that informs the writing, formatting, and design of documents
- **[[Substring]]**: A continuous sequence of characters within a string
- **[[Syntax]]**: The rules that determine what is correctly structured in a computing language
- **[[Syntax error]]**: An error that involves invalid usage of a programming language

**T**
- **[[Tuple data]]**: Data structure that consists of a collection of data that cannot be changed
- **[[Type error]]**: An error that results from using the wrong data type

**U**
- **[[User-defined function]]**: A function that programmers design for their specific needs

**V**
- **[[Variable]]**: A container that stores data
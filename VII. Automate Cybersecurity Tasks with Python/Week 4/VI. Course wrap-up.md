
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

Feel free to use this guide as a quick reference for Python concepts from Course 7 of the Google Cybersecurity Certificate.
```
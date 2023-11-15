### Reference Guide: Python Concepts from Module 1

#### Comments
Comments are notes made by programmers about the intention behind their code.

```python
# Print approved usernames
```

#### Functions
Commonly used functions in Python.

- `print()`: Outputs a specified object to the screen.
  ```python
  print("login success")
  ```

- `type()`: Returns the data type of its input.
  ```python
  print(type(51.1))  # Outputs <class 'float'>
  ```

- `range()`: Generates a sequence of numbers.
  ```python
  range(0, 5, 1)  # Generates 0, 1, 2, 3, 4
  ```

#### Conditional Statements
Keywords and operators used in conditional statements.

- `if`: Starts a conditional statement.
  ```python
  if device_id != "la858zn":
  ```

- `elif`: Precedes a condition evaluated when previous conditions are False.
  ```python
  elif status == 500:
  ```

- `else`: Precedes a code section evaluated when all preceding conditions are False.
  ```python
  else:
  ```

- `and`: Requires both conditions to evaluate to True.
  ```python
  if username == "bmoreno" and login_attempts < 5:
  ```

- `or`: Requires either condition to evaluate to True.
  ```python
  if status == 100 or status == 102:
  ```

- `not`: Negates a given condition.
  ```python
  if not account_status == "removed":
  ```

#### Iterative Statements
Keywords used in iterative statements.

- `for`: Signals the beginning of a for loop.
  ```python
  for username in ["bmoreno", "tshah", "elarson"]:
  ```

- `while`: Signals the beginning of a while loop.
  ```python
  while login_attempts < 5:
  ```

#### Control Flow Statements
Used to control the execution of loops.

- `break`: Used to break out of a loop.
- `continue`: Used to skip a loop iteration and continue with the next one.


# Glossary terms from module 1
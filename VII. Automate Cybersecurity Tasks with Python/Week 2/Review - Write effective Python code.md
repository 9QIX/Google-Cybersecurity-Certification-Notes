# Python Reference Guide: Module 2 Concepts

#### User-defined Functions

User-defined functions are created using the following keywords:

**def:** Placed before a function name to define it.
```python
def greet_employee():
    # Function body
    # ...
```

**return:** Used to return information from a function. Python exits the function after encountering this keyword.
```python
def calculate_fails(total_attempts, failed_attempts):
    fail_percentage = failed_attempts / total_attempts
    return fail_percentage
```

#### Built-in Functions

Commonly used built-in functions in Python include:

**max():** Returns the largest numeric input passed into it.
```python
print(max(10, 15, 5))  # Outputs 15
```

**min():** Returns the smallest numeric input passed into it.
```python
print(min(10, 15, 5))  # Outputs 5
```

**sorted():** Sorts the components of a list or other iterable.
```python
print(sorted([10, 15, 5]))  # Outputs [5, 10, 15]
print(sorted(["bmoreno", "tshah", "elarson"]))  # Outputs ["bmoreno", "elarson", "tshah"]
```

#### Importing Modules and Libraries

Use the **import** keyword to bring in modules or libraries. Examples:

```python
import statistics  # Imports the entire statistics module
from statistics import mean  # Imports only the mean() function from the statistics module
from statistics import mean, median  # Imports both mean() and median() functions from the statistics module
```

#### Comments

Comments help explain code. Use the **#** symbol for single-line comments:

```python
# Print approved usernames
```

For multi-line comments, use triple double-quotes (`"""`):

```python
"""
The estimate_attempts() function takes in a monthly
login attempt total and a number of months and
returns their product.
"""
```

#### Key Takeaways

- **User-defined Functions:** Defined using `def`, and information is returned using `return`.
- **Built-in Functions:** Include `max()`, `min()`, `sorted()`, among others.
- **Importing Modules:** Use `import` and `from...import` to bring in modules and their functions.
- **Comments:** Use `#` for single-line comments and `""" """` for multi-line comments.

# Glossary terms from module 2

## **Terms and definitions from Course 7, Module 2**

**A**
- **[[Argument (Python)]]**: The data brought into a function when it is called

**B**
- **[[Built-in function]]**: A function that exists within Python and can be called directly

**C**
- **[[Comment]]**: A note programmers make about the intention behind their code

**F**
- **[[Function]]**: A section of code that can be reused in a program

**G**
- **[[Global variable]]**: A variable that is available throughout the entire program

**I**
- **[[Indentation]]**: Space added at the beginning of a line of code

**L**
- **[[Library]]**: A collection of modules that provide code users can access in their programs
- **[[Local variable]]**: A variable assigned within a function

**M**
- **[[Module]]**: A Python file that contains additional functions, variables, classes, and any kind of runnable code

**P**
- **[[Parameter (Python)]]**: An object that is included in a function definition for use in that function
- **[[PEP 8 style guide]]**: A resource that provides stylistic guidelines for programmers working in Python 
- **[[Python Standard Library]]**: An extensive collection of Python code that often comes packaged with Python

**R**
- **[[Return statement]]**: A Python statement that executes inside a function and sends information back to the function call 

**S**
- **[[Style guide]]**: A manual that informs the writing, formatting, and design of documents

**U**
- **[[User-defined function]]**: A function that programmers design for their specific needs
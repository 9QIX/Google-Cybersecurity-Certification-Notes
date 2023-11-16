- **[[Comment]]**: A note programmers make about the intention behind their code

- **Comments in Code:**
	- PEP 8's recommendations regarding comments are discussed. **[[Comment]]** are defined as notes programmers make about the intention behind their code, providing clarity on what the code is doing and why. The importance of keeping comments clear and up-to-date is highlighted through examples.
	- **Example of Code with and Without Comments:**
		- An example is presented to illustrate the impact of comments on code understanding. The importance of comments becomes evident, as they help readers quickly comprehend the program's functionality and variables.

## Comments

A **[[comment]]** is a note programmers make about the intentions behind their code. Comments make it easier for you and other programmers to read and understand your code. 

It’s important to start your code with a comment that explains what the program does. Then, throughout the code, you should add additional comments about your intentions behind specific sections.

When adding comments, you can add both single-line comments and multi-line comments.

### **Single-line comments**

Single-line comments in Python begin with the (#) symbol. According to the PEP 8 style guide, it’s best practice to keep all lines in Python under 79 characters to maintain readability, and this includes comments.

Single-line comments are often used throughout your program to explain the intention behind specific sections of code. For example, this might be when you're explaining simpler components of your program, such as the following for loop:

```python
# Print elements of 'computer_assets' list
computer_assets = ["laptop1", "desktop20", "smartphone03"]

for asset in computer_assets:
    print(asset)
```

**Note:** Comments are important when writing more complex code, like functions, or multiple loops or conditional statements. However, they're optional when writing less complex code like reassigning a variable.

### **Multi-line comments**

Multi-line comments are used when you need more than 79 characters in a single comment. For example, this might occur when defining a function if the comment describes its inputs and their data types as well as its output. 

There are two commonly used ways of writing multi-line comments in Python. The first is by using the hashtag (#) symbol over multiple lines:

```python
# remaining_login_attempts() function takes two integer parameters,
# the maximum login attempts allowed and the total attempts made,
# and it returns an integer representing remaining login attempts

def remaining_login_attempts(maximum_attempts, total_attempts):
    return maximum_attempts - total_attempts
```

Another way of writing multi-line comments is by using documentation strings and not assigning them to a variable. Documentation strings, also called docstrings, are strings that are written over multiple lines and are used to document code. To create a documentation string, use triple quotation marks (""" """). 

You could add the comment to the function in the previous example in this way too:

```python
"""
remaining_login_attempts() function takes two integer parameters,
the maximum login attempts allowed and the total attempts made,
and it returns an integer representing remaining login attempts
"""

def remaining_login_attempts(maximum_attempts, total_attempts):
    return maximum_attempts - total_attempts
```

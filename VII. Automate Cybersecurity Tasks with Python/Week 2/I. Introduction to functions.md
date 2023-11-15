# Introduction to functions

- **Functions in Python:**
	- A function is a reusable block of code that performs a specific task.
	- Functions can take input parameters, perform actions, and return results.
	- They help in organizing code, making it more readable and modular.
- **Built-in Functions:**
	- Python provides a set of built-in functions that are readily available for use.
	- Examples include `print()`, `len()`, `input()`, etc.
	- These functions are part of the Python language and can be used without explicitly defining them.
- **User-Defined Functions:**
	- Programmers can create their own functions to encapsulate specific functionality.
	- This is known as defining a user-defined function.
	- User-defined functions enhance code reusability and maintainability.
- **Syntax of a Function:**
  ```python
  def function_name(parameters):
      # Function body
      # Perform actions
      return result  # Optional, depending on whether the function should return a value
  ```
- **Calling a Function:**
	- Once a function is defined, it can be called anywhere in the program.
	- Example: `result = function_name(arguments)`
- **Parameters and Arguments:**
	- Parameters are placeholders in the function definition.
	- Arguments are the actual values passed to the function when it is called.
- **Example - User-Defined Function:**
  ```python
  def greet(name):
      """This function greets the person passed in as a parameter."""
      print(f"Hello, {name}!")
  # Calling the function
  greet("Alice") # Output: Hello, Alice!
  ```
- **Return Statement:**
	- The `return` statement is used to send a result back to the caller.
	- A function may not have a `return` statement if it's intended to perform actions without producing a result.
- **Example - Function with Return:**
  ```python
  def add_numbers(a, b):
      """This function adds two numbers and returns the result."""
      return a + b
  # Calling the function
  result = add_numbers(3, 5)
  print(result)  # Output: 8
  ```
- **Scope of Variables:**
	- Variables defined inside a function are typically local to that function.
	- They have their own scope and don't interfere with variables outside the function.
- **Docstrings:**
	- Docstrings are used to provide documentation for functions.
	- They are placed within triple quotes and describe the purpose and usage of the function.

Understanding functions and how to use them is a fundamental aspect of Python programming. They enhance code structure, promote reusability, and contribute to creating more maintainable and efficient programs. If you have any specific questions or if you'd like to explore more examples, feel free to let me know!
# Introduction to functions

- **Functions in Python:**
	- A **[[function]]** is a reusable block of code that performs a specific task.
	- Functions can take input parameters, perform actions, and return results.
	- They help in organizing code, making it more readable and modular.
- **[[Built-in Functions]]:**
	- Python provides a set of built-in functions that are readily available for use.
	- Examples include `print()`, `len()`, `input()`, etc.
	- These functions are part of the Python language and can be used without explicitly defining them.
- **[[User-Defined Functions]]:**
	- Programmers can create their own functions to encapsulate specific functionality.
	- This is known as defining a user-defined function.
	- User-defined functions enhance code reusability and maintainability.
- **Syntax of a Function:**
	```python
	def function_name(parameters):
			# Function body
			# Perform actions
			return result	# Optional, depending on whether the function should return a value
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
	print(result)	# Output: 8
	```
- **Scope of Variables:**
	- Variables defined inside a function are typically local to that function.
	- They have their own scope and don't interfere with variables outside the function.
- **Docstrings:**
	- Docstrings are used to provide documentation for functions.
	- They are placed within triple quotes and describe the purpose and usage of the function.

# Create a basic function

- **Introduction to User-Defined Functions:**
	- The passage introduces the concept of user-defined functions in Python, allowing programmers to create functions with specific functionalities.
- **Defining a Function:**
	- The process of defining a function is explained using the `def` keyword before a function name.
	- The example function will greet employees after they log in.
- **Syntax of Function Definition:**
	- The syntax involves using parentheses after the def keyword and the function name.
	- No additional information is needed inside the parentheses for this simple function.
	- A colon is placed at the end of the function header.
- **Indicating Function Behavior:**
	- After the colon, the passage explains that the function's behavior is indicated.
	- The example function is intended to output a message when an employee logs in.
- **Coding the Function:**
	- The passage provides the code for the `greet_employee` function, which prints a welcome message.
	- Indentation is used to signify that the print statement is part of the function.
- **Calling the Function:**
	- The need to call the function is explained, emphasizing that functions need to be called to execute.
	- A new line is added to call the `greet_employee` function.
- **Execution of the Code:**
	- The code is executed, and it is mentioned that the welcome message is printed.
	- The reader is congratulated on defining and calling a simple function.
- **Teaser for Complexity:**
	- The passage concludes by hinting at the introduction of more complex aspects of functions in subsequent learning, adding a layer of complexity to the functions.

# Python functions in cybersecurity

Previously, you explored how to define and call your own functions. In this reading, you’ll revisit what you learned about functions and examine how functions can improve efficiency in a cybersecurity setting.

## Functions in cybersecurity

A **function** is a section of code that can be reused in a program. Functions are important in Python because they allow you to automate repetitive parts of your code. In cybersecurity, you will likely adopt some processes that you will often repeat.

When working with security logs, you will often encounter tasks that need to be repeated. For example, if you were responsible for finding malicious login activity based on failed login attempts, you might have to repeat the process for multiple logs.

To work around that, you could define a function that takes a log as its input and returns all potentially malicious logins. It would be easy to apply this function to different logs.

## Defining a function

In Python, you'll work with built-in functions and user-defined functions. **Built-in functions** are functions that exist within Python and can be called directly. The print() function is an example of a built-in function.

**[[User-defined functions]]** are functions that programmers design for their specific needs. To define a function, you need to include a function header and the body of your function.

### **Function header**

The function header is what tells Python that you are starting to define a function. For example, if you want to define a function that displays an "investigate activity" message, you can include this function header:

`def display_investigation_message():`

The def keyword is placed before a function name to define a function. In this case, the name of that function is display_investigation_message. 

The parentheses that follow the name of the function and the colon (:) at the end of the function header are also essential parts of the syntax.

**Pro tip**: When naming a function, give it a name that indicates what it does. This will make it easier to remember when calling it later.

### **Function body**

The body of the function is an indented block of code after the function header that defines what the function does. The indentation is very important when writing a function because it separates the definition of a function from the rest of the code.

To add a body to your definition of the display_investigation_message() function, add an indented line with the print() function. Your function definition becomes the following:

```python
def display_investigation_message():
    print("investigate activity")
```

## Calling a function

After defining a function, you can use it as many times as needed in your code. Using a function after defining it is referred to as calling a function. To call a function, write its name followed by parentheses. So, for the function you previously defined, you can use the following code to call it:

`display_investigation_message()`

Although you'll use functions in more complex ways as you expand your understanding, the following code provides an introduction to how the display_investigation_message() function might be part of a larger section of code. You can run it and analyze its output:

```python
def display_investigation_message():
    print("investigate activity")
application_status = "potential concern"
email_status = "okay"
if application_status == "potential concern":
    print("application_log:")
    display_investigation_message()
if email_status == "potential concern":
    print("email log:")
    display_investigation_message()
```
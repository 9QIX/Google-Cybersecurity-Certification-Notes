# Debugging strategies

- **Objective:** The passage aims to address the challenges associated with debugging code, emphasizing its significance for ensuring code functionality. It introduces three types of errors—syntax errors, logic errors, and exceptions—and explores techniques for identifying and fixing them.
- **[[Debugging]]**: is the practice of identifying and fixing errors in code. 
- **[[Types of Errors]]:**
	1. **[[Syntax Errors]]:**
		- Definition: Invalid usage of the Python language.
		- Example: Forgetting to add a colon after a function header.
		- Resolution: Locate and correct the error indicated by error messages.
	2. **[[Logic Errors]]:**
		- Definition: Errors that may not cause error messages but produce unintended results.
		- Example: Writing incorrect text within a print statement or using the wrong comparison operator.
		- Debugging Strategies:
			- Use print statements to identify functioning sections.
			- Employ a debugger to insert breakpoints and run code sections independently.
	3. **[[Exceptions]]:**
		- Definition: Occur when the program encounters difficulties in executing code, despite correct syntax.
		- Examples: Division by 0, accessing nonexistent index values, unrecognized variable or function names, or incorrect data types.
		- Debugging Tools:
		- Use debuggers to identify potential sources of error.
		- Employ print statements to analyze code execution.
- **Diagnosing Logic Errors:**
	- Suggested Strategies:
		- Insert print statements throughout the code, describing their location.
		- Utilize a debugger to set breakpoints, allowing the isolation of code sections for independent execution.
- **Handling Exceptions:**
	- Understanding common scenarios leading to exceptions (e.g., mathematical impossibility or incorrect data types).
	- Utilizing debuggers and print statements to identify and resolve exception errors.
- **Conclusion:** The passage concludes by emphasizing the inevitability of errors and exceptions in Python programming and highlights the importance of acquiring debugging skills. The information provided is intended to equip the learner with insights into effective code debugging, ensuring the functionality of written code.

# Apply debugging strategies

- **Objective:** The passage aims to guide the reader through the process of debugging Python code by using a specific example. The purpose of the code is to parse a single line from a log file, and the debugging process involves identifying and fixing syntax errors, name errors (a type of exception), and logic errors.
- **Debugging Process:**
	1. **Identifying Syntax Errors:**
		- Error: A syntax error is detected in the line defining a function.
		- Resolution: Add a missing colon at the end of the function header.
	2. **Addressing Name Error (Exception):**
		- Error: A "name error" occurs related to the variable `application_name`.
		- Resolution: Identify and correct the misspelling of the variable (`application_name`).
	3. **Checking Logic Errors:**
		- Error: The logic of the program doesn't work as intended. If the status code is 200, the code should print a message instead of parsing the line.
		- Debugging Strategies:
			- Insert print statements to identify the issue.
			- Identify that the program does not enter the if statement related to the 200 status code.
	4. **Fixing Logic Error:**
		- Issue: The program doesn't enter the if statement checking for the 200 status code because the return statement precedes it.
		- Resolution: Move the if statement to check the status code before the return statement to ensure proper execution.
- **Conclusion:** The passage concludes by affirming the completion of the debugging process and expresses the hope that the reader has gained a stronger understanding of debugging strategies. It also suggests that the experience provided insights into common errors encountered during debugging.

# Explore debugging techniques

Previously, you examined three types of errors you may encounter while working in Python and explored strategies for debugging these errors. This reading further explores these concepts with additional strategies and examples for debugging Python code.

## Types of errors 

It's a normal part of developing code in Python to get error messages or find that the code you're running isn't working as you intended. The important thing is that you can figure out how to fix errors when they occur. Understanding the three main types of errors can help. These types include syntax errors, logic errors, and exceptions.

### **Syntax errors** 

A **[[syntax error]]** is an error that involves invalid usage of a programming language. Syntax errors occur when there is a mistake with the Python syntax itself. Common examples of syntax errors include forgetting a punctuation mark, such as a closing bracket for a list or a colon after a function header.  

When you run code with syntax errors, the output will identify the location of the error with the line number and a portion of the affected code. It also describes the error. Syntax errors often begin with the label  "SyntaxError:" . Then, this is followed by a  description of the error. The description might simply be "invalid syntax" . Or if you forget a closing parentheses on a function, the description might be "unexpected EOF while parsing". "EOF" stands for "end of file."  

The following code contains a syntax error. Run it and examine its output:

```python
message = "You are debugging a syntax error
print(message)
```
Output:
```
Error on line 1:
    message = "You are debugging a syntax error
                                              ^
SyntaxError: EOL while scanning string literal
```

This outputs the message "SyntaxError: EOL while scanning string literal". "EOL" stands for "end of line". The error message also indicates that the error happens on the first line. The error occurred because a quotation mark was missing at the end of the string on the first line. You can fix it by adding that quotation mark.

**Note:** You will sometimes encounter the error label "IndentationError" instead of "SyntaxError". "IndentationError" is a subclass of "SyntaxError" that occurs when the indentation used with a line of code is not syntactically correct.

### **Logic errors** 

A **[[logic error]]** is an error that results when the logic used in code produces unintended results.  Logic errors may not produce error messages. In other words, the code will not do what you expect it to do, but it is still valid to the interpreter. 

For example, using the wrong logical operator, such as a greater than or equal to sign (>=) instead of greater than sign (>) can result in a logic error.  Python will not evaluate a condition as you intended. However, the code is valid, so it will run without an error message. 

The following example outputs a message related to whether or not a user has reached a maximum number of five login attempts. The condition in the if statement should be login_attempts > 5, but it is written as login_attempts >= 5.  A value of 5 has been assigned to login_attempts so that you can explore what it outputs in that instance:

```python
login_attempts = 5

if login_attempts >= 5:
    print("User has not reached maximum number of login attempts.")
else:
    print("User has reached maximum number of login attempts.")
```
Output:
```
User has not reached maximum number of login attempts.
```

The output displays the message "User has not reached maximum number of login attempts." However, this is not true since the maximum number of login attempts is five. This is a logic error.

Logic errors can also result when you assign the wrong value in a condition or when a mistake with indentation means that a line of code executes in a way that was not planned.

### **Exceptions**

An **exception** is an error that involves code that cannot be executed even though it is syntactically correct. This happens for a variety of reasons.

One common cause of an exception is when the code includes a variable that hasn't been assigned or a function that hasn't been defined. In this case, your output will include "NameError" to indicate that this is a name error. After you run the following code, use the error message to determine which variable was not assigned:

```python
username = "elarson"
month = "March"
total_logins = 75
failed_logins = 18

print("Login report for", username, "in", month)
print("Total logins:", total_logins)
print("Failed logins:", failed_logins)
print("Unusual logins:", unusual_logins)
```
Output:
```
Error on line 8:
    print("Unusual logins:", unusual_logins)
NameError: name 'unusual_logins' is not defined
```

The output indicates there is a "NameError" involving the unusual_logins variable. You can fix this by assigning this variable a value.

In addition to name errors, the following messages are output for other types of exceptions:
	- "IndexError": An index error occurs when you place an index in bracket notation that does not exist in the sequence being referenced. For example, in the list `usernames = ["bmoreno", "tshah", "elarson"]`, the indices are 0, 1, and 2. If you referenced this list with the statement `print(usernames[3])`, this would result in an index error.
	- "TypeError": A type error results from using the wrong data type. For example, if you tried to perform a mathematical calculation by adding a string value to an integer, you would get a type error.
	- "FileNotFound": A file not found error occurs when you try to open a file that does not exist in the specified location.
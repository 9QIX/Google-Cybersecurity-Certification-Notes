# Use parameters in functions

- **Introduction and Recap:**
	- The passage starts by revisiting the definition and execution of the first function, emphasizing that it didn't require external information. However, it sets the stage for discussing parameters in functions, highlighting the potential need for functions to accept external information.
- **Parameters in Functions:**
	- **[[Parameters]]** in Python functions are introduced as objects included in a function definition for internal use. They are accepted through the parentheses after the function name.
	- The example of the `range(start, stop)` function is revisited, emphasizing its use of parameters for start and stop indices.
- **Enhancing a Welcome Message Function:**
	- The need for personalized welcome messages is introduced. A new function, greet_employee(), is defined with a parameter for the employee's name.
	- The syntax involves placing the name parameter inside the parentheses. The function is designed to print a welcome message using the provided name.
- **Handling Variables in Print Statements:**
	- Considerations for incorporating the name variable into the print statement are discussed. A comma is used after "You're logged in," and the name variable is added. Since it's a variable, it's not placed in quotation marks.
- **Calling the Function with Arguments:**
	- The process of calling the `greet_employee()` function with a specific argument (Charley Patel) is explained. This is highlighted as an example of an **[[argument]]**, emphasizing that it is the data brought into a function when called.
- **Multiple Parameters in a Function:**
	- The concept of having more than one parameter in a function is introduced. An example is explored where parameters for first name and last name are included. Both parameters are separated by a comma when defining the function and are included as arguments when calling it.
- **Conclusion and Acknowledgment:**
	- The passage concludes by acknowledging the successful exploration of working with parameters in a function. The understanding gained is emphasized as crucial for continuing to write Python scripts. The reader is commended for their efforts in the learning process.

# Return statements

- **Introduction to Return Statements:**
	- The passage builds on previous knowledge of passing arguments into a function by introducing the concept of return statements. Return statements allow functions not only to receive information but also to send information back to the function call.
- **Purpose and Usefulness of [[Return]] Statements:**
	- The utility of return statements in providing information back from a function is emphasized. It is highlighted that this capability is beneficial for a security analyst in scenarios such as checking file access permissions and returning Boolean values.
- **Example Function - Analyzing Login Attempts:**
	- An example function is introduced, focusing on analyzing login attempts. The function, named `calculate_fails()`, takes in parameters related to total login attempts and failed attempts. It computes the percentage of failed attempts and uses a return statement to send this information back.
- **Defining the Function:**
	- The process of defining the `calculate_fails()` function is explained. Parameters for total attempts and failed attempts are set, and the function computes the fail percentage by dividing failed attempts by total attempts.
- **Using the Return Statement:**
	- The use of the return keyword is introduced. After calculating the fail percentage, the return statement is employed to send this information back from the function.
- **Calling the Function and Assigning the Returned Value:**
	- The function is called with specific arguments (4 and 2), and the returned percentage is assigned to a variable called `percentage`. This variable can then be used in additional code outside the function.
- **Utilizing the Returned Value in Additional Code:**
	- An example is provided where the returned percentage is used in a conditional statement. If the percentage of failed attempts is greater than or equal to 50 percent, a message of "Account locked" is printed.
- **Demonstration of the Code Execution:**
	- The code is executed, demonstrating that the returned percentage isn't directly printed to the screen but is instead used in subsequent code to trigger the "Account locked" message.
- **Preview of Future Topics:**
	- The passage concludes by teasing upcoming discussions on built-in functions in Python, offering a glimpse into more ready-to-use functions in the language.

# Functions and variables

Previously, you focused on working with multiple parameters and arguments in functions and returning information from functions. In this reading, you’ll review these concepts. You'll also be introduced to a new concept: global and local variables.

## Working with variables in functions

Working with variables in functions requires an understanding of both parameters and arguments. The terms parameters and arguments have distinct uses when referring to variables in a function. Additionally, if you want the function to return output, you should be familiar with return statements.

### Parameters

A **[[parameter]]** is an object that is included in a function definition for use in that function. When you define a function, you create variables in the function header. They can then be used in the body of the function. In this context, these variables are called parameters.  For example, consider the following function:

```python
def remaining_login_attempts(maximum_attempts, total_attempts):
    print(maximum_attempts - total_attempts)
```

This function takes in two variables, `maximum_attempts` and `total_attempts` and uses them to perform a calculation. In this example, `maximum_attempts` and `total_attempts` are parameters.

### Arguments

In Python, an **[[argument]]** is the data brought into a function when it is called. When calling `remaining_login_attempts` in the following example, the integers 3 and 2 are considered arguments:

`remaining_login_attempts(3, 2)`

These integers pass into the function through the parameters that were identified when defining the function. In this case, those parameters would be maximum_attempts and total_attempts. 3 is in the first position, so it passes into maximum_attempts. Similarly, 2 is in the second position and passes into total_attempts.

### Return statements

When defining functions in Python, you use return statements if you want the function to return output. The return keyword is used to return information from a function.

The return keyword appears in front of the information that you want to return. In the following example, it is before the calculation of how many login attempts remain:

```python
def remaining_login_attempts(maximum_attempts, total_attempts):
    return maximum_attempts - total_attempts
```

**Note:** The return keyword is not a function, so you should not place parentheses after it.

Return statements are useful when you want to store what a function returns inside of a variable to use elsewhere in the code. For example, you might use this variable for calculations or within conditional statements. In the following example, the information returned from the call to remaining_login_attempts is stored in a variable called remaining_attempts. Then, this variable is used in a conditional that prints a "Your account is locked" message when remaining_attempts is less than or equal to 0. You can run this code to explore its output:

```python
def remaining_login_attempts(maximum_attempts, total_attempts):
    return maximum_attempts - total_attempts

remaining_attempts = remaining_login_attempts(3, 3)

if remaining_attempts <= 0:
    print("Your account is locked")
```
Output:
```python
Your account is locked
```

In this example, the message prints because the calculation in the function results in 0.

**Note:** When Python encounters a return statement, it executes this statement and then exits the function. If there are lines of code that follow the return statement within the function, they will not be run. The previous example didn't contain any lines of code after the return statement, but this might apply in other functions, such as one containing a conditional statement.

## Global and local variables

To better understand how functions interact with variables, you should know the difference between global and local variables. 

When defining and calling functions, you're working with local variables, which are different from the variables you define outside the scope of a function.

### Global variables

A **[[global variable]]** is a variable that is available through the entire program. Global variables are assigned outside of a function definition. Whenever that variable is called, whether inside or outside a function, it will return the value it is assigned.

For example, you might assign the following variable at the beginning of your code:

`device_id = "7ad2130bd"`

Throughout the rest of your code, you will be able to access and modify the device_id variable in conditionals, loops, functions, and other syntax.

### Local variables

A **[[local variable]]** is a variable assigned within a function. These variables cannot be called or accessed outside of the body of a function. Local variables include parameters as well as other variables assigned within a function definition.

In the following function definition, total_string and name are local variables:

```python
def greet_employee(name):
    total_string = "Welcome" + name
    return total_string
```

The variable total_string is a local variable because it's assigned inside of the function. The parameter name is a local variable because it is also created when the function is defined.

Whenever you call a function, Python creates these variables temporarily while the function is running and deletes them from memory after the function stops running.

This means that if you call the greet_employee() function with an argument and then use the total_string variable outside of this function, you'll get an error.

### Best practices for global and local variables

When working with variables and functions, it is very important to make sure that you only use a certain variable name once, even if one is defined globally and the other is defined locally. 

When using global variables inside functions, functions can access the values of a global variable. You can run the following example to explore this:

```python
username = "elarson"

def identify_user():
    print(username)

identify_user()
```
Output:
```python
elarson
```

The code block returns "elarson" even though that name isn't defined locally. The function accesses the global variable. If you wanted the identify_user() function to accommodate other usernames, you would have to reassign the global username variable outside of the function. This isn't good practice. A better way to pass different values into a function is to use a parameter instead of a global variable.

There's something else to consider too. If you reuse the name of a global variable within a function, it will create a new local variable with that name. In other words, there will be both a global variable with that name and a local variable with that name, and they'll have different values. You can consider the following code block:

```python
username = "elarson"

print("1:" + username)

def greet():
    username = "bmoreno"
    print("2:" + username)

greet()

print("3:" + username)
```
Output:
```python
1:elarson
2:bmoreno
3:elarson
```

The first print statement occurs before the function, and Python returns the value of the global username variable, "elarson". The second print statement is within the function, and it returns the value of the local username variable, which is "bmoreno". But this doesn't change the value of the global variable, and when username is printed a third time after the function call, it's still "elarson".

Due to this complexity, it's best to avoid combining global and local variables within functions.

## Key takeaways

Working with variables in functions requires understanding various concepts. A parameter is an object that is included in a function definition for use in that function, an argument is the data brought into a function when it is called, and the return keyword is used to return information from a function. Additionally, global variables are variables accessible throughout the program, and local variables are parameters and variables assigned within a function that aren't usable outside of a function. It's important to make sure your variables all have distinct names, even if one is a local variable and the other is a global variable.

# Explore built-in functions

- **Introduction to [[Built-in Functions]]:**
	- The passage explores Python's built-in functions, emphasizing that these functions exist within Python and can be called directly. The primary task is to invoke them by name.
	- **Review of Print() and Type() Functions:**
		- A quick review of the print() and type() functions is provided. The `print()` function outputs a specified object to the screen, while the `type()` function returns the data type of its input.
- **Combining Built-in Functions:**
	- The concept of combining built-in functions is introduced, explaining that multiple functions can be used together by passing one function into another as an argument. The inner function processes first, and its returned value is then passed to the outer function.
- **Understanding Input and Output of Functions:**
	- The importance of understanding the expected inputs and outputs of functions is emphasized. Some functions only accept specific data types, and a type error may occur if the wrong one is used.
- **Examples with Print() Function:**
	- The [[print()]] function is explored as an example, demonstrating its flexibility in accepting various data types and any number of parameters, even with different data types.
- **Examples with Type() Function:**
	- The [[type()]] function is examined, highlighting that it accepts all data types but only one parameter. Examples are provided where the data type of a string and a float value is determined and passed into a print() function.
- **Introduction of New Built-in Functions:**
	- Two new built-in functions are introduced: max() and sorted(). The max() function returns the largest numeric input, and the sorted() function sorts the components of a list.
- **Exploration of Max() Function:**
	- The [[max()]] function is explored by passing three variables as arguments. The highest value among them is determined and printed to the screen.
- **Exploration of Sorted() Function:**
	- The [[sorted()]] function is explained, highlighting its utility in sorting lists. An example is provided where a list of usernames is sorted alphabetically using the sorted() function.
- **Conclusion and Encouragement:**
	- The passage concludes by acknowledging that these are just a few of the available built-in functions. As the reader works more in Python, they are encouraged to become familiar with others that can enhance their programming capabilities.
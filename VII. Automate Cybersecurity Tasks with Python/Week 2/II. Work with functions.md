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

A **parameter** is an object that is included in a function definition for use in that function. When you define a function, you create variables in the function header. They can then be used in the body of the function. In this context, these variables are called parameters.  For example, consider the following function:

def remaining_login_attempts(maximum_attempts, total_attempts):

    print(maximum_attempts - total_attempts)

This function takes in two variables, maximum_attempts and total_attempts and uses them to perform a calculation. In this example, maximum_attempts and total_attempts are parameters.

### Arguments

In Python, an **argument** is the data brought into a function when it is called. When calling remaining_login_attempts in the following example, the integers 3 and 2 are considered arguments:

remaining_login_attempts(3, 2)

These integers pass into the function through the parameters that were identified when defining the function. In this case, those parameters would be maximum_attempts and total_attempts. 3 is in the first position, so it passes into maximum_attempts. Similarly, 2 is in the second position and passes into total_attempts.

### Return statements

When defining functions in Python, you use return statements if you want the function to return output. The return keyword is used to return information from a function.

The return keyword appears in front of the information that you want to return. In the following example, it is before the calculation of how many login attempts remain:

def remaining_login_attempts(maximum_attempts, total_attempts):

    return maximum_attempts - total_attempts

**Note:** The return keyword is not a function, so you should not place parentheses after it.

Return statements are useful when you want to store what a function returns inside of a variable to use elsewhere in the code. For example, you might use this variable for calculations or within conditional statements. In the following example, the information returned from the call to remaining_login_attempts is stored in a variable called remaining_attempts. Then, this variable is used in a conditional that prints a "Your account is locked" message when remaining_attempts is less than or equal to 0. You can run this code to explore its output:
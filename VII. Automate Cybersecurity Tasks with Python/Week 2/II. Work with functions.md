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
- **Purpose and Usefulness of Return Statements:**
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
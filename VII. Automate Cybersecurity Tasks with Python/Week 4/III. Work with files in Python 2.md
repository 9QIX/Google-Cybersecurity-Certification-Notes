# Develop a parsing algorithm in Python

- **Objective:** The passage guides through the process of creating a Python program to detect suspicious login attempts by parsing a log file. The objective is to develop an algorithm that checks if a user, upon logging in, has three or more failed login attempts based on a log file containing usernames.
- **Structuring Inputs:** The structure of the inputs involves a log file in .txt format, where each line represents a failed login attempt with a username. The program is designed to check the number of occurrences of the user's username in the log file. If the count is three or more, an alert is triggered.
- **Code Implementation Steps:**
	1. Import the log file, split it, and store it in the `usernames` variable.
	2. Develop a strategy for counting username occurrences using a for loop and a counter variable.
	3. Create the `login_check()` function, which takes a `login_list` (list of failed login attempts) and `current_user` (user attempting to log in) as parameters.
	4.  Within the function, initialize a counter variable and use a for loop to iterate through the login list.
	5. Use an if statement to check if the loop variable is equal to the current user. If true, increment the counter by 1.
	6. Implement a final if-else statement to print an alert if the counter is three or more, indicating an account lock.
- **Code Execution Example:**
	- Test the `login_check()` function with an example username, demonstrating that users with fewer than three failed login attempts can log in while users with three or more failed attempts trigger an "account locked" message.
- **Closing Message:** The passage concludes by acknowledging the development of a security algorithm for log analysis. It emphasizes future learning opportunities to enhance the algorithm's efficiency and recaps the covered topics, from list operations to algorithm development and file parsing, within the context of security.

## Conclusion

- Python has functions and syntax that help you import and parse text files.
	- The `with` statement allows you to efficiently handle files.
	- The `open()` function allows you to import or open a file. It takes in the name of the file as the first parameter and a string that indicates the purpose of opening the file as the second parameter.
		-  Specify `"r"` as the second parameter if you're opening the file for reading purposes.
		- Specify `"w"` as the second parameter if you're opening the file for writing purposes.
  - The `.read()` method allows you to read in a file. 
  - The `.write()` method allows you to append or write to a file.
- You can use a `for` loop to iterate over a list.
- You can use an `if` statement to check if a given value is in a list and execute a specific action if so.
- You can use the `.split()` method to convert a string to a list.
- You can use Python to compare contents of a text file against elements of a list.
- Algorithms can be incorporated into functions. When defining a function, you must specify the parameters it takes in and the actions it should execute.
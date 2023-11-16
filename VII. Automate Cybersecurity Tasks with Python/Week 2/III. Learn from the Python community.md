# Modules and libraries

- **Introduction to Built-in Functions and Libraries:**
	- The passage starts by revisiting the concept of built-in functions in Python, which are standard functions like print(), type(), and max(). It introduces the idea that additional pre-built functions can be accessed by importing libraries.
- **Libraries and Modules:**
	- **[[Libraries]]** are defined as collections of modules providing code that users can incorporate into their programs. 
	- **[[Modules]]**, in turn, are described as Python files containing functions, variables, classes, and runnable code. They are likened to saved Python files containing useful functionality, ranging from simple lines of code to complex and lengthy components.
	- A module is a Python file that contains additional functions, variables, and other kinds of runnable code. A Python library is a collection of modules.
- **[[Python Standard Library]]:**
	- The focus shifts to the Python Standard Library, characterized as an extensive collection of usable Python code often bundled with Python installations. 
		- Examples of modules from the Python Standard Library are highlighted, including the re module for pattern searching in log files, csv for efficient CSV file handling, glob and os for command line interaction, and time and datetime for timestamp operations.
		1. **`re` (Regular Expressions):**
			 - **Purpose:** Used for working with regular expressions, which are powerful tools for pattern matching in strings.
			 - **Example:** You can use `re` to search, match, and manipulate strings based on specific patterns.
		2. **`csv` (Comma-Separated Values):**
			 - **Purpose:** Provides functionality for reading from and writing to CSV files, a common format for storing tabular data.
			 - **Example:** You can use `csv` to easily handle data in a spreadsheet-like format.
		3. **`glob`:**
			 - **Purpose:** Helps find all pathnames matching a specified pattern according to the rules used by the Unix shell.
			 - **Example:** Useful for working with files and directories, especially when you want to match multiple files based on a pattern.
		4. **`os` (Operating System Interface):**
			 - **Purpose:** Offers a way to interact with the operating system, providing functions for file and directory operations, process control, and more.
			 - **Example:** You can use `os` to perform tasks like navigating directories, checking file existence, and running system commands.
		5. **`time`:**
			 - **Purpose:** Provides various time-related functions, allowing you to measure time intervals, work with time representations, and create delays.
			 - **Example:** You might use `time` to measure the execution time of a piece of code or introduce delays in your program.
		6. **`datetime`:**
			 - **Purpose:** Offers classes for working with dates and times in a more versatile and object-oriented manner than the `time` module.
			 - **Example:** You can use `datetime` to represent and manipulate dates and times, calculate time differences, and format dates for display.
- **External Libraries:**
	- The passage introduces the concept of external libraries, which can be downloaded and used in addition to the Python Standard Library. Examples such as **Beautiful Soup** for parsing HTML website files and **NumPy** for arrays and mathematical computations are provided. These external libraries are emphasized for their relevance to security analysts in tasks like network traffic analysis, log file parsing, and complex math.
- **Utility of Libraries and Modules:**
	- Python libraries and modules are highlighted as valuable resources that provide pre-programmed functions and variables, ultimately saving time for the user. The reader is encouraged to explore the discussed libraries and modules to understand their potential applications in Python programming, particularly in the context of security analysis.
- **Encouragement to Explore:**
	- The passage concludes by encouraging the reader to explore the discussed libraries and modules, emphasizing the ways in which they can be helpful in Python programming. This exploration is positioned as a means to enhance efficiency and productivity in working with Python.

# Import modules and libraries in Python

Previously, you explored libraries and modules. You learned that a **module** is a Python file that contains additional functions, variables, classes, and any kind of runnable code. You also learned that a **library** is a collection of modules that provide code users can access in their programs. You were introduced to a few modules in the Python Standard Library and a couple of external libraries. In this reading, you'll learn how to import a module that exists in the Python Standard Library and use its functions. You'll also expand your understanding of external libraries. 

## The Python Standard Library

The **[[Python Standard Library]]** is an extensive collection of Python code that often comes packaged with Python. It includes a variety of modules, each with pre-built code centered around a particular type of task. 

For example, you were previously introduced to the the following modules in the Python Standard Library:

- The `re` module, which provides functions used for searching for patterns in log files
- The `csv` module, which provides functions used when working with .csv files
- The `glob` and `os` modules, which provide functions used when interacting with the command line
- The `time` and `datetime` modules, which provide functions used when working with timestamps

Another Python Standard Library module is `statistics`. The `statistics` module includes functions used when calculating `statistics` related to numeric data. For example, `mean()` is a function in the statistics module that takes numeric data as input and calculates its mean (or average). Additionally, `median()` is a function in the `statistics` module that takes numeric data as input and calculates its median (or middle value).

## How to import modules from the Python Standard Library

To access modules from the Python Standard Library, you need to import them. You can choose to either import a full module or to only import specific functions from a module. 

### **Importing an entire module**

To import an entire Python Standard Library module, you use the import keyword. The import keyword searches for a module or library in a system and adds it to the local Python environment. After import, specify the name of the module to import. For example, you can specify import statistics to import the statistics module. This will import all the functions inside of the statistics module for use later in your code.

As an example, you might want to use the mean() function from the statistics module to calculate the average number of failed login attempts per month for a particular user. In the following code block, the total number of failed login attempts for each of the twelve months is stored in a list called monthly_failed_attempts. Run this code and analyze how mean() can be used to calculate the average of these monthly failed login totals and store it in mean_failed_attempts:

```python
import statistics

monthly_failed_attempts = [20, 17, 178, 33, 15, 21, 19, 29, 32, 15, 25, 19]

mean_failed_attempts = statistics.mean(monthly_failed_attempts)
print("mean:", mean_failed_attempts)
```
Output:
```python
mean: 35.25
```

The output returns a mean of 35.25. You might notice the outlying value of 178 and want to find the middle value as well. To do this through the median() function, you can use the following code:

```python
import statistics

monthly_failed_attempts = [20, 17, 178, 33, 15, 21, 19, 29, 32, 15, 25, 19]

median_failed_attempts = statistics.median(monthly_failed_attempts)
print("median:", median_failed_attempts)
```
Output:
```python
median: 20.5
```

This gives you the value of 20.5, which might also be useful for analyzing the user's failed login attempt statistics.

**Note:** When importing an entire Python Standard Library module, you need to identify the name of the module with the function when you call it. You can do this by placing the module name followed by a period (.) before the function name. For example, the previous code blocks use statistics.mean() and statistics.median() to call those functions. 

### **Importing specific functions from a module**

To import a specific function from the Python Standard Library, you can use the from keyword. For example, if you want to import just the median() function from the statistics module, you can write from statistics import median.

To import multiple functions from a module, you can separate the functions you want to import with a comma. For instance, from statistics import mean, median imports both the mean() and the median() functions from the statistics module.

An important detail to note is that if you import specific functions from a module, you no longer have to specify the name of the module before those functions. You can examine this in the following code, which specifically imports only the median() and the mean() functions from the statistics module and performs the same calculations as the previous examples:

```python
from statistics import mean, median

monthly_failed_attempts = [20, 17, 178, 33, 15, 21, 19, 29, 32, 15, 25, 19]

mean_failed_attempts = mean(monthly_failed_attempts)
print("mean:", mean_failed_attempts)

median_failed_attempts = median(monthly_failed_attempts)
print("median:", median_failed_attempts)
```
Output:
```python
mean: 35.25 median: 20.5
```

It is no longer necessary to specify statistics.mean() or statistics.median() and instead the code incorporates these functions as mean() and median().

## External libraries

In addition to the Python Standard Library, you can also download external libraries and incorporate them into your Python code. For example, previously you were introduced to Beautiful Soup (bs4) for parsing HTML files and NumPy (numpy) for arrays and mathematical computations. Before using them in a Jupyter Notebook or a Google Colab environment, you need to install them first.

To install a library, such as numpy, in either environment, you can run the following line prior to importing the library:

`%pip install numpy`

This installs the library so you can use it in your notebook.

After a library is installed, you can import it directly into Python using the import keyword in a similar way to how you used it to import modules from the Python Standard Library. For example, after the numpy install, you can use this code to import it:

`import numpy`

## Key takeaways

The Python Standard Library contains many modules that you can import, including re, csv, os, glob, time, datetime, and statistics. To import these modules, you must use the import keyword. Syntax varies depending on whether or not you want to import the entire module or just specific functions from it. External libraries can also be imported into Python, but they need to be installed first.

# Code readability

- **Introduction to Style Guides:**
	- The passage begins by highlighting the readability of Python and the presence of style guides in the Python community. Style guides are explained as manuals that provide guidelines for writing, formatting, and designing documents, specifically aimed at promoting clean and consistent code.
- **PEP 8 Style Guide:**
	- The focus shifts to the PEP 8 style guide, which stands for Python Enhancement Proposals. PEP 8 offers stylistic guidelines for Python programmers, providing suggestions related to syntax. While not mandatory, these suggestions aim to ensure consistency among programmers and enhance code understanding.
- **Importance of Code Readability:**
	- The passage emphasizes the importance of code readability based on the principle that code is read more often than it's written. PEP 8 is positioned as a valuable resource for anyone seeking to style and format their Python code consistently with others.
- **Comments in Code:**
	- PEP 8's recommendations regarding comments are discussed. Comments are defined as notes programmers make about the intention behind their code, providing clarity on what the code is doing and why. The importance of keeping comments clear and up-to-date is highlighted through examples.
- **Example of Code with and Without Comments:**
	- An example is presented to illustrate the impact of comments on code understanding. The importance of comments becomes evident, as they help readers quickly comprehend the program's functionality and variables.
- **Indentation for Readability:**
	- The next topic is the significance of indentation for code readability. Indentation is described as spaces added at the beginning of a line of code, enhancing readability and ensuring proper code execution. Examples demonstrate how indentation is crucial, especially in conditional statements, to establish connections and avoid unintended execution.
- **PEP 8's Recommendation on Indentation:**
	- PEP 8's recommendation of using four spaces for indentation is mentioned. The passage explains that proper indentation is essential for grouping lines of code and ensuring they are executed as intended.
- **Personal Experience and Importance of Style Guides:**
	- The narrator shares a personal experience from their first engineering job, highlighting the challenges faced when working with code that lacked a consistent style guide. The importance of adhering to coding style guides is emphasized, particularly for security professionals, to ensure readable and scalable code.
- **Conclusion and Future Developments:**
	- The passage concludes by reinforcing the importance of adhering to coding style guides for organizations and security professionals. The ability to write readable code is highlighted as a key aspect as the course progresses, indicating a focus on developing effective code practices for better readability.
# Data types in Python

- **Analogy to Categorizing Ingredients:** The analogy of categorizing ingredients in a kitchen was used to introduce the concept of data types in Python. Just as ingredients are categorized to affect how they are handled in cooking, data types categorize different types of data items in Python.
- **[[Data Type]]**: Category for a particular type of data item.
	- **[[String Data Type]]:** Strings represent ordered sequences of characters. They can include letters, symbols, spaces, and numbers, but numbers within strings cannot be used for calculations. All characters in a string must be enclosed in quotation marks.
	- **[[Numeric Data Types (Float and Integer)]]:** Numeric data includes floats (numbers with a decimal point) and integers (whole numbers without a decimal point). Numeric data types are used for mathematical operations, and Python supports operations like addition, subtraction, multiplication, and division.
	- **[[Boolean Data Type]]:** Boolean data can only have one of two values: True or False. Booleans are used for logical operations in programs. Examples include comparing numbers to determine if one is less than or greater than another.
	- **[[List Data Type]]:** Lists are data structures that consist of a collection of data in sequential form. Lists are enclosed in square brackets and can include various data types. They are versatile and can be accessed and modified as you advance in Python skills.
- **Printing Output:** The `print` function was used to output results to the screen. It can be used with strings, floats, integers, Booleans, and lists.
- **Importance of Syntax:** The importance of adhering to Python's syntax rules, such as using quotation marks for strings and correct formatting for lists, was highlighted.

Understanding these data types is fundamental to working with Python, and as you progress, you'll encounter more complex data structures and types that enhance your ability to solve diverse programming problems. In the upcoming sections, you'll further build on these concepts and apply them in practical scenarios.

# More about data types

Previously, you explored data types in Python. A **[[data type]]** is a category for a particular type of data item. You focused on string, list, float, integer, and Boolean data. These are the data types you'll work with in this course. This reading will expand on these data types. It will also introduce three additional types.

## String

In Python, **[[string data]]** is data consisting of an ordered sequence of characters. Characters in a string may include letters, numbers, symbols, and spaces. These characters must be placed within quotation marks. These are all valid strings:

- `"updates needed"`
- `"20%"`
- `"5.0"`
- `"35"`
- `"**/**/**"`  
- `""`

**Note:** The last item (`""`), which doesn't contain anything within the quotation marks, is called an empty string.

You can use the `print()` function to display a string. You can explore this by running this code:

```python
print("updates needed")
```
Output
```python
updates needed
```

The code prints "updates needed".

You can place strings in either double quotation marks (`""`) or single quotation marks (`''`). The following code demonstrates that the same message prints when the string is in single quotation marks:

```python
print('updates needed')
```
Output
```python
updates needed
```

**Note:** Choosing one type of quotation marks and using it consistently makes it easier to read your code. This course uses double quotation marks.

## List

In Python, **[[list data]]** is a data structure that consists of a collection of data in sequential form. Lists elements can be of any data type, such as strings, integers, Booleans, or even other lists. The elements of a list are placed within square brackets, and each element is separated by a comma. The following lists contains elements of various data types:

- `[12, 36, 54, 1, 7]`
- `["eraab", "arusso", "drosas"]`
- `[True, False, True, True]`
- `[15, "approved", True, 45.5, False]`
- `[]`

**Note:** The last item `[]`, which doesn't contain anything within the brackets, is called an empty list.

You can also use the `print()` function to display a list:

```python
print([12, 36, 54, 1, 7])
```
Output
```python
[12, 36, 54, 1, 7]
```

This displays a list containing the integers `12`, `36`, `54`, `1`, and `7`.

### **Integer**

In Python, **[[integer data]]** is data consisting of a number that does not include a decimal point. These are all examples of integer data:

- `-100 `
- `-12`
- `-1`
- `0`
- `1`
- `20`
- `500 `

Integers are not placed in quotation marks. You can use the `print()` function to display an integer. When you run this code, it displays `5`:

```python
print(5)
```
Output:
```python
5
```

You can also use the `print()` function to perform mathematical operations with integers. For example, this code adds two integers:

```python
print(5 + 2)
```
Output:
```python
7
```

The result is `7`. You can also subtract, multiply, or divide two integers.

## Float

**[[Float data]]** is data consisting of a number with a decimal point. All of the following are examples of float data: 

- `-2.2`
- `-1.34`
- `0.0`
- `0.34` 

Just like integer data, float data is not placed in quotation marks. In addition, you can also use the `print()` function to display float data or to perform mathematical calculations with float data. You can run the following code to review the result of this calculation:

```python
print(1.2 + 2.8)
```
Output:
```python
4.0
```

The output is `4.0`.

**Note:** Dividing two integer values or two float values results in float output when you use the symbol `/`:

```python
print(1/4)
print(1.0/4.0)
```
Output:
```python
0.25
0.25
```

The output of both calculations is the float value of `.25`.  

If you want to return a whole number from a calculation, you must use the symbol `//` instead:

```python
print(1//4)
print(1.0//4.0)
```
Output:
```python
0
0.0
```

It will round down to the nearest whole number. In the case of `print(1//4)`, the output is the integer value of 0 because using this symbol rounds down the calculation from `.25` to the nearest whole number. In the case of `print(1.0//4.0)`, the output is the float value of `0.0` because it maintains the float data type of the values in the calculation while also rounding down to the nearest whole number.

## Boolean 

**[[Boolean data]]** is data that can only be one of two values: either `True` or `False`.

You should not place Boolean values in quotation marks. When you run the following code, it displays the Boolean value of `True`:

```python
print(True)
```
Output:
```python
True
```

You can also return a Boolean value by comparing numbers. Because `9` is not greater than `10`, this code evaluates to `False`:

```python
print(9 > 10)
```
Output:
```python
False
```

## Additional data types

In this course, you will work with the string, list, integer, float and Boolean data types, but there are other data types. These additional data types include tuple data, dictionary data, and set data.

### **Tuple**

**[[Tuple data]]** is a data structure that consists of a collection of data that cannot be changed. Like lists, tuples can contain elements of varying data types.

A difference between tuple data and list data is that it is possible to change the elements in a list, but it is not possible to change the elements in a tuple. This could be useful in a cybersecurity context. For example, if software identifiers are stored in a tuple to ensure that they will not be altered, this can provide assurance that an access control list will only block the intended software.

The syntax of a tuple is also different from the syntax of a list. A tuple is placed in parentheses rather than brackets. These are all examples of the tuple data type:

- `("wjaffrey", "arutley", "dkot")`
- `(46, 2, 13, 2, 8, 0, 0)`
- `(True, False, True, True)`
- `("wjaffrey", 13, True)`

**Pro tip:** Tuples are more memory efficient than lists, so they are useful when you are working with a large quantity of data.

### **Dictionary**

**[[Dictionary data]]** is data that consists of one or more key-value pairs. Each key is mapped to a value. A colon (`:`) is placed between the key and value. Commas separate key-value pairs from other key-value pairs, and the dictionary is placed within curly brackets (`{}`). 

Dictionaries are useful when you want to store and retrieve data in a predictable way. For example, the following dictionary maps a building name to a number. The building name is the value, and the number is the key. A colon is placed after the key.

```
{ 1: "East",

  2: "West",

  3: "North",

  4: "South" }
```

### **Set**

In Python, **[[set data]]** is data that consists of an unordered collection of unique values. This means no two values in a set can be the same. 

Elements in a set are always placed within curly brackets and are separated by a comma. These elements can be of any data type. This example of a set contains strings of usernames:

`{"jlanksy", "drosas", "nmason"}`

## Key takeaways

It's important for security analysts who program in Python to be familiar with various Python data types. The data types that you will work with in this course are string, list, integer, float and Boolean. Additional data types include tuple, dictionary, and set. Each data type has its own purpose and own syntax.

# Work with variables in Python

- **Analogy to Kitchen Storage Containers:** The analogy of storage containers in the kitchen was used to introduce the concept of variables in Python. **[[Variable]]** act as containers that store data, similar to how storage containers in the kitchen can hold various ingredients.
- **Creating Variables (Assignment):** To create a variable, you need to provide a name for it, followed by an equals sign, and then the object (data) you want to store in it. This process is called assignment.
- **Variable Naming:** Best practices for naming variables include making names relevant to their purpose. For example, a variable storing a device ID might be named `device_ID`.
- **Using Variables in Code:** Variables are created to be used later in the code. Calling a variable involves typing its name, instructing Python to use the object stored in the variable.
- **Printing Variables:** The `print` function is used to output the value stored in a variable. When using a variable in the `print` function, you don't use quotation marks.
- **Data Types of Variables:** Variables have a data type based on the type of object they currently store. Common data types include string, integer, float, Boolean, and list.
- **Type Function:** The `type` function is used to determine the data type of a variable. It returns the data type as a result.
- **[[Type Error]]:** Type errors occur when there is an attempt to perform an operation with incompatible data types. For instance, adding a string to a number can result in a type error.
- **Reassignment of Variables:** After defining a variable, you can change the object it contains through reassignment. Reassigning a variable is similar to assigning it initially.

Understanding how to use variables effectively is crucial in Python programming. As you progress, you'll encounter more complex scenarios where variables play a vital role in storing and manipulating data.

Certainly! Here's the provided text with Python code and guidelines formatted for readability:

# Assign and reassign variables in Python

## What are variables?

In a programming language, a variable is a container that stores data. It's a named storage location in a computer's memory that can hold a value, stored in a particular data type, such as integer, string, or Boolean. The value in a variable can change.

You can think of variables as boxes with labels. Even when you change the contents of a box, the label on the box remains the same. Similarly, when you change the value stored in a variable, the name of the variable remains the same.

Security analysts working in Python will use a variety of variables. Examples include variables for login attempts, allow lists, and addresses.

**Working with Variables**

In Python, it's important to know both how to assign variables and how to reassign them.

**Assigning and Reassigning Variables**

If you want to create a variable called `username` and assign it a value of "nzhao," place the variable to the left of the equals sign and its value to the right:

```python
# Assign 'username'
username = "nzhao"
```

If you later reset this username to "zhao2," you still refer to that variable container as `username`:

```python
# Reassign 'username'
username = "zhao2"
```

Although the contents have changed from "nzhao" to "zhao2," the variable `username` remains the same.

Note: Place "nzhao" and "zhao2" in quotation marks because they're strings. Python automatically assigns a variable its data type when it runs.

**Assigning Variables to Variables**

Using a similar process, you can also assign variables to other variables. In the following example, the variable `username` is assigned to a new variable `old_username`:

```python
# Assign a variable to another variable
username = "nzhao"
old_username = username
```

Because `username` contains the string value of "nzhao," and `old_username` contains the value of `username`, `old_username` now contains a value of "nzhao."

**Putting it Together**

The following code demonstrates how a username can be updated. The `username` variable is assigned an initial value, which is then stored in a second variable called `old_username`. After this, the `username` variable is reassigned a new value.

```python
# Update username
username = "nzhao"
old_username = username
username = "zhao2"

# Display the previous and current username
print("Previous Username:", old_username)
print("Current Username:", username)
```

**Best Practices for Naming Variables**

You can name a variable almost anything you want, but there are a few guidelines you should follow to ensure correct syntax and prevent errors:

- Use only letters, numbers, and underscores in variable names. Valid examples: `date_3`, `username`, `interval2`.
- Start a variable name with a letter or underscore. Do not start it with a number. Valid examples: `time`,  `_login`.
- Remember that variable names in Python are case-sensitive. These are all different variables: `time`, `Time`, `TIME`, `timE`.
- Don't use Python’s built-in keywords or functions for variable names. For example, variables shouldn't be named `True`, `False`, or `if`.

Stylistic Guidelines:

- Separate two or more words with underscores. Valid examples: `login_attempts`, `invalid_user`, `status_update`.
- Avoid variables with similar names. These variables could be easily confused with one another: `start_time`, `starting_time`, `time_starting`.
- Avoid unnecessarily long names for variables. For instance, don't give variables names like `variable_that_equals_3`.
- Names should describe the data and not be random words. Valid examples: `num_login_attempts`, `device_id`, `invalid_usernames`.

Note: Using underscores to separate multiple words in variables is recommended, but another convention that you might encounter is capitalizing the first letter of each word except the first word. Example: `loginAttempt`.

**Key Takeaways**

It's important for security analysts to have a fundamental understanding of variables. Variables are containers of data. They are assigned values and can also be reassigned other values or variables. It's helpful to remember the best practices for naming variables to create more functional, readable code.
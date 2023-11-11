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


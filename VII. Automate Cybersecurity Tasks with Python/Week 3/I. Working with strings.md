# String operations

- **[[String Data]]:** The passage begins by emphasizing the importance of working with string data in security, particularly when dealing with usernames and login information.
	- **Refresher on Strings:** A quick refresher on strings is provided, defining them as an ordered sequence of characters in Python, written within quotation marks. Examples of strings using double quotation marks are given: "Hello", "123", and "Number 1!"
- **Variables and String Function:** The concept of variables is revisited, demonstrating the variable `my_string` storing the string "security." The introduction of the string function is highlighted, explaining its role in converting other data types, such as integers or floats, into strings. This conversion allows performing tasks specific to strings.
- **Converting Integer to String (`str()`):** The process of converting an integer to a string using the string function is demonstrated. The example involves applying the string function to the integer 123, resulting in the variable `new_string` containing a string with the characters 1, 2, and 3.
- **Basic String Operations:** The passage transitions to basic string operations, starting with the length function. The length function is described as returning the number of elements in an object, particularly useful for determining the length of strings. An example involving IP addresses and their maximum length is provided.
	- **String Length Example (`len()`):** The use of the length function to print the length of the string "Hello" is demonstrated. The length function is nested within the print function to calculate and display the number of characters in the string.
	- **String Concatenation:** **[[String concatenation]]**, achieved through the addition operator (+), is introduced as the process of joining two strings together. An example concatenating "Hello" and "world" is provided. The limitations of certain operators, such as subtraction, for strings are mentioned.
- **String Methods:** The concept of string **[[method]]** is explained as functions belonging to a specific data type, such as strings. It is noted that methods appear after the string and are specific to the data type. The upper and lower methods are introduced as common string methods.
	- **Upper Method Example (`.upper()`):** The upper method, which returns a copy of the string in all uppercase letters, is applied to the string "Hello." The syntax of using methods is highlighted, with the period (dot) separating the string and the method.
	- **Lower Method Example (`.lower()`):** The lower method, returning a copy of the string in all lowercase letters, is demonstrated on the "Hello" string. The need to use a print function to output the results is emphasized.
- **Conclusion:** The passage concludes with the successful execution of the upper and lower methods, showcasing the string "HELLO" in uppercase and "hello" in lowercase, respectively. The reader is now equipped with knowledge about working with string data and performing basic operations in Python.

# String indices and slices

- **Introduction to String Indexing:** Highlights the need to search through strings in security scenarios, such as locating usernames or identifying IP addresses associated with malware. Introduces the concept of the **[[index]]** as a number assigned to each character in a string, indicating its position.
	- **Indexing in Python:** Explains the Python convention of starting indices from 0, using the example of the string "HELLO" where "H" has an index of 0 and "E" has an index of 1. Illustrates how placing an index in square brackets after a string returns the character at that index.
	- **Index 1 Example:** Demonstrates placing the index 1 in square brackets after "HELLO" to retrieve the character "E." Clarifies that an index of 1 corresponds to the second character in the word.
- **Slicing Strings:** Introduces the concept of slicing, allowing the extraction of a larger part of a string by specifying a range of indices. Defines a **[[slice]]** by providing two indices, where the first is the starting index (inclusive) and the second is the ending index (exclusive).
	- **Slice Example:** Provides an example of extracting the letters "E-L-L" from "HELLO" by starting the interval from index 1 and ending before index 4.
- **Using the Index Method (`.index()`):** Introduces the index method for searching in a string, which finds the first occurrence of a specified input and returns its location. Demonstrates using the index method to find the character "E" in the string "HELLO."
	- **Index Method Example:** Illustrates using the index method with the argument "E" and obtaining the result 1, indicating the index of the first occurrence of "E."
	- **Handling Repeated Characters:** Explores an example where a character ("L") repeats multiple times in the string, emphasizing that the index method identifies only the first occurrence.
- **Working with Indices as a Security Analyst:** Relates the use of indices to find specific parts in a string, such as locating the "@" symbol in an email address.
- **Immutable Nature of Strings:** Introduces the concept that strings are **[[immutable]]** in Python, meaning they cannot be changed after creation and assignment. Demonstrates attempting to change a character in the string "HELLO" and encountering an error due to the immutability of strings.
- **Conclusion:** Summarizes the learning outcomes, including the understanding of string indexing, slicing, the index method, and the immutability of strings. Teases upcoming topics, inviting further exploration into list operations.

# Strings and the security analyst

The ability to work with strings is important in the cybersecurity profession. Previously, you were introduced to several ways to work with strings, including functions and methods. You also learned how to extract elements in strings using bracket notation and indices. This reading reviews these concepts and explains more about using the .index() method. It also highlights examples of string data you might encounter in a security setting.

## String data in a security setting

As an analyst, string data is one of the most common data types you will encounter in Python. **String data** is data consisting of an ordered sequence of characters. It's used to store any type of information you don't need to manipulate mathematically (such as through division or subtraction). In a cybersecurity context, this includes IP addresses, usernames, URLs, and employee IDs.

You'll need to work with these strings in a variety of ways. For example, you might extract certain parts of an IP address, or you might verify whether usernames meet required criteria.

## Working with indices in strings

### Indices 

An **index** is a number assigned to every element in a sequence that indicates its position. With strings, this means each character in the string has its own index.

Indices start at 0. For example, you might be working with this string containing a device ID: "h32rb17". The following table indicates the index for each character in this string:

|character|index|
|---|---|
|h|0|
|3|1|
|2|2|
|r|3|
|b|4|
|1|5|
|7|6|

You can also use negative numbers as indices. This is based on their position relative to the last character in the string:

|character|index|
|---|---|
|h|-7|
|3|-6|
|2|-5|
|r|-4|
|b|-3|
|1|-2|
|7|-1|

### Bracket notation

**Bracket notation** refers to the indices placed in square brackets. You can use bracket notation to extract a part of a string. For example, the first character of the device ID might represent a certain characteristic of the device. If you want to extract it, you can use bracket notation for this:

`"h32rb17"[0]`

This device ID might also be stored within a variable called device_id. You can apply the same bracket notation to the variable:

```python
device_id = "h32rb17"
device_id[0]
```

In both cases, bracket notation outputs the character h when this bracket notation is placed inside a print() function. You can observe this by running the following code:

```python
device_id = "h32rb17"

print("h32rb17"[0])
print(device_id[0])
```
Output:
```python
h
h
```

You can also take a slice from a string. When you take a slice from a string, you extract more than one character from it. It's often done in cybersecurity contexts when you’re only interested in a specific part of a string. For example, this might be certain numbers in an IP address or certain parts of a URL.

In the device ID example, you might need the first three characters to determine a particular quality of the device. To do this, you can take a slice of the string using bracket notation. You can run this line of code to observe that it outputs "h32":

```python
print("h32rb17"[0:3])
```
Output:
```python
h32
```

**Note:** The slice starts at the 0 index, but the second index specified after the colon is excluded.  This means the slice ends one position before index 3, which is at index 2.

## String functions and methods

The str() and len() functions are useful for working with strings. You can also apply methods to strings, including the .upper(), .lower(), and .index() methods. A **method** is a function that belongs to a specific data type.

### str() and len()

The str() function converts its input object into a string. As an analyst, you might use this in security logs when working with numerical IDs that aren't going to be used with mathematical processes. Converting an integer to a string gives you the ability to search through it and extract slices from it.

Consider the example of an employee ID 19329302 that you need to convert into a string. You can use the following line of code to convert it into a string and store it in a variable:

`string_id = str(19329302)`

The second function you learned for strings is the len() function, which returns the number of elements in an object.

As an example, if you want to verify that a certain device ID conforms to a standard of containing seven characters, you can use the len() function and a conditional. When you run the following code, it will print a message if "h32rb17" has seven characters:

```python
device_id_length = len("h32rb17")

if device_id_length == 7:
    print("The device ID has 7 characters.")
```
Output:
```python
The device ID has 7 characters.
```

### .upper() and .lower() 

The .upper() method returns a copy of the string with all of its characters in uppercase. For example, you can change this department name to all uppercase by running the code "Information Technology".upper(). It would return the string "INFORMATION TECHNOLOGY".

Meanwhile, the .lower() method returns a copy of the string in all lowercase characters. "Information Technology".lower() would return the string "information technology".

### .index()

The .index() method finds the first occurrence of the input in a string and returns its location. For example, this code uses the .index() method to find the first occurrence of the character "r" in the device ID "h32rb17":

```python
print("h32rb17".index("r"))
```
Output:
```

```
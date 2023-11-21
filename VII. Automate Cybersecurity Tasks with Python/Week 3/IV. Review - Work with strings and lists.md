# Reference guide: Python concepts from module 3

### Python Reference Guide: Module 3 Concepts

#### Built-in Functions

##### `str()`
Converts the input object to a string.
```python
str(10)  # Converts the integer 10 to the string "10"
```
##### `len()`
Returns the number of elements in an object.
```python
print(len("security"))  # Returns and displays 8, the number of characters in the string "security"
```

#### String Methods

##### `.upper()`
Returns a copy of the string in all uppercase letters.
```python
print("Security".upper())  # Returns and displays "SECURITY"
```
##### `.lower()`
Returns a copy of the string in all lowercase letters.
```python
print("Security".lower())  # Returns and displays "security"
```
##### `.index()`
Finds the first occurrence of the input in a string and returns its location.
```python
print("Security".index("c"))  # Finds and displays the index of the first occurrence of "c" as 2
```

#### List Methods

##### `.insert()`
Adds an element in a specific position inside the list.
```python
username_list = ["elarson", "fgarcia", "tshah"]
username_list.insert(2, "wjaffrey")  # Adds "wjaffrey" at index 2; the list becomes ["elarson", "fgarcia", "wjaffrey", "tshah"]
```
##### `.remove()`
Removes the first occurrence of a specific element inside a list.
```python
username_list = ["elarson", "bmoreno", "wjaffrey", "tshah"]
username_list.remove("elarson")  # Removes "elarson"; the list becomes ["fgarcia", "wjaffrey", "tshah"]
```
##### `.append()`
Adds input to the end of a list.
```python
username_list = ["bmoreno", "wjaffrey", "tshah"]
username_list.append("btang")  # Adds "btang" to the end; the list becomes ["fgarcia", "wjaffrey", "tshah", "btang"]
```
##### `.index()`
Finds the first occurrence of an element in a list and returns its index.
```python
username_list = ["bmoreno", "wjaffrey", "tshah", "btang"]
print(username_list.index("tshah"))  # Finds and displays the index of the first occurrence of "tshah" as 2
```

#### Additional Syntax for Strings and Lists

##### `+` (Concatenation)
Combines two strings or lists together.
```python
device_id = "IT" + "nwp12"  
# Combines "IT" with "nwp12" and assigns to the variable device_id
# Output: "ITnwp12"

users = ["elarson", "bmoreno"] + ["tshah", "btang"]  
# Combines two lists
# Output: ["elarson", "bmoreno", "tshah", "btang"]
```
##### `[]` (Bracket Notation)
Uses indices to extract parts of a string or list.
```python
print("h32rb17"[0])  # Extracts the character at index 0, which is "h"
print("h32rb17"[0:3])  # Extracts the slice [0:3], which is "h32"
username_list = ["elarson", "fgarcia", "tshah"]
print(username_list[2])  # Extracts the element at index 2, which is "tshah"
```

#### Regular Expressions

The `re` module function and regular expression symbols are useful when searching for patterns in strings.

##### `re.findall()`
Returns a list of matches to a regular expression.
```python
import re
re.findall("a53", "a53-32c .E")  # Returns the list ["a53"]
```
##### `\w`
Matches with any alphanumeric character; also matches with the underscore (`_`).
```python
import re
re.findall("\w", "a53-32c .E")  # Returns the list ["a", "5", "3", "3", "2", "c", "E"]
```
##### `.` (Dot)
Matches to all characters, including symbols.
```python
import re
re.findall(".", "a53-32c .E")  # Returns the list ["a", "5", "3", "-", "3", "2", "c", " ", ".", "E"]
```
##### `\d`
Matches to all single digits.
```python
import re
re.findall("\d", "a53-32c .E")  # Returns the list ["5", "3", "3", "2"]
```
##### `\s`
Matches to all single spaces.
```python
import re
re.findall("\s", "a53-32c .E")  # Returns the list [" "]
```
##### `\.` (Escape Dot)
Matches to the period character.
```python
import re
re.findall("\.", "a53-32c .E")  # Returns the list ["."]
```
##### `+`
Represents one or more occurrences of a specific character.
```python
import re
re.findall("\w+", "a53-32c .E")  # Returns the list ["a53", "32c", "E"]
```
##### `*`
Represents zero, one, or more occurrences of a specific character.
```python
import re
re.findall("\w*", "a53-32c .E")  # Returns the list ["a53", " ", "32c", " ", " ", "E"]
```
##### `{ }`
Represents a specified number of occurrences of a specific character; the number is specified within the curly brackets.
```python
import re
re.findall("\w{3}", "a53-32c .E")  # Returns the list ["a53", "32c"]
```


# Glossary terms from module 3

## **Terms and definitions from Course 7, Module 3**

**A**
- **[[Algorithm]]**: A set of rules that solve a problem

**B**
- **[[Bracket notation]]**: The indices placed in square brackets

**D**
- **[[Debugging]]**: The practice of identifying and fixing errors in code

**I**
- **[[Immutable]]**: An object that cannot be changed after it is created and assigned a value
- **[[Index]]**: A number assigned to every element in a sequence that indicates its position

**L**
- **[[List concatenation]]**: The concept of combining two lists into one by placing the elements of the second list directly after the elements of the first list
- **[[List data]]**: Data structure that consists of a collection of data in sequential form

**M**
- **[[Method]]**: A function that belongs to a specific data type

**R**
- **[[Regular expression (regex)]]**: A sequence of characters that forms a pattern

**S**
- **[[String concatenation]]**: The process of joining two strings together
- **[[String data]]**: Data consisting of an ordered sequence of characters
- **[[Substring]]**: A continuous sequence of characters within a string
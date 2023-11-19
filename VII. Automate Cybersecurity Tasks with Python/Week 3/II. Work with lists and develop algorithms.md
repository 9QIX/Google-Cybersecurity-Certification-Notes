# List operations in Python

- **Introduction to Lists in Python:** Emphasizes the utility of **[[list]]** in storing multiple pieces of data in a single variable, essential in security scenarios such as managing IP addresses or blocked applications.
	- **Creating Lists in Python:** Recaps the process of creating a list in Python, using square brackets to enclose items (e.g., letters A through E) separated by commas. Highlights the ability to assign a variable to the list for easier use.
	- **Accessing List Elements:** Draws parallels between accessing elements in lists and strings, using index values in square brackets. Clarifies the zero-based indexing in Python, where the first element has an index of 0.
		- **Index 1 Example:** Demonstrates the extraction of the second element ("b") from a list using the index 1 within the print() function.
		- **List Concatenation:** Similar to strings, introduces list concatenation using the plus sign. Demonstrates the concatenation of two lists and printing the result.
- **Differences Between Lists and Strings:** Contrasts the immutability of strings with the mutability of lists. Emphasizes that lists can be freely changed, added to, and have elements removed.
- **Changing List Elements:** Illustrates changing a specific element in a list by reassigning a new value to it, showcasing the mutability of lists.
- **Inserting Elements with the Insert Method (`.insert(index, insert)`):** Introduces the insert method for adding an element at a specific position in a list. Discusses the method's two arguments: the position and the element to be added.
	- **Insert Method Example:** Demonstrates using the insert method to add the integer 7 at index 1 in the list. Explains that existing elements are shifted down, maintaining their indices.
- **Removing Elements with the Remove Method (`.insert(remove)`):** Introduces the remove method for eliminating a specific element from a list. Contrasts with the insert method, highlighting that the argument is the element itself, not its index.
	- **Remove Method Example:** Removes the letter "d" from the list using the remove method and prints the updated list.
- **Conclusion and Future Learning:** Acknowledges the importance of searching through lists for security analysts. Teases further exploration in the course.

# Write a simple algorithm

- **Introduction to Algorithms:** The passage begins by relating everyday problem-solving, like making coffee, to the concept of following rules or algorithms. It highlights that even in diverse approaches, people generally follow a set of rules when completing routine tasks.
- **Algorithm Definition:** Defines an **[[algorithm]]** as a set of rules that solve a problem, explaining that it involves steps taking input, performing tasks, and producing a solution as output. Establishes the relevance of algorithms in Python problem-solving for security analysts.
	- **Problem Scenario:** Sets up a scenario where a security analyst needs to extract the first three digits of IP addresses to gain insights into associated networks. Describes the involvement of Python concepts like loops, lists, and strings in the solution.
	- **Algorithm Breakdown:** Outlines an algorithmic approach to the problem. If dealing with a single IP address, use string slicing to extract the first three digits. For multiple IP addresses in a list, introduce a loop to apply the solution to each element.
- **Code Implementation for One IP Address:** Demonstrates Python code to extract the first three characters from one IP address. Explains the use of string slicing, indexing, and Python's exclusion of the final index.
- **Introduction of the Append Method (`.append()`):** Introduces the append method, explaining its function in adding input to the end of a list. Provides an example of using append to add an element to an existing list.
	- **Code Implementation for Multiple IP Addresses:** Combines the string slicing approach with a loop and the append method to solve the problem for multiple IP addresses in a list. Explains the for loop and the temporary storage of each IP address in the loop variable.
- **Conclusion and Advice:** Concludes by acknowledging the complexity of designing algorithms and encourages breaking them down into smaller problems before coding. Hints at further practice in upcoming videos.

# Lists and the security analyst

Previously, you examined how to use bracket notation to access and change elements in a list and some fundamental methods for working with lists. This reading will review these concepts with new examples, introduce the .index() method as it applies to lists, and highlight how lists are used in a cybersecurity context.

## List data in a security setting

As a security analyst, you'll frequently work with lists in Python. **[[List data]]** is a data structure that consists of a collection of data in sequential form. You can use lists to store multiple elements in a single variable. A single list can contain multiple data types. 

In a cybersecurity context, lists might be used to store usernames, IP addresses, URLs, device IDs, and data.

Placing data within a list allows you to work with it in a variety of ways. For example, you might iterate through a list of device IDs using a for loop to perform the same actions for all items in the list. You could incorporate a conditional statement to only perform these actions if the device IDs meet certain conditions.

## Working with indices in lists

### Indices

Like strings, you can work with lists through their indices, and indices start at 0. In a list, an index is assigned to every element in the list.

This table contains the index for each element in the list `["elarson", "fgarcia", "tshah", "sgilmore"]`:

|**element**|**index**|
|---|---|
|"elarson"|0|
|"fgarcia"|1|
|"tshah"|2|
|"sgilmore"|3|

## Bracket notation

Similar to strings, you can use bracket notation to extract elements or slices in a list. To extract an element from a list, after the list or the variable that contains a list, add square brackets that contain the index of the element. The following example extracts the element with an index of 2 from the variable username_list and prints it. You can run this code to examine what it outputs:

```python
username_list = ["elarson", "fgarcia", "tshah", "sgilmore"]

print(username_list[2])
```
Output:
```python
tshah
```

This example extracts the element at index 2 directly from the list:

```python
print(["elarson", "fgarcia", "tshah", "sgilmore"][2])
```
Output:
```python
tshah
```

### **Extracting a slice from a list**

Just like with strings, it's also possible to use bracket notation to take a slice from a list. With lists, this means extracting more than one element from the list.

When you extract a slice from a list, the result is another list. This extracted list is called a sublist because it is part of the original, larger list. 

To extract a sublist using bracket notation, you need to include two indices. You can run the following code that takes a slice from a list and explore the sublist it returns:

```python
username_list = ["elarson", "fgarcia", "tshah", "sgilmore"]

print(username_list[0:2])
```
Output:
```python
['elarson', 'fgarcia']
```

The code returns a sublist of `["elarson", "fgarcia"]`. This is because the element at index 0, "elarson", is included in the slice, but the element at index 2, "tshah", is excluded. The slice ends one element before this index.

## Changing the elements in a list

Unlike strings, you can also use bracket notation to change elements in a list. This is because a string is **[[immutable]]** and cannot be changed after it is created and assigned a value, but lists are not immutable.

To change a list element, use similar syntax as you would use when reassigning a variable, but place the specific element to change in bracket notation after the variable name. For example, the following code changes element at index 1 of the username_list variable to "bmoreno".

```python
username_list = ["elarson", "fgarcia", "tshah", "sgilmore"]
print("Before changing an element:", username_list)

username_list[1] = "bmoreno"
print("After changing an element:", username_list)
```
Output:
```python
Before changing an element: ['elarson', 'fgarcia', 'tshah', 'sgilmore']
After changing an element: ['elarson', 'bmoreno', 'tshah', 'sgilmore']
```

This code has updated the element at index 1 from "fgarcia" to "bmoreno".

## List methods

List methods are functions that are specific to the list data type. These include the .insert() , .remove(), .append() and .index().

### **.insert()** 

The .insert() method adds an element in a specific position inside a list. It has two parameters. The first is the index where you will insert the new element, and the second is the element you want to insert.

You can run the following code to explore how this method can be used to insert a new username into a username list:

```python
username_list = ["elarson", "bmoreno", "tshah", "sgilmore"]
print("Before inserting an element:", username_list)

username_list.insert(2,"wjaffrey")
print("After inserting an element:", username_list)
```
Output:
```python
Before inserting an element: ['elarson', 'bmoreno', 'tshah', 'sgilmore']
After inserting an element: ['elarson', 'bmoreno', 'wjaffrey', 'tshah', 'sgilmore']
```

Because the first parameter is 2 and the second parameter is "wjaffrey", "wjaffrey" is inserted at index 2, which is the third position. The other list elements are shifted one position in the list. For example, "tshah" was originally located at index 2 and now is located at index 3.

### **.remove()**

The .remove() method removes the first occurrence of a specific element in a list. It has only one parameter, the element you want to remove.

The following code removes "elarson" from the username_list:

```python
username_list = ["elarson", "bmoreno", "wjaffrey", "tshah", "sgilmore"]
print("Before removing an element:", username_list)

username_list.remove("elarson")
print("After removing an element:", username_list)
```
Output:
```python
Before removing an element: ['elarson', 'bmoreno', 'wjaffrey', 'tshah', 'sgilmore']
After removing an element: ['bmoreno', 'wjaffrey', 'tshah', 'sgilmore']
```

This code removes "elarson" from the list. The elements that follow "elarson" are all shifted one position closer to the beginning of the list.

**Note:** If there are two of the same element in a list, the .remove() method only removes the first instance of that element and not all occurrences.

### **.append()** 

The .append() method adds input to the end of a list. Its one parameter is the element you want to add to the end of the list. 

For example, you could use .append() to add "btang" to the end of the username_list:

```python
username_list = ["bmoreno", "wjaffrey", "tshah", "sgilmore"]
print("Before appending an element:", username_list)

username_list.append("btang")
print("After appending an element:", username_list)
```
Output:
```python
Before appending an element: ['bmoreno', 'wjaffrey', 'tshah', 'sgilmore']
After appending an element: ['bmoreno', 'wjaffrey', 'tshah', 'sgilmore', 'btang']
```

This code places "btang" at the end of the username_list, and all other elements remain in their original positions.

The .append() method is often used with for loops to populate an empty list with elements. You can explore how this works with the following code:

```python
numbers_list = []
print("Before appending a sequence of numbers:", numbers_list)

for i in range(10):
    numbers_list.append(i)
print("After appending a sequence of numbers:", numbers_list)
```
Output:
```python
Before appending a sequence of numbers: []
After appending a sequence of numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Before the for loop, the numbers_list variable does not contain any elements. When it is printed, the empty list is displayed. Then, the for loop iterates through a sequence of numbers and uses the .append() method to add each of these numbers to numbers_list. After the loop, when the numbers_list variable is printed, it displays these numbers.  

## .index()

Similar to the .index() method used for strings, the .index() method used for lists finds the first occurrence of an element in a list and returns its index. It takes the element you're searching for as an input.

**Note:** Although it has the same name and use as the .index() method used for strings, the .index() method used for lists is not the same method. Methods are defined when defining a data type, and because strings and lists are defined differently, the methods are also different.

Using the username_list variable, you can use the .index() method to find the index of the username "tshah":

```python
username_list = ["bmoreno", "wjaffrey", "tshah", "sgilmore", "btang"]
username_index = username_list.index("tshah")

print(username_index)
```
Output:
```python
2
```

Because the index of "tshah" is 2, it outputs this number.

Similar to the .index() method used for strings, it only returns the index of the first occurrence of a list item. So if the username "tshah" were repeated twice, it would return the index of the first instance, and not the second.

## Key takeaways

Python offers a lot of ways to work with lists. Bracket notation allows you to extract elements and slices from lists and also to alter them. List methods allow you to alter lists in a variety of ways. The .insert() and .append() methods add elements to lists while the .remove() method allows you to remove them. The .index() method allows you to find the index of an element in a list.
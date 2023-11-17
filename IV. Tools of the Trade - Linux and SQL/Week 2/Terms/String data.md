**[[String data]]** - is data consisting of an ordered sequence of characters. In our example, we'll just have it output the string of: hello. So, as input, we'll type: echo hello into the shell. Later, when we press enter, we'll get the output.

**Common Data Types in Databases**

**[[String Data]]**: Consists of an ordered sequence of characters, including numbers, letters, or symbols (e.g., user names like "analyst10").

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

- **[[String Data]]:** The passage begins by emphasizing the importance of working with string data in security, particularly when dealing with usernames and login information.
	- **Refresher on Strings:** A quick refresher on strings is provided, defining them as an ordered sequence of characters in Python, written within quotation marks. Examples of strings using double quotation marks are given: "Hello", "123", and "Number 1!"

## String data in a security setting

As an analyst, string data is one of the most common data types you will encounter in Python. **[[String data]]** is data consisting of an ordered sequence of characters. It's used to store any type of information you don't need to manipulate mathematically (such as through division or subtraction). In a cybersecurity context, this includes IP addresses, usernames, URLs, and employee IDs.

You'll need to work with these strings in a variety of ways. For example, you might extract certain parts of an IP address, or you might verify whether usernames meet required criteria.
- **Examples with Type() Function:**
	- The [[type()]] function is examined, highlighting that it accepts all data types but only one parameter. Examples are provided where the data type of a string and a float value is determined and passed into a print() function.

## type() 

The **[[type()]]** function returns the data type of its argument. The type() function helps you keep track of the data types of variables to avoid errors throughout your code. 

To use it, you pass the object as an argument, and it returns its data type. It only accepts one argument. For example, you could specify type("security") or type(7).

### Passing one function into another

When working with functions, you often need to pass them through print() if you want to output the data type to the screen. This is the case when using a function like type(). Consider the following code:

```python
print(type("This is a string"))
```
Output:
```python
<class 'str'>
```

It displays str, which means that the argument passed to the type() function is a string. This happens because the type() function is processed first and its output is passed as an argument to the print() function.
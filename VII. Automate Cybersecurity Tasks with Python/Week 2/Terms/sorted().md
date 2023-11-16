- **Exploration of Sorted() Function:**
	- The [[sorted()]] function is explained, highlighting its utility in sorting lists. An example is provided where a list of usernames is sorted alphabetically using the sorted() function.

## sorted()

The **[[sorted()]]** function sorts the components of a list. The sorted() function also works on any iterable, like a string, and returns the sorted elements in a list. By default, it sorts them in ascending order. When given an iterable that contains numbers, it sorts them from smallest to largest; this includes iterables that contain numeric data as well as iterables that contain string data beginning with numbers. An iterable that contains strings that begin with alphabetic characters will be sorted alphabetically.

The sorted() function takes an iterable, like a list or a string, as an input. So, for example, you can use the following code to sort the list of login sessions from shortest to longest:

```python
time_list = [12, 2, 32, 19, 57, 22, 14]

print(sorted(time_list))
```
Output:
```python
[2, 12, 14, 19, 22, 32, 57]
```

This displays the sorted list. 

The sorted() function does not change the iterable that it sorts. The following code illustrates this:

```python
time_list = [12, 2, 32, 19, 57, 22, 14]

print(sorted(time_list))
print(time_list)
```
Output:
```python
[2, 12, 14, 19, 22, 32, 57] 
[12, 2, 32, 19, 57, 22, 14]
```

The first print() function displays the sorted list. However, the second print() function, which does not include the sorted() function, displays the list as assigned to time_list in the first line of code.

One more important detail about the sorted() function is that it cannot take lists or strings that have elements of more than one data type. For example, you can’t use the list `[1, 2, "hello"]`.
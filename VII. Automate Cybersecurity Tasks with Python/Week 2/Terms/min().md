## max() and min() 

The max() function returns the largest numeric input passed into it. The min() function returns the smallest numeric input passed into it.

The **[[max()]]** and **[[min()]]** functions accept arguments of either multiple numeric values or of an iterable like a list, and they return the largest or smallest value respectively.

In a cybersecurity context, you could use these functions to identify the longest or shortest session that a user logged in for. If a specific user logged in seven times during a week, and you stored their access times in minutes in a list, you can use the max() and min() functions to find and print their longest and shortest sessions:

```python
time_list = [12, 2, 32, 19, 57, 22, 14]

print(min(time_list))
print(max(time_list))
```
Output:
```python
2 
57
```

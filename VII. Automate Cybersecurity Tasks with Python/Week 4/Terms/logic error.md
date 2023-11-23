### **Logic errors** 

A **[[logic error]]** is an error that results when the logic used in code produces unintended results.  Logic errors may not produce error messages. In other words, the code will not do what you expect it to do, but it is still valid to the interpreter. 

For example, using the wrong logical operator, such as a greater than or equal to sign (>=) instead of greater than sign (>) can result in a logic error.  Python will not evaluate a condition as you intended. However, the code is valid, so it will run without an error message. 

The following example outputs a message related to whether or not a user has reached a maximum number of five login attempts. The condition in the if statement should be login_attempts > 5, but it is written as login_attempts >= 5.  A value of 5 has been assigned to login_attempts so that you can explore what it outputs in that instance:

```python
login_attempts = 5

if login_attempts >= 5:
    print("User has not reached maximum number of login attempts.")
else:
    print("User has reached maximum number of login attempts.")
```
Output:
```
User has not reached maximum number of login attempts.
```

The output displays the message "User has not reached maximum number of login attempts." However, this is not true since the maximum number of login attempts is five. This is a logic error.

Logic errors can also result when you assign the wrong value in a condition or when a mistake with indentation means that a line of code executes in a way that was not planned.
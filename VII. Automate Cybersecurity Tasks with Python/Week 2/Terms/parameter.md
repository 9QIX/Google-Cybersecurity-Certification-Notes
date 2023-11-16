### Parameters

A **[[parameter]]** is an object that is included in a function definition for use in that function. When you define a function, you create variables in the function header. They can then be used in the body of the function. In this context, these variables are called parameters.  For example, consider the following function:

```python
def remaining_login_attempts(maximum_attempts, total_attempts):
    print(maximum_attempts - total_attempts)
```

This function takes in two variables, maximum_attempts and total_attempts and uses them to perform a calculation. In this example, maximum_attempts and total_attempts are parameters.
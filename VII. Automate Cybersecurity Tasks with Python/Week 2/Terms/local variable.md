### Local variables

A **[[local variable]]** is a variable assigned within a function. These variables cannot be called or accessed outside of the body of a function. Local variables include parameters as well as other variables assigned within a function definition.

In the following function definition, total_string and name are local variables:

```python
def greet_employee(name):
    total_string = "Welcome" + name
    return total_string
```

The variable total_string is a local variable because it's assigned inside of the function. The parameter name is a local variable because it is also created when the function is defined.

Whenever you call a function, Python creates these variables temporarily while the function is running and deletes them from memory after the function stops running.

This means that if you call the greet_employee() function with an argument and then use the total_string variable outside of this function, you'll get an error.
Another way of writing multi-line comments is by using documentation strings and not assigning them to a variable. Documentation strings, also called **[[docstrings]]**, are strings that are written over multiple lines and are used to document code. To create a documentation string, use triple quotation marks (""" """). 

You could add the comment to the function in the previous example in this way too:

```python
"""
remaining_login_attempts() function takes two integer parameters,
the maximum login attempts allowed and the total attempts made,
and it returns an integer representing remaining login attempts
"""

def remaining_login_attempts(maximum_attempts, total_attempts):
    return maximum_attempts - total_attempts
```

# Conditional statements in Python

- **Introduction to Automation:** Automation is introduced as the use of technology to reduce human effort in performing common and repetitive tasks. It is highlighted as a means to allow computers to execute these tasks, freeing up time for other activities.
- **Conditional Statements:** **[[Conditional statement]]** are crucial for automation. They evaluate code to determine if it meets specified conditions. The keyword **"if"** is introduced as the initiator of a conditional statement. The structure involves specifying a condition followed by a colon, with the subsequent indented block being executed if the condition is true.
- **Operators in Conditional Statements:** Various operators are introduced for constructing conditions, including greater than, less than, equal to, not equal to, greater than or equal to, and less than or equal to. The double equals sign (`==`) is emphasized for checking equality.
- **Example of If Statement:** An example is provided where Python is instructed to print an "account locked" message if the number of failed login attempts exceeds five. The syntax involves the use of the `if` keyword, specifying the condition, and defining the action in an indented block.
- **Comparison Operators:** Explanation and examples of comparison operators such as `==` and `!=` are provided. The importance of these operators in evaluating conditions is highlighted.
- **Example with Double Equals Sign:** An example is given where Python checks if a device's operating system matches a specific string, and if true, prints an "updates needed" message. The use of the double equals sign for equality comparison is demonstrated.
- **Else Statements:** The concept of the `else` keyword is introduced to handle scenarios where the initial condition in the `if` statement evaluates to false. The `else` block is executed in such cases.
- **Example with If-Else:** An example is provided where an `if` statement checks for a specific operating system. If true, it prints "updates needed"; otherwise, the `else` block is executed, printing "no updates needed."

Understanding conditional statements is fundamental to incorporating logic and decision-making into your Python code, enabling you to create more dynamic and responsive programs.

# More on conditionals in Python

Previously, you explored conditional statements and how they’re useful in automating tasks in Python. So far, you’ve focused on the `if` and `else` keywords. In this reading, you’ll review these and learn another keyword, `elif`. You’ll also learn how you can apply the `and`, `or`, and `not` operators to your conditions.

## How conditional statements work

A **[[conditional statement]]** is a construct that evaluates code to determine whether it meets specific conditions. When a condition is met, it evaluates to a Boolean value of `True`, and specified actions are performed. If the condition isn't met, it evaluates to `False`, and the specified actions are skipped.

Conditional statements often involve the comparison of two values using various operators:

| Operator | Use                 |
| -------- | ------------------- |
| >        | greater than        |
| <        | less than           |
| >=       | greater than or equal to |
| <=       | less than or equal to |
| ==       | equal to            |
| !=       | not equal to        |

Note: The equal to ( == ) and not equal to ( != ) operators are also commonly used to compare string data.

## if statements

The keyword `if` starts a conditional statement. It’s a necessary component of any conditional statement. In the following example, `if` begins a statement that tells Python to print an `"OK"` message when the HTTP response status code equals `200`:

```python
if status == 200:
    print("OK")
```

This code consists of a header and a body.

### **The header of an if statement**

The first line of this code is the header. In the header of an `if` statement, the keyword `if` is followed by the condition. Here, the condition is that the `status` variable is equal to a value of `200`. The condition can be placed in parentheses:

```python
if (status == 200):
    print("OK")
```

In cases like this one, placing parentheses around conditions in Python is optional. You might want to include them if it helps you with code readability. However, this condition will be processed the same way if written without parentheses. 

In other situations, because Python evaluates the conditions in parentheses first, parentheses can affect how Python processes conditions. You will read more about one of these in the section of this reading on `not`.

**Note:** You must always place a colon (:) at the end of the header. Without this syntax, the code will produce an error.

### **The body of an if statement**

After the header of an `if` statement comes the body of the `if` statement. This tells Python what action or actions to perform when the condition evaluates to `True`. In this example, there is just one action, printing `"OK"` to the screen. In other cases, there might be more lines of code with additional actions.

**Note:** For the body of the `if` statement to execute as intended, it must be indented further than the header. Additionally, if there are multiple lines of code within the body, they must all be indented consistently.

## Continuing conditionals with else and elif

- **else Statements:** The `else` keyword is followed by a code section that evaluates only when all preceding conditions in the conditional statement are False.

  ```python
if status == 200:
	print("OK")
else:
	print("check other status")
  ```

- **elif Statements:** The `elif` keyword introduces a condition that is evaluated only when previous conditions are False. Multiple `elif` statements can follow an `if`.

  ```python
if status == 200:
	print("OK")
elif status == 400:
	print("Bad Request")
elif status == 500:
	print("Internal Server Error")
else:
	print("check other status")
  ```

**Logical Operators for Multiple Conditions**

- **and Operator:** Requires both conditions on either side to be True.

  ```python
if status >= 200 and status <= 226:
	print("successful response")
  ```

- **or Operator:** Requires at least one condition on either side to be True.

  ```python
if status == 100 or status == 102:
	print("informational response")
  ```

- **not Operator:** Negates a condition.

  ```python
if not (status >= 200 and status <= 226):
	print("check status")
  ```

Parentheses are necessary to apply `not` to both conditions.

## Key takeaways

Security analysts must be familiar with conditional statements. They involve `if`, `else`, and `elif` keywords. Logical operators (`and`, `or`, `not`) are useful for more complex conditions in Python. Always end headers with a colon and indent bodies for proper execution.
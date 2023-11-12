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

**More on Conditionals in Python**

**How Conditional Statements Work**

A conditional statement is a construct that evaluates code to determine whether it meets specific conditions. When a condition is met, it evaluates to a Boolean value of True, and specified actions are performed. If the condition isn't met, it evaluates to False, and the specified actions are skipped.

Conditional statements often involve the comparison of two values using various operators:

| Operator | Use                 |
| -------- | ------------------- |
| >        | greater than        |
| <        | less than           |
| >=       | greater than or equal to |
| <=       | less than or equal to |
| ==       | equal to            |
| !=       | not equal to        |

These operators are used for numerical values, and == and != are commonly used for string data.

**if Statements**

The `if` keyword starts a conditional statement. It is followed by a condition, and if the condition is True, the specified actions in the body of the statement are executed. For example:

```python
if status == 200:
    print("OK")
```

Here, if the HTTP response status code equals 200, it prints "OK" to the screen.

**The Header of an if Statement**

The header is the first line of an if statement containing the `if` keyword and the condition. The condition can be in parentheses, but it's optional unless needed for clarity.

```python
if (status == 200):
    print("OK")
```

Always end the header with a colon (:).

**The Body of an if Statement**

The body follows the header and contains the actions to be performed when the condition is True. The body must be indented further than the header.

**Continuing Conditionals with else and elif**

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

**Key Takeaways**

Security analysts must be familiar with conditional statements. They involve `if`, `else`, and `elif` keywords. Logical operators (`and`, `or`, `not`) are useful for more complex conditions in Python. Always end headers with a colon and indent bodies for proper execution.
# Conditional statements in Python

- **Introduction to Automation:** Automation is introduced as the use of technology to reduce human effort in performing common and repetitive tasks. It is highlighted as a means to allow computers to execute these tasks, freeing up time for other activities.
- **Conditional Statements:** **[[Conditional statement]]** are crucial for automation. They evaluate code to determine if it meets specified conditions. The keyword **"if"** is introduced as the initiator of a conditional statement. The structure involves specifying a condition followed by a colon, with the subsequent indented block being executed if the condition is true.
- **Operators in Conditional Statements:** Various operators are introduced for constructing conditions, including greater than, less than, equal to, not equal to, greater than or equal to, and less than or equal to. The double equals sign == is emphasized for checking equality.
- **Example of If Statement:** An example is provided where Python is instructed to print an "account locked" message if the number of failed login attempts exceeds five. The syntax involves the use of the `if` keyword, specifying the condition, and defining the action in an indented block.
- **Comparison Operators:** Explanation and examples of comparison operators such as == and != are provided. The importance of these operators in evaluating conditions is highlighted.
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

# For loops

- **Iterative Statements and Loops:** **[[Iterative statement]]** involve code that repeatedly executes a set of instructions, and loops are a way to achieve this in Python. Loops allow you to repeat a line of code without typing it multiple times.
- **Types of Loops:** Two main types of loops are introduced: for loops and while loops. The video primarily focuses on for loops, with while loops to be explored later.
- **For Loops:** For loops repeat code for a specified sequence. The syntax starts with the keyword `for`, followed by a loop variable, the `in` keyword, and the sequence to iterate through. The loop header ends with a colon, and the indented lines following it constitute the loop body, where the actions to be repeated are specified.
- **Loop Variable:** The **[[loop variable]]**, often named 'i' (though any name can be used), controls the iterations of the loop. It is only used within the loop and not outside of it.
	- **Range Function:** The `range` function is introduced as a way to generate a sequence of numbers. It starts from a specified number (defaulting to zero if not provided) and stops before a specified number. The sequence generated by `range` can be used to control the number of iterations in a for loop.
	- **Example with Range Function:** An example is provided where a for loop is used with the `range` function to repeat a specific process (printing an error message) 10 times. The benefits of using a loop in this scenario, as opposed to manually typing the error message multiple times, are highlighted.

Understanding for loops and how to use them with the `range` function provides you with a powerful tool for automating repetitive tasks in your Python programs. The next video will cover another type of iterative statement: the while loop.

# While loops

- **While Loops:** **[[While loops]]** are iterative statements that repeatedly execute a set of instructions based on a condition. The loop continues to execute as long as the condition is true, and it stops when the condition becomes false.
	- **While Loop Syntax:** The while loop has a header, which includes the keyword `while`, the condition, and a colon. The loop body consists of indented lines after the header, specifying the actions to be performed while the loop iterates.
- **Loop Variable in While Loops:** In while loops, the loop variable needs to be assigned a value before the loop starts. Unlike for loops, the loop variable is not created within the loop statement itself.
- **Example of a While Loop:** An example was provided where a while loop was used to print the values of a loop variable (`time`) and increment it by two until it became greater than 10. The loop printed even numbers less than or equal to 10.
- **Practical Example:** A practical example demonstrated the use of a while loop to simulate a scenario where a user has a limitation on the number of devices they can connect to. The loop continued to print a message as long as the user could connect to additional devices and stopped when the maximum number of devices was reached.
- **Loop Control:** Inside the while loop, the loop variable was explicitly changed to control the iterations. In the example, the loop variable `i` was incremented by one in each iteration.

Understanding both for and while loops, along with conditional statements and variables, provides you with powerful tools to control the flow of your Python programs. These tools allow you to automate tasks, make decisions, and create more dynamic and efficient code. Great job!

**More on Loops in Python**

# More on loops in Python

Previously, you explored iterative statements. An **[[iterative statement]]** is code that repeatedly executes a set of instructions. Depending on the criteria, iterative statements execute zero or more times. We iterated through code using both for loops and while loops. In this reading, you’ll recap the syntax of loops. Then, you'll learn how to use the break and continue keywords to control the execution of loops. 

## for loops  

If you need to iterate through a specified sequence, you should use a for loop. 

The following for loop iterates through a sequence of usernames. You can run it to observe the output:

  ```python
for variable in sequence:
      # loop body
  ```

  ```python
for i in ["elarson", "bmoreno", "tshah", "sgilmore"]:
      print(i)
  ```
  Output:
```Python
elarson 
bmoreno 
tshah 
sgilmore
```

The first line of this code is the loop header. In the loop header, the keyword for signals the beginning of a for loop. Directly after for, the loop variable appears. The **[[loop variable]]** is a variable that is used to control the iterations of a loop. In for loops, the loop variable is part of the header. In this example, the loop variable is i. 

The rest of the loop header indicates the sequence to iterate through. The in operator appears before the sequence to tell Python to run the loop for every item in the sequence. In this example, the sequence is the list of usernames. The loop header must end with a colon (:). 

The second line of this example for loop is the loop body. The body of the for loop might consist of multiple lines of code. In the body, you indicate what the loop should do with each iteration. In this case, it's to print(i), or in other words, to display the current value of the loop variable during that iteration of the loop. For Python to execute the code properly, the loop body must be indented further than the loop header.

**Note:** When used in a for loop, the in operator precedes the sequence that the for loop will iterate through. When used in a conditional statement, the in operator is used to evaluate whether an object is part of a sequence.  The example `if "elarson" in ["tshah", "bmoreno", "elarson"]` evaluates to True because "elarson" is part of the sequence following in.

## **Looping through a list**

Using for loops in Python allows you to easily iterate through lists, such as a list of computer assets. In the following for loop, asset is the loop variable and another variable, computer_assets, is the sequence. The computer_assets variable stores a list. This means that on the first iteration the value of asset will be the first element in that list, and on the second iteration, the value of asset will be the second element in that list. You can run the code to observe what it outputs:

```python
computer_assets = ["laptop1", "desktop20", "smartphone03"]
for asset in computer_assets:
    print(asset)
```
Output:
```Python
laptop1 
desktop20 
smartphone03
```

**Note:** It is also possible to loop through a string. This will return every character one by one. You can observe this by running the following code block that iterates through the string "security":

```python
string = "security"
for character in string:
    print(character)
```
Output:
```Python
s 
e 
c 
u 
r 
i 
t 
y
```

### **Using  `range()`**

Another way to iterate through a for loop is based on a sequence of numbers, and this can be done with range(). The range() function generates a sequence of numbers. It accepts inputs for the start point, stop point, and increment in parentheses. For example, the following code indicates to start the sequence of numbers at 0, stop at 5, and increment each time by 1:

`range(0, 5, 1)`

**Note:** The start point is inclusive, meaning that 0 will be included in the sequence of numbers, but the stop point is exclusive, meaning that 5 will be excluded from the sequence. It will conclude one integer before the stopping point.

When you run this code, you can observe how 5 is excluded from the sequence:

```python
for i in range(0, 5, 1):
    print(i)
```
Output:
```Python
0 
1 
2 
3 
4
```

You should be aware that it's always necessary to include the stop point, but if the start point is the default value of 0 and the increment is the default value of 1, they don't have to be specified in the code. If you run this code, you will get the same results:

```python
for i in range(5):
    print(i)
```
Output:
```Python
0 
1 
2 
3 
4
```

**Note:** If the start point is anything other than 0 or the increment is anything other than 1, they should be specified.

## `while` loops

If you want a loop to iterate based on a condition, you should use a while loop. As long as the condition is True, the loop continues, but when it evaluates to False, the while loop exits. The following while loop continues as long as the condition that i < 5 is True:

  ```python
i = 1
while i < 5:
      print(i)
      i = i + 1
  ```
Output:
```Python
1
2
3
4
```

In this while loop, the loop header is the line while i < 5:. Unlike with for loops, the value of a loop variable used to control the iterations is not assigned within the loop header in a while loop. Instead, it is assigned outside of the loop. In this example, i is assigned a starting value of 1 in a line preceding the loop.

The keyword while signals the beginning of a while loop. After this, the loop header indicates the condition that determines when the loop terminates. This condition uses the same comparison operators as conditional statements. Like in a for loop, the header of a while loop must end with a colon (:).

The body of a while loop indicates the actions to take with each iteration. In this example, it is to display the value of i and to increment the value of i by 1. In order for the value of i to change with each iteration, it's necessary to indicate this in the body of the while loop. In this example, the loop iterates four times until it reaches a value of 5.

### Integers in the loop condition

Often, as just demonstrated, the loop condition is based on integer values. For example, you might want to allow a user to log in as long as they've logged in less than five times. Then, your loop variable, login_attempts, can be initialized to 0, incremented by 1 in the loop, and the loop condition can specify to iterate only when the variable is less than 5. You can run the code below and review the count of each login attempt:

```python
login_attempts = 0
while login_attempts < 5:
    print("Login attempts:", login_attempts)
    login_attempts = login_attempts + 1
```
Output:
```Python
Login attempts: 0
Login attempts: 1
Login attempts: 2
Login attempts: 3
Login attempts: 4
```

The value of login_attempts went from 0 to 4 before the loop condition evaluated to False. Therefore, the values of 0 through 4 print, and the value 5 does not print.

### Boolean values in the loop condition

Conditions in while loops can also depend on other data types, including comparisons of Boolean data. In Boolean data comparisons, your loop condition can check whether a loop variable equals a value like True or False. The loop iterates an indeterminate number of times until the Boolean condition is no longer True. 

In the example below, a Boolean value is used to exit a loop when a user has made five login attempts. A variable called count keeps track of each login attempt and changes the login_status variable to False when the count equals 4. (Incrementing count from 0 to 4 represents five login attempts.) Because the while condition only iterates when login_status is True, it will exit the loop. You can run this to explore this output:

```python
count = 0
login_status = True
while login_status == True:
    print("Try again.")
    count = count + 1
    if count == 4:
        login_status = False
```
Output
```Python
Try again. 
Try again. 
Try again. 
Try again.
```

The code prints a message to try again four times, but exits the loop once login_status is set to False.   

## Managing loops

You can use the break and continue keywords to further control your loop iterations. Both are incorporated into a conditional statement within the body of the loop. They can be inserted to execute when the condition in an if statement is True. The break keyword is used to break out of a loop. The continue keyword is used to skip an iteration and continue with the next one. 

## `break`

When you want to exit a for or while loop based on a particular condition in an if statement being True, you can write a conditional statement in the body of the loop and write the keyword break in the body of the conditional. 

The following example demonstrates this. The conditional statement with break instructs Python to exit the for loop if the value of the loop variable asset is equal to "desktop20". On the second iteration, this condition evaluates to True. You can run this code to observe this in the output:

```python
computer_assets = ["laptop1", "desktop20", "smartphone03"]
for asset in computer_assets:
    if asset == "desktop20":
        break
    print(asset)
```
Output
```Python
laptop1
```

As expected, the values of "desktop20" and "smartphone03" don't print because the loop breaks on the second iteration.

## `continue`

When you want to skip an iteration based on a certain condition in an if statement being True, you can add the keyword continue in the body of a conditional statement within the loop. In this example, continue will execute when the loop variable of asset is equal to "desktop20". You can run this code to observe how this output differs from the previous example with break:

```python
computer_assets = ["laptop1", "desktop20", "smartphone03"]
for asset in computer_assets:
    if asset == "desktop20":
        continue
    print(asset)
```

The value "desktop20" in the second iteration doesn't print. However, in this case, the loop continues to the next iteration, and "smartphone03" is printed.

## Infinite loops

If you create a loop that doesn't exit, this is called an infinite loop. In these cases, you should press CTRL-C or CTRL-Z on your keyboard to stop the infinite loop. You might need to do this when running a service that constantly processes data, such as a web server.

## Key takeaways

- Security analysts use iterative statements, such as for and while loops, for repetitive tasks.
- For loops are suitable for iterating through lists or sequences.
- While loops are used when the number of iterations is not known beforehand.
- The `break` keyword is used to exit a loop based on a condition.
- The `continue` keyword is used to skip an iteration based on a condition.  
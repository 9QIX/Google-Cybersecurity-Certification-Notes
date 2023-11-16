- **Indentation for Readability:**
	- The next topic is the significance of indentation for code readability. **[[Indentation]]** is described as spaces added at the beginning of a line of code, enhancing readability and ensuring proper code execution. Examples demonstrate how indentation is crucial, especially in conditional statements, to establish connections and avoid unintended execution.
	- **PEP 8's Recommendation on Indentation:**
		- PEP 8's recommendation of using four spaces for indentation is mentioned. The passage explains that proper indentation is essential for grouping lines of code and ensuring they are executed as intended.

## Correct indentation

**[[Indentation]]** is space added at the beginning of a line of code. In Python, you should indent the body of conditional statements, iterative statements, and function definitions. Indentation is not only necessary for Python to interpret this syntax properly, but it can also make it easier for you and other programmers to read your code.

The PEP 8 style guide recommends that indentations should be four spaces long. For example, if you had a conditional statement inside of a while loop, the body of the loop would be indented four spaces and the body of the conditional would be indented four spaces beyond that. This means the conditional would be indented eight spaces in total.

```python
count = 0
login_status = True

while login_status == True:
    print("Try again.")
    count = count + 1

    if count == 4:
        login_status = False
```
### **Syntax errors** 

A **[[syntax error]]** is an error that involves invalid usage of a programming language. Syntax errors occur when there is a mistake with the Python syntax itself. Common examples of syntax errors include forgetting a punctuation mark, such as a closing bracket for a list or a colon after a function header.  

When you run code with syntax errors, the output will identify the location of the error with the line number and a portion of the affected code. It also describes the error. Syntax errors often begin with the label  "SyntaxError:" . Then, this is followed by a  description of the error. The description might simply be "invalid syntax" . Or if you forget a closing parentheses on a function, the description might be "unexpected EOF while parsing". "EOF" stands for "end of file."  

The following code contains a syntax error. Run it and examine its output:

```python
message = "You are debugging a syntax error
print(message)
```
Output:
```
Error on line 1:
    message = "You are debugging a syntax error
                                              ^
SyntaxError: EOL while scanning string literal
```

This outputs the message "SyntaxError: EOL while scanning string literal". "EOL" stands for "end of line". The error message also indicates that the error happens on the first line. The error occurred because a quotation mark was missing at the end of the string on the first line. You can fix it by adding that quotation mark.

**Note:** You will sometimes encounter the error label "IndentationError" instead of "SyntaxError". "IndentationError" is a subclass of "SyntaxError" that occurs when the indentation used with a line of code is not syntactically correct.
# Python and cybersecurity

- **Programming as a Tool:** Security professionals utilize **[[programming]]** as a tool to provide specific instructions for computers to execute tasks. This can be compared to a vending machine, where instructions (e.g., providing money, making a selection) lead to desired outcomes (e.g., receiving a product, getting change back).
- **Introduction to Python:** **[[Python]]** is highlighted as a general-purpose programming language with versatility across various domains, including web development and artificial intelligence. It's recognized for its readability and simplicity.
	- **Automation with Python:** Python is extensively used in security for task automation. **[[Automation]]** involves leveraging technology to reduce manual efforts in performing routine tasks. Python excels at automating short, ***simple tasks, such as sifting through log data, managing access control lists, and analyzing network traffic.***
		- **Combining Tasks:** Python allows security professionals to connect separate tasks into cohesive workflows. For instance, it can streamline processes outlined in playbooks, ensuring that different steps are executed seamlessly
- **Advantages of Python:** Several advantages make Python a preferred choice for security tasks. Its ***user-friendly syntax, readability, and conciseness*** contribute to its appeal. Python follows standard guidelines, promoting code consistency. The language benefits from extensive online support and a rich collection of built-in libraries for various tasks.
- **High Demand in Industries:** Python's popularity and versatility make it in high demand across different industries worldwide. Its ease of use, extensive libraries, and community support contribute to its sustained relevance.

This knowledge sets the stage for the hands-on experience with running Python code in the upcoming videos. As you progress in your security career, Python is likely to become a valuable skill for automating tasks and enhancing efficiency in security operations.

# Get to know Python

In this reading, you will explore how programming works, how a computer processes the Python programming language, and how Python is used in cybersecurity.

## How programming works 

**[[Programming]]** is a process that can be used to create a specific set of instructions for a computer to execute tasks. Computer programs exist everywhere. Computers, cell phones, and many other electronic devices are all given instructions by computer programs.

There are multiple programming languages used to create computer programs. Python is one of these. Programming languages are converted to binary numbers, which are a series of 0s and 1s that represent the operations that the computer's central processing unit (CPU) should perform. Each instruction corresponds to a specific operation, such as adding two numbers or loading a value from memory. 

It would be very time-consuming for humans to communicate this way. Programming languages like Python make it easier to write code because you can use less syntax when instructing computers to perform complex processes.

## Using Python to program

Python is a general purpose programming language that can be used to solve a variety of problems. For example, it can be used to build websites, perform data analysis, and automate tasks. 

Python code must be converted through an interpreter before the computer can process it. An **[[interpreter]]** is a computer program that translates Python code into runnable instructions line by line.

### **Python versions**

There are multiple versions of Python. In this course, you are using Python 3. While using Python, it's important to keep track of the version you're using. There are differences in the syntax of each version. **[[Syntax]]** refers to the rules that determine what is correctly structured in a computing language.

## Python in cybersecurity

In cybersecurity, Python is used especially for automation. **[[Automation]]** is the use of technology to reduce human and manual effort to perform common and repetitive tasks. These are some specific areas of cybersecurity in which Python might be used to automate specific tasks:

- Log analysis
- Malware analysis
- Access control list management
- Intrusion detection
- Compliance checks
- Network scanning

## Key takeaways

Python is a programming language, or in other words, a language used to create instructions for a computer to complete tasks. Programming languages are converted to binary numbers that a machine can understand. It's important to be aware that there are multiple versions of Python, and they have differences in syntax. Python is especially useful in cybersecurity for automating repetitive tasks.

# Create a basic Python script

- **Script vs. Program Analogy:** The analogy of a theater performance was used to distinguish between a script and a program in Python. A script is akin to the specific words spoken by actors, while a program involves broader design decisions, much like the overall production aspects of a theater performance.
- **Importance of Comments:** In Python, it's considered good practice to start with a comment. **[[Comments]]**, denoted by the hash symbol (#), serve as notes that programmers make about the intention behind their code. They contribute to documenting the code for better understanding.
- **Hello Python Code Example:** A simple "Hello Python!" program was introduced. The code utilizes the `print` function to output a specified object to the screen. In this case, the object is the string "Hello Python!" enclosed in quotation marks.
- **Syntax in Python:** **[[Syntax]]** in Python refers to the rules that determine the correct structure of the code. The example highlighted the use of quotation marks for string data as one of the syntax rules in Python.
- **Running Python Code:** The process of running Python code involves executing the script or program, resulting in the intended output being displayed. In the provided example, the "Hello Python!" string was successfully printed to the screen.

As you progress, these foundational concepts will serve as the basis for more advanced Python programming. In the upcoming sections, you'll further explore the basic components of Python code and deepen your understanding of programming principles.

# Python environments

You can run Python through a variety of environments. These environments include notebooks, integrated development environments (IDEs), and the command line. This reading will introduce you to these environments. It will focus primarily on notebooks because this is how you'll interact with Python in this course.

## Notebooks

One way to write Python code is through a notebook. In this course, you'll interact with Python through notebooks. A **[[notebook]]** is an online interface for writing, storing, and running code. They also allow you to document information about the code. Notebook content either appears in a code cell or markdown cell.

### **Code cells**

**[[Code cells]]** are meant for writing and running code. A notebook provides a mechanism for running these code cells. Often, this is a play button located within the cell. When you run the code, its output appears after the code. 

### **Markdown cells**

**[[Markdown cells]]** are meant for describing the code. They allow you to format text in the markdown language. Markdown language is used for formatting plain text in text editors and code editors. For example, you might indicate that text should be in a certain header style. 

### **Common notebook environments**

Two common notebook environments are [Jupyter Notebook](https://jupyter.org/about)and [Google Colaboratory](https://colab.sandbox.google.com/)(or Google Colab). They allow you to run several programming languages, including Python. 

## Integrated development environments (IDEs)

Another option for writing Python code is through an **[[integrated development environment (IDE)]],** or a software application for writing code that provides editing assistance and error correction tools. Integrated development environments include a graphical user interface (GUI) that provides programmers with a variety of options to customize and build their programs. 

## Command line

The command line is another environment that allows you to run Python programs. Previously, you learned that a **[[command-line interface (CLI)]]** is a text-based user interface that uses commands to interact with the computer. By entering commands into the command line, you can access all files and directories saved on your hard drive, including files containing Python code you want to run. You can also use the command line to open a file editor and create a new Python file.

## Key takeaways

Security analysts can access Python through a variety of environments, including notebooks, integrated development environments, and the command line. In this course, you'll use notebooks, which are online interfaces for interacting with code. Notebooks contain code cells for writing and running code as well as markdown cells for plain text descriptions.
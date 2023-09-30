# Introduction to databases

**Definition of a Database**
- A **[[database]]** is defined as an organized collection of information or data.
- **[[Databases]]** are more powerful than spreadsheets and can handle massive amounts of data.
- They allow for simultaneous access by multiple users and can perform complex tasks.

**Database Organization**
- Databases are organized and structured to store data efficiently.
- **[[Relational database]]**, which we'll focus on, consist of related tables.
- These tables have fields (columns) and records (rows) containing specific data.

**Components of a Relational Database**
- Tables contain fields (columns) that represent specific attributes of the data.
- Rows (records) contain data related to the columns.
- Multiple tables can be connected if they share a common column, known as a key.

**Types of Keys in Relational Databases**
- **[[Primary Key]]**: A primary key is a column with unique values for each row, ensuring that no duplicates or empty values exist. It uniquely identifies each row in the table.
- **[[Foreign Key]]**: A foreign key is a column in one table that serves as a primary key in another table. It connects two tables and can have empty values or duplicates.

**Primary vs. Foreign Keys**
- A table can have only one primary key, but it can have multiple foreign keys.
- Primary keys ensure data uniqueness and integrity, while foreign keys establish relationships between tables.

**Introduction to SQL**
- SQL (Structured Query Language) is the language used to interact with relational databases.
- SQL allows users to perform various operations on databases, such as querying, inserting, updating, and deleting data.

This video provides a foundation for understanding the role of databases in data storage and retrieval for security analysts and introduces the concepts of tables, keys, and SQL.

In this video, we learned about SQL (Structured Query Language) and its significance for security analysts. Here's a summary of the key points covered:

# Query databases with SQL

**Definition of SQL**
- **[[SQL]]** stands for Structured Query Language.
- It's a programming language used for creating, interacting with, and retrieving data from databases.

**Understanding Queries**
- A **[[query]]** is a request for data from a database table or a combination of tables.
- Nearly all relational databases rely on some version of SQL to query data.
- SQL is an essential tool for security analysts for retrieving and analyzing data efficiently.

**SQL's Role in Security Analysis**
- SQL is instrumental in retrieving and analyzing **[[logs]]**, which are records of events within an organization's systems.
- Security analysts often need to review logs to identify anomalies, misconfigurations, or potentially malicious activities.
- SQL can efficiently search and extract relevant data from large logs, making analysis faster and more precise.

**Data Analytics with SQL**
- SQL is commonly used for basic data analytics by security analysts.
- Analysts can use SQL's filtering capabilities to support security-related decisions, identify vulnerabilities (e.g., outdated software), and determine optimal maintenance schedules (e.g., patching during low usage times).

**Importance of SQL for Security Analysts**
- SQL is a powerful tool for data retrieval, analysis, and decision-making in security analysis.
- It allows security analysts to quickly extract relevant information from vast datasets, aiding in their tasks.

SQL is a crucial skill for security analysts, as it enables efficient data querying and analysis, making it easier to identify security issues, assess vulnerabilities, and make informed decisions. The video sets the stage for hands-on SQL practice in the subsequent videos.

# SQL filtering versus Linux filtering

Previously, you explored the Linux commands that allow you to filter for specific information contained within files or directories. And, more recently, you examined how SQL helps you efficiently filter for the information you need. In this reading, you'll explore differences between the two tools as they relate to filtering. You'll also learn that one way to access SQL is through the Linux command line.

## Accessing SQL

There are many interfaces for accessing SQL and many different versions of SQL. One way to access SQL is through the Linux command line.

To access SQL from Linux, you need to type in a command for the version of SQL that you want to use. For example, if you want to access SQLite, you can enter the command sqlite3 in the command line.

After this, any commands typed in the command line will be directed to SQL instead of Linux commands.

## Differences between Linux and SQL filtering 

Although both Linux and SQL allow you to filter through data, there are some differences that affect which one you should choose.

### **[[Structure]]**

SQL offers a lot more structure than Linux, which is more free-form and not as tidy.

For example, if you wanted to access a log of employee log-in attempts, SQL would have each record separated into columns. Linux would print the data as a line of text without this organization. As a result, selecting a specific column to analyze would be easier and more efficient in SQL.

In terms of structure, SQL provides results that are more easily readable and that can be adjusted more quickly than when using Linux.

### **[[Joining tables]]**

Some security-related decisions require information from different tables. SQL allows the analyst to join multiple tables together when returning data. Linux doesn’t have that same functionality; it doesn’t allow data to be connected to other information on your computer. This is more restrictive for an analyst going through security logs.

### **Best uses**

As a security analyst, it’s important to understand when you can use which tool. Although SQL has a more organized structure and allows you to join tables, this doesn’t mean that there aren’t situations that would require you to filter data in Linux.

A lot of data used in cybersecurity will be stored in a database format that works with SQL. However, other logs might be in a format that is not compatible with SQL. For instance, if the data is stored in a text file, you cannot search through it with SQL. In those cases, it is useful to know how to filter in Linux. 

## Key takeaways

To work with SQL, you can access it from multiple different interfaces, such as the Linux command line. Both SQL and Linux allow you to filter for specific data, but SQL offers the advantages of structuring the data and allowing you to join data from multiple tables.
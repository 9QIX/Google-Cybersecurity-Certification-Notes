In this video, we performed our first SQL query to retrieve specific data from a table. Here's a summary of the key points covered:

### **Running Your First SQL Query**

**Query Objective**
- The goal of the SQL query was to determine which computer is assigned to a specific employee using the "employees" table.

**SQL Keywords: SELECT and FROM**
- SQL queries involve two essential keywords: SELECT and FROM.
- **[[SELECT]]** is used to specify which columns to return in the query result.
- **[[FROM]]** indicates the table from which the data should be retrieved.

**SQL Syntax and Case Sensitivity**
- SQL keywords are not case-sensitive, but they are commonly written in uppercase for clarity.
- Semicolons are placed at the end of SQL statements to mark the statement's termination.

**Writing the SQL Query**
- We crafted the SQL statement to select the "employee_id" and "device_id" columns from the "employees" table.
- The query syntax is straightforward and resembles everyday language.

**Running the Query**
- After entering the SQL query, we executed it, and the output displayed the relevant information, matching employees with their assigned computers.

**Selecting All Columns**
- To retrieve all columns from the table, we used an asterisk (*) after SELECT, indicating "select all."
- This allowed us to view the entire "employees" table.

**Conclusion**
- We successfully executed a basic SQL query, which is a fundamental skill for retrieving specific data from a database table.
- In the next video, we will explore adding filters to our SQL queries for more precise data retrieval.

Executing SQL queries is a foundational skill for security analysts, enabling them to extract valuable information from databases for analysis and decision-making.

# Query a database

Previously, you explored how SQL is an important tool in the world of cybersecurity and is essential when querying databases. You examined a few basic SQL queries and keywords used to extract needed information from a database. In this reading, you'll review those basic SQL queries and learn a new keyword that will help you organize your output. You'll also learn about the Chinook database, which this course uses for queries in readings and quizzes.

**Basic SQL query**
There are two essential keywords in any SQL query: `SELECT` and `FROM`. You will use these keywords every time you want to query a SQL database. Using them together helps SQL identify what data you need from a database and the table you are returning it from.

The video demonstrated this SQL query:

```sql
SELECT employee_id, device_id
FROM employees;
```

In readings and quizzes, this course uses a sample database called the Chinook database to run queries. The Chinook database includes data that might be created at a digital media company. A security analyst employed by this company might need to query this data. For example, the database contains eleven tables, including an `employees` table, a `customers` table, and an `invoices` table. These tables include data such as names and addresses.

As an example, you can run this query to return data from the `customers` table of the Chinook database:

```sql
SELECT *
FROM customers;
```

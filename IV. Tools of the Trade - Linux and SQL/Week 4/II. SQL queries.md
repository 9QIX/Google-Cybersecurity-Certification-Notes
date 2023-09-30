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

Previously, you explored how SQL is an important tool in the world of cybersecurity and is essential when querying databases. You examined a few basic SQL queries and keywords used to extract needed information from a database. In this reading, you'll review those basic SQL queries and learn a new keyword that will help you organize your output. You'll also learn about the `Chinook` database, which this course uses for queries in readings and quizzes.

## Basic SQL query

There are two essential keywords in any SQL query: `SELECT` and `FROM`. You will use these keywords every time you want to query a SQL database. Using them together helps SQL identify what data you need from a database and the table you are returning it from.

The video demonstrated this SQL query:

```sql
SELECT employee_id, device_id
FROM employees;
```

In readings and quizzes, this course uses a sample database called the `Chinook` database to run queries. The `Chinook` database includes data that might be created at a digital media company. A security analyst employed by this company might need to query this data. For example, the database contains eleven tables, including an `employees` table, a `customers` table, and an `invoices` table. These tables include data such as names and addresses.

As an example, you can run this query to return data from the `customers` table of the `Chinook` database:

```sql
SELECT customerid, city, country
FROM customers;
```
Output:
```sql
|------------|---------------------|----------------|
| CustomerId | City                | Country        |
|------------|---------------------|----------------|
| 1          | São José dos Campos | Brazil         |
| 2          | Stuttgart           | Germany        |
| 3          | Montréal            | Canada         |
| 4          | Oslo                | Norway         |
| 5          | Prague              | Czech Republic |
| 6          | Prague              | Czech Republic |
| 7          | Vienna              | Austria        |
| 8          | Brussels            | Belgium        |
| 9          | Copenhagen          | Denmark        |
| 10         | São Paulo           | Brazil         |
| 11         | São Paulo           | Brazil         |
| 12         | Rio de Janeiro      | Brazil         |
| 13         | Brasília            | Brazil         |
| 14         | Edmonton            | Canada         |
| 15         | Vancouver           | Canada         |
| 16         | Mountain View       | USA            |
| 17         | Redmond             | USA            |
| 18         | New York            | USA            |
| 19         | Cupertino           | USA            |
| 20         | Mountain View       | USA            |
| 21         | Reno                | USA            |
| 22         | Orlando             | USA            |
| 23         | Boston              | USA            |
| 24         | Chicago             | USA            |
| 25         | Madison             | USA            |
|------------|---------------------|----------------|
(Output limit exceeded, 25 of 59 total rows shown)
```

### **[[SELECT]]**

The `SELECT` keyword indicates which columns to return. For example, you can return the `customerid` column from the `Chinook` database with:

```sql
SELECT customerid
```

You can also select multiple columns by separating them with a comma. For example, if you want to return both the `customerid` and `city` columns, you should write:

```sql
SELECT customerid, city
```

If you want to return all columns in a table, you can follow the `SELECT` keyword with an asterisk (`*`). The first line in the query will be `SELECT *`.

*Note*: Although the tables you're querying in this course are relatively small, using `SELECT *` may not be advisable when working with large databases and tables; in those cases, the final output may be difficult to understand and might be slow to run.

### **[[FROM]]**

The `SELECT` keyword always comes with the `FROM` keyword. `FROM` indicates which table to query. To use the `FROM` keyword, you should write it after the `SELECT` keyword, often on a new line, and follow it with the name of the table you’re querying. If you want to return all columns from the `customers` table, you can write:

```sql
SELECT *
FROM customers;
```

When you want to end the query here, you put a semicolon (`;`) at the end to tell SQL that this is the entire query.

*Note*: Line breaks are not necessary in SQL queries, but are often used to make the query easier to understand. If you prefer, you can also write the previous query on one line as:

```sql
SELECT * FROM customers;
```

## [[ORDER BY]]

Database tables are often very complicated, and this is where other SQL keywords come in handy. `ORDER BY` is an important keyword for organizing the data you extract from a table.

`ORDER BY` sequences the records returned by a query based on a specified column or columns. This can be in either ascending or descending order.

### **Sorting in ascending order**

To use the `ORDER BY` keyword, write it at the end of the query and specify a column to base the sort on. In this example, SQL will return the `customerid`, `city`, and `country` columns from the `customers` table, and the records will be sequenced by the `city` column:

```sql
SELECT customerid, city, country
FROM customers
ORDER BY city;
```
Output:
```sql
|------------|--------------|----------------|
| CustomerId | City         | Country        |
|------------|--------------|----------------|
| 48         | Amsterdam    | Netherlands    |
| 59         | Bangalore    | India          |
| 36         | Berlin       | Germany        |
| 38         | Berlin       | Germany        |
| 42         | Bordeaux     | France         |
| 23         | Boston       | USA            |
| 13         | Brasília     | Brazil         |
| 8          | Brussels     | Belgium        |
| 45         | Budapest     | Hungary        |
| 56         | Buenos Aires | Argentina      |
| 24         | Chicago      | USA            |
| 9          | Copenhagen   | Denmark        |
| 19         | Cupertino    | USA            |
| 58         | Delhi        | India          |
| 43         | Dijon        | France         |
| 46         | Dublin       | Ireland        |
| 54         | Edinburgh    | United Kingdom |
| 14         | Edmonton     | Canada         |
| 26         | Fort Worth   | USA            |
| 37         | Frankfurt    | Germany        |
| 31         | Halifax      | Canada         |
| 44         | Helsinki     | Finland        |
| 34         | Lisbon       | Portugal       |
| 52         | London       | United Kingdom |
| 53         | London       | United Kingdom |
|------------|--------------|----------------|
(Output limit exceeded, 25 of 59 total rows shown)
```


The `ORDER BY` keyword sorts the records based on the column specified after this keyword. By default, as shown in this example, the sequence will be in ascending order. This means:
- If you choose a column containing numeric data, it sorts the output from the smallest to largest. For example, if sorting on `customerid`, the ID numbers are sorted from smallest to largest.

- If the column contains alphabetic characters, such as in the example with the `city` column, it orders the records from the beginning of the alphabet to the end.

### **Sorting in descending order**

You can also use the `ORDER BY` with the `DESC` keyword to sort in descending order. The `DESC` keyword is short for "descending" and tells SQL to sort numbers from largest to smallest, or alphabetically from Z to A. This can be done by following `ORDER BY` with the `DESC` keyword. For example, you can run this query to examine how the results differ when `DESC` is applied:

```sql
SELECT customerid, city, country
FROM customers
ORDER BY city DESC;
```
Output:
```sql
|------------|---------------------|----------------|
| CustomerId | City                | Country        |
|------------|---------------------|----------------|
| 33         | Yellowknife         | Canada         |
| 32         | Winnipeg            | Canada         |
| 49         | Warsaw              | Poland         |
| 7          | Vienne              | Austria        |
| 15         | Vancouver           | Canada         |
| 27         | Tucson              | USA            |
| 29         | Toronto             | Canada         |
| 10         | São Paulo           | Brazil         |
| 11         | São Paulo           | Brazil         |
| 1          | São José dos Campos | Brazil         |
| 2          | Stuttgart           | Germany        |
| 51         | Stockholm           | Sweden         |
| 55         | Sidney              | Australia      |
| 57         | Santiago            | Chile          |
| 28         | Salt Lake City      | USA            |
| 47         | Rome                | Italy          |
| 12         | Rio de Janeiro      | Brazil         |
| 21         | Reno                | USA            |
| 17         | Redmond             | USA            |
| 5          | Prague              | Czech Republic |
| 6          | Prague              | Czech Republic |
| 35         | Porto               | Portugal       |
| 39         | Paris               | France         |
| 40         | Paris               | France         |
| 30         | Ottawa              | Canada         |
|------------|---------------------|----------------|
(Output limit exceeded, 25 of 59 total rows shown)
```

Now, cities at the end of the alphabet are listed first.

### **Sorting based on multiple columns**

You can also choose multiple columns to order by. For example, you might first choose the `country` and then the `city` column. SQL then sorts the output by country, and for rows with the same country, it sorts them based on city. You can run this to explore how SQL displays this:

```sql
SELECT customerid, city, country
FROM customers
ORDER BY country, city;
```
Output:
```sql
|------------|---------------------|----------------|
| CustomerId | City                | Country        |
|------------|---------------------|----------------|
| 33         | Yellowknife         | Canada         |
| 32         | Winnipeg            | Canada         |
| 49         | Warsaw              | Poland         |
| 7          | Vienne              | Austria        |
| 15         | Vancouver           | Canada         |
| 27         | Tucson              | USA            |
| 29         | Toronto             | Canada         |
| 10         | São Paulo           | Brazil         |
| 11         | São Paulo           | Brazil         |
| 1          | São José dos Campos | Brazil         |
| 2          | Stuttgart           | Germany        |
| 51         | Stockholm           | Sweden         |
| 55         | Sidney              | Australia      |
| 57         | Santiago            | Chile          |
| 28         | Salt Lake City      | USA            |
| 47         | Rome                | Italy          |
| 12         | Rio de Janeiro      | Brazil         |
| 21         | Reno                | USA            |
| 17         | Redmond             | USA            |
| 5          | Prague              | Czech Republic |
| 6          | Prague              | Czech Republic |
| 35         | Porto               | Portugal       |
| 39         | Paris               | France         |
| 40         | Paris               | France         |
| 30         | Ottawa              | Canada         |
|------------|---------------------|----------------|
(Output limit exceeded, 25 of 59 total rows shown)
```

## Key takeaways

`SELECT` and `FROM` are important keywords in SQL queries. You use `SELECT` to indicate which columns to return and `FROM` to indicate which table to query. You can also include `ORDER BY` in your query to organize the output. These foundational SQL skills will support you as you move into more advanced queries.

In this video, we learned how to apply filters to SQL queries to retrieve specific data from a database. Here's a summary of the key concepts covered:

### **Filtering Data in SQL**

**Understanding Filtering**
- **[[Filtering]]** in SQL involves selecting data that matches specific conditions, allowing us to choose only the data we want.
- Analogous to selecting specific items (e.g., fresh apples) from a set (e.g., a fruit cart).

**SQL Operators**
- **[[Operators]]** are symbols or keywords used to represent operations in SQL.
- Example: The equal to operator (=) is used to compare values for equality.
- Operators allow us to define conditions for filtering data.

**WHERE Clause**
- The **[[WHERE]]** clause is used to apply conditions for filtering in SQL queries.
- It follows the SELECT and FROM clauses and specifies the condition based on operators.
- For example, to find all login attempts made in the United States, we use the condition "country = 'USA'" in the WHERE clause.

**Filtering Based on Patterns with LIKE**
- We can use the **[[LIKE]]** operator to filter data based on patterns rather than exact matches.
- The percentage sign (%) acts as a wildcard for unspecified characters.
- For example, "LIKE 'East%'" would match all values in the "office" column that start with "East."

**Using the LIKE Operator**
- The LIKE operator is used in a WHERE clause to search for patterns in a column.
- It allows for more flexible filtering based on partial matches.
- For example, "WHERE country LIKE 'US%'" would match entries with "US" or "USA" in the "country" column.

**Conclusion**
- Filtering data in SQL enables us to retrieve specific records that meet defined criteria.
- We can use operators and conditions to create precise filters, allowing for tailored data retrieval.
- SQL's filtering capabilities are valuable for security analysts to extract relevant information from databases efficiently.

By mastering filtering in SQL, security analysts can efficiently extract and analyze data from databases to support various security-related tasks and decisions.

# The WHERE clause and basic operators

Previously, you focused on how to refine your SQL queries by using the `WHERE` clause to filter results. In this reading, you’ll further explore how to use the `WHERE` clause, the `LIKE` operator and the percentage sign (`%`) wildcard. You’ll also be introduced to the underscore (`_`), another wildcard that can help you filter queries.

## How filtering helps

Previously, you focused on how to refine your SQL queries by using the `WHERE` clause to filter results. In this reading, you’ll further explore how to use the `WHERE` clause, the `LIKE` operator and the percentage sign (`%`) wildcard. You’ll also be introduced to the underscore (`_`), another wildcard that can help you filter queries.

## How filtering helps

As a security analyst, you'll often be responsible for working with very large and complicated security logs. To find the information you need, you'll often need to use SQL to filter the logs.

In a cybersecurity context, you might use filters to find the login attempts of a specific user or all login attempts made at the time of a security issue. As another example, you might filter to find the devices that are running a specific version of an application.
## [[WHERE]]

To create a filter in SQL, you need to use the keyword `WHERE`. `WHERE` indicates the condition for a filter.

If you needed to email employees with a title of IT Staff, you might use a query like the one in the following example:

```sql
SELECT firstname, lastname, title, email
FROM employees
WHERE title = 'IT Staff';
```
Output:
```sql
|-----------|----------|-----------|------------------------|
| FirstName | LastName |   Title   |         Email          |
|-----------|----------|-----------|------------------------|
|  Robert   |   King   | IT Staff  | robert@chinookcorp.com |
|   Laura   | Callahan | IT Staff  | laura@chinookcorp.com  |
|-----------|----------|-----------|------------------------|
```

Rather than returning all records in the employees table, this `WHERE` clause instructs SQL to return only those that contain 'IT Staff' in the title column. It uses the equals sign (=) operator to set this condition.

Note: You should place the semicolon (`;`) where the query ends. When you add a filter to a basic query, the semicolon is after the filter.

## Filtering for patterns

You can also filter based on a pattern. For example, you can identify entries that start or end with a certain character or characters. Filtering for a pattern requires incorporating two more elements into your `WHERE` clause:
- a wildcard
- the `LIKE` operator

### **[[Wildcards]]**

A wildcard is a special character that can be substituted with any other character. Two of the most useful wildcards are the percentage sign (`%`) and the underscore (`_`):
- The **percentage sign** substitutes for any number of other characters.
- The **underscore symbol** only substitutes for one other character.

These wildcards can be placed after a string, before a string, or in both locations depending on the pattern you’re filtering for.

The following table includes these wildcards applied to the string 'a' and examples of what each pattern would return:

Pattern | Results that could be returned
------- | --------------------------------
`'a%'` | `apple123`, `art`, `a`
`'a_'` | `as`, `an`, `a7`
`'a__'` | `ant`, `add`, `a1c`
`'%a'` | `pizza`, `Z6ra`, `a`
`'_a'` | `ma`, `1a`, `Ha`
`'%a%'` | `Again`, `back`, `a`
`'_a_'` | `Car`, `ban`, `ea7`

### **[[LIKE]]**

To apply wildcards to the filter, you need to use the `LIKE` operator instead of an equals sign (=). `LIKE` is used with `WHERE` to search for a pattern in a column.

For instance, if you want to email employees with a title of either 'IT Staff' or 'IT Manager', you can use the `LIKE` operator combined with the `%` wildcard:

```sql
SELECT lastname, firstname, title, email
FROM employees
WHERE title LIKE 'IT%';
```
Output:
```sql
|------------|-----------|-------------|-------------------------|
|  LastName  | FirstName |    Title    |         Email           |
|------------|-----------|-------------|-------------------------|
|  Mitchell  |  Michael  | IT Manager  | michael@chinookcorp.com |
|    King    |   Robert  |   IT Staff  | robert@chinookcorp.com  |
|  Callahan  |   Laura   |   IT Staff  | laura@chinookcorp.com   |
|------------|-----------|-------------|-------------------------|
```

This query returns all records with values in the title column that start with the pattern of 'IT'. This means both 'IT Staff' and 'IT Manager' are returned.

As another example, if you want to search through the invoices table to find all customers located in states with an abbreviation of 'NY', 'NV', 'NS', or 'NT', you can use the 'N_' pattern on the state column:

```sql
SELECT firstname, lastname, state, country
FROM customers
WHERE state LIKE 'N_';
```
Output:
```sql
|-----------|----------|-------|---------|
| FirstName | LastName | State | Country |
|-----------|----------|-------|---------|
| Michelle  | Brooks   | NY    | USA     |
| Kathy     | Chase    | NV    | USA     |
| Martha    | Silk     | NS    | Canada  |
| Ellie     | Sullivan | NT    | Canada  |
|-----------|----------|-------|---------|
```

This returns all the records with state abbreviations that follow this pattern.

## Key takeaways

Filters are important when refining what your query returns. WHERE is an essential keyword for adding a filter to your query.  You can also filter for patterns by combining the LIKE operator with the percentage sign (`%`) and the underscore (`_`) wildcards.

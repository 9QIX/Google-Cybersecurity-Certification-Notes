# Join tables in SQL

**Table Column Qualification**
- When working with multiple tables in SQL, you need to specify which table a column belongs to by using the syntax `table_name.column_name`.
- This is necessary when the same column name exists in more than one table.

**Primary Key and Foreign Key**
- To join tables, you typically use a primary key in one table and a foreign key in another table.
- The primary key uniquely identifies each row in a table, and the foreign key in another table establishes a link between them.

**INNER JOIN**
- An **[[INNER JOIN]]** in SQL returns rows that have matching values in a specified column in both tables.
- It combines rows from two tables based on a common column.
- In the example, an INNER JOIN between the `employees` and `machines` tables used the `employee_id` column as the common column to retrieve data from both tables.

**Handling NULL Values**
- NULL represents missing or unknown data in SQL.
- In some cases, there may be NULL values, such as machines not assigned to any employee.
- INNER JOIN does not include rows with NULL values in the joined column.

**Querying Multiple Tables**
- When performing an INNER JOIN, specify the tables to join, the common column, and the columns you want to retrieve in the SELECT statement.
- The common column should be fully qualified with the table name, such as `employees.employee_id` and `machines.employee_id`.

By using INNER JOIN and understanding how to join tables in SQL, security analysts can combine data from multiple sources to perform more comprehensive analyses and gain deeper insights into their systems and networks. In the next video, we'll explore other types of joins that don't require an exact match between columns.
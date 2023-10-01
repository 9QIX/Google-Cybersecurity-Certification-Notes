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
- **[[NULL]]** represents missing or unknown data in SQL.
- In some cases, there may be NULL values, such as machines not assigned to any employee.
- INNER JOIN does not include rows with NULL values in the joined column.

**Querying Multiple Tables**
- When performing an INNER JOIN, specify the tables to join, the common column, and the columns you want to retrieve in the SELECT statement.
- The common column should be fully qualified with the table name, such as `employees.employee_id` and `machines.employee_id`.

By using INNER JOIN and understanding how to join tables in SQL, security analysts can combine data from multiple sources to perform more comprehensive analyses and gain deeper insights into their systems and networks. In the next video, we'll explore other types of joins that don't require an exact match between columns.

### **Types of SQL Joins**

**[[LEFT JOIN]]:**
- Returns all records from the left (first) table and only the matching rows from the right (second) table.
- If there is no match in the right table, columns from the right table contain NULL values.
- Useful for situations where you want all records from one table and only matching records from the other.

**[[RIGHT JOIN]]:**
- Returns all records from the right (second) table and only the matching rows from the left (first) table.
- If there is no match in the left table, columns from the left table contain NULL values.
- Less commonly used than LEFT JOIN but still valuable when needed.

**[[FULL OUTER JOIN]]:**
- Returns all records from both tables.
- If there is no match in one of the tables, columns from that table contain NULL values in the result.
- Useful when you want all records from both tables and need to see unmatched rows from both.

**Syntax for Joins:**
- To implement LEFT JOIN, RIGHT JOIN, or FULL OUTER JOIN in SQL, you use the same structure as INNER JOIN.
- Use the keywords LEFT JOIN, RIGHT JOIN, or FULL OUTER JOIN to specify the type of join.
- The specified column(s) for the join condition determine which rows are matched.

As a security analyst, understanding these different types of joins allows you to combine and analyze data from multiple sources effectively. Depending on your specific analytical needs, you can choose the appropriate type of join to retrieve the desired results.

# Compare types of joins

## Inner joins

The first type of join that you might perform is an inner join. `INNER JOIN` returns rows matching on a specified column that exists in more than one table.

![Diagramme de Venn proposant deux cercles étiquetés « left table » et « right table ». L'intersection est mise en surbrillance](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/9y5ZKSySQTuS5RQ-MJLXrA_6b756cb30b9442c8ae576607a6ab3ff1_CS_R-080_Inner-joins.png?expiry=1696291200000&hmac=uawgJOaRDVi83Vq-Lmmyk35bk8NeaDZShq-ZoBgWAkU)

It only returns the rows where there is a match, but like other types of joins, it returns all specified columns from all joined tables. For example, if the query joins two tables with `SELECT *`, all columns in both of the tables are returned.

*Note: If a column exists in both of the tables, it is returned twice when `SELECT *` is used.*

### The syntax of an inner join

To write a query using `INNER JOIN`, you can use the following syntax:

```sql
SELECT *
FROM employees
INNER JOIN machines ON employees.device_id = machines.device_id;
```
Output:
```sql
+------------+-----------+-----------+------------+-----------+------------------+
| EmployeeId | FirstName | LastName  | Device_Id  | Device_Id | MachineName      |
+------------+-----------+-----------+------------+-----------+------------------+
| 1          | John      | Doe       | 101        | 101       | Workstation_A    |
| 2          | Jane      | Smith     | 102        | 102       | Laptop_XYZ       |
| 3          | Alice     | Johnson   | 103        | 103       | Desktop_123      |
| 4          | Bob       | Brown     | 104        | 104       | Laptop_ABC       |
| 5          | Carol     | Williams  | 105        | 105       | Workstation_Z    |
+------------+-----------+-----------+------------+-----------+------------------+
```

You must specify the two tables to join by including the first or left table after `FROM` and the second or right table after `INNER JOIN`.

After the name of the right table, use the `ON` keyword and the = operator to indicate the column you are joining the tables on. It's important that you specify both the table and column names in this portion of the join by placing a period (`.`) between the table and the column.

In addition to selecting all columns, you can select only certain columns. For example, if you only want the join to return the `username`, `operating_system`, and `device_id` columns, you can write this query:

```sql
SELECT username, operating_system, employees.device_id
FROM employees
INNER JOIN machines ON employees.device_id = machines.device_id;
```
Output:
```sql
+------------+-------------------+------------+
| username   | operating_system | device_id  |
+------------+-------------------+------------+
| johndoe    | Windows 10       | 101        |
| janesmith  | macOS            | 102        |
| alicej     | Windows 7        | 103        |
| bobbrown   | Linux            | 104        |
| carolw     | Windows 10       | 105        |
+------------+-------------------+------------+

```

*Note: In the example query, `username` and `operating_system` only appear in one of the two tables, so they are written with just the column name. On the other hand, because `device_id` appears in both tables, it's necessary to indicate which one to return by specifying both the table and column name (`employees.device_id`).*

**Outer joins**

Outer joins expand what is returned from a join. Each type of outer join returns all rows from either one table or both tables.

**Left joins**

When joining two tables, `LEFT JOIN` returns all the records of the first table, but only returns rows of the second table that match on a specified column.

**The syntax for using LEFT JOIN is demonstrated in the following query:**

```sql
SELECT *
FROM employees
LEFT JOIN machines ON employees.device_id = machines.device_id;
```

As with all joins, you should specify the first or left table as the table that comes after `FROM` and the second or right table as the table that comes after `LEFT JOIN`. In the example query, because `employees` is the left table, all of its records are returned. Only records that match on the `device_id` column are returned from the right table, `machines`.

**Right joins**

When joining two tables, `RIGHT JOIN` returns all of the records of the second table, but only returns rows from the first table that match on a specified column.

**The following query demonstrates the syntax for RIGHT JOIN:**

```sql
SELECT *
FROM employees
RIGHT JOIN machines ON employees.device_id = machines.device_id;
```

`RIGHT JOIN` has the same syntax as `LEFT JOIN`, with the only difference being the keyword `RIGHT JOIN` instructs SQL to produce different output. The query returns all records from `machines`, which is the second or right table. Only matching records are returned from `employees`, which is the first or left table.

*Note: You can use `LEFT JOIN` and `RIGHT JOIN` and return the exact same results if you use the tables in reverse order. All that you have to do is switch the order of the tables that appear before and after the keyword used for the join, and you will have swapped the left and right tables.*

**Full outer joins**

`FULL OUTER JOIN` returns all records from both tables. You can think of it as a way of completely merging two tables.

**You can review the syntax for using FULL OUTER JOIN in the following query:**

```sql
SELECT *
FROM employees
FULL OUTER JOIN machines ON employees.device_id = machines.device_id;
```

The results of a `FULL OUTER JOIN` query include all records from both tables. Similar to `INNER JOIN`, the order of tables does not change the results of the query.
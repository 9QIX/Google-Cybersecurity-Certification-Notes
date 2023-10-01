**INNER JOIN**
- An **[[INNER JOIN]]** in SQL returns rows that have matching values in a specified column in both tables.
- It combines rows from two tables based on a common column.
- In the example, an INNER JOIN between the `employees` and `machines` tables used the `employee_id` column as the common column to retrieve data from both tables.

### The syntax of an **[[inner join]]**

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
| username   | operating_system  | device_id  |
+------------+-------------------+------------+
| johndoe    | Windows 10        | 101        |
| janesmith  | macOS             | 102        |
| alicej     | Windows 7         | 103        |
| bobbrown   | Linux             | 104        |
| carolw     | Windows 10        | 105        |
+------------+-------------------+------------+
```

*Note: In the example query, `username` and `operating_system` only appear in one of the two tables, so they are written with just the column name. On the other hand, because `device_id` appears in both tables, it's necessary to indicate which one to return by specifying both the table and column name (`employees.device_id`).*

### [[Left joins]]

When joining two tables, `LEFT JOIN` returns all the records of the first table, but only returns rows of the second table that match on a specified column.

![Diagramme de Venn proposant deux cercles étiquetés « left table » et « right table ». Le cercle de gauche et l'intersection s](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/GsYCwSiOSMmymUqPUAQJ5w_5beed7e470c546fca088a83dfd9465f1_CS_R-080_Left-joins.png?expiry=1696291200000&hmac=x98Kto2G8eszozN5R-9MTdu9R4K9ORWbnGwuk5Y-WGA)

**The syntax for using LEFT JOIN is demonstrated in the following query:**

```sql
SELECT *
FROM employees
LEFT JOIN machines ON employees.device_id = machines.device_id;
```
Output:
```sql
+--------+-----------+-------------+------------+-------------------+--------------+-------------------+
| emp_id | username  | first_name  | last_name  | email             | device_id    | operating_system |
+--------+-----------+-------------+------------+-------------------+--------------+-------------------+
| 1      | johndoe   | John        | Doe        | johndoe@email.com | 101          | Windows 10       |
| 2      | janesmith | Jane        | Smith      | janesmith@email.com| 102          | macOS            |
| 3      | alicej    | Alice       | Johnson    | alicej@email.com  | 103          | Windows 7        |
| 4      | bobbrown  | Bob         | Brown      | bobbrown@email.com| 104          | Linux            |
| 5      | carolw    | Carol       | White      | carolw@email.com  | NULL         | NULL              |
+--------+-----------+-------------+------------+-------------------+--------------+-------------------+
```

As with all joins, you should specify the first or left table as the table that comes after `FROM` and the second or right table as the table that comes after `LEFT JOIN`. In the example query, because `employees` is the left table, all of its records are returned. Only records that match on the `device_id` column are returned from the right table, `machines`.

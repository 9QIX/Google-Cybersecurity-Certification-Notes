### [[Full outer joins]]

`FULL OUTER JOIN` returns all records from both tables. You can think of it as a way of completely merging two tables.

![Diagramme de Venn proposant 2 cercles étiquetés « left table » et « right table ». Les deux cercles sont en surbrillance.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/oRzF__GaTqSGMmUqXKbSrQ_92db9841a00244c2aa214e60bb07f1f1_CS_R-080_FULL-OUTER-JOIN.png?expiry=1696291200000&hmac=V-PFH71FklEvPZ2Dy0NjoaQpTVhR4qfcuLDHkoL4Sys)

**You can review the syntax for using FULL OUTER JOIN in the following query:**

```sql
SELECT *
FROM employees
FULL OUTER JOIN machines ON employees.device_id = machines.device_id;
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
| NULL   | NULL      | NULL        | NULL       | NULL              | 105          | Ubuntu           |
| NULL   | NULL      | NULL        | NULL       | NULL              | 106          | Windows 10       |
+--------+-----------+-------------+------------+-------------------+--------------+-------------------+
```

The results of a `FULL OUTER JOIN` query include all records from both tables. Similar to `INNER JOIN`, the order of tables does not change the results of the query.
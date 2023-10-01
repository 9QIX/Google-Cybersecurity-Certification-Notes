### **[[BETWEEN]]**

Another operator used for numeric data as well as date and time data is the `BETWEEN` operator. `BETWEEN` filters for numbers or dates within a range. For example, if you want to find the first and last names of all employees hired between January 1, 2002 and January 1, 2003, you can use the `BETWEEN` operator as follows:

```sql
SELECT firstname, lastname, hiredate
FROM employees
WHERE hiredate BETWEEN '2002-01-01' AND '2003-01-01';
```
Output:
```sql
+-----------+----------+---------------------+
| FirstName | LastName | HireDate            |
+-----------+----------+---------------------+
| Andrew    | Adams    | 2002-08-14 00:00:00 |
| Nancy     | Edwards  | 2002-05-01 00:00:00 |
| Jane      | Peacock  | 2002-04-01 00:00:00 |
+-----------+----------+---------------------+
```

**Note:** The `BETWEEN` operator is inclusive. This means records with a `hiredate` of January 1, 2002 or January 1, 2003 are included in the results of the previous query.
**[[FROM]]** indicates the table from which the data should be retrieved.
### **[[FROM]]**

The `SELECT` keyword always comes with the `FROM` keyword. `FROM` indicates which table to query. To use the `FROM` keyword, you should write it after the `SELECT` keyword, often on a new line, and follow it with the name of the table you’re querying. If you want to return all columns from the `customers` table, you can write:

```sql
SELECT *
FROM customers;
```

When you want to end the query here, you put a semicolon (;) at the end to tell SQL that this is the entire query.

*Note*: Line breaks are not necessary in SQL queries, but are often used to make the query easier to understand. If you prefer, you can also write the previous query on one line as:

```sql
SELECT * FROM customers;
```

- **[[Select]]** means to choose, customize, and capture documentation of the controls that protect an organization. 
	- An example of the select step would be keeping a playbook up-to-date or helping to manage other documentation that allows you and your team to address issues more efficiently. 

# SQL:

**[[SELECT]]** is used to specify which columns to return in the query result.

The `SELECT` keyword indicates which columns to return. For example, you can return the `customerid` column from the Chinook database with:

```sql
SELECT customerid
```

You can also select multiple columns by separating them with a comma. For example, if you want to return both the `customerid` and `city` columns, you should write:

```sql
SELECT customerid, city
```

If you want to return all columns in a table, you can follow the `SELECT` keyword with an asterisk (*). The first line in the query will be `SELECT *`.

*Note*: Although the tables you're querying in this course are relatively small, using `SELECT *` may not be advisable when working with large databases and tables; in those cases, the final output may be difficult to understand and might be slow to run.

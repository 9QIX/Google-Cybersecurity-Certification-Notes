**WHERE Clause**
- The **[[WHERE]]** clause is used to apply conditions for filtering in SQL queries.
- It follows the SELECT and FROM clauses and specifies the condition based on operators.
- For example, to find all login attempts made in the United States, we use the condition "country = 'USA'" in the WHERE clause.

## [[WHERE]]

To create a filter in SQL, you need to use the keyword `WHERE`. `WHERE` indicates the condition for a filter.

If you needed to email employees with a title of IT Staff, you might use a query like the one in the following example:

```sql
SELECT firstname, lastname, title, email
FROM employees
WHERE title = 'IT Staff';
```

Rather than returning all records in the employees table, this `WHERE` clause instructs SQL to return only those that contain 'IT Staff' in the title column. It uses the equals sign (=) operator to set this condition.

Note: You should place the semicolon (`;`) where the query ends. When you add a filter to a basic query, the semicolon is after the filter.
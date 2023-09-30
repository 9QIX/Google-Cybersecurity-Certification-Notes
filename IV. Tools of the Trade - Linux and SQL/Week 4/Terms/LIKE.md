**Filtering Based on Patterns with LIKE**
- We can use the **[[LIKE]]** operator to filter data based on patterns rather than exact matches.
- The percentage sign (%) acts as a wildcard for unspecified characters.
- For example, "LIKE 'East%'" would match all values in the "office" column that start with "East."

**Using the LIKE Operator**
- The LIKE operator is used in a WHERE clause to search for patterns in a column.
- It allows for more flexible filtering based on partial matches.
- For example, "WHERE country LIKE 'US%'" would match entries with "US" or "USA" in the "country" column.

### **[[LIKE]]**

To apply wildcards to the filter, you need to use the `LIKE` operator instead of an equals sign (=). `LIKE` is used with `WHERE` to search for a pattern in a column.

For instance, if you want to email employees with a title of either 'IT Staff' or 'IT Manager', you can use the `LIKE` operator combined with the `%` wildcard:

```sql
SELECT lastname, firstname, title, email
FROM employees
WHERE title LIKE 'IT%';
```

This query returns all records with values in the title column that start with the pattern of 'IT'. This means both 'IT Staff' and 'IT Manager' are returned.

As another example, if you want to search through the invoices table to find all customers located in states with an abbreviation of 'NY', 'NV', 'NS', or 'NT', you can use the 'N_' pattern on the state column:

```sql
SELECT firstname, lastname, state, country
FROM customers
WHERE state LIKE 'N_';
```

This returns all the records with state abbreviations that follow this pattern.
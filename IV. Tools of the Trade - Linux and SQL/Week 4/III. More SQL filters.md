# Filter dates and numbers

**Common Data Types in Databases**
- Databases often contain data of three common types: string, numeric, and date and time.
- **[[String Data]]**: Consists of an ordered sequence of characters, including numbers, letters, or symbols (e.g., user names like "analyst10").
- **[[Numeric Data]]**: Comprises numbers that can be used in mathematical operations (e.g., counts of log-in attempts).
- **[[Date and Time Data]]**: Represents dates and/or times (e.g., timestamps for log-in attempts or patch dates).

**Using Numeric and Date/Time Data in Queries**
- As a security analyst, you may need to query numeric data (e.g., for counts) or date and time data (e.g., timestamps).
- Common operators for filtering numeric and date/time data include equals, greater than, less than, not equal to, greater than or equal to, and less than or equal to.

**Filtering Date and Time Data**
- To filter date and time data, you can use operators like greater than or less than. For example, to find log-in attempts after 6 pm, use the greater than operator with '18:00' (6 pm in SQL format).

**Using the BETWEEN Operator**
- The BETWEEN operator allows filtering for numeric or date/time values within a specified range.
- For example, you can find all patches installed between specific dates by using BETWEEN.

**Syntax for Filtering**
- When filtering strings, dates, and times, use quotation marks (e.g., 'value') to specify conditions.
- For numeric data, no quotation marks are needed.

**Example Queries**
- To find log-in attempts after 6 pm: `SELECT * FROM log_in_attempts WHERE time > '18:00';`
- To find patches installed between March 1st, 2021, and September 1st, 2021: `SELECT * FROM machines WHERE OS_patch_date BETWEEN '2021-03-01' AND '2021-09-01';`

By understanding how to work with different data types and apply filters in SQL queries, security analysts can extract valuable insights from databases, enabling them to make informed decisions and identify potential security threats. In the next video, we'll explore how to use multiple conditions in a single query to further refine data retrieval.

# Operators for filtering dates and numbers

Previously, you examined operators like less than (`<`) or greater than (`>`) and explored how they can be used in filtering numeric and date and time data types. This reading summarizes what you learned and provides new examples of using operators in filters.

## Numbers, dates, and times in cybersecurity

Security analysts work with more than just **string data**, or data consisting of an ordered sequence of characters. 

They also frequently work with **numeric data**, or data consisting of numbers. A few examples of numeric data that you might encounter in your work as a security analyst include:

- the number of login attempts
- the count of a specific type of log entry
- the volume of data being sent from a source
- the volume of data being sent to a destination

You'll also encounter **date and time data**, or data representing a date and/or time. As a first example, logs will generally timestamp every record. Other time and date data might include:

- login dates
- login times
- dates for patches 
- the duration of a connection

## Comparison operators

In SQL, filtering numeric and date and time data often involves operators. You can use the following operators in your filters to make sure you return only the rows you need:

|**operator**|**use**|
|---|---|
|<|less than|
|>|greater than|
|=|equal to|
|<=|less than or equal to|
|>=|greater than or equal to|
|<> / !=|not equal to|

### Incorporating operators into filters

These comparison operators are used in the `WHERE` clause at the end of a query. The following query uses the `>` operator to filter the `birthdate` column. You can run this query to explore its output:

```sql
SELECT firstname, lastname, birthdate
FROM employees
WHERE birthdate > '1970-01-01';
```
Output:
```sql
+-----------+----------+---------------------+
| FirstName | LastName | BirthDate           |
+-----------+----------+---------------------+
| Jane      | Peacock  | 1973-08-29 00:00:00 |
| Michael   | Mitchell | 1973-07-01 00:00:00 |
| Robert    | King     | 1970-05-29 00:00:00 |
+-----------+----------+---------------------+
```

This query returns the first and last names of employees born after, but not on, `'1970-01-01'` (or January 1, 1970). If you were to use the `>=` operator instead, the results would also include results on exactly `'1970-01-01'`.

In other words, the `>` operator is exclusive and the `>=` operator is inclusive.  An **[[exclusive operator]]** is an operator that does not include the value of comparison. An **[[inclusive operator]]** is an operator that includes the value of comparison.

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

## Key takeaways

Operators are important when filtering numeric and date and time data. These include exclusive operators such as `<` and inclusive operators such as  `<=.` The `BETWEEN` operator, another inclusive operator, helps you return the data you need within a range.

In this video, we explored how to use SQL operators, specifically the AND, OR, and NOT operators, to filter queries with multiple conditions. Here's a summary of the key concepts covered:

# Filters with AND, OR, and NOT

**Using the AND Operator**
- The **[[AND operator]]** in SQL specifies that both conditions must be met simultaneously.
- It is used when you want to select data that satisfies multiple conditions at the same time.
- For example, to find machines with both Operating System 1 and Email Client 1, you would use the AND operator: `SELECT * FROM machines WHERE operating_system = 'OS 1' AND email_client = 'Email Client 1';`

**Using the OR Operator**
- The **[[OR operator]]** in SQL specifies that either condition can be met.
- It is used when you want to select data that satisfies at least one of the conditions.
- For example, to find machines with either Operating System 1 or Operating System 3 (for patching purposes), you would use the OR operator: `SELECT * FROM machines WHERE operating_system = 'OS 1' OR operating_system = 'OS 3';`

**Using the NOT Operator**
- The **[[NOT operator]]** in SQL negates a condition, selecting data that does not match the specified condition.
- It is used when you want to exclude certain data from the results.
- For example, to update all devices in your company except those running Operating System 3, you would use the NOT operator: `SELECT * FROM machines WHERE NOT operating_system = 'OS 3';`

**Visualizing Operators with Venn Diagrams**
- Venn diagrams can be used to visualize the effects of operators. The filled-in portion outside a circle represents data that does not match the condition within that circle.

By understanding how to use these operators in SQL queries, security analysts can create more complex and precise filters to retrieve the specific data needed for their analysis. In the next video, we'll explore how to combine and join tables together to further expand the types of queries that can be performed.
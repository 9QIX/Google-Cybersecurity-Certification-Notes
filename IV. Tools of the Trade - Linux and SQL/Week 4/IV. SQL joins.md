# Join tables in SQL

**Using the AND Operator**
- The **AND operator** in SQL specifies that both conditions must be met simultaneously.
- It is used when you want to select data that satisfies multiple conditions at the same time.
- For example, to find machines with both Operating System 1 and Email Client 1, you would use the AND operator: `SELECT * FROM machines WHERE operating_system = 'OS 1' AND email_client = 'Email Client 1';`

**Using the OR Operator**
- The **OR operator** in SQL specifies that either condition can be met.
- It is used when you want to select data that satisfies at least one of the conditions.
- For example, to find machines with either Operating System 1 or Operating System 3 (for patching purposes), you would use the OR operator: `SELECT * FROM machines WHERE operating_system = 'OS 1' OR operating_system = 'OS 3';`

**Using the NOT Operator**
- The **NOT operator** in SQL negates a condition, selecting data that does not match the specified condition.
- It is used when you want to exclude certain data from the results.
- For example, to update all devices in your company except those running Operating System 3, you would use the NOT operator: `SELECT * FROM machines WHERE NOT operating_system = 'OS 3';`

**Visualizing Operators with Venn Diagrams**
- Venn diagrams can be used to visualize the effects of operators. The filled-in portion outside a circle represents data that does not match the condition within that circle.

By understanding how to use these operators in SQL queries, security analysts can create more complex and precise filters to retrieve the specific data needed for their analysis. In the next video, we'll explore how to combine and join tables together to further expand the types of queries that can be performed.
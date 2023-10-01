**Using the OR Operator**
- The **[[OR operator]]** in SQL specifies that either condition can be met.
- It is used when you want to select data that satisfies at least one of the conditions.
- For example, to find machines with either Operating System 1 or Operating System 3 (for patching purposes), you would use the OR operator: `SELECT * FROM machines WHERE operating_system = 'OS 1' OR operating_system = 'OS 3';`
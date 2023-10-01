### [[Right joins]]

When joining two tables, `RIGHT JOIN` returns all of the records of the second table, but only returns rows from the first table that match on a specified column.

![Diagramme de Venn proposant 2 cercles étiquetés « left table » et « right table ». Le cercle de droite et l'intersection s](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/YHXRMOLiQheppUjthmM5yQ_cfb18a8315e34357bd1299f7eefafcf1_CS_R-080_Right-joins.png?expiry=1696291200000&hmac=RKesx0CmOOdsk8gO_mW3qwterQJ1JpVew8Z0eSS30-8)

**The following query demonstrates the syntax for RIGHT JOIN:**

```sql
SELECT *
FROM employees
RIGHT JOIN machines ON employees.device_id = machines.device_id;
```

`RIGHT JOIN` has the same syntax as `LEFT JOIN`, with the only difference being the keyword `RIGHT JOIN` instructs SQL to produce different output. The query returns all records from `machines`, which is the second or right table. Only matching records are returned from `employees`, which is the first or left table.

*Note: You can use `LEFT JOIN` and `RIGHT JOIN` and return the exact same results if you use the tables in reverse order. All that you have to do is switch the order of the tables that appear before and after the keyword used for the join, and you will have swapped the left and right tables.*
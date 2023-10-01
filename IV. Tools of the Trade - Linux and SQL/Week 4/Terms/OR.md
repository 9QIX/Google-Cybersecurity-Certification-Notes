### [[OR]]

The `OR` operator also connects two conditions, but `OR` specifies that either condition can be met. It returns results where the first condition, the second condition, or both are met.

For example, if you are responsible for finding all customers who are either in the USA or Canada so that you can communicate information about a security update, you can use an `OR` operator to find all the needed records. As the following query demonstrates, you should place the two conditions on either side of the `OR` operator in the `WHERE` clause:

```sql
SELECT firstname, lastname, email, country
FROM customers
WHERE country = 'Canada' OR country = 'USA';
```
Output:
```sql
+-----------+------------+--------------------------+---------+
| FirstName | LastName   | Email                    | Country |
+-----------+------------+--------------------------+---------+
| François  | Tremblay   | ftremblay@gmail.com      | Canada  |
| Mark      | Philips    | mphilips12@shaw.ca       | Canada  |
| Jennifer  | Peterson   | jenniferp@rogers.ca      | Canada  |
| Frank     | Harris     | fharris@google.com       | USA     |
| Jack      | Smith      | jacksmith@microsoft.com  | USA     |
| Michelle  | Brooks     | michelleb@aol.com        | USA     |
| Tim       | Goyer      | tgoyer@apple.com         | USA     |
| Dan       | Miller     | dmiller@comcast.com      | USA     |
| Kathy     | Chase      | kachase@hotmail.com      | USA     |
| Heather   | Leacock    | hleacock@gmail.com       | USA     |
| John      | Gordon     | johngordon22@yahoo.com   | USA     |
| Frank     | Ralston    | fralston@gmail.com       | USA     |
| Victor    | Stevens    | vstevens@yahoo.com       | USA     |
| Richard   | Cunningham | ricunningham@hotmail.com | USA     |
| Patrick   | Gray       | patrick.gray@aol.com     | USA     |
| Julia     | Barnett    | jubarnett@gmail.com      | USA     |
| Robert    | Brown      | robbrown@shaw.ca         | Canada  |
| Edward    | Francis    | edfrancis@yachoo.ca      | Canada  |
| Martha    | Silk       | marthasilk@gmail.com     | Canada  |
| Aaron     | Mitchell   | aaronmitchell@yahoo.ca   | Canada  |
| Ellie     | Sullivan   | ellie.sullivan@shaw.ca   | Canada  |
+-----------+------------+--------------------------+---------+
```

The query returns all customers in either the US or Canada.

**Note:** Even if both conditions are based on the same column, you need to write out both full conditions. For instance, the query in the previous example contains the filter `WHERE country = 'Canada' OR country = 'USA'`.
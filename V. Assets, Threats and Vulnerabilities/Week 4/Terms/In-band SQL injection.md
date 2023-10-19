### **[[In-band SQL injection]]**

In-band, or classic, SQL injection is the most common type. An in-band injection is one that uses the _same communication channel_ to launch the attack and gather the results.

For example, this might occur in the search box of a retailer's website that lets customers find products to buy. If the search box is vulnerable to injection, an attacker could enter a malicious query that would be executed in the database, causing it to return sensitive information like user passwords. The data that's returned is displayed back in the search box where the attack was initiated.
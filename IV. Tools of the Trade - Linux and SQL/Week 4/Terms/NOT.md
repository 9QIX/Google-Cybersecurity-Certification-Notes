### [[NOT]]

Unlike the previous two operators, the `NOT` operator only works on a single condition, and not on multiple ones. The `NOT` operator negates a condition. This means that SQL returns all records that don’t match the condition specified in the query. 

For example, if a cybersecurity issue doesn't affect customers in the USA but might affect those in other countries, you can return all customers who are not in the USA. This would be more efficient than creating individual conditions for all of the other countries. To use the `NOT` operator for this task, write the following query and place `NOT` directly after `WHERE`:

```sql
SELECT firstname, lastname, email, country
FROM customers
WHERE NOT country = 'USA';
```
Output:
```sql
| FirstName  | LastName     | Email                         | Country        |
|------------|--------------|-------------------------------|----------------|
| Luís       | Gonçalves    | luisg@embraer.com.br          | Brazil         |
| Leonie     | Köhler       | leonekohler@surfeu.de         | Germany        |
| François   | Tremblay     | ftremblay@gmail.com           | Canada         |
| Bjørn      | Hansen       | bjorn.hansen@yahoo.no         | Norway         |
| František  | Wichterlová  | frantisekw@jetbrains.com      | Czech Republic |
| Helena     | Holý         | hholy@gmail.com               | Czech Republic |
| Astrid     | Gruber       | astrid.gruber@apple.at        | Austria        |
| Daan       | Peeters      | daan_peeters@apple.be         | Belgium        |
| Kara       | Nielsen      | kara.nielsen@jubii.dk         | Denmark        |
| Eduardo    | Martins      | eduardo@woodstock.com.br      | Brazil         |
| Alexandre  | Rocha        | alero@uol.com.br              | Brazil         |
| Roberto    | Almeida      | roberto.almeida@riotur.gov.br | Brazil         |
| Fernanda   | Ramos        | fernadaramos4@uol.com.br      | Brazil         |
| Mark       | Philips      | mphilips12@shaw.ca            | Canada         |
| Jennifer   | Peterson     | jenniferp@rogers.ca           | Canada         |
| Robert     | Brown        | robbrown@shaw.ca              | Canada         |
| Edward     | Francis      | edfrancis@yachoo.ca           | Canada         |
| Martha     | Silk         | marthasilk@gmail.com          | Canada         |
| Aaron      | Mitchell     | aaronmitchell@yahoo.ca        | Canada         |
| Ellie      | Sullivan     | ellie.sullivan@shaw.ca        | Canada         |
| João       | Fernandes    | jfernandes@yahoo.pt           | Portugal       |
| Madalena   | Sampaio      | masampaio@sapo.pt             | Portugal       |
| Hannah     | Schneider    | hannah.schneider@yahoo.de     | Germany        |
| Fynn       | Zimmermann   | fzimmermann@yahoo.de          | Germany        |
| Niklas     | Schröder     | nschroder@surfeu.de           | Germany        |

(Output limit exceeded, 25 of 46 total rows shown)
```

SQL returns every entry where the customers are not from the USA.

**Pro tip:** Another way of finding values that are not equal to a certain value is by using the <> operator or the != operator. For example, `WHERE country <> 'USA'` and `WHERE country != 'USA'` are the same filters as `WHERE NOT country = 'USA'`.
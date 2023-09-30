### **[[Wildcards]]**

A wildcard is a special character that can be substituted with any other character. Two of the most useful wildcards are the percentage sign (`%`) and the underscore (`_`):
- The percentage sign substitutes for any number of other characters.
- The underscore symbol only substitutes for one other character.

These wildcards can be placed after a string, before a string, or in both locations depending on the pattern you’re filtering for.

The following table includes these wildcards applied to the string 'a' and examples of what each pattern would return:

Pattern | Results that could be returned
------- | --------------------------------
`'a%'` | `apple123`, `art`, `a`
`'a_'` | `as`, `an`, `a7`
`'a__'` | `ant`, `add`, `a1c`
`'%a'` | `pizza`, `Z6ra`, `a`
`'_a'` | `ma`, `1a`, `Ha`
`'%a%'` | `Again`, `back`, `a`
`'_a_'` | `Car`, `ban`, `ea7`

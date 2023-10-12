Salting adds random characters to hashed passwords. This increases the length and complexity of hash values, making them more secure.

## Adding some “salt”

Functions with larger digests are less vulnerable to collision and rainbow table attacks. But as you’re learning, no security control is perfect.

**[[Salting]]** is an additional safeguard that's used to strengthen hash functions. A _salt_ is a random string of characters that's added to data before it's hashed. The additional characters produce a more unique hash value, making salted data resilient to rainbow table attacks.

For example, a database containing passwords might have several hashed entries for the password "password." If those passwords were all salted, each entry would be completely different. That means an attacker using a rainbow table would be unable to find matching values for "password" in the database.

![Entrada del usuario introduciendo una función hash. Se agrega un conjunto aleatorio de caracteres al proceso de hash.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/VJFA9qhuRvan1_hRvGhSpg_70858cdbe6d94ad29538d1915f0e05f1_CS_R-094_Salting.png?expiry=1697241600000&hmac=pUx8oAxfiEhS43nT8XbGjH2XlG2aHyyrN454nYZKqI0)

For this reason, salting has become increasingly common when storing passwords and other types of sensitive data. The length and uniqueness of a salt is important. Similar to hash values, the longer and more complex a salt is, the harder it is to crack.
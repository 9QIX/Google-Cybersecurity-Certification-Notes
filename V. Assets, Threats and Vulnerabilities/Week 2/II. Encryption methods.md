# Fundamentals of cryptography

- **[[Personally Identifiable Information (PII)]]:** PII refers to any data that can be used to deduce an individual's identity. Examples include names, medical and financial information, photos, emails, and fingerprints.
- **[[Cryptography]]:** Cryptography is the practice of converting data into an unreadable form (ciphertext) through encryption, and then back into its original, readable form (plaintext) using decryption. It is a fundamental security control for protecting information online.
- **[[Caesar's Cipher]]:** An ancient cryptographic method attributed to Julius Caesar, which involves shifting letters in the Roman alphabet forward by a fixed number of spaces (a shift value) to encrypt a message. It is a simple algorithm used to keep messages private.
- **[[Cipher]]:** In the context of cryptography, a cipher is an algorithm used to encrypt and decrypt information.
- **[[Cryptographic Key]]:** A cryptographic key is a mechanism that is used to decrypt ciphertext. It provides information about how the ciphertext was encrypted, such as the shift value in Caesar's Cipher.
- **[[Brute Force Attack]]:** A brute force attack is a trial-and-error method for discovering private information by systematically trying all possible combinations. In the context of Caesar's Cipher, it involves attempting all 26 shift values to decrypt the message.
- **[[Key Management]]:** Properly managing cryptographic keys is a crucial part of security. Keys should be securely stored and separated from the information they decrypt to prevent unauthorized access.

The course explores the historical use of Caesar's Cipher, emphasizing its simplicity and vulnerabilities, including its reliance on a single key and the limited character set of the Roman alphabet. It mentions the concept of brute force attacks and the importance of key management. The course also hints at the use of more complex modern algorithms to secure information online, which will likely be explored in later sections.

# Public key infrastructure

- **[[Public Key Infrastructure (PKI)]]:** PKI is an encryption framework that ensures the secure exchange of information online. It offers a system that is both efficient and secure for accessing and transmitting data.
	- **[[Two-Step Process]]:** PKI involves a two-step process that begins with the exchange of encrypted information, employing either asymmetric encryption, symmetric encryption, or both.
		- **[[Asymmetric Encryption]]:** Asymmetric encryption uses a pair of keys—a public key for adding items to a virtual "box" and a private key for unlocking the box to remove items. Public keys can be shared and copied for data exchange, while private keys are kept secret.
		- **[[Symmetric Encryption]]:** In symmetric encryption, the same key is used to both lock and unlock the "box." This makes communication faster but is potentially less secure.
- Public Key Infrastructure Process:
	- Exchange of encrypted information
	- Establish trust using a system of digital certificates
- **Combination of Encryption Methods:** PKI utilizes both asymmetric and symmetric encryption based on the priorities of speed and security. Asymmetric encryption is used for secure initial connections, while symmetric encryption facilitates faster back-and-forth communication.
- **Vulnerability and Trust:** Both encryption methods rely on key sharing, which can pose vulnerabilities if keys are misused, lost, or stolen. Establishing trust is a challenge in digital communication, unlike in face-to-face interactions.
- **[[Digital Certificate]]:** A digital certificate is a file used to verify the identity of a public key holder. It serves as a form of trust between computers and networks, signaling the authenticity of the public key holder.
![[Pasted image 20231012130707.png]]
- **[[Certificate Authority (CA)]]:** A certificate authority is a trusted entity that issues digital certificates. It verifies the identity of the certificate holder and creates digital certificates with its own digital signature to confirm their authenticity.

PKI combines asymmetric and symmetric encryption with digital certificates to establish trust and facilitate secure data exchange online. Digital certificates serve as digital ID badges, allowing or restricting access to information and enhancing security. The course demonstrates how PKI's two-step approach addresses trust issues and secures information exchange between trusted sources.

# Symmetric and asymmetric encryption

Previously, you learned these terms: 

- **[[Encryption]]**: the process of converting data from a readable format to an encoded format
- **[[Public key infrastructure (PKI)]]**:  an encryption framework that secures the exchange of online information
- **[[Cipher]]**: an algorithm that encrypts information

All digital information deserves to be kept private, safe, and secure. Encryption is one key to doing that! It is useful for transforming information into a form that unintended recipients cannot understand. In this reading, you’ll compare symmetric and asymmetric encryption and learn about some well-known algorithms for each.

## Types of encryption

There are two main types of encryption:

- **[[Symmetric encryption]]** is the use of a single secret key to exchange information. Because it uses one key for encryption and decryption, the sender and receiver must know the secret key to lock or unlock the cipher.
- **[[Asymmetric encryption]]** is the use of a public and private key pair for encryption and decryption of data. It uses two separate keys: a public key and a private key. The public key is used to encrypt data, and the private key decrypts it. The private key is only given to users with authorized access.

## The importance of key length

Ciphers are vulnerable to **[[brute force attack]]**, which use a trial and error process to discover private information. This tactic is the digital equivalent of trying every number in a combination lock trying to find the right one. In modern encryption, longer key lengths are considered to be more secure. Longer key lengths mean more possibilities that an attacker needs to try to unlock a cipher.

One drawback to having long encryption keys is slower processing times. Although short key lengths are generally less secure, they’re much faster to compute. Providing fast data communication online while keeping information safe is a delicate balancing act. 

## Approved algorithms

Many web applications use a combination of symmetric and asymmetric encryption. This is how they balance user experience with safeguarding information. As an analyst, you should be aware of the most widely-used algorithms.

### **Symmetric algorithms**

- _[[Triple DES (3DES)]]_ is known as a block cipher because of the way it converts plaintext into ciphertext in “blocks.” Its origins trace back to the Data Encryption Standard (DES), which was developed in the early 1970s. DES was one of the earliest symmetric encryption algorithms that generated 64-bit keys. A **[[bit]]** is the smallest unit of data measurement on a computer. As you might imagine, Triple DES generates keys that are 192 bits, or three times as long. Despite the longer keys, many organizations are moving away from using Triple DES due to limitations on the amount of data that can be encrypted. However, Triple DES is likely to remain in use for backwards compatibility purposes.   
- _[[Advanced Encryption Standard (AES)]]_ is one of the most secure symmetric algorithms today. AES generates keys that are 128, 192, or 256 bits. Cryptographic keys of this size are considered to be safe from brute force attacks. It’s estimated that brute forcing an AES 128-bit key could take a modern computer billions of years!

### **Asymmetric algorithms**

- _[[Rivest Shamir Adleman (RSA)]]_ is named after its three creators who developed it while at the Massachusetts Institute of Technology (MIT). RSA is one of the first asymmetric encryption algorithms that produces a public and private key pair. Asymmetric algorithms like RSA produce even longer key lengths. In part, this is due to the fact that these functions are creating two keys. RSA key sizes are 1,024, 2,048, or 4,096 bits. RSA is mainly used to protect highly sensitive data.
- _[[Digital Signature Algorithm (DSA)]]_ is a standard asymmetric algorithm that was introduced by NIST in the early 1990s. DSA also generates key lengths of 2,048 bits. This algorithm is widely used today as a complement to RSA in public key infrastructure.

### **Generating keys**

These algorithms must be implemented when an organization chooses one to protect their data. One way this is done is using OpenSSL, which is an open-source command line tool that can be used to generate public and private keys. OpenSSL is commonly used by computers to verify digital certificates that are exchanged as part of public key infrastructure.

**Note:** OpenSSL is just one option. There are various others available that can generate keys with any of these common algorithms. 

In early 2014, OpenSSL disclosed a vulnerability, known as the [Heartbleed bug](https://en.wikipedia.org/wiki/Heartbleed), that exposed sensitive data in the memory of websites and applications. Although unpatched versions of OpenSSL are still available, the Heartbleed bug was patched later that year (2014). Many businesses today use the secure versions of OpenSSL to generate public and private keys, demonstrating the importance of using up-to-date software.

## Obscurity is not security

In the world of cryptography, a cipher must be proven to be unbreakable before claiming that it is secure. According to [Kerchoff’s principle](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle), cryptography should be designed in such a way that all the details of an algorithm—except for the private key—should be knowable without sacrificing its security. For example, you can access all the details about how AES encryption works online and yet it is still unbreakable.

Occasionally, organizations implement their own, custom encryption algorithms. There have been instances where those secret cryptographic systems have been quickly cracked after being made public.

**Pro tip:** A cryptographic system _should not_ be considered secure if it requires secrecy around how it works.

### Encryption is everywhere

Companies use both symmetric and asymmetric encryption. They often work as a team, balancing security with user experience.

For example, websites tend to use asymmetric encryption to secure small blocks of data that are important. Usernames and passwords are often secured with asymmetric encryption while processing login requests. Once a user gains access, the rest of their web session often switches to using symmetric encryption for its speed.

Using data encryption like this is increasingly required by law. Regulations like the Federal Information Processing Standards (FIPS 140-3) and the General Data Protection Regulation (GDPR) outline how data should be collected, used, and handled. Achieving compliance with either regulation is critical to demonstrating to business partners and governments that customer data is handled responsibly.

## Key takeaways

Knowing the basics of encryption is important for all security professionals. Symmetric encryption relies on a single secret key to protect data. On the other hand, asymmetric uses a public and private key pair. Their encryption algorithms create different key sizes. Both types of encryption are used to meet compliance regulations and protect data online.

# Non-repudiation and hashing

- **[[Hash Function]]:** A hash function is an algorithm that produces a code, known as a hash value or digest, which cannot be decrypted. Unlike encryption algorithms, hash functions are one-way processes and do not generate decryption keys.
- **[[Hash Value]]:** A hash value is a unique identifier produced by a hash function, representing the content of the data being hashed.
- **[[Data Integrity]]:** Data integrity refers to the accuracy and consistency of information, ensuring that data remains unchanged and unaltered. Hash functions are essential for maintaining data integrity.
- **[[Non-Repudiation]]:** Non-repudiation is the concept that the authenticity of information cannot be denied. Hash functions play a key role in achieving non-repudiation by confirming data integrity.
- **[[Security Control]]:** Hash functions are important security controls used to determine the integrity of files and applications. Security analysts often employ them to compare hash values against known malicious files to detect alterations.
- **[[VirusTotal]]:** VirusTotal is a popular tool used by security practitioners to analyze suspicious files, domains, IPs, and URLs by comparing their hash values with known online viruses in a database.
- **[[Unique Hash Value]]:** Hash functions are designed to produce a unique hash value for each unique input. Even the slightest change in the input results in a completely different hash value.

Hash functions are crucial for maintaining data integrity, detecting unauthorized changes, and ensuring non-repudiation. They serve as a quick and effective means for comparing input and output values to validate data integrity and detect alterations. The course demonstrates the significance of hash functions as a security control to protect against vulnerabilities in data storage and transmission.

# The evolution of hash functions

Hash functions are important controls that are part of every company's security strategy. Hashing is widely used for authentication and **non-repudiation**, the concept that the authenticity of information can’t be denied.

Previously, you learned that **hash functions** are algorithms that produce a code that can't be decrypted. Hash functions convert information into a unique value that can then be used to determine its integrity. In this reading, you’ll learn about the origins of hash functions and how they’ve changed over time.

![El proceso del algoritmo de hashing. Una función hash convierte un documento de texto simple en texto con hash.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/qISzBqG7RmukCvKmeU83mg_e0d4d256b3bb41be8504685b3338fcf1_CS_R-094_Hashing-algorithm.png?expiry=1697241600000&hmac=iADzLB8i7zYPc17AFe1xlzTohumI7V9PT0kSfl9sbJU)

## Origins of hashing

Hash functions have been around since the early days of computing. They were originally created as a way to quickly search for data. Since the beginning, these algorithms have been designed to represent data of any size as small, fixed-size values, or digests. Using a hash table, which is a data structure that's used to store and reference hash values, these small values became a more secure and efficient way for computers to reference data.

One of the earliest hash functions is Message Digest 5, more commonly known as MD5. Professor Ronald Rivest of the Massachusetts Institute of Technology (MIT) developed MD5 in the early 1990s as a way to verify that a file sent over a network matched its source file.

Whether it’s used to convert a single email or the source code of an application, MD5 works by converting data into a 128-bit value. You might recall that a **bit** is the smallest unit of data measurement on a computer. Bits can either be a 0 or 1. In a computer, bits represent user input in a way that computers can interpret. In a hash table, this appears as a string of 32 characters. Altering anything in the source file generates an entirely new hash value.

Generally, the longer the hash value, the more secure it is. It wasn’t long after MD5's creation that security practitioners discovered 128-bit digests resulted in a major vulnerability.

Here is an example of how plaintext gets turned into hash values:

![Nombres convertidos en valores hash. Los valores hash se almacenan en filas aleatorias de una tabla de datos.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/4XExarUSRWuWRaIX64HrVw_2cb75b41a08b4817b5789ad39e861ff1_CS_R-094_Orgins-of-Hashing.png?expiry=1697241600000&hmac=qXf66vw6NDBeY54O2TNdN4_U8KjmASHEO69GT3SkfrI)

### **Hash collisions**

One of the flaws in MD5 happens to be a characteristic of all hash functions. Hash algorithms map any input, regardless of its length, into a fixed-size value of letters and numbers. What’s the problem with that? Although there are an infinite amount of possible inputs, there’s only a finite set of available outputs!

MD5 values are limited to 32 characters in length. Due to the limited output size, the algorithm is considered to be vulnerable to **hash collision**, an instance when different inputs produce the same hash value. Because hashes are used for authentication, a hash collision is similar to copying someone’s identity. Attackers can carry out collision attacks to fraudulently impersonate authentic data.

## Next-generation hashing

To avoid the risk of hash collisions, functions that generated longer values were needed. MD5's shortcomings gave way to a new group of functions known as the Secure Hashing Algorithms, or SHAs.

The National Institute of Standards and Technology (NIST) approves each of these algorithms. Numbers besides each SHA function indicate the size of its hash value in bits. Except for SHA-1, which produces a 160-bit digest, these algorithms are considered to be collision-resistant. However, that doesn’t make them invulnerable to other exploits.

**Five functions make up the SHA family of algorithms:**

- SHA-1
    
- SHA-224
    
- SHA-256
    
- SHA-384
    
- SHA-512
    

## Secure password storage

Passwords are typically stored in a database where they are mapped to a username. The server receives a request for authentication that contains the credentials supplied by the user. It then looks up the username in the database and compares it with the password that was provided and verifies that it matches before granting them access.

This is a safe system unless an attacker gains access to the user database. If passwords are stored in plaintext, then an attacker can steal that information and use it to access company resources. Hashing adds an additional layer of security. Because hash values can't be reversed, an attacker would not be able to steal someone's login credentials if they managed to gain access to the database.

### **Rainbow tables**

A **rainbow table** is a file of pre-generated hash values and their associated plaintext. They’re like dictionaries of weak passwords. Attackers capable of obtaining an organization’s password database can use a rainbow table to compare them against all possible values.

## Adding some “salt”

Functions with larger digests are less vulnerable to collision and rainbow table attacks. But as you’re learning, no security control is perfect.

**Salting** is an additional safeguard that's used to strengthen hash functions. A _salt_ is a random string of characters that's added to data before it's hashed. The additional characters produce a more unique hash value, making salted data resilient to rainbow table attacks.

For example, a database containing passwords might have several hashed entries for the password "password." If those passwords were all salted, each entry would be completely different. That means an attacker using a rainbow table would be unable to find matching values for "password" in the database.

![Entrada del usuario introduciendo una función hash. Se agrega un conjunto aleatorio de caracteres al proceso de hash.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/VJFA9qhuRvan1_hRvGhSpg_70858cdbe6d94ad29538d1915f0e05f1_CS_R-094_Salting.png?expiry=1697241600000&hmac=pUx8oAxfiEhS43nT8XbGjH2XlG2aHyyrN454nYZKqI0)

For this reason, salting has become increasingly common when storing passwords and other types of sensitive data. The length and uniqueness of a salt is important. Similar to hash values, the longer and more complex a salt is, the harder it is to crack.

## Key takeaways

Security professionals often use hashing as a tool to validate the integrity of program files, documents, and other types of data. Another way it’s used is to reduce the chances of a data breach. As you’ve learned, not all hashing functions provide the same level of protection. Rainbow table attacks are more likely to work against algorithms that generate shorter keys, like MD5. Many small- and medium-sized businesses still rely on MD5 to secure sensitive data. Knowing about alternative algorithms and salting better prepares you to make impactful security recommendations.
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
- **Combination of Encryption Methods:** PKI utilizes both asymmetric and symmetric encryption based on the priorities of speed and security. Asymmetric encryption is used for secure initial connections, while symmetric encryption facilitates faster back-and-forth communication.
- **Vulnerability and Trust:** Both encryption methods rely on key sharing, which can pose vulnerabilities if keys are misused, lost, or stolen. Establishing trust is a challenge in digital communication, unlike in face-to-face interactions.
- **Digital Certificate:** A digital certificate is a file used to verify the identity of a public key holder. It serves as a form of trust between computers and networks, signaling the authenticity of the public key holder.
- **Certificate Authority (CA):** A certificate authority is a trusted entity that issues digital certificates. It verifies the identity of the certificate holder and creates digital certificates with its own digital signature to confirm their authenticity.

PKI combines asymmetric and symmetric encryption with digital certificates to establish trust and facilitate secure data exchange online. Digital certificates serve as digital ID badges, allowing or restricting access to information and enhancing security. The course demonstrates how PKI's two-step approach addresses trust issues and secures information exchange between trusted sources.
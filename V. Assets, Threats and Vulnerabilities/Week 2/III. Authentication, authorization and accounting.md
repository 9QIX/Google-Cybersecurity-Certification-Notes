# Access controls and authentication systems

- **[[Access Controls]]:** Access controls are security measures that manage access, authorization, and accountability of information. They are crucial for maintaining data confidentiality, integrity, and availability.
- **AAA Framework**
	- Authentication
	- Authorization
	- Accounting
- **[[Authentication]]:** Authentication is the first component of access controls. It serves the purpose of verifying the identity of individuals or systems attempting to access information by asking, "Who are you?" Authentication relies on three factors:
	- **[[Knowledge]]:** Authentication by knowledge involves something the user knows, such as a password or a security question answer.
	- **[[Ownership]]:** Authentication by ownership pertains to something the user possesses, such as a one-time passcode (OTP) sent via text or email.
	- **[[Characteristic]]:** Authentication by characteristic is based on something the user is, such as biometrics like fingerprint or facial scans.
- **[[Matching Credentials]]:** Authentication is successful when the information provided matches the information on file. If the credentials do not match, access is denied; if they match, access is granted.
- **[[Single Sign-On (SSO)]]:** Single Sign-On is a technology that combines various logins into a single login, reducing the need for users to authenticate repeatedly. SSO streamlines the authentication process, but it can pose vulnerabilities when used alone.
- **[[Multi-Factor Authentication (MFA)]]:** Multi-Factor Authentication is a security measure that requires users to verify their identity in two or more ways, combining multiple independent credentials (e.g., knowledge and ownership) to prove their identity. MFA enhances security by adding additional authentication layers.
- **[[Layered Defense]]:** Organizations often use Single Sign-On and Multi-Factor Authentication together to enhance the defense capabilities of authentication systems. This combination ensures both convenience and security in access control.

Authentication is a foundational element of access controls, helping to ensure that only authorized individuals or systems gain access to information. The course provides an introduction to authentication, highlighting its importance in data security, and prepares for exploring the next component of access controls, which is authorization.
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

# The rise of SSO and MFA

Most companies help keep their data safely locked up behind authentication systems. Usernames and passwords are the keys that unlock information for most organizations. But are those credentials enough? Information security often focuses on managing a user's access of, and authorization to, information.

Previously, you learned about the three factors of authentication: knowledge, ownership, and characteristic. Single sign-on (SSO) and multi-factor authentication (MFA) are two technologies that have become popular for implementing these authentication factors. In this reading, you’ll learn how these technologies work and why companies are adopting them.

## A better approach to authentication

**[[Single sign-on (SSO)]]** is a technology that combines several different logins into one. More companies are turning to SSO as a solution to their authentication needs for three reasons:

1. **SSO improves the user experience** by eliminating the number of usernames and passwords people have to remember.
2. **Companies can lower costs** by streamlining how they manage connected services.
3. **SSO improves overall security** by reducing the number of access points attackers can target.

This technology became available in the mid-1990s as a way to combat _[[password fatigue]]_, which refers to people’s tendency to reuse passwords across services. Remembering many different passwords can be a challenge, but using the same password repeatedly is a major security risk. SSO solves this dilemma by shifting the burden of authentication away from the user.

## How SSO works

SSO works by automating how trust is established between a user and a service provider. Rather than placing the responsibility on an employee or customer, SSO solutions use trusted third-parties to prove that a user is who they claim to be. This is done through the exchange of encrypted access tokens between the identity provider and the service provider.

Similar to other kinds of digital information, these access tokens are exchanged using specific protocols. SSO implementations commonly rely on two different authentication protocols: LDAP and SAML. LDAP, which stands for Lightweight Directory Access Protocol, is mostly used to transmit information on-premises; SAML, which stands for Security Assertion Markup Language, is mostly used to transmit information off-premises, like in the cloud.

**Note:** LDAP and SAML protocols are often used together.

Here's an example of how SSO can connect a user to multiple applications with one access token:

![Un usuario se conecta a varias aplicaciones con un token de acceso.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/IaWbLEaURvGv7k6ZSOjbRg_c43ff4ecdca147cca2f5351aaaa917f1_image2.png?expiry=1697241600000&hmac=doESyAh4dQzavLwQ9MwwPMYbGg2bgyvXEehw0ysGyS0)

## Limitations of SSO

Usernames and passwords alone are not always the most secure way of protecting sensitive information. SSO provides useful benefits, but there’s still the risk associated with using one form of authentication. For example, a lost or stolen password could expose information across multiple services. Thankfully, there’s a solution to this problem.

## MFA to the rescue

**[[Multi-factor authentication (MFA)]]** requires a user to verify their identity in two or more ways to access a system or network. In a sense, MFA is similar to using an ATM to withdraw money from your bank account. First, you insert a debit card into the machine as one form of identification. Then, you enter your PIN number as a second form of identification. Combined, both steps, or factors, are used to verify your identity before authorizing you to access the account.

![La ecuación muestra que el inicio de sesión del usuario más dispositivos biométricos o físicos dan por resultado el acceso.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/hNHsmtDZRI28CtisHKRAew_cedbe22c98dc4ef095d8b8884cf689f1_CS_R-095_mfa-equation.png?expiry=1697241600000&hmac=z2eQV_3Mtqzrbi_lkxO0ITJFXKxECdljVyhpAUez4dA)

## Strengthening authentication

MFA builds on the benefits of SSO. It works by having users prove that they are who they claim to be. The user must provide two factors (2FA) or three factors (3FA) to authenticate their identification. The MFA process asks users to provide these proofs, such as:

- **Something a user knows:** most commonly a username and password
- **Something a user has:** normally received from a service provider, like a one-time passcode (OTP) sent via SMS
- **Something a user is:** refers to physical characteristics of a user, like their fingerprints or facial scans

Requiring multiple forms of identification is an effective security measure, especially in cloud environments. It can be difficult for businesses in the cloud to ensure that the users remotely accessing their systems are not threat actors. MFA can reduce the risk of authenticating the wrong users by requiring forms of identification that are difficult to imitate or brute force.

## Key takeaways

Implementing both SSO and MFA security controls improves security without sacrificing the user experience. Relying on passwords alone is a serious vulnerability. Implementing SSO means fewer points of entry, but that’s not enough. Combining SSO and MFA can be an effective way to protect information, so that users have a streamlined experience while unauthorized people are kept away from important information.

# The mechanisms of authorization

- **Authentication and Authorization:** **[[Authentication]]** validates the identity of users or systems, while **[[authorization]]** determines the actions or privileges they are allowed to access.
- **[[Principle of Least Privilege]]:** Authorization is guided by the principle of least privilege, which means that access to information is granted only for the duration and extent needed for specific tasks.
- **[[Separation of Duties]]:** Separation of duties is another fundamental security principle related to authorization. It involves ensuring that users do not have permissions that could lead to misuse or abuse of a system. This separation minimizes the risk of system failures and inappropriate behavior.
- **[[Role-Based Authorization]]:** Authorization is often role-based, meaning that the level of access granted depends on a user's role within an organization.
- **[[Access Controls]]:** When securing data over a network, two commonly used access control mechanisms are discussed: HTTP basic auth and OAuth.
	- **[[HTTP Basic Auth]]:** HTTP basic authentication involves sending an identifier each time a user communicates with a web page. It is considered vulnerable as it transmits usernames and passwords openly over the network.
	- **[[OAuth]]:** OAuth is an open-standard authorization protocol that shares designated access between applications using API tokens. It is more secure and doesn't involve transmitting sensitive credentials over the network.
		- **[[API Tokens]]:** API tokens are small blocks of encrypted code that contain user information, site permissions, and more. They serve as an additional layer of encryption and minimize the risks associated with unauthorized access.
- **Security Principles in Authorization Tools:** Basic auth and OAuth, as well as other authorization tools, are designed with security principles like the principle of least privilege and separation of duties in mind.
- **Monitoring Access:** In addition to controlling access, it is crucial to monitor access to detect and respond to potential security threats.

Authorization is a pivotal component of access control systems that ensures that users and systems only have access to the resources and actions required for their roles and responsibilities. The course prepares for exploring the third and final part of the authentication, authorization, and accounting framework in the next video.

# Why we audit user activity

- **[[Access Logs]]:** Access logs are records of sessions that capture information from the moment a user enters a system until they leave it. These logs are a valuable source of data for security analysts and are used to identify trends, such as failed login attempts, detect hackers who gain unauthorized access, and investigate security incidents like data breaches.
- **[[Sessions]]:** When a user accesses a system, they initiate a session, which is a sequence of network requests and responses associated with the same user. Access logs essentially record these sessions.
	- **[[Session ID]]:** At the beginning of a session, a unique token known as a session ID is created to identify the user and their device while accessing the system. Session IDs remain attached to the user until they close their browser or the session times out.
	- **[[Session Cookies]]:** Another action that occurs at the start of a session is the exchange of session cookies between the server and the user's device. Session cookies are tokens used to validate a session and determine its duration. They make web sessions more secure and efficient.
- **[[Session Hijacking]]:** While session cookies enhance security by not sharing sensitive information like usernames and passwords, attackers can still perform session hijacking if they steal a user's cookie. In session hijacking, cybercriminals impersonate the user using their session token, potentially causing harm such as theft of money or private data.
- **[[Monitoring Session Logs]]:** Monitoring access logs, including session information, is crucial to identifying unusual activity that may indicate unauthorized access or data theft. It helps security professionals gain valuable insights to enhance information security.

Accounting is a vital aspect of information security, as it helps detect and respond to security incidents, ensuring that systems and data remain safe. Monitoring and analyzing access logs are fundamental practices in this context.

# Identity and access management

Security is more than simply combining processes and technologies to protect assets. Instead, security is about ensuring that these processes and technologies are creating a secure environment that supports a defense strategy. A key to doing this is implementing two fundamental security principles that limit access to organizational resources:

- The **[[principle of least privilege]]** in which a user is only granted the minimum level of access and authorization required to complete a task or function.
- **[[Separation of duties]]**, which is the principle that users should not be given levels of authorization that would allow them to misuse a system.

Both principles typically support each other. For example, according to least privilege, a person who needs permission to approve purchases from the IT department shouldn't have the permission to approve purchases from every department. Likewise, according to separation of duties, the person who can approve purchases from the IT department should be different from the person who can input new purchases.

In other words, least privilege _limits_ _the access_ that an individual receives, while separation of duties _divides responsibilities_ among multiple people to prevent any one person from having too much control.

**Note:** Separation of duties is sometimes referred to as segregation of duties.

Previously, you learned about the authentication, authorization, and accounting (AAA) framework. Many businesses used this model to implement these two security principles and manage user access. In this reading, you’ll learn about the other major framework for managing user access, identity and access management (IAM). You will learn about the similarities between AAA and IAM and how they're commonly implemented.

## Identity and access management (IAM)

As organizations become more reliant on technology, regulatory agencies have put more pressure on them to demonstrate that they’re doing everything they can to prevent threats. **[[Identity and access management (IAM)]]** is a collection of processes and technologies that helps organizations manage digital identities in their environment. Both AAA and IAM systems are designed to authenticate users, determine their access privileges, and track their activities within a system.

Either model used by your organization is more than a single, clearly defined system. They each consist of a collection of security controls that ensure the _right user_ is granted access to the _right resources_ at the _right time_ and for the _right reasons_. Each of those four factors is determined by your organization's policies and processes.

**Note:** A user can either be a person, a device, or software.

## Authenticating users

To ensure the right user is attempting to access a resource requires some form of proof that the user is who they claim to be. In a [video on authentication controls](https://www.coursera.org/learn/assets-threats-and-vulnerabilities/item/r6XuB), you learned that there are a few factors that can be used to authenticate a user:

- **[[Knowledge]]**, or something the user knows
- **[[Ownership]]**, or something the user possesses
- **[[Characteristic]]**, or something the user is

**[[Authentication]]** is mainly verified with login credentials. **[[Single sign-on (SSO)]]**, a technology that combines several different logins into one, and **[[multi-factor authentication (MFA)]]**, a security measure that requires a user to verify their identity in two or more ways to access a system or network, are other tools that organizations use to authenticate individuals and systems.

**Pro tip:** Another way to remember this authentication model is: something you know, something you have, and something you are.

### **User provisioning**

Back-end systems need to be able to verify whether the information provided by a user is accurate. To accomplish this, users must be properly provisioned. **[[User provisioning]]** is the process of creating and maintaining a user's digital identity. For example, a college might create a new user account when a new instructor is hired. The new account will be configured to provide access to instructor-only resources while they are teaching. Security analysts are routinely involved with provisioning users and their access privileges.

**Pro tip:** Another role analysts have in IAM is to deprovision users. This is an important practice that removes a user's access rights when they should no longer have them.

### **Granting authorization**

If the right user has been authenticated, the network should ensure the right resources are made available. There are three common frameworks that organizations use to handle this step of IAM:

- Mandatory access control (MAC)
- Discretionary access control (DAC)
- Role-based access control (RBAC)

![Un administrador del sistema que decide conceder a los usuarios y a un sistema operativo acceso a los datos.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/AxrWM2DLTSunrTWYAtwc4Q_49abc18d6b1c48748e222045153881f1_image3.png?expiry=1697328000000&hmac=7KNqUE7zZGdXmpEj7i2MLajEWwjs1sCGe8ub8wxutZY)

### **[[Mandatory Access Control (MAC)]]**

MAC is the strictest of the three frameworks. Authorization in this model is based on a strict need-to-know basis. Access to information must be granted manually by a central authority or system administrator. For example, MAC is commonly applied in law enforcement, military, and other government agencies where users must request access through a chain of command. MAC is also known as non-discretionary control because access isn’t given at the discretion of the data owner.

![Un propietario de datos que decide conceder a determinados usuarios acceso a sus datos.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/LHnKRh7ISfCc379NmCXMlw_5c65648b2a77437ab6998e6b978afcf1_image2.png?expiry=1697328000000&hmac=ZqwnuZTbcUgwtC3Zfhygx_3tQZZmH8FYZkx3l82VlZ4)

### **[[Discretionary Access Control (DAC)]]**

DAC is typically applied when a data owner decides appropriate levels of access. One example of DAC is when the owner of a Google Drive folder shares editor, viewer, or commentor access with someone else.

![Un administrador del sistema que asigna usuarios a roles específicos que tienen niveles de acceso predefinidos.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/1EBo9jW3TGW_7Hulb3cUpA_16c10e1f1de94b3c95d88760722733f1_image1.png?expiry=1697328000000&hmac=lVQbREd1oU6JJ_7lOXejR0Cs61LEVxXYtf1AvyY0kPs)

### **[[Role-Based Access Control (RBAC)]]**

RBAC is used when authorization is determined by a user's role within an organization. For example, a user in the marketing department may have access to user analytics but not network administration.

## Access control technologies

Users often experience authentication and authorization as a single, seamless experience. In large part, that’s due to access control technologies that are configured to work together. These tools offer the speed and automation needed by administrators to monitor and modify access rights. They also decrease errors and potential risks.

An organization's IT department sometimes develops and maintains customized access control technologies on their own. A typical IAM or AAA system consists of a user directory, a set of tools for managing data in that directory, an authorization system, and an auditing system. Some organizations create custom systems to tailor them to their security needs. However, building an in-house solution comes at a steep cost of time and other resources.

Instead, many organizations opt to license third-party solutions that offer a suite of tools that enable them to quickly secure their information systems. Keep in mind, security is about more than combining a bunch of tools. It’s always important to configure these technologies so they can help to provide a secure environment.

## Key takeaways

Controlling access requires a collection of systems and tools. IAM and AAA are common frameworks for implementing least privilege and separation of duties. As a security analyst, you might be responsible for user provisioning and collaborating with other IAM or AAA teams. Having familiarity with these models is valuable for helping organizations achieve their security objectives. They each ensure that the right user is granted access to the right resources at the right time and for the right reasons.

## Resources for more information

The identity and access management industry is growing at a rapid pace. As with other domains in security, it’s important to stay informed.

- [IDPro](https://idpro.org/)© is a professional organization dedicated to sharing essential IAM industry knowledge.
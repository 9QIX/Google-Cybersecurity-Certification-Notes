# Security controls

- **[[Security Controls]]:** Organizations face the challenge of safeguarding information in a data-rich environment. Security controls are essential for mitigating specific security risks and are employed before, during, and after security incidents.

- **Types of Security Controls:***
	- **[[Technical Controls]]:** These encompass various technologies (e.g., encryption, authentication systems) to protect assets.
	- **[[Operational Controls]]:** Day-to-day security management activities, including awareness training and incident response, typically carried out by individuals.
	- **[[Managerial Controls]]:** Policies, standards, and procedures guide security efforts, with the organization's security policy outlining necessary controls.

- **[[Information Privacy]]:** Protecting data from unauthorized access and distribution is central to information privacy. Individuals and organizations have the right to control the sharing of their private information.

- **[[Principle of Least Privilege]]:** Security controls aim to limit access based on the user and situation, adhering to the principle of least privilege. Access should be granted only as needed for specific roles or tasks.

- **[[Data Owners and Custodians]]:** Distinguishing between data owners (who control data access) and data custodians (entities responsible for secure data handling, transport, and storage) is crucial in security controls.

- **[[Data Classification]]:** Data is treated as an asset and requires proper classification and handling, similar to other assets, to ensure security.

The course highlights the significance of security controls in information protection, respecting privacy, and following the principle of least privilege. It also emphasizes the roles of data owners and custodians and the importance of data classification and handling practices. Subsequent sections of the course will delve deeper into security controls.

# Principle of least privilege

**[[Security controls]]** are essential to keeping sensitive data private and safe. One of the most common controls is the principle of least privilege, also referred to as PoLP or least privilege. The **[[principle of least privilege]]** is a security concept in which a user is only granted the minimum level of access and authorization required to complete a task or function.

Least privilege is a fundamental security control that supports the confidentiality, integrity, and availability (CIA) triad of information. In this reading, you'll learn how the principle of least privilege reduces risk, how it's commonly implemented, and why it should be routinely audited.

## Limiting access reduces risk

Every business needs to plan for the risk of data theft, misuse, or abuse. Implementing the principle of least privilege can greatly reduce the risk of costly incidents like data breaches by:

- Limiting access to sensitive information
- Reducing the chances of accidental data modification, tampering, or loss
- Supporting system monitoring and administration

Least privilege greatly reduces the likelihood of a successful attack by connecting specific resources to specific users and placing limits on what they can do. It's an important security control that should be applied to any asset. Clearly defining who or what your users are is usually the first step of implementing least privilege effectively.

**Note:** Least privilege is closely related to another fundamental security principle, the **[[separation of duties]]**—a security concept that divides tasks and responsibilities among different users to prevent giving a single user complete control over critical business functions. You'll learn more about separation of duties in a different reading about identity and access management.

## Determining access and authorization

To implement least privilege, access and authorization must be determined first. There are two questions to ask to do so: 

- Who is the user? 
- How much access do they need to a specific resource? 

Determining who the user is usually straightforward. A user can refer to a person, like a customer, an employee, or a vendor. It can also refer to a device or software that's connected to your business network. In general, every user should have their own account. Accounts are typically stored and managed within an organization's directory service.

These are the most common types of user accounts:

- **[[Guest accounts]]** are provided to external users who need to access an internal network, like customers, clients, contractors, or business partners.
- **[[User accounts]]** are assigned to staff based on their job duties.
- **[[Service accounts]]** are granted to applications or software that needs to interact with other software on the network
- **[[Privileged accounts]]** have elevated permissions or administrative access.

It's best practice to determine a baseline access level for each account type before implementing least privilege. However, the appropriate access level can change from one moment to the next. For example, a customer support representative should only have access to your information while they are helping you. Your data should then become inaccessible when the support agent starts working with another customer and they are no longer actively assisting you. Least privilege can only reduce risk if user accounts are routinely and consistently monitored.

**Pro tip:** Passwords play an important role when implementing the principle of least privilege. Even if user accounts are assigned appropriately, an insecure password can compromise your systems.

## Auditing account privileges

Setting up the right user accounts and assigning them the appropriate privileges is a helpful first step. Periodically auditing those accounts is a key part of keeping your company’s systems secure.

There are three common approaches to auditing user accounts:

- Usage audits
- Privilege audits
- Account change audits

As a security professional, you might be involved with any of these processes.

### **[[Usage audits]]**

When conducting a usage audit, the security team will review which resources each account is accessing and what the user is doing with the resource. Usage audits can help determine whether users are acting in accordance with an organization’s security policies. They can also help identify whether a user has permissions that can be revoked because they are no longer being used.

### **[[Privilege audits]]**

Users tend to accumulate more access privileges than they need over time, an issue known as _privilege creep_. This might occur if an employee receives a promotion or switches teams and their job duties change. Privilege audits assess whether a user's role is in alignment with the resources they have access to.

### **[[Account change audits]]**

Account directory services keep records and logs associated with each user. Changes to an account are usually saved and can be used to audit the directory for suspicious activity, like multiple attempts to change an account password. Performing account change audits helps to ensure that all account changes are made by authorized users.

**Note:** Most directory services can be configured to alert system administrators of suspicious activity.

## Key takeaways

The principle of least privilege is a security control that can reduce the risk of unauthorized access to sensitive information and resources. Setting up and configuring user accounts with the right levels of access and authorization is an important step toward implementing least privilege. Auditing user accounts and revoking unnecessary access rights is an important practice that helps to maintain the confidentiality, integrity, and availability of information.


# The data lifecycle

Organizations of all sizes handle a large amount of data that must be kept private. You learned that data can be vulnerable whether it is at rest, in use, or in transit. Regardless of the state it is in, information should be kept private by limiting access and authorization.

In security, data vulnerabilities are often mapped in a model known as the data lifecycle. Each stage of the data lifecycle plays an important role in the security controls that are put in place to maintain the CIA triad of information. In this reading, you will learn about the data lifecycle, the plans that determine how data is protected, and the specific types of data that require extra attention.

## The data lifecycle

The **[[data lifecycle]]** is an important model that security teams consider when protecting information. It influences how they set policies that align with business objectives. It also plays an important role in the technologies security teams use to make information accessible.

In general, the data lifecycle has five stages. Each describe how data flows through an organization from the moment it is created until it is no longer useful:

- **[[Collect]]:** This stage involves gathering data from various sources or generating it within the organization, such as through customer interactions, sensors, or user inputs.
- **[[Store]]:** Data is stored securely, typically in databases or file systems, to ensure accessibility and preservation. Proper storage mechanisms and access controls are crucial during this phase.
- **[[Use]]:** Data is actively employed for various purposes, including analysis, decision-making, reporting, or other business operations. This stage often involves processing and manipulating data.
- **[[Archive]]:** Data that is no longer in active use but still holds value for compliance, historical analysis, or reference purposes is archived. It is moved to long-term storage, which may involve different retention policies.
- **[[Destroy]]:** At this final stage, data that is no longer needed or has reached the end of its retention period is permanently removed to reduce risk and ensure compliance with data protection regulations. Secure data destruction methods are applied to prevent unauthorized recovery.

![Five stages of the data lifecycle: collection, storage, usage, archival, and destruction.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Sx9FANHTQYK_Emc4x9cBsA_4dad354c13cc4354b9caef4a1b05d2f1_CS_R-091_ive-stages-of-the-data-lifecycle.png?expiry=1696809600000&hmac=u1ySMxiMguMjxgZlbUT5DYdMZ-X6v_xVeL3KfQN6zhE)

Protecting information at each stage of this process describes the need to keep it accessible and recoverable should something go wrong.

## Data governance

Businesses handle massive amounts of data every day. New information is constantly being collected from internal and external sources. A structured approach to managing all of this data is the best way to keep it private and secure.

_Data governance_ is a set of processes that define how an organization manages information. Governance often includes policies that specify how to keep data private, accurate, available, and secure throughout its lifecycle.

Effective data governance is a collaborative activity that relies on people. Data governance policies commonly categorize individuals into a specific role:

- **Data owner:** the person that decides who can access, edit, use, or destroy their information.
- **Data custodian**: anyone or anything that's responsible for the safe handling, transport, and storage of information.
- **Data steward**: the person or group that maintains and implements data governance policies set by an organization.

Businesses store, move, and transform data using a wide range of IT systems. Data governance policies often assign accountability to data owners, custodians, and stewards.

**Note:** As a data custodian, you will primarily be  responsible for maintaining security and privacy rules for your organization.

## Protecting data at every stage

Most security plans include a specific policy that outlines how information will be managed across an organization. This is known as a data governance policy. These documents clearly define procedures that should be followed to participate in keeping data safe. They place limits on who or what can access data. Security professionals are important participants in data governance. As a data custodian, you will be responsible for ensuring that data isn’t damaged, stolen, or misused.

## Legally protected information

Data is more than just a bunch of 1s and 0s being processed by a computer. Data can represent someone's personal thoughts, actions, and choices. It can represent a purchase, a sensitive medical decision, and everything in between. For this reason, data owners should be the ones deciding whether or not to share their data. As a security professional, protecting a person's data privacy decisions must always be respected.

Securing data can be challenging. In large part, that's because data owners generate more data than they can manage. As a result, data custodians and stewards sometimes lack direct, explicit instructions on how they should handle specific types of data. Governments and other regulatory agencies have bridged this gap by creating rules that specify the types of information that organizations must protect by default:

- **PII** is any information used to infer an individual's identity. Personally identifiable information, or PII, refers to information that can be used to contact or locate someone.
- **PHI** stands for protected health information.  In the U.S., it is regulated by the Health Insurance Portability and Accountability Act (HIPAA), which defines PHI as “information that relates to the past, present, or future physical or mental health or condition of an individual.” In the EU, PHI has a similar definition but it is regulated by the General Data Protection Regulation (GDPR).
- **SPII** is a specific type of PII that falls under stricter handling guidelines. The _S_ stands for sensitive, meaning this is a type of personally identifiable information that should only be accessed on a need-to-know basis, such as a bank account number or login credentials.

Overall, it's important to protect all types of personal information from unauthorized use and disclosure.

## Key takeaways

Keeping information private has never been so important. Many organizations have data governance policies that outline how they plan to protect sensitive information. As a data custodian, you will play a key role in keeping information accessible and safe throughout its lifecycle. There are various types of information and controls that you’ll encounter in the field. As you continue through this course, you’ll learn more about major security controls that keep data private.
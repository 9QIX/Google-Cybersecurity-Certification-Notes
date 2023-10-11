# Security controls

- **[[Security Controls]]:** Organizations face the challenge of safeguarding information in a data-rich environment. Security controls are essential for mitigating specific security risks and are employed before, during, and after security incidents.

- **Types of Security Controls:***
	- **[[Technical Controls]]:** These encompass various technologies (e.g., encryption, authentication systems) to protect assets.
	- **[[Operational Controls]]:** Day-to-day security management activities, including awareness training and incident response, are typically carried out by individuals.
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

![[Sx9FANHTQYK_Emc4x9cBsA_4dad354c13cc4354b9caef4a1b05d2f1_CS_R-091_ive-stages-of-the-data-lifecycle.png]]

Protecting information at each stage of this process describes the need to keep it accessible and recoverable should something go wrong.

## Data governance

Businesses handle massive amounts of data every day. New information is constantly being collected from internal and external sources. A structured approach to managing all of this data is the best way to keep it private and secure.

**[[Data governance]]** is a set of processes that define how an organization manages information. Governance often includes policies that specify how to keep data private, accurate, available, and secure throughout its lifecycle.

Effective data governance is a collaborative activity that relies on people. Data governance policies commonly categorize individuals into a specific role:

- **[[Data owner]]:** the person that decides who can access, edit, use, or destroy their information.
- **[[Data custodian]]**: anyone or anything that's responsible for the safe handling, transport, and storage of information.
- **[[Data steward]]**: the person or group that maintains and implements data governance policies set by an organization.

Businesses store, move, and transform data using a wide range of IT systems. Data governance policies often assign accountability to data owners, custodians, and stewards.

**Note:** As a data custodian, you will primarily be  responsible for maintaining security and privacy rules for your organization.

## Protecting data at every stage

Most security plans include a specific policy that outlines how information will be managed across an organization. This is known as a **[[data governance policy]]**. These documents clearly define procedures that should be followed to participate in keeping data safe. They place limits on who or what can access data. Security professionals are important participants in data governance. As a data custodian, you will be responsible for ensuring that data isn’t damaged, stolen, or misused.

## Legally protected information

Data is more than just a bunch of 1s and 0s being processed by a computer. Data can represent someone's personal thoughts, actions, and choices. It can represent a purchase, a sensitive medical decision, and everything in between. For this reason, data owners should be the ones deciding whether or not to share their data. As a security professional, protecting a person's data privacy decisions must always be respected.

Securing data can be challenging. In large part, that's because data owners generate more data than they can manage. As a result, data custodians and stewards sometimes lack direct, explicit instructions on how they should handle specific types of data. Governments and other regulatory agencies have bridged this gap by creating rules that specify the types of information that organizations must protect by default:

- **[[PII]]** is any information used to infer an individual's identity. Personally identifiable information, or PII, refers to information that can be used to contact or locate someone.
- **[[PHI]]** stands for protected health information. In the U.S., it is regulated by the Health Insurance Portability and Accountability Act (HIPAA), which defines PHI as “information that relates to the past, present, or future physical or mental health or condition of an individual.” In the EU, PHI has a similar definition but it is regulated by the General Data Protection Regulation (GDPR).
- **[[SPII]]** is a specific type of PII that falls under stricter handling guidelines. The _S_ stands for sensitive, meaning this is a type of personally identifiable information that should only be accessed on a need-to-know basis, such as a bank account number or login credentials.

Overall, it's important to protect all types of personal information from unauthorized use and disclosure.

## Key takeaways

Keeping information private has never been so important. Many organizations have data governance policies that outline how they plan to protect sensitive information. As a data custodian, you will play a key role in keeping information accessible and safe throughout its lifecycle. There are various types of information and controls that you’ll encounter in the field. As you continue through this course, you’ll learn more about major security controls that keep data private.

# Information privacy: Regulations and compliance

Security and privacy have a close relationship. As you may recall, people have the right to control how their personal data is collected and used. Organizations also have a responsibility to protect the information they are collecting from being compromised or misused. As a security professional, you will be highly involved in these efforts.

Previously, you learned how regulations and compliance reduce security risk. To review, refer to [the reading about how security controls, frameworks, and compliance regulations](https://www.coursera.org/learn/foundations-of-cybersecurity/supplement/xu4pr/controls-frameworks-and-compliance) are used together to manage security and minimize risk. In this reading, you will learn how information privacy regulations affect data handling practices. You'll also learn about some of the most influential security regulations in the world. 

![[fDaKJmUlQGuh59KQM1Y0Nw_0ca1ff72e15643bcb40f8aaabf7078f1_S35G006-1-.png]]
## Information security vs. information privacy

Security and privacy are two terms that often get used interchangeably outside of this field. Although the two concepts are connected, they represent specific functions:

- **[[Information privacy]]** refers to the protection of unauthorized access and distribution of data.
- **[[Information security (InfoSec)]]** refers to the practice of keeping data in all states away from unauthorized users.

The key difference: **[[Privacy]]** is about providing people with control over their personal information and how it's shared. **[[Security]]** is about protecting people’s choices and keeping their information safe from potential threats.

For example, a retail company might want to collect specific kinds of personal information about its customers for marketing purposes, like their age, gender, and location. How this private information will be used should be disclosed to customers before it's collected. In addition, customers should be given an option to opt-out if they decide not to share their data.

Once the company obtains consent to collect personal information, it might implement specific security controls in place to protect that private data from unauthorized access, use, or disclosure. The company should also have security controls in place to respect the privacy of all stakeholders and anyone who chose to opt-out.

**Note:** Privacy and security are both essential for maintaining customer trust and brand reputation.

## Why privacy matters in security

Data privacy and protection are topics that started gaining a lot of attention in the late 1990s. At that time, tech companies suddenly went from processing people’s data to storing and using it for business purposes. For example, if a user searched for a product online, companies began storing and sharing access to information about that user’s search history with other companies. Businesses were then able to deliver personalized shopping experiences to the user for free.

Eventually this practice led to a global conversation about whether these organizations had the right to collect and share someone’s private data. Additionally, the issue of data security became a greater concern; the more organizations collected data, the more vulnerable it was to being abused, misused, or stolen.

Many organizations became more concerned about the issues of data privacy. Businesses became more transparent about how they were collecting, storing, and using information. They also began implementing more security measures to protect people's data privacy. However, without clear rules in place, protections were inconsistently applied.

**Note:** The more data is collected, stored, and used, the more vulnerable it is to breaches and threats.

## Notable privacy regulations

Businesses are required to abide by certain laws to operate. As you might recall, **[[regulations]]** are rules set by a government or another authority to control the way something is done. Privacy regulations in particular exist to protect a user from having their information collected, used, or shared without their consent. Regulations may also describe the security measures that need to be in place to keep private information away from threats.

Three of the most influential industry regulations that every security professional should know about are:

- General Data Protection Regulation (GDPR)
- Payment Card Industry Data Security Standard (PCI DSS)
- Health Insurance Portability and Accountability Act (HIPAA)

### **GDPR**

**[[GDPR]]** is a set of rules and regulations developed by the European Union (EU) that puts data owners in total control of their personal information. Under GDPR, types of personal information include a person's name, address, phone number, financial information, and medical information.

The GDPR applies to any business that handles the data of EU citizens or residents, regardless of where that business operates. For example, a US based company that handles the data of EU visitors to their website is subject to the GDPRs provisions.

### **PCI DSS**

**[[PCI DSS]]** is a set of security standards formed by major organizations in the financial industry. This regulation aims to secure credit and debit card transactions against data theft and fraud.

### **HIPAA**

**[[HIPAA]]** is a U.S. law that requires the protection of sensitive patient health information. HIPAA prohibits the disclosure of a person's medical information without their knowledge and consent.

**Note:** These regulations influence data handling at many organizations around the world even though they were developed by specific nations.

Several other security and privacy compliance laws exist. Which ones your organization needs to follow will depend on the industry and the area of authority. Regardless of the circumstances, regulatory compliance is important to every business.

## Security assessments and audits

Businesses should comply with important regulations in their industry. Doing so validates that they have met a minimum level of security while also demonstrating their dedication to maintaining data privacy.

Meeting compliance standards is usually a continual, two-part process of security audits and assessments:

- A **security audit** is a review of an organization's security controls, policies, and procedures against a set of expectations.
- A **security assessment** is a check to determine how resilient current security implementations are against threats.

For example, if a regulation states that multi-factor authentication (MFA) must be enabled for all administrator accounts, an audit might be conducted to check those user accounts for compliance. After the audit, the internal team might perform a security assessment that determines many users are using weak passwords. Based on their assessment, the team could decide to enable MFA on all user accounts to improve their overall security posture.

**Note:** Compliance with legal regulations, such as GDPR, can be determined during audits.

As a security analyst, you are likely to be involved with security audits and assessments in the field. Businesses usually perform security audits less frequently, approximately once per year. Security audits may be performed both internally and externally by different third-party groups.

In contrast, security assessments are usually performed more frequently, about every three-to-six months. Security assessments are typically performed by internal employees, often as preparation for a security audit. Both evaluations are incredibly important ways to ensure that your systems are effectively protecting everyone's privacy.

## Key takeaways

A growing number of businesses are making it a priority to protect and govern the use of sensitive data to maintain customer trust. Security professionals should think about data and the need for privacy in these terms. Organizations commonly use security assessments and audits to evaluate gaps in their security plans. While it is possible to overlook or delay addressing the results of an assessment, doing so can have serious business consequences, such as fines or data breaches.

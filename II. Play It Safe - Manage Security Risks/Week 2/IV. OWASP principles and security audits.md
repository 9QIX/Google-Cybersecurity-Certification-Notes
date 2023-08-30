# OWASP Principles:

- ## **[[Minimize Attack Surface Area]]**
	- An **[[Attack Surface]]** refers to all the ***potential vulnerabilities that a threat actor could exploit***, like attack vectors, which are pathways attackers use to penetrate security defenses. 
	- Examples of common attack vectors are phishing emails and weak passwords. To minimize the attack surface and avoid incidents from these types of vectors, security teams might disable software features, restrict who can access certain assets, or establish more complex password requirements. 
- ## **[[Principle of Least Privilege]]**
	- The principle of least privilege means making sure that ***users have the least amount of access required to perform their everyday tasks***. 
	- The main reason for limiting access to organizational information and resources is to reduce the amount of damage a security breach could cause. 
	- For example, as an entry-level analyst, you may have access to log data, but may not have access to change user permissions. Therefore, if a threat actor compromises your credentials, they'll only be able to gain limited access to digital or physical assets, which may not be enough for them to deploy their intended attack.  
- ## **[[Defense in Depth]]**
	- Defense in depth means that ***an organization should have multiple security controls that address risks and threats in different ways***. 
	- One example of a security control is multi-factor authentication, or MFA, which requires users to take an additional step beyond simply entering their username and password to gain access to an application. 
	- Other controls include firewalls, intrusion detection systems, and permission settings that can be used to create multiple points of defense, a threat actor must get through to breach an organization. 
- ## **[[Separation of Duties]]**
	- Another principle is separation of duties, which can be used to prevent individuals from carrying out fraudulent or illegal activities. This principle means that ***no one should be given so many privileges that they can misuse the system***. 
	- For example, the person in a company who signs the paychecks shouldn't also be the person who prepares them. 
- ## **[[Keep Security Simple]]**
	- Keep security simple is the next principle. As the name suggests, ***when implementing security controls, unnecessarily complicated solutions should be avoided*** because they can become unmanageable. The more complex the security controls are, the harder it is for people to work collaboratively. 
- ## **[[Fix Security Issues Correctly]]**
	- The last principle is to fix security issues correctly. Technology is a great tool, but can also present challenges. 
	- When a security incident occurs, security professionals are expected to identify the root cause quickly. From there, it's important to correct any identified vulnerabilities and conduct tests to ensure that repairs are successful. 
	- An example of an issue is a weak password to access an organization's Wi-Fi because it could lead to a breach. To fix this type of security issue, stricter password policies could be put in place.

# More about OWASP security principles

Previously, you learned that cybersecurity analysts help keep data safe and reduce risk for an organization by using a variety of security frameworks, controls, and security principles. In this reading, you will learn about more Open Web Application Security Project, recently renamed Open Worldwide Application Security Project® ([[OWASP]]), security principles and how entry-level analysts use them. 

## Security principles

In the workplace, security principles are embedded in your daily tasks. Whether you are analyzing logs, monitoring a security information and event management (SIEM) dashboard, or using a [vulnerability scanner](https://csrc.nist.gov/glossary/term/vulnerability_scanner), you will use these principles in some way. 

Previously, you were introduced to several OWASP security principles. These included:

- **[[Minimize attack surface area]]**: Attack surface refers to all the potential vulnerabilities a threat actor could exploit.
- **[[Principle of least privilege]]**: Users have the least amount of access required to perform their everyday tasks.
- **[[Defense in depth]]**: Organizations should have varying security controls that mitigate risks and threats.
- **[[Separation of duties]]**: Critical actions should rely on multiple people, each of whom follow the principle of least privilege. 
- **[[Keep security simple]]**: Avoid unnecessarily complicated solutions. Complexity makes security difficult. 
- **[[Fix security issues correctly]]**: When security incidents occur, identify the root cause, contain the impact, identify vulnerabilities, and conduct tests to ensure that remediation is successful.

## Additional OWASP security principles

Next, you’ll learn about four additional OWASP security principles that cybersecurity analysts and their teams use to keep organizational operations and people safe.

- ### **[[Establish Secure Defaults]]**
	- This principle means that the ***optimal security state of an application is also its default state for users***; it should take extra work to make the application insecure. 
- ### **[[Fail Securely]]**
	- Fail securely means that when a control fails or stops, i***t should do so by defaulting to its most secure option***. 
	- For example, when a firewall fails it should simply close all connections and block all new ones, rather than start accepting everything.
- ### **[[Don’t Trust Services]]**
	- Many organizations work with third-party partners. These ***outside partners often have different security policies than the organization does***. And the organization shouldn’t explicitly trust that their partners’ systems are secure. 
	- For example, if a third-party vendor tracks reward points for airline customers, the airline should ensure that the balance is accurate before sharing that information with their customers.
- ### **[[Avoid Security by Obscurity]]**
	- The ***security of key systems should not rely on keeping details hidden***. Consider the following example from OWASP (2016):
	- The security of an application should not rely on keeping the source code secret. Its security should rely upon many other factors, including reasonable password policies, defense in depth, business transaction limits, solid network architecture, and fraud and audit controls.

## Key takeaways

Cybersecurity professionals are constantly applying security principles to safeguard organizations and the people they serve. As an entry-level security analyst, you can use these security principles to promote safe development practices that reduce risks to companies and users alike.

# Plan a Security Audit

- **[[Security Audit]]** is a review of an organization's security controls, policies, and procedures against a set of expectations. There are two main types of security audits: external and internal.
	- An **[[Internal Security Audit]]** is typically conducted by a team of people that might include an organization's compliance officer, security manager, and other security team members. 
		- Internal security audits are used to help improve an organization's security posture and help organizations avoid fines from governing agencies due to a lack of compliance. 
		- Internal security audits help security teams identify organizational risk, assess controls, and correct compliance issues. 
		- **Common Elements of Internal Audits:**
			- **[[Establishing the Scope and Goals]]** (Planning Process)
				- **[[Scope]]** refers to the specific criteria of an internal security audit. Scope requires organizations to identify people, assets, policies, procedures, and technologies that might impact an organization's security posture. 
				- **[[Goals]]** are an outline of the organization's security objectives, or what they want to achieve in order to improve their security posture. 
				- As an example, the scope of this audit involves assessing user permissions; identifying existing controls, policies, and procedures; and accounting for the technology currently in use by the organization. The goals outlined include implementing core functions of frameworks, like the NIST CSF; establishing policies and procedures to ensure compliance; and strengthening system controls. 
			- **[[Conducting a Risk Assessment]]** (Planning Process)
				- This helps organizations consider what security measures should be implemented and monitored to ensure the safety of assets. Similar to establishing the scope and goals, a risk assessment is oftentimes completed by managers or other stakeholders. However, you might be asked to analyze details provided in the risk assessment to consider what types of controls and compliance regulations need to be in place to help improve the organization's security posture. 
				- For example, this risk assessment highlights that there are inadequate controls, processes, and procedures in place to protect the organization's assets. Specifically, there is a lack of proper management of physical and digital assets, including employee equipment. The equipment used to store data is not properly secured. And access to private information stored in the organization's internal network likely needs more robust controls in place. 
			- **[[Completing a Controls Assessment]]**
				- Involves closely reviewing an organization's existing assets, then evaluating potential risks to those assets, to ensure internal controls and processes are effective. 
				- To do this, entry-level analysts might be tasked with classifying controls into the following categories: administrative controls, technical controls, and physical controls. 
					- **[[Administrative controls]]** are related to the human component of cybersecurity. They include policies and procedures that define how an organization manages data, such as the implementation of password policies. 
					- **[[Technical controls]]** are hardware and software solutions used to protect assets, such as the use of intrusion detection systems, or IDS's, and encryption. 
					- **[[Physical controls]]** refer to measures put in place to prevent physical access to protected assets, such as surveillance cameras and locks. 
						- Control types include, but are not limited to
							- **[[Preventative controls]]** are designed to prevent an incident from occurring in the first place.
							- **[[Corrective controls]]** are used to restore an asset after an incident.
							- **[[Detective controls]]** are implemented to determine whether an incident has occurred or is in progress.
							- **[[Deterrent controls]]** are designed to discourage attacks.
			- **[[Assessing Compliance]]**
				- The next element is determining whether or not the organization is adhering to necessary compliance regulations. As a reminder, compliance regulations are laws that organizations must follow to ensure private data remains secure. 
				- In this example, the organization conducts business in the European Union and accepts credit card payments. So they need to adhere to the GDPR and Payment Card Industry Data Security Standard, or PCI DSS. 
			- **[[Communicating Results]]** 
				- The final common element of an internal security audit is communication. Once the internal security audit is complete, results and recommendations need to be communicated to stakeholders.
				- In general, this type of communication summarizes the scope and goals of the audit. Then, it lists existing risks and notes how quickly those risks need to be addressed. Additionally, it identifies compliance regulations the organization needs to adhere to and provides recommendations for improving the organization's security posture. 
	- Internal audits are a great way to identify gaps within an organization. When I worked at a previous company, my team and I conducted an internal password audit and found that many of the passwords were weak. Once we identified this issue, the compliance team took the lead and began enforcing stricter password policies. Audits are an opportunity to determine what security measures an organization has in place and what areas need to be improved to achieve the organization's desired security posture. 

# More about security audits

Previously, you were introduced to how to plan and complete an internal security audit. In this reading, you will learn more about security audits, including the goals and objectives of audits.

## Security audits

A **[[security audit]]** is a review of an organization's security controls, policies, and procedures against a set of expectations.

[[Audits]] are independent reviews that evaluate whether an organization is meeting internal and external criteria. 

[[Internal criteria]] include outlined policies, procedures, and best practices. 
[[External criteria]] include regulatory compliance, laws, and federal regulations.

Additionally, a security audit can be used to assess an organization's established security controls. As a reminder, **security controls** are safeguards designed to reduce specific security risks. 

[[Audits]] help ensure that security checks are made (i.e., daily monitoring of security information and event management dashboards), to identify threats, risks, and vulnerabilities. This helps maintain an organization’s security posture. And, if there are security issues, a remediation process must be in place.

## Goals and objectives of an audit

The goal of an audit is to ensure an organization's information technology (IT) practices are meeting industry and organizational standards. The objective is to identify and address areas of remediation and growth. Audits provide direction and clarity by identifying what the current failures are and developing a plan to correct them. 

Security audits must be performed to safeguard data and avoid penalties and fines from governmental agencies. The frequency of audits is dependent on local laws and federal compliance regulations.

## Factors that affect audits

Factors that determine the types of audits an organization implements include: 

- Industry type
- Organization size
- Ties to the applicable government regulations
- A business’s geographical location
- A business decision to adhere to a specific regulatory compliance

To review common compliance regulations that different organizations need to adhere to, refer to [the reading about controls, frameworks, and compliance](https://www.coursera.org/learn/foundations-of-cybersecurity/supplement/xu4pr/controls-frameworks-and-compliance).

## The role of frameworks and controls in audits

Along with compliance, it’s important to mention the role of frameworks and controls in security audits. Frameworks such as the National Institute of Standards and Technology Cybersecurity Framework (NIST CSF) and the international standard for information security (ISO 27000) series are designed to help organizations prepare for regulatory compliance security audits. By adhering to these and other relevant frameworks, organizations can save time when conducting external and internal audits. Additionally, frameworks, when used alongside controls, can support organizations’ ability to align with regulatory compliance requirements and standards. 

There are three main categories of controls to review during an audit, which are administrative and/or managerial, technical, and physical controls. To learn more about specific controls related to each category, click the following link and select “Use Template.” Link to template: [Control categories](https://docs.google.com/document/d/1Ut_H5A9FHwuQEy6_qG6Lfy3zwF6GSJnj3DZTMaNRWEE/template/preview?resourcekey=0-i4dR5qZFqQyfzr8uk3OOmA)

## Audit checklist

It’s necessary to create an audit checklist before conducting an audit. A checklist is generally made up of the following areas of focus:

**Identify the scope of the audit**
- The audit should:
    - List assets that will be assessed (e.g., firewalls are configured correctly, PII is secure, physical assets are locked, etc.) 
    - Note how the audit will help the organization achieve its desired goals
    - Indicate how often an audit should be performed
    - Include an evaluation of organizational policies, protocols, and procedures to make sure they are working as intended and being implemented by employees

**Complete a risk assessment**
- A risk assessment is used to evaluate identified organizational risks related to budget, controls, internal processes, and external standards (i.e., regulations).

**Conduct the audit**
- When conducting an internal audit, you will assess the security of the identified assets listed in the audit scope.

**Create a mitigation plan**
- A mitigation plan is a strategy established to lower the level of risk and potential costs, penalties, or other issues that can negatively affect the organization’s security posture. 

**Communicate results to stakeholders**
- The end result of this process is providing a detailed report of findings, suggested improvements needed to lower the organization's level of risk, and compliance regulations and standards the organization needs to adhere to.

## Key takeaways

In this reading you learned more about security audits, including what they are; why they’re conducted; and the role of frameworks, controls, and compliance in audits. 

Although there is much more to learn about security audits, this introduction is meant to support your ability to complete an audit of your own for a self-reflection portfolio activity later in this course.

## Resources for more information

Resources that you can explore to further develop your understanding of audits in the cybersecurity space are: 

- [Assessment and Auditing Resources](https://www.nist.gov/cyberframework/assessment-auditing-resources)
- [IT Disaster Recovery Plan](https://www.ready.gov/it-disaster-recovery-plan)
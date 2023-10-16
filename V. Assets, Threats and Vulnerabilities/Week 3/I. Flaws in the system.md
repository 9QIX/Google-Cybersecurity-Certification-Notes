# Vulnerability management

- **[[Vulnerability]]:** Vulnerabilities are weaknesses that can be exploited by potential threats. The term "can" is crucial in this context, indicating the potential for exploitation.
	- **Protecting Assets:** Protecting assets involves recognizing their vulnerabilities and addressing them. Just like protecting an important document by locking it up, vulnerabilities and potential threats must be considered, and appropriate safeguards put in place.
- **[[Exploits]]:** Exploits are the means by which vulnerabilities are taken advantage of. To plan for security effectively, understanding vulnerabilities and their potential exploits is essential.
	- **Burglar Analogy:** An analogy with home security is used to illustrate the concept. Homes have vulnerable systems like windows that can be exploited by burglars. By anticipating these vulnerabilities and exploits, one can take proactive measures, such as installing an alarm system.
- **[[Vulnerability Management]]:** Security teams engage in vulnerability management, a process that includes finding and patching vulnerabilities. It's a method for preventing threats from becoming actual problems.
	- **Four Steps of Vulnerability Management:** The vulnerability management process comprises four steps: 
		- Identifying vulnerabilities 
		- Considering potential exploits
		- Preparing defenses against threats
		- Evaluating the effectiveness of these defenses.
	- **Continuous Cycle:** Vulnerability management is an ongoing, cyclical process because new vulnerabilities constantly emerge. Security teams must remain vigilant and regularly update their defenses.
- **[[Zero-Day Exploits]]:** Zero-day exploits refer to vulnerabilities and exploits that are previously unknown. These pose significant risks as they represent unanticipated threats for which there is "zero" time to prepare. 
- **Importance of Identifying Vulnerabilities:** The most crucial step in vulnerability management is identifying vulnerabilities, as it is the foundation for developing effective security measures.

Overall, the video emphasizes the importance of understanding vulnerabilities, anticipating potential exploits, and proactively addressing security weaknesses to protect assets effectively.

# Defense in depth strategy

- **Layered Defense:** **[[Defense in Depth]]** is a security model based on the idea of layered defense. In this model, multiple layers of security controls are implemented to protect assets. If one layer fails, another takes its place to thwart an attack. 
	- **The Castle Analogy:** Defense in Depth is often referred to as the "castle approach" because it shares similarities with the layered defenses of medieval castles. In the Middle Ages, castles had various defenses that made them difficult to penetrate. For instance, they often featured moats, giant stone walls, watchtowers, and other unique defensive elements.
- **Cybersecurity Application:** Defense in Depth is widely used in cybersecurity to protect information. In this context, it employs a five-layer design, with each layer featuring various security controls that safeguard data as it moves in and out of the model.
- **Five Layers of Defense in Depth:**
	1. **[[Perimeter Layer]]:** This layer is focused on user authentication and filtering external access. It includes technologies like usernames and passwords to allow access only to trusted entities.
	2. **[[Network Layer]]:** The network layer is more concerned with authorization and uses technologies like network firewalls to control traffic.
	3. **[[Endpoint Layer]]:** This layer is responsible for securing the devices (endpoints) with network access, such as laptops, desktops, and servers. Technologies like anti-virus software are used for protection.
	4. **[[Application Layer]]:** At this layer, security measures are integrated into applications themselves. Multi-factor authentication is one example of a security control implemented at this layer.
	5. **[[Data Layer]]:** The final layer focuses on protecting critical data, such as personally identifiable information (PII). Asset classification is a key control in this layer.
- **[[Data Flow]]:** Information passes through each of these five layers when it's exchanged over a network, ensuring comprehensive protection.
- **Variety of Security Controls:** The Defense in Depth model includes a wide range of security controls beyond the few mentioned in the video. These controls are implemented to protect important assets.
- **Business Applications:** Many businesses design their security systems using the Defense in Depth model to provide a comprehensive and robust security framework.

The video's analogy of the castle helps illustrate how Defense in Depth works, with each layer providing a unique challenge for potential attackers. By implementing this layered approach, organizations can significantly reduce the risk of security breaches and protect their valuable assets.

# Common vulnerabilities and exposures

- **[[Global Effort]]:** Cybersecurity is not just the responsibility of a single security team within an organization; it's a global effort. A wide range of individuals and organizations work together to enhance cybersecurity.
- **Vulnerabilities and Exposures:** **[[Vulnerabilities]]** are weaknesses within a system, while **[[Exposures]]** are mistakes that can be exploited by threats. For example, documents are vulnerable to being misplaced, but laying a document near an open window exposes it to being blown away.
- **CVE List:** The **[[Common Vulnerabilities and Exposures (CVE) list]]** is one of the most popular libraries for documenting known vulnerabilities and exposures. It's an openly accessible dictionary of such issues and serves as a valuable resource for many organizations looking to enhance their defenses.
	- **Creation and Purpose of CVE:** The CVE list was created by the **[[MITRE Corporation]]** in *1999*. MITRE is a non-profit research and development center sponsored by the US government, with a focus on improving security technologies worldwide. The primary purpose of the CVE list is to provide a standardized way of identifying and categorizing known vulnerabilities and exposures.
	- **Reporting and Review Process:** Vulnerabilities and exposures are reported to a **[[CVE Numbering Authority (CNA)]]** for review. CNAs are organizations that volunteer to analyze and distribute information on eligible CVEs. The reported issues go through a rigorous testing process.
		- **CVE ID Criteria:** Vulnerabilities must meet specific criteria before they are assigned a CVE ID. These criteria include being 
			- Independent of other issues
			- Recognized as a security risk
			- Submitted with supporting evidence
			- Affecting only one codebase.
		- **Additional Testing:** Vulnerabilities added to the CVE list are often reviewed by other online vulnerability databases, such as the NIST National Vulnerabilities Database. These organizations subject vulnerabilities to additional testing to determine their significance and potential threat.
- **Common Vulnerability Scoring System (CVSS):** The **[[NIST National Vulnerabilities Database]]** uses the **[[Common Vulnerability Scoring System (CVSS)]]** to score the severity of vulnerabilities. CVSS is a measurement system that calculates the impact and urgency of addressing a vulnerability. Scores range from 0 to 10, with lower scores considered low risk and higher scores indicating critical risk.
	- **Use in Vulnerability Management:** Security teams often use the CVE list and CVSS scores as part of their vulnerability management strategy. They rely on these references to prioritize security fixes and determine how quickly a vulnerability should be patched.
- **Diverse Global Perspectives:** The contributions to online libraries like the CVE list come from diverse perspectives worldwide. The collaboration of different individuals and organizations in this effort is a fundamental aspect of the cybersecurity field.

The video emphasizes the role of the global cybersecurity community in sharing information and collectively addressing vulnerabilities and exposures to protect vital assets and data.

# The OWASP Top 10

To prepare for future risks, security professionals need to stay informed. Previously, you learned about the **CVE® list**, an openly accessible dictionary of known vulnerabilities and exposures. The CVE® list is an important source of information that the global security community uses to share information with each other.

In this reading, you’ll learn about another important resource that security professionals reference, the Open Web Application Security Project, recently renamed Open Worldwide Application Security Project® (OWASP). You’ll learn about OWASP’s role in the global security community and how companies use this resource to focus their efforts.

## What is OWASP?

**[[OWASP]]** is a nonprofit foundation that works to improve the security of software. OWASP is an open platform that security professionals from around the world use to share information, tools, and events that are focused on securing the web.

## The OWASP Top 10

One of OWASP’s most valuable resources is the OWASP Top 10. The organization has published this list since 2003 as a way to spread awareness of the web’s most targeted vulnerabilities. The Top 10 mainly applies to new or custom made software. Many of the world's largest organizations reference the OWASP Top 10 during application development to help ensure their programs address common security mistakes.

**Pro tip:** OWASP’s Top 10 is updated every few years as technologies evolve. Rankings are based on how often the vulnerabilities are discovered and the level of risk they present.

**Note:** Auditors also use the OWASP Top 10 as one point of reference when checking for regulatory compliance.

## Common vulnerabilities

Businesses often make critical security decisions based on the vulnerabilities listed in the OWASP Top 10. This resource influences how businesses design new software that will be on their network, unlike the CVE® list, which helps them identify improvements to existing programs. These are the most regularly listed vulnerabilities that appear in their rankings to know about:

### **[[Broken access control]]**

Access controls limit what users can do in a web application. For example, a blog might allow visitors to post comments on a recent article but restricts them from deleting the article entirely. Failures in these mechanisms can lead to unauthorized information disclosure, modification, or destruction. They can also give someone unauthorized access to other business applications.

### **[[Cryptographic failures]]**

Information is one of the most important assets businesses need to protect. Privacy laws such as General Data Protection Regulation (GDPR) require sensitive data to be protected by effective encryption methods. Vulnerabilities can occur when businesses fail to encrypt things like personally identifiable information (PII). For example, if a web application uses a weak hashing algorithm, like MD5, it’s more at risk of suffering a data breach.

### **[[Injection]]**

Injection occurs when malicious code is inserted into a vulnerable application. Although the app appears to work normally, it does things that it wasn’t intended to do. Injection attacks can give threat actors a backdoor into an organization’s information system. A common target is a website’s login form. When these forms are vulnerable to injection, attackers can insert malicious code that gives them access to modify or steal user credentials.

### **[[Insecure design]]**

Applications should be designed in such a way that makes them resilient to attack. When they aren’t, they’re much more vulnerable to threats like injection attacks or malware infections. Insecure design refers to a wide range of missing or poorly implemented security controls that should have been programmed into an application when it was being developed.

### **[[Security misconfiguration]]**

Misconfigurations occur when security settings aren’t properly set or maintained. Companies use a variety of different interconnected systems. Mistakes often happen when those systems aren’t properly set up or audited. A common example is when businesses deploy equipment, like a network server, using default settings. This can lead businesses to use settings that fail to address the organization's security objectives.

### **[[Vulnerable and outdated components]]**

Vulnerable and outdated components is a category that mainly relates to application development. Instead of coding everything from scratch, most developers use open-source libraries to complete their projects faster and easier. This publicly available software is maintained by communities of programmers on a volunteer basis. Applications that use vulnerable components that have not been maintained are at greater risk of being exploited by threat actors.

### **[[Identification and authentication failures]]**

Identification is the keyword in this vulnerability category. When applications fail to recognize who should have access and what they’re authorized to do, it can lead to serious problems. For example, a home Wi-Fi router normally uses a simple login form to keep unwanted guests off the network. If this defense fails, an attacker can invade the homeowner’s privacy.

### **[[Software and data integrity failures]]**

Software and data integrity failures are instances when updates or patches are inadequately reviewed before implementation. Attackers might exploit these weaknesses to deliver malicious software. When that occurs, there can be serious downstream effects. Third parties are likely to become infected if a single system is compromised, an event known as a supply chain attack.

A famous example of a supply chain attack is the [SolarWinds cyber attack (2020)](https://www.gao.gov/blog/solarwinds-cyberattack-demands-significant-federal-and-private-sector-response-infographic)where hackers injected malicious code into software updates that the company unknowingly released to their customers.

### **Security logging and monitoring failures**

In security, it’s important to be able to log and trace back events. Having a record of events like user login attempts is critical to finding and fixing problems. Sufficient monitoring and incident response is equally important.

### **Server-side request forgery**

Companies have public and private information stored on web servers. When you use a hyperlink or click a button on a website, a request is sent to a server that should validate who you are, fetch the appropriate data, and then return it to you.

![Un hacker que utiliza la computadora de su víctima para robar datos de un servidor web.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/DT6Hkom1RcugsbS_BFgoLw_7e1de97a7fdc4e00b7c9b14a0ad5fcf1_Pfjezx6XbwJ_TAJbWmCtLMpwLX4YD2xP4Se2IJeQF4uTD6BtqNXlcpObbGHeJuzWlxr5A3WqWQzZ2K6E6kFLsX3JiI0bxbFtWFjNUCxZTgs7ftpEgVEcI87zvBxN2flvGXs37nW_RJF0QVLY7798FCXB9pAH_uUI3zYLbXOiOpGcdhti00aMTwl7xbMFpg?expiry=1697587200000&hmac=ty90OVJKfQHBgiPwOrjHGScUHqQOyH0eQakg6r9Ubwc)

Server-side request forgeries (SSRFs) are when attackers manipulate the normal operations of a server to read or update other resources on that server. These are possible when an application on the server is vulnerable. Malicious code can be carried by the vulnerable app to the host server that will fetch unauthorized data.

## Key takeaways

Staying informed and maintaining awareness about the latest cybersecurity trends can be a useful way to help defend against attacks and prepare for future risks in your security career. [OWASP’s Top 10](https://owasp.org/www-project-top-ten/)

is a useful resource where you can learn more about these vulnerabilities.
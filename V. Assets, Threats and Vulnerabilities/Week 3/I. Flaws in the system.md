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

- **Global Effort:** Cybersecurity is not just the responsibility of a single security team within an organization; it's a global effort. A wide range of individuals and organizations work together to enhance cybersecurity.
- **Vulnerabilities and Exposures:** Vulnerabilities are weaknesses within a system, while exposures are mistakes that can be exploited by threats. For example, documents are vulnerable to being misplaced, but laying a document near an open window exposes it to being blown away.
- **CVE List:** The Common Vulnerabilities and Exposures (CVE) list is one of the most popular libraries for documenting known vulnerabilities and exposures. It's an openly accessible dictionary of such issues and serves as a valuable resource for many organizations looking to enhance their defenses.
- **Creation and Purpose of CVE:** The CVE list was created by the MITRE Corporation in 1999. MITRE is a non-profit research and development center sponsored by the US government, with a focus on improving security technologies worldwide. The primary purpose of the CVE list is to provide a standardized way of identifying and categorizing known vulnerabilities and exposures.
- **Reporting and Review Process:** Vulnerabilities and exposures are reported to a CVE Numbering Authority (CNA) for review. CNAs are organizations that volunteer to analyze and distribute information on eligible CVEs. The reported issues go through a rigorous testing process.
- **CVE ID Criteria:** Vulnerabilities must meet specific criteria before they are assigned a CVE ID. These criteria include being independent of other issues, recognized as a security risk, submitted with supporting evidence, and affecting only one codebase.
- **Additional Testing:** Vulnerabilities added to the CVE list are often reviewed by other online vulnerability databases, such as the NIST National Vulnerabilities Database. These organizations subject vulnerabilities to additional testing to determine their significance and potential threat.
- **Common Vulnerability Scoring System (CVSS):** The NIST National Vulnerabilities Database uses the Common Vulnerability Scoring System (CVSS) to score the severity of vulnerabilities. CVSS is a measurement system that calculates the impact and urgency of addressing a vulnerability. Scores range from 0 to 10, with lower scores considered low risk and higher scores indicating critical risk.
- **Use in Vulnerability Management:** Security teams often use the CVE list and CVSS scores as part of their vulnerability management strategy. They rely on these references to prioritize security fixes and determine how quickly a vulnerability should be patched.
- **Diverse Global Perspectives:** The contributions to online libraries like the CVE list come from diverse perspectives worldwide. The collaboration of different individuals and organizations in this effort is a fundamental aspect of the cybersecurity field.

The video emphasizes the role of the global cybersecurity community in sharing information and collectively addressing vulnerabilities and exposures to protect vital assets and data.
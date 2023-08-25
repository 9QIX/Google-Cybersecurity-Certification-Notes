# Threat, risks and vulnerabilities

[[Asset]] is an item perceived as having value to an organization. During their lifespan, organizations acquire all types of assets, including physical office spaces, computers, customers' PII, intellectual property, such as patents or copyrighted data, and so much more. Unfortunately, organizations operate in an environment that presents multiple security threats, risks, and vulnerabilities to their assets.

Let's review what threats, risks, and vulnerabilities are and discuss some common examples of each:

- A **[[threat]]** is any circumstance or event that can negatively impact assets. One example of a threat is a social engineering attack.
  - [[Social engineering]] is a manipulation technique that exploits human error to gain private information, access, or valuables. Malicious links in email messages that look like they're from legitimate companies or people is one method of social engineering known as phishing. As a reminder, phishing is a technique that is used to acquire sensitive data, such as user names, passwords, or banking information.
- A **[[Risk]]** is anything that can impact the confidentiality, integrity, or availability of an asset. Think of a risk as the likelihood of a threat occurring.
  An example of a risk to an organization might be the lack of backup protocols for making sure its stored information can be recovered in the event of an accident or security incident.
  - Organizations tend to rate risks at different levels: low, medium, and high, depending on possible threats and the value of an asset.
    - A **[[Low-Risk Asset]]** is information that would not harm the organization's reputation or ongoing operations, and would not cause financial damage if compromised.
      - This includes public information such as website content, or published research data.
    - A **[[Medium-Risk Asset]]** might include information that's not available to the public and may cause some damage to the organization's finances, reputation, or ongoing operations.
      - For example, the early release of a company's quarterly earnings could impact the value of their stock.
    - A **[[High-Risk Asset]]** is any information protected by regulations or laws, which if compromised, would have a severe negative impact on an organization's finances, ongoing operations, or reputation.
      - This could include leaked assets with SPII, PII, or intellectual property.
- **[[Vulnerability]]** is a weakness that can be exploited by a threat. **_And it's worth noting that both a vulnerability and threat must be present for there to be a risk_**.
  - Examples of vulnerabilities include: an outdated firewall, software, or application; weak passwords; or unprotected confidential data.
  - People can also be considered a vulnerability. People's actions can significantly affect an organization's internal network. Whether it's a client, external vendor, or employee, maintaining security must be a united effort.
  - So entry-level analysts need to educate and empower people to be more security conscious. For example, educating people on how to identify a phishing email is a great starting point. Using access cards to grant employee access to physical spaces while restricting outside visitors is another good security measure.

# Key impacts of threats, risks and vulnerabilities

- **[[Ransomware]]** is a malicious attack where threat actors encrypt an organization's data then demand payment to restore access.
  - Once ransomware is deployed by an attacker, it can freeze network systems, leave devices unusable, and encrypt, or lock confidential data, making devices inaccessible. The [[threat actor]] then demands a ransom before providing a decryption key to allow organizations to return to their normal business operations. Think of a decryption key as a password provided to regain access to your data. Note that when ransom negotiations occur or data is leaked by threat actors, these events can occur through the dark web.

## Three layers of the web

- The **[[Surface Web]]** is the layer that most people use. It contains content that can be accessed using a web browser.
- The **[[Deep Web]]** Generally requires authorization to access it. An organization's intranet is an example of the deep web, since it can only be accessed by employees or others who have been granted access.
- The **[[Dark Web]]** can only be accessed by using special software. The dark web generally carries a negative connotation since it is the preferred web layer for criminals because of the secrecy that it provides.

## Three key impacts of threats, risks and vulnerabilities

- **[[Financial Impact]]** - When an organization's assets are compromised by an attack, such as the use of malware, the financial consequences can be significant for a variety of reasons. These can include interrupted production and services, the cost to correct the issue, and fines if assets are compromised because of non-compliance with laws and regulations.
- **[[Identity Theft]]** - Organizations must decide whether to store private customer, employee, and outside vendor data, and for how long. Storing any type of sensitive data presents a risk to the organization.
  - Sensitive data can include personally identifiable information, or PII, which can be sold or leaked through the dark web. That's because the dark web provides a sense of secrecy and threat actors may have the ability to sell data there without facing legal consequences.
- **[[Damage to an Organization's Reputation]]** - A solid customer base supports an organization's mission, vision, and financial goals. An exploited vulnerability can lead customers to seek new business relationships with competitors or create bad press that causes permanent damage to an organization's reputation.
  - The loss of customer data doesn't only affect an organization's reputation and financials, it may also result in legal penalties and fines. Organizations are strongly encouraged to take proper security measures and follow certain protocols to prevent the significant impact of threats, risks, and vulnerabilities. By using all the tools in their toolkit, security teams are better prepared to handle an event such as a ransomware attack.

# NIST’s Risk Management Framework

1. **[[Prepare]]** refers to activities that are necessary to manage security and privacy risks before a breach occurs.
   - As an entry-level analyst, you'll likely use this step to monitor for risks and identify controls that can be used to reduce those risks.
2. **[[Categorize]]**, which is used to develop risk management processes and tasks. Security professionals then use those processes and develop tasks by thinking about how the confidentiality, integrity, and availability of systems and information can be impacted by risk.
   - As an entry-level analyst, you'll need to be able to understand how to follow the processes established by your organization to reduce risks to critical assets, such as private customer information.
3. **[[Select]]** means to choose, customize, and capture documentation of the controls that protect an organization.
   - An example of the select step would be keeping a playbook up-to-date or helping to manage other documentation that allows you and your team to address issues more efficiently.
4. **[[Implement]]** security and privacy plans for the organization. Having good plans in place is essential for minimizing the impact of ongoing security risks.
   - For example, if you notice a pattern of employees constantly needing password resets, implementing a change to password requirements may help solve this issue.
5. **[[Assess]]** means to determine if established controls are implemented correctly. An organization always wants to operate as efficiently as possible. So it's essential to take the time to analyze whether the implemented protocols, procedures, and controls that are in place are meeting organizational needs.
   - During this step, analysts identify potential weaknesses and determine whether the organization's tools, procedures, controls, and protocols should be changed to better manage potential risks.
6. **[[Authorize]]** means being accountable for the security and privacy risks that may exist in an organization.
   - As an analyst, the authorization step could involve generating reports, developing plans of action, and establishing project milestones that are aligned to your organization's security goals.
7. **[[Monitor]]** means to be aware of how systems are operating. Assessing and maintaining technical operations are tasks that analysts complete daily. Part of maintaining a low level of risk for an organization is knowing how the current systems support the organization's security goals. If the systems in place don't meet those goals, changes may be needed.

# Manage common threats, risks, and vulnerabilities

Previously, you learned that security involves protecting organizations and people from threats, risks, and vulnerabilities. Understanding the current threat landscapes gives organizations the ability to create policies and processes designed to help prevent and mitigate these types of security issues. In this reading, you will further explore how to manage risk and some common threat actor tactics and techniques, so you are better prepared to protect organizations and the people they serve when you enter the cybersecurity field. 

## [[Risk management]]

A primary goal of organizations is to protect assets. An **[[asset]]** is an item perceived as having value to an organization. Assets can be digital or physical. Examples of digital assets include the personal information of employees, clients, or vendors, such as: 
- Social Security Numbers (SSNs), or unique national identification numbers assigned to individuals 
- Dates of birth
- Bank account numbers
- Mailing addresses

Examples of physical assets include:
- Payment kiosks
- Servers
- Desktop computers
- Office spaces

Some common strategies used to manage risks include:
- **[[Acceptance]]**: Accepting a risk to avoid disrupting business continuity
- **[[Avoidance]]**: Creating a plan to avoid the risk altogether
- **[[Transference]]**: Transferring risk to a third party to manage
- **[[Mitigation]]**: Lessening the impact of a known risk

Additionally, organizations implement risk management processes based on widely accepted frameworks to help protect digital and physical assets from various threats, risks, and vulnerabilities. Examples of frameworks commonly used in the cybersecurity industry include the National Institute of Standards and Technology Risk Management Framework ([NIST RMF](https://csrc.nist.gov/projects/risk-management/about-rmf)) and Health Information Trust Alliance ([HITRUST](https://hitrustalliance.net/product-tool/hitrust-csf/?utm_term=&utm_campaign=HITRUST_i1_PaidSearch&utm_source=adwords&utm_medium=ppc&hsa_acc=2724012343&hsa_cam=16641331914&hsa_grp=136906352837&hsa_ad=598980848547&hsa_src=g&hsa_tgt=dsa-1659695676388&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiAorKfBhC0ARIsAHDzsluRN5tSpCQal-rYnZLo2wUNppQdUHUba82LMX3JMGOoRPEJ6wG6-LgaAryYEALw_wcB)).

Following are some common types of threats, risks, and vulnerabilities you’ll help organizations manage as a security professional.

## Today’s most common threats, risks, and vulnerabilities

### **Threats**

A **[[threat]]** is any circumstance or event that can negatively impact assets. As an entry-level security analyst, your job is to help defend the organization’s assets from inside and outside threats. Therefore, understanding common types of threats is important to an analyst’s daily work. As a reminder, common threats include:
- **[[Insider Threats]]:** Staff members or vendors abuse their authorized access to obtain data that may harm an organization.
- **[[Advanced Persistent Threats (APTs)]]:** A threat actor maintains unauthorized access to a system for an extended period of time.

### **Risks**

A **[[risk]]** is anything that can impact the confidentiality, integrity, or availability of an asset. A basic formula for determining the level of risk is that risk equals the likelihood of a threat. One way to think about this is that a risk is being late to work and threats are traffic, an accident, a flat tire, etc. 

There are different factors that can affect the likelihood of a risk to an organization’s assets, including:
- **[[External Risk]]:** Anything outside the organization that has the potential to harm organizational assets, such as threat actors attempting to gain access to private information
- **[[Internal Risk]]:** A current or former employee, vendor, or trusted partner who poses a security risk
- **[[Legacy Systems]]:** Old systems that might not be accounted for or updated, but can still impact assets, such as workstations or old mainframe systems. For example, an organization might have an old vending machine that takes credit card payments or a workstation that is still connected to the legacy accounting system.
- **[[Multiparty Risk]]:** Outsourcing work to third-party vendors can give them access to intellectual property, such as trade secrets, software designs, and inventions.
- **[[Software Compliance or Licensing]]:** Software that is not updated or in compliance, or patches that are not installed in a timely manner

There are many resources, such as the NIST, that provide lists of [cybersecurity risks](https://www.nist.gov/itl/smallbusinesscyber/cybersecurity-basics/cybersecurity-risks). Additionally, the Open Web Application Security Project (OWASP) publishes a standard awareness document about the [top 10 most critical security risks](https://owasp.org/www-project-top-ten/) to web applications, which is updated regularly.

**Note:** The OWASP’s common attack types list contains three new risks for the years 2017 to 2021: insecure design, software and data integrity failures, and server-side request forgery. This update emphasizes the fact that security is a constantly evolving field. It also demonstrates the importance of staying up to date on current threat actor tactics and techniques, so you can be better prepared to manage these types of risks.

![[Pasted image 20230825184618.png]]

### **Vulnerabilities**

A **[[vulnerability]]** is a weakness that can be exploited by a threat. Therefore, organizations need to regularly inspect for vulnerabilities within their systems. Some vulnerabilities include:

- **[[ProxyLogon]]:** A pre-authenticated vulnerability that affects the Microsoft Exchange server. This means a threat actor can complete a user authentication process to deploy malicious code from a remote location.
- **[[ZeroLogon]]:** A vulnerability in Microsoft’s Netlogon authentication protocol. An authentication protocol is a way to verify a person's identity. Netlogon is a service that ensures a user’s identity before allowing access to a website's location.
- **[[Log4Shell]]:** Allows attackers to run Java code on someone else’s computer or leak sensitive information. It does this by enabling a remote attacker to take control of devices connected to the internet and run malicious code.
- **[[PetitPotam]]:** Affects Windows New Technology Local Area Network (LAN) Manager (NTLM). It is a theft technique that allows a LAN-based attacker to initiate an authentication request.
- **[[Security Logging and Monitoring Failures]]:** Insufficient logging and monitoring capabilities that result in attackers exploiting vulnerabilities without the organization knowing it
- **[[Server-Side Request Forgery]]:** Allows attackers to manipulate a server-side application into accessing and updating backend resources. It can also allow threat actors to steal data.

As an entry-level security analyst, you might work in vulnerability management, which is monitoring a system to identify and mitigate vulnerabilities. Although patches and updates may exist, if they are not applied, intrusions can still occur. For this reason, constant monitoring is important. The sooner an organization identifies a vulnerability and addresses it by patching it or updating their systems, the sooner it can be mitigated, reducing the organization’s exposure to the vulnerability.

To learn more about the vulnerabilities explained in this section of the reading, as well as other vulnerabilities, explore the [NIST National Vulnerability Database](https://nvd.nist.gov/vuln) and [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)

## Key takeaways

In this reading, you learned about some risk management strategies and frameworks that can be used to develop organization-wide policies and processes to mitigate threats, risks, and vulnerabilities. You also learned about some of today’s most common threats, risks, and vulnerabilities to business operations. Understanding these concepts can better prepare you to not only protect against, but also mitigate, the types of security-related issues that can harm organizations and people alike.
# Vulnerability assessments

- **[[Vulnerability Assessment]]:** A vulnerability assessment is an internal review process conducted by an organization's security team to identify, evaluate, score, and fix vulnerabilities within their systems. It is similar to the process of identifying and categorizing vulnerabilities in the CVE list but is conducted within the organization.
	- **Role of Security Analysts:** Security analysts play a significant role in the vulnerability assessment process. They are responsible for performing the assessment, evaluating vulnerabilities, assigning risk scores, and participating in the remediation process.
	- **Goals of Vulnerability Assessment:** The primary goals of a vulnerability assessment are to identify weaknesses, prevent potential attacks, and ensure that the organization's security controls meet regulatory standards. It helps organizations proactively address vulnerabilities.
- **Selecting Focus Areas:** Given the multitude of assets that organizations need to protect, security teams may need to prioritize specific areas for assessment. They determine where to focus their vulnerability assessment efforts.
	- **Four-Step Process:** Vulnerability assessments generally follow a four-step process:
		1. **[[Identification]]:** In this step, scanning tools and manual testing are used to discover vulnerabilities. The goal is to gain an understanding of the current state of the security system.
		2. **[[Vulnerability Analysis]]:** Each identified vulnerability is tested to determine the source of the problem. This step is like being a digital detective.
		3. **[[Risk Assessment]]:** Vulnerabilities are assigned scores based on the severity of their potential impact and the likelihood of exploitation. Risk assessments help prioritize resources for addressing vulnerabilities.
		4. **[[Remediation]]:** This step involves addressing vulnerabilities based on their severity scores. It is a collaborative effort between security staff and IT teams to devise effective solutions, which may include enforcing new security procedures, updating systems, or implementing patches.
- **Search for Problems Before They Happen:** Vulnerability assessments are proactive measures that help organizations find and address security flaws before they can be exploited by threats. By conducting these assessments, companies take preventive action to enhance their security posture.
- **Future Exploration:** In the next session, the video hints at exploring how organizations decide where to focus their vulnerability assessment efforts. This likely involves considerations of critical assets and potential risks.

The video underscores the importance of conducting vulnerability assessments as a fundamental part of an organization's cybersecurity strategy. It allows organizations to stay ahead of potential threats by identifying and addressing vulnerabilities proactively.

# Approaches to vulnerability scanning

Previously, you learned about a **[[vulnerability assessment]]**, which is the internal review process of an organization's security systems. An organization performs vulnerability assessments to identify weaknesses and prevent attacks. Vulnerability scanning tools are commonly used to simulate threats by finding vulnerabilities in an attack surface. They also help security teams take proactive steps towards implementing their remediation strategy.

Vulnerability scanners are important tools that you'll likely use in the field. In this reading, you’ll explore how vulnerability scanners work and the types of scans they can perform.

## What is a vulnerability scanner?

A **[[vulnerability scanner]]** is software that automatically compares known vulnerabilities and exposures against the technologies on the network. In general, these tools scan systems to find misconfigurations or programming flaws.

Scanning tools are used to analyze each of the five attack surfaces that you learned about in [the video about the defense in depth strategy](https://www.coursera.org/learn/assets-threats-and-vulnerabilities/lecture/IdvXj/defense-in-depth-strategy):

1. **Perimeter layer**, like authentication systems that validate user access
2. **Network layer**, which is made up of technologies like network firewalls and others
3. **Endpoint layer**, which describes devices on a network, like laptops, desktops, or servers
4. **Application layer**, which involves the software that users interact with
5. **Data layer**, which includes any information that’s stored, in transit, or in use

When a scan of any layer begins, the scanning tool compares the findings against databases of security threats. At the end of the scan, the tool flags any vulnerabilities that it finds and adds them to its reference database. Each scan adds more information to the database, helping the tool be more accurate in its analysis.

**Note:** Vulnerability databases are also routinely updated by the company that designed the scanning software.

## Performing scans

Vulnerability scanners are meant to be non-intrusive. Meaning, they don’t break or take advantage of a system like an attacker would. Instead, they simply scan a surface and alert you to any potentially unlocked doors in your systems.

**Note:** While vulnerability scanners are non-intrusive, there are instances when a scan can inadvertently cause issues, like crash a system.

There are a few different ways that these tools are used to scan a surface. Each approach corresponds to the pathway a threat actor might take. Next, you can explore each type of scan to get a clearer picture of this. 

**External vs. internal**

External and internal scans simulate an attacker's approach.

_[[External scans]]_ test the perimeter layer outside of the internal network. They analyze outward facing systems, like websites and firewalls. These kinds of scans can uncover vulnerable things like vulnerable network ports or servers.

_[[Internal scans]]_ start from the opposite end by examining an organization's internal systems. For example, this type of scan might analyze application software for weaknesses in how it handles user input.

### **Authenticated vs. unauthenticated**

Authenticated and unauthenticated scans simulate whether or not a user has access to a system.

_[[Authenticated scans]]_ might test a system by logging in with a real user account or even with an admin account. These service accounts are used to check for vulnerabilities, like broken access controls.

_[[Unauthenticated scans]]_ simulate external threat actors that do not have access to your business resources. For example, a scan might analyze file shares within the organization that are used to house internal-only documents. Unauthenticated users should receive "access denied" results if they tried opening these files. However, a vulnerability would be identified if you were able to access a file.

### **Limited vs. comprehensive**

Limited and comprehensive scans focus on particular devices that are accessed by internal and external users.

_[[Limited scans]]_ analyze particular devices on a network, like searching for misconfigurations on a firewall.

_[[Comprehensive scans]]_ analyze all devices connected to a network. This includes operating systems, user databases, and more.

**Pro tip:** Discovery scanning should be done prior to limited or comprehensive scans. Discovery scanning is used to get an idea of the computers, devices, and open ports that are on a network.

## Key takeaways

Finding vulnerabilities requires thinking of all possibilities. Vulnerability scans vary depending on the surfaces that an organization is evaluating. Usually, seasoned security professionals lead the effort of configuring and performing these types of scans to create a profile of a company’s security posture. However, analysts also play an important role in the process. The results of a vulnerability scan often lead to renewed compliance efforts, procedural changes, and system patching. Understanding the objectives of common types of vulnerability scans will help you participate in these proactive security exercises whenever possible.

**Tip:** To explore vulnerability scanner software commonly used in the cybersecurity industry, in your preferred browser enter search terms similar to “popular vulnerability scanner software” and/or “open source vulnerability scanner software used in cybersecurity”.

# The importance of updates

At some point in time, you may have wondered, “Why do my devices constantly need updating?” For consumers, updates provide improvements to performance, stability, and even new features! But from a security standpoint, they serve a specific purpose. Updates allow organizations to address security vulnerabilities that can place their users, devices, and networks at risk.

In a video, you learned that updates fit into every security team’s remediation strategy. They usually take place after a **vulnerability assessment**, which is the internal review process of an organization's security systems. In this reading, you’ll learn what updates do, how they’re delivered, and why they’re important to cybersecurity.

## Patching gaps in security

An outdated computer is a lot like a house with unlocked doors. Malicious actors use these gaps in security the same way, to gain unauthorized access. Software updates are similar to locking the doors to keep them out.

A **[[patch update]]** is a software and operating system update that addresses security vulnerabilities within a program or product. Patches usually contain bug fixes that address common security vulnerabilities and exposures.

**Note:** Ideally, patches address common vulnerabilities and exposures before malicious hackers find them. However, patches are sometimes developed as a result of a **[[zero-day]]**, which is an exploit that was previously unknown.

## Common update strategies

When software updates become available, clients and users have two installation options:

- Manual updates
- Automatic updates

As you’ll learn, each strategy has both benefits and disadvantages.

### **[[Manual updates]]**

A manual deployment strategy relies on IT departments or users obtaining updates from the developers. Home office or small business environments might require you to find, download, and install updates yourself. In enterprise settings, the process is usually handled with a configuration management tool. These tools offer a range of options to deploy updates, like to all clients on your network or a select group of users.  

**Advantage:** An advantage of manual update deployment strategies is control. That can be useful if software updates are not thoroughly tested by developers, leading to instability issues.

**Disadvantage:** A drawback to manual update deployments is that critical updates can be forgotten or disregarded entirely.

### **[[Automatic updates]]**

An automatic deployment strategy takes the opposite approach. With this option, finding, downloading, and installing updates can be done by the system or application.

**Pro tip:** The Cybersecurity and Infrastructure Security Agency (CISA) recommends using automatic options whenever they’re available.

Certain permissions need to be enabled by users or IT groups before updates can be installed, or pushed, when they're available. It is up to the developers to adequately test their patches before release.

**Advantage:** An advantage to automatic updates is that the deployment process is simplified. It also keeps systems and software current with the latest, critical patches.

**Disadvantage:** A drawback to automatic updates is that instability issues can occur if the patches were not thoroughly tested by the vendor. This can result in performance problems and a poor user experience.

## End-of-life software

Sometimes updates are not available for a certain type of software known as **[[end-of-life (EOL) software]]**. All software has a lifecycle. It begins when it’s produced and ends when a newer version is released. At that point, developers must allocate resources to the newer versions, which leads to EOL software. While the older software is still useful, the manufacturer no longer supports it. 

**Note:** Patches and updates are very different from upgrades. _[[Upgrades]]_ refer to completely new versions of hardware or software that can be purchased.

[CISA recommends discontinuing the use of EOL software](https://www.cisa.gov/news-events/news/understanding-patches-and-software-updates)because it poses an unfixable risk to systems. But, this recommendation is not always followed. Replacing EOL technology can be costly for businesses and individual users.

The risks that EOL software presents continues to grow as more connected devices enter the marketplace. For example, there are billions of Internet of Things (IoT) devices, like smart light bulbs, connected to home and work networks. In some business settings, all an attacker needs is a single unpatched device to gain access to the network and cause problems.

## Key takeaways

Updating software and patching vulnerabilities is an important practice that everyone should participate in. Unfortunately, that’s not always the case. Many of the biggest cyber attacks in the world might have been prevented if systems were kept updated. One example is the WannaCry attack of 2017. The attack affected computers in more than 150 countries and caused an estimated $4 billion dollars in damages. Researchers have since found that WannaCry could have been prevented if the infected systems were up-to-date with a security patch that was made available months before the attack. Keeping software updated requires effort. However, the benefits they provide make them worthwhile.

# Penetration testing

An effective security plan relies on regular testing to find an organization's weaknesses. Previously, you learned that **vulnerability assessments**, the internal review process of an organization's security systems, are used to design defense strategies based on system weaknesses. In this reading, you'll learn how security teams evaluate the effectiveness of their defenses using penetration testing.

## Penetration testing

A **[[penetration test]]**, or pen test, is a simulated attack that helps identify vulnerabilities in systems, networks, websites, applications, and processes. The simulated attack in a pen test involves using the same tools and techniques as malicious actors in order to mimic a real life attack. Since a pen test is an authorized attack, it is considered to be a form of ethical hacking. Unlike a vulnerability assessment that finds weaknesses in a system's security, a pen test exploits those weaknesses to determine the potential consequences if the system breaks or gets broken into by a threat actor.

For example, the cybersecurity team at a financial company might simulate an attack on their banking app to determine if there are weaknesses that would allow an attacker to steal customer information or illegally transfer funds. If the pen test uncovers misconfigurations, the team can address them and improve the overall security of the app.  

**Note:** Organizations that are regulated by PCI DSS, HIPAA, or GDPR must routinely perform penetration testing to maintain compliance standards.

## Learning from varied perspectives

These authorized attacks are performed by pen testers who are skilled in programming and network architecture. Depending on their objectives, organizations might use a few different approaches to penetration testing:

- **[[Red team tests]]** _simulate attacks_ to identify vulnerabilities in systems, networks, or applications.
- **[[Blue team tests]]** focus on _defense_ _and incident response_ to validate an organization's existing security systems.
- **[[Purple team tests]]** are _collaborative_, focusing on improving the security posture of the organization by combining elements of red and blue team exercises.

Red team tests are commonly performed by independent pen testers who are hired to evaluate internal systems. Although, cybersecurity teams may also have their own pen testing experts. Regardless of the approach, penetration testers must make an important decision before simulating an attack: _How much access and information do I need?_

## Penetration testing strategies

There are three common penetration testing strategies: 

- **Open-box testing** is when the tester has the same privileged access that an internal developer would have—information like system architecture, data flow, and network diagrams. This strategy goes by several different names, including internal, full knowledge, white-box, and clear-box penetration testing.
- **Closed-box testing** is when the tester has little to no access to internal systems—similar to a malicious hacker. This strategy is sometimes referred to as external, black-box, or zero knowledge penetration testing.
- **Partial knowledge testing** is when the tester has limited access and knowledge of an internal system—for example, a customer service representative. This strategy is also known as gray-box testing.

Closed box testers tend to produce the most accurate simulations of a real-world attack. Nevertheless, each strategy produces valuable results by demonstrating how an attacker might infiltrate a system and what information they could access.

## Becoming a penetration tester

Penetration testers are in-demand in the fast growing field of cybersecurity. All of the skills you’re learning in this program can help you advance towards a career in pen testing:

- Network and application security
    
- Experience with operating systems, like Linux
    
- Vulnerability analysis and threat modeling
    
- Detection and response tools
    
- Programming languages, like Python and BASH
    
- Communication skills
    

Programming skills are very helpful in penetration testing because it's often performed on software and IT systems. With enough practice and dedication, cybersecurity professionals at any level can develop the skills needed to be a pen tester.

### **Bug bounty programs**

Organization’s commonly run bug bounty programs which offer freelance pen testers financial rewards for finding and reporting vulnerabilities in their products. Bug bounties are great opportunities for amateur security professionals to participate and grow their skills. 

**Pro tip:** [HackerOne](https://hackerone.com/bug-bounty-programs)

is a community of ethical hackers where you can find active bug bounties to participate in.

## Key takeaways

A major risk for organizations is malicious hackers breaking into their systems. Penetration testing is another way for organizations to secure their systems. Security teams use these simulated attacks to get a clearer picture of weaknesses in their defenses. There’s a growing need for specialized security professionals in this field. Even if you start out assisting with these activities, there’s plenty of opportunities to grow and learn the skills to be a pen tester.
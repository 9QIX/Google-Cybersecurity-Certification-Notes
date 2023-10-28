# The detection and analysis phase of the lifecycle

- **[[Detection]]:** Detection involves the rapid discovery of security events. Security tools, such as Intrusion Detection Systems (IDS) and Security Information and Event Management (SIEM) systems, collect and analyze event data from various sources to identify potentially unusual activity. If an incident is detected, such as a successful unauthorized access, an alert is generated.
- **Events vs. Incidents:** It's important to understand the distinction between events and incidents. **[[Events]]** are regular occurrences in business operations, like website visits or password resets. **[[Incidents]]** are events that are of concern due to their potential security implications.
- **[[Analysis]]** Phase: The Analysis phase is where incident response teams investigate and validate alerts. Security analysts use their critical thinking and incident analysis skills to examine indicators of compromise and determine whether an incident has occurred.
- **Challenges in Detection and Analysis Phase:** 
	- **[[Impossible to detect everything]]**: Detecting every potential security incident is challenging. Even excellent detection tools have limitations, and automated tools might not be fully deployed across an organization due to resource constraints. Some incidents are simply unavoidable, underscoring the importance of having an incident response plan in place.
	- **[[High volumes of alerts]]**: Security analysts often face a high volume of alerts during their shifts, sometimes numbering in the thousands. This can occur due to misconfigured alert settings, such as overly broad alert rules that lead to false positives, or legitimate alerts triggered by malicious actors exploiting vulnerabilities.
- **Equipping Analysts:** The video emphasizes the importance of equipping security analysts with the skills and knowledge to effectively analyze alerts.

The video concludes by suggesting that viewers will have the opportunity to practice analyzing alerts in the upcoming sections of the training.

# Cybersecurity incident detection methods

Security analysts use detection tools to help them discover threats, but there are additional methods of detection that can be used as well.

Previously, you learned about how detection tools can identify attacks like data exfiltration. In this reading, you’ll be introduced to different detection methods that organizations can employ to discover threats. 

## Methods of detection

During the **[[Detection and Analysis Phase]]** of the incident response lifecycle, security teams are notified of a possible incident and work to investigate and verify the incident by collecting and analyzing data. As a reminder, **[[detection]]** refers to the prompt discovery of security events and **[[analysis]]** involves the investigation and validation of alerts.

As you’ve learned, an **[[intrusion detection system (IDS)]]** can detect possible intrusions and send out alerts to security analysts to investigate the suspicious activity. Security analysts can also use **[[security information and event management (SIEM)]]** tools to detect, collect, and analyze security data.

You’ve also learned that there are challenges with detection. Even the best security teams can fail to detect real threats for a variety of reasons. For example, detection tools can only detect what security teams configure them to monitor. If they aren’t properly configured, they can fail to detect suspicious activity, leaving systems vulnerable to attack. It’s important for security teams to use additional methods of detection to increase their coverage and accuracy.

### **Threat hunting**

Threats evolve and attackers advance their tactics and techniques. Automated, technology-driven detection can be limited in keeping up to date with the evolving threat landscape. Human-driven detection like threat hunting combines the power of technology with a human element to discover hidden threats left undetected by detection tools.

**[[Threat hunting]]** is the proactive search for threats on a network. Security professionals use threat hunting to uncover malicious activity that was not identified by detection tools and as a way to do further analysis on detections. Threat hunting is also used to detect threats before they cause damage. For example, fileless malware is difficult for detection tools to identify. It’s a form of malware that uses sophisticated evasion techniques such as hiding in memory instead of using files or applications, allowing it to bypass traditional methods of detection like signature analysis. With threat hunting, the combination of active human analysis and technology is used to identify threats like fileless malware. 

**Note**: Threat hunting specialists are known as threat hunters. Threat hunters perform research on emerging threats and attacks and then determine the probability of an organization being vulnerable to a particular attack. Threat hunters use a combination of threat intelligence, indicators of compromise, indicators of attack, and machine learning to search for threats in an organization.

### **Threat intelligence**

Organizations can improve their detection capabilities by staying updated on the evolving threat landscape and understanding the relationship between their environment and malicious actors. One way to understand threats is by using **[[threat intelligence]]**, which is evidence-based threat information that provides context about existing or emerging threats. 

Threat intelligence can come from private or public sources like:

- **[[Industry reports]]**: These often include details about attacker's tactics, techniques, and procedures (TTP).
- **[[Government advisories]]:** Similar to industry reports, government advisories include details about attackers' TTP. 
- **[[Threat data feeds]]**: Threat data feeds provide a stream of threat-related data that can be used to help protect against sophisticated attackers like **[[advanced persistent threats (APTs)]]**. APTs are instances when a threat actor maintains unauthorized access to a system for an extended period of time. The data is usually a list of indicators like IP addresses, domains, and file hashes.

It can be difficult for organizations to efficiently manage large volumes of threat intelligence. Organizations can leverage a **[[threat intelligence platform (TIP)]]** which is an application that collects, centralizes, and analyzes threat intelligence from different sources. TIPs provide a centralized platform for organizations to identify and prioritize relevant threats and improve their security posture.

**Note**: Threat intelligence data feeds are best used to add context to detections. They should not drive detections completely and should be assessed before applied to an organization.

### **Cyber deception**

Cyber deception involves techniques that deliberately deceive malicious actors with the goal of increasing detection and improving defensive strategies.

**[[Honeypots]]** are an example of an active cyber defense mechanism that uses deception technology. Honeypots are systems or resources that are created as decoys vulnerable to attacks with the purpose of attracting potential intruders. For example, having a fake file labeled _Client_ _Credit Card Information - 2022_ can be used to capture the activity of malicious actors by tricking them into accessing the file because it appears to be legitimate. Once a malicious actor tries to access this file, security teams are alerted.

## Key takeaways

Various detection methods can be implemented to identify and locate security events in an environment. It’s essential for organizations to use a variety of detection methods, tools, and technologies to adapt to the ever evolving threat landscape and better protect assets.

## Resources for more information

If you would like to explore more on threat hunting and threat intelligence, here are some resources:

- An [informational repository about threat hunting from](https://www.threathunting.net/) The ThreatHunting Project 
- Research on [state-sponsored hackers](https://blog.google/threat-analysis-group/) from Threat Analysis Group (TAG)


# Changes in the cybersecurity industry

**[[Zero Trust]]** is a cybersecurity approach and model that emphasizes the principle of "never trust, always verify." In this model, trust is not automatically granted to any user or device, even if they are inside an organization's network. Instead, Zero Trust assumes that threats could be both external and internal, and it requires continuous verification of the identity and security posture of users and devices trying to access network resources. Here's what Zero Trust means in simpler terms:

1. **No Implicit Trust:** With Zero Trust, you don't automatically trust anyone or anything, whether they are inside or outside your organization. Every user, device, or application is treated as potentially untrusted until proven otherwise.
2. **Verification:** To access resources, users and devices must prove who they are and that they meet security requirements. This is typically done through strong authentication methods and security checks.
3. **Least Privilege:** Users and devices are granted only the minimum level of access needed to perform their tasks. They don't get broad access to everything.
4. **Continuous Monitoring:** Zero Trust involves continuous monitoring of user and device activities to detect unusual behavior or security threats. This way, if something suspicious happens, it can be spotted and addressed quickly.
5. **Micro-Segmentation:** Networks are divided into smaller segments, and each segment has its own access controls. This reduces the "blast radius" of a security breach.

In essence, Zero Trust is a modern security philosophy that recognizes the evolving threat landscape and focuses on securing your data and systems by thoroughly verifying and monitoring every interaction, whether it's from inside or outside your network. It's about being cautious and critical, always double-checking, and not relying on traditional network perimeters to keep your organization safe.

# Indicators of compromise

In this reading, you’ll be introduced to the concept of the Pyramid of Pain and you'll explore examples of the different types of indicators of compromise. Understanding and applying this concept helps organizations improve their defense and reduces the damage an incident can cause.

## Indicators of compromise

**[[Indicators of compromise (IoCs)]]** are observable evidence that suggests signs of a potential security incident. IoCs chart specific pieces of evidence that are associated with an attack, like a file name associated with a type of malware. You can think of an IoC as evidence that points to something that's already happened, like noticing that a valuable has been stolen from inside of a car. 

**[[Indicators of attack (IoA)]]** are the series of observed events that indicate a real-time incident.  IoAs focus on identifying the behavioral evidence of an attacker, including their methods and intentions.

Essentially, IoCs help to identify the _who_ and _what_ of an attack after it's taken place, while IoAs focus on finding the _why_ and _how_ of an ongoing or unknown attack. For example, observing a process that makes a network connection is an example of an IoA. The filename of the process and the IP address that the process contacted are examples of the related IoCs.

**Note**: Indicators of compromise are not always a confirmation that a security incident has happened. IoCs may be the result of human error, system malfunctions, and other reasons not related to security. 

## Pyramid of Pain

Not all indicators of compromise are equal in the value they provide to security teams. It’s important for security professionals to understand the different types of indicators of compromise so that they can quickly and effectively detect and respond to them. This is why security researcher David J. Bianco created the concept of the [Pyramid of Pain](http://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html), with the goal of improving how indicators of compromise are used in incident detection.

![[Pasted image 20231028202620.png]]

The **[[Pyramid of Pain]]** captures the relationship between indicators of compromise and the level of difficulty that malicious actors experience when indicators of compromise are blocked by security teams. It lists the different types of indicators of compromise that security professionals use to identify malicious activity. 

Each type of indicator of compromise is separated into levels of difficulty. These levels represent the “pain” levels that an attacker faces when security teams block the activity associated with the indicator of compromise. For example, blocking an IP address associated with a malicious actor is labeled as easy because malicious actors can easily use different IP addresses to work around this and continue with their malicious efforts. If security teams are able to block the IoCs located at the top of the pyramid, the more difficult it becomes for attackers to continue their attacks. Here’s a breakdown of the different types of indicators of compromise found in the Pyramid of Pain. 

1. **[[Hash values]]**: Hashes that correspond to known malicious files. These are often used to provide unique references to specific samples of malware or to files involved in an intrusion.
2. **[[IP addresses]]**: An internet protocol address like 192.168.1.1
3. **[[Domain names]]**: A web address such as www.google.com 
4. **[[Network artifacts]]**: Observable evidence created by malicious actors on a network. For example, information found in network protocols such as User-Agent strings. 
5. **[[Host artifacts]]:** Observable evidence created by malicious actors on a host. A host is any device that’s connected on a network. For example, the name of a file created by malware.
6. **[[Tools]]**: Software that’s used by a malicious actor to achieve their goal. For example, attackers can use password cracking tools like John the Ripper to perform password attacks to gain access into an account.
7. **[[Tactics, techniques, and procedures (TTPs)]]**: This is the behavior of a malicious actor. **[[Tactics]]** refer to the high-level overview of the behavior. **[[Techniques]]** provide detailed descriptions of the behavior relating to the tactic. **[[Procedures]]** are highly detailed descriptions of the technique. TTPs are the hardest to detect. 

## Key takeaways

Indicators of compromise and indicators of attack are valuable sources of information for security professionals when it comes to detecting incidents. The Pyramid of Pain is a concept that can be used to understand the different types of indicators of compromise and the value they have in detecting and stopping malicious activity.

# Analyze indicators of compromise with investigative tools

So far, you've learned about the different types of detection methods that can be used to detect security incidents. This reading explores how investigative tools can be used during investigations to analyze suspicious **indicators of compromise (IoCs)** and build context around alerts. Remember, an IoC is observable evidence that suggests signs of a potential security incident.

## Adding context to investigations

You've learned about the Pyramid of Pain which describes the relationship between indicators of compromise and the level of difficulty that malicious actors experience when indicators of compromise are blocked by security teams. You also learned about different types of IoCs, but as you know, not all IoCs are equal. Malicious actors can manage to evade detection and continue compromising systems despite having their IoC-related activity blocked or limited.

For example, identifying and blocking a single IP address associated with malicious activity does not provide a broader insight on an attack, nor does it stop a malicious actor from continuing their activity. Focusing on a single piece of evidence is like fixating on a single section of a painting: You miss out on the bigger picture.

![[Pasted image 20231028211405.png]]

Security analysts need a way to expand the use of IoCs so that they can add context to alerts. **Threat intelligence** is evidence-based threat information that provides context about existing or emerging threats. By accessing additional information related to IoCs, security analysts can expand their viewpoint to observe the bigger picture and construct a narrative that helps inform their response actions.

![[Pasted image 20231028211412.png]]

By adding context to an IoC—for instance, identifying other artifacts related to the suspicious IP address, such as suspicious network communications or unusual processes—security teams can start to develop a detailed picture of a security incident. This context can help security teams detect security incidents faster and take a more informed approach in their response.

## The power of crowdsourcing

**Crowdsourcing** is the practice of gathering information using public input and collaboration. Threat intelligence platforms use crowdsourcing to collect information from the global cybersecurity community. Traditionally, an organization's response to incidents was performed in isolation. A security team would receive and analyze an alert, and then work to remediate it without additional insights on how to approach it. Without crowdsourcing, attackers can perform the same attacks against multiple organizations.

![[Pasted image 20231028211421.png]]

With crowdsourcing, organizations harness the knowledge of millions of other cybersecurity professionals, including cybersecurity product vendors, government agencies, cloud providers, and more. Crowdsourcing allows people and organizations from the global cybersecurity community to openly share and access a collection of threat intelligence data, which helps to continuously improve detection technologies and methodologies. 

Examples of information-sharing organizations include Information Sharing and Analysis Centers (ISACs), which focus on collecting and sharing sector-specific threat intelligence to companies within specific industries like energy, healthcare, and others. **Open-source intelligence (OSINT)** is the collection and analysis of information from publicly available sources to generate usable intelligence. OSINT can also be used as a method to gather information related to threat actors, threats, vulnerabilities, and more.

This threat intelligence data is used to improve the detection methods and techniques of security products, like detection tools or anti-virus software. For example, attackers often perform the same attacks on multiple targets with the hope that one of them will be successful. Once an organization detects an attack, they can immediately publish the attack details, such as malicious files, IP addresses, or URLs, to tools like VirusTotal. This threat intelligence can then help other organizations defend against the same attack.

![[Pasted image 20231028211429.png]]

## VirusTotal 

[**VirusTotal**](https://www.virustotal.com/gui/home) is a service that allows anyone to analyze suspicious files, domains, URLs, and IP addresses for malicious content. VirusTotal also offers additional services and tools for enterprise use. This reading focuses on the VirusTotal website, which is available for free and non-commercial use.

It can be used to analyze suspicious files, IP addresses, domains, and URLs to detect cybersecurity threats such as malware. Users can submit and check artifacts, like file hashes or IP addresses, to get VirusTotal reports, which provide additional information on whether an IoC is considered malicious or not, how that IoC is connected or related to other IoCs in the dataset, and more.

![[Pasted image 20231028211437.png]]

Here is a breakdown of the reports summary:

![[Pasted image 20231028211443.png]]

1. **Detection**: The Detection tab provides a list of third-party security vendors and their detection verdicts on an IoC. For example, vendors can list their detection verdict as malicious, suspicious, unsafe, and more.
2. **Details**: The Details tab provides additional information extracted from a static analysis of the IoC. Information such as different hashes, file types, file sizes, headers, creation time, and first and last submission information can all be found in this tab.
3. **Relations**: The Relations tab provides related IoCs that are somehow connected to an artifact, such as contacted URLs, domains, IP addresses, and dropped files if the artifact is an executable.
4. **Behavior**: The Behavior tab contains information related to the observed activity and behaviors of an artifact after executing it in a controlled or sandboxed environment. This information includes tactics and techniques detected, network communications, registry and file systems actions, processes, and more.
5. **Community:** The Community tab is where members of the VirusTotal community, such as security professionals or researchers, can leave comments and insights about the IoC
6. **Vendors’ ratio and community score**: The score displayed at the top of the report is the vendors’ ratio. The vendors’ ratio shows how many security vendors have flagged the IoC as malicious overall. Below this score, there is also the community score, based on the inputs of the VirusTotal community. The more detections a file has and the higher its community score is, the more likely that the file is malicious.

**Note**: Data uploaded to VirusTotal will be publicly shared with the entire VirusTotal community. Be careful of what you submit, and make sure you do not upload personal information.

## Other tools

There are other investigative tools that can be used to analyze IoCs. These tools can also share the data that's uploaded to them to the security community.

### **Jotti malware scan**

[Jotti's malware scan](https://virusscan.jotti.org/) is a free service that lets you scan suspicious files with several antivirus programs. There are some limitations to the number of files that you can submit. 

### **Urlscan.io**

[Urlscan.io](https://urlscan.io/) is a free service that scans and analyzes URLs and provides a detailed report summarizing the URL information.

### **CAPE Sandbox**

[CAPE Sandbox](https://capesandbox.com/analysis/) is an open source service used to automate the analysis of suspicious files. Using an isolated environment, malicious files such as malware are analyzed and a comprehensive report outlines the malware behavior.

### **MalwareBazaar**

[MalwareBazaar](https://bazaar.abuse.ch/browse/) is a free repository for malware samples. Malware samples are a great source of threat intelligence that can be used for research purposes. 

## Key takeaways

As a security analyst, you'll analyze IoCs. It's important to understand how adding context to investigations can help improve detection capabilities and make informed and effective decisions.
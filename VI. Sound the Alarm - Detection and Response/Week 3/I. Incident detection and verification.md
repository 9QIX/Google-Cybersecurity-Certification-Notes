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

The Pyramid of Pain captures the relationship between indicators of compromise and the level of difficulty that malicious actors experience when indicators of compromise are blocked by security teams. It lists the different types of indicators of compromise that security professionals use to identify malicious activity. 

Each type of indicator of compromise is separated into levels of difficulty. These levels represent the “pain” levels that an attacker faces when security teams block the activity associated with the indicator of compromise. For example, blocking an IP address associated with a malicious actor is labeled as easy because malicious actors can easily use different IP addresses to work around this and continue with their malicious efforts. If security teams are able to block the IoCs located at the top of the pyramid, the more difficult it becomes for attackers to continue their attacks. Here’s a breakdown of the different types of indicators of compromise found in the Pyramid of Pain. 

1. **Hash values**: Hashes that correspond to known malicious files. These are often used to provide unique references to specific samples of malware or to files involved in an intrusion.
2. **IP addresses**: An internet protocol address like 192.168.1.1
3. **Domain names**: A web address such as www.google.com 
4. **Network artifacts**: Observable evidence created by malicious actors on a network. For example, information found in network protocols such as User-Agent strings. 
5. **Host artifacts:** Observable evidence created by malicious actors on a host. A host is any device that’s connected on a network. For example, the name of a file created by malware.
6. **Tools**: Software that’s used by a malicious actor to achieve their goal. For example, attackers can use password cracking tools like John the Ripper to perform password attacks to gain access into an account.
7. **Tactics, techniques, and procedures (TTPs)**: This is the behavior of a malicious actor. Tactics refer to the high-level overview of the behavior. Techniques provide detailed descriptions of the behavior relating to the tactic. Procedures are highly detailed descriptions of the technique. TTPs are the hardest to detect. 

## Key takeaways

Indicators of compromise and indicators of attack are valuable sources of information for security professionals when it comes to detecting incidents. The Pyramid of Pain is a concept that can be used to understand the different types of indicators of compromise and the value they have in detecting and stopping malicious activity.
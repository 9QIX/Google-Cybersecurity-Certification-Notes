# The case for securing networks

**Why We Need Secure Networks**:
- Secure networks are essential because they protect against various forms of cyberattacks that can compromise the confidentiality, integrity, and availability of data.
- Malicious hackers can infiltrate networks through methods like **[[Malware Attacks]]**, **[[Spoofing Attacks]]**, and **[[Packet Sniffing Attacks]]**. These attacks can lead to *unauthorized access, data breaches, and network disruptions*.
- Network intrusion attacks, such as **[[Packet Flooding Attacks]]**, can *disrupt network operations* and potentially cause significant damage to organizations.

**Common Network Intrusion Attacks**:
- Network intrusion attacks are diverse and pose significant threats to network security. Understanding these attacks is crucial for effective network defense.

**Types of Attacks**:
- **[[Malware Attacks]]**: Malicious software (malware) can *infect network systems and compromise security*. Types of malware include viruses, worms, Trojans, and ransomware. Malware attacks can lead to data theft, system damage, and unauthorized control.
- **[[Spoofing Attacks]]**: Spoofing attacks involve *impersonating a legitimate entity or device to gain unauthorized access*. Common forms include IP spoofing, DNS spoofing, and ARP spoofing. Attackers may use spoofing to *bypass security measures*.
- **[[Packet Sniffing Attacks]]**: Packet sniffing, or packet capturing, *involves intercepting and analyzing data packets transmitted over a network*. Attackers can capture sensitive information, such as login credentials or confidential data, leading to potential security breaches.
- **[[Packet Flooding Attacks]]**: Packet flooding attacks *overwhelm a network by flooding it with a high volume of traffic*. Distributed Denial of Service (DDoS) attacks are a common form of packet flooding. These attacks disrupt network services, rendering them unavailable to legitimate users.

**Impact of Attacks**:
- Network attacks can have severe consequences for organizations:
   - **Data Breaches**: Attackers can steal valuable or confidential information, potentially leading to financial losses and legal consequences.
   - **Reputation Damage**: Security breaches can harm an organization's reputation, eroding trust among customers and stakeholders.
   - **Operational Disruption**: Attacks like DDoS can disrupt network operations, causing downtime and financial losses.
   - **Financial and Time Costs**: Mitigating attacks often involves significant financial and time investments, including recovery and security measures.

**Real-World Example - Home Depot Attack (2014)**:
- An illustrative example is the 2014 attack on Home Depot, a major American home-improvement chain. Hackers compromised Home Depot servers with malware, resulting in a data breach.
- Over 56 million customers had their credit and debit card information stolen. This incident highlights the catastrophic impact of network attacks.

# How intrusions compromise your system

In this section of the course, you learned that every network has inherent vulnerabilities and could become the target of a network attack.

Attackers could have varying motivations for attacking your organization’s network. They may have financial, personal, or political motivations, or they may be a disgruntled employee or an activist who disagrees with the company's values and wants to harm an organization’s operations. Malicious actors can target any network. Security analysts must be constantly alert to potential vulnerabilities in their organization’s network and take quick action to mitigate them.

In this reading, you’ll learn about network interception attacks and backdoor attacks, and the possible impacts these attacks could have on an organization.

## Network interception attacks 

**[[Network interception attacks]]** work by *intercepting network traffic and stealing valuable information* or interfering with the transmission in some way.

**[[Malicious actors]]** can use hardware or software tools to capture and inspect data in transit. This is referred to as **[[packet sniffing]]**. In addition to seeing information that they are not entitled to, malicious actors can also intercept network traffic and alter it. These attacks can cause damage to an organization’s network by inserting malicious code modifications or altering the message and interrupting network operations. For example, an attacker can intercept a bank transfer and change the account receiving the funds to one that the attacker controls.

Later in this course you will learn more about malicious packet sniffing, and other types of network interception attacks: on-path attacks and replay attacks.

## Backdoor attacks

A **[[backdoor attack]]** is another type of attack you will need to be aware of as a security analyst. An organization may have a lot of security measures in place, including cameras, biometric scans and access codes to keep employees from entering and exiting without being seen. However, an employee might work around the security measures by finding a backdoor to the building that is not as heavily monitored, allowing them to sneak out for the afternoon without being seen. 

In cybersecurity, backdoors are weaknesses intentionally left by programmers or system and network administrators that bypass normal access control mechanisms. Backdoors are intended to help programmers conduct troubleshooting or administrative tasks. However, backdoors can also be installed by attackers after they’ve compromised an organization to ensure they have persistent access.

Once the hacker has entered an insecure network through a backdoor, they can cause extensive damage: installing malware, performing a denial of service (DoS) attack, stealing private information or changing other security settings that leaves the system vulnerable to other attacks. A **[[DoS attack]]** is an attack that targets a network or server and floods it with network traffic.

## Possible impacts on an organization

As you’ve learned already, network attacks can have a significant negative impact on an organization. Let’s examine some potential consequences.

- **[[Financial]]**: When a system is taken offline with a DoS attack, or business operations are halted or slowed down by some other tactic, they prevent a company from performing the tasks that generate revenue. Depending on the size of an organization, interrupted operations can cost millions of dollars. In addition, if a malicious actor gets access to the personal information of the company’s clients or customers, the company may face heavy litigation and settlement costs if customers seek legal recourse.
- **[[Reputation]]**: Attacks can also have a negative impact on the reputation of an organization. If it becomes public knowledge that a company has experienced a cyber attack, the public may become concerned about the security practices of the organization. They may stop trusting the company with their personal information and choose a competitor to fulfill their needs.
- **[[Public safety]]**: If an attack occurs on a government network, this can potentially impact the safety and welfare of the citizens of a country. In recent years, defense agencies across the globe are investing heavily in combating cyber warfare tactics. If a malicious actor gained access to a power grid, a public water system, or even a military defense communication system, the public could face physical harm due to a network intrusion attack.

## Key takeaways

Malicious actors are constantly looking for ways to exploit systems. They learn about new vulnerabilities as they arise and attempt to exploit every vulnerability in a system. Attackers leverage backdoor attack methods and network interception attacks to gain sensitive information they can use to exploit an organization or cause serious damage. These types of attacks can impact an organization financially, damage its reputation, and potentially put the public in danger.  It is important that security analysts stay educated in order to maintain network safety and reduce the likelihood and impact of these types of attacks. Securing networks has never been more important.
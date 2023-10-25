# The importance of network traffic flows

- **Network Traffic Analysis:** **[[Network traffic]]** refers to the amount of data moving across a network, while **[[network data]]** is the actual data transmitted between devices on a network. In large organizations, there can be a massive volume of network traffic at any given time due to various activities, such as email communication.
- **Understanding Normal vs. Abnormal Traffic:** To identify potential security incidents, it's crucial to differentiate between normal and abnormal network traffic. The video uses a traffic analogy to explain that just as drivers understand expected traffic patterns based on their commuting experience, security professionals must understand how data should flow across the network to spot abnormalities. Observing network traffic helps identify **[[Indicators of Compromise (IoC)]]**, which are observable evidence suggesting signs of a potential security incident.
- **Detecting Data Exfiltration:** **[[Data exfiltration]]**, which involves the unauthorized transmission of data from a system, is highlighted as an example of a security incident. Security professionals can use network traffic analysis to detect potential data exfiltration, such as large volumes of outbound traffic leaving a host. Such anomalies in network traffic patterns can indicate a data exfiltration attempt and prompt further investigation.
- **Importance of Monitoring Traffic:** Understanding and monitoring network traffic for inconsistencies are essential tasks for security professionals to identify potential security incidents and breaches.

The video effectively explains the concept of network traffic analysis and its role in identifying security incidents, using relatable analogies and examples. This knowledge is vital for security professionals in protecting communications and data in transit and at rest.

# Maintain awareness with network monitoring

Network communication can be noisy! Events like sending an email, streaming a video, or visiting a website all produce network communications in the form of network traffic and network data. As a reminder, **[[network traffic]]** is the amount of data that moves across a network. It can also include the type of data that is transferred, such as HTTP. **[[Network data]]** is the data that's transmitted between devices on a network.

Network monitoring is essential in maintaining situational awareness of any activity on a network. By collecting and analyzing network traffic, organizations can detect suspicious network activity. But before networks can be monitored, you must know exactly what to monitor. In this reading, you'll learn more about the importance of network monitoring, ways to monitor your network, and network monitoring tools.

## Know your network

As you’ve learned, networks connect devices, and devices then communicate and exchange data using network protocols. Network communications provide information about connections such as source and destination IP addresses, amount of data transferred, date and time, and more. This information can be valuable for security professionals when developing a **[[baseline]]** of normal or expected behavior.

![[Pasted image 20231025192856.png]]

A baseline is a reference point that’s used for comparison. You've probably encountered or used baselines at some point. For example, a grocery amount for a personal budget is an example of a baseline that can be used to help identify any patterns or changes in spending habits. In security, baselines help establish a standard of expected or normal behavior for systems, devices, and networks. Essentially, by knowing the baseline of _normal_ network behavior, you'll be better able to identify _abnormal_ network behavior.

## Monitor your network

Once you’ve determined a baseline, you can monitor a network to identify any deviations from that baseline. Monitoring involves examining network components to detect unusual activities, such as large and unusual data transfers. Here are examples of network components that can be monitored to detect malicious activity:

### **[[Flow analysis]]**

**[[Flow]]** refers to the movement of network communications and includes information related to packets, protocols, and ports. Packets can travel to ports, which receive and transmit communications. Ports are often, but not always, associated with network protocols. For example, port 443 is commonly used by HTTPS which is a protocol that provides website traffic encryption.

However, malicious actors can use protocols and ports that are not commonly associated to maintain communications between the compromised system and their own machine. These communications are what’s known as **[[command and control (C2)]]**, which are the techniques used by malicious actors to maintain communications with compromised systems.

For example, malicious actors can use HTTPS protocol over port 8088 as opposed to its commonly associated port 443 to communicate with compromised systems. Organizations must know which ports should be open and approved for connections, and watch out for any mismatches between ports and their associated protocols.

### **[[Packet payload information]]**

Network packets contain components related to the transmission of the packet. This includes details like source and destination IP address, and the packet payload information, which is the actual data that’s transmitted. Often, this data is encrypted and requires decryption for it to be readable. Organizations can monitor the payload information of packets to uncover unusual activity, such as sensitive data transmitting outside of the network, which could indicate a possible data exfiltration attack.

### **[[Temporal patterns]]**

Network packets contain information relating to time. This information is useful in understanding time patterns. For example, a company operating in North America experiences bulk traffic flows between 9 a.m. to 5 p.m., which is the baseline of normal network activity. If large volumes of traffic are suddenly outside of the normal hours of network activity, then this is considered _off baseline_ and should be investigated.

Through network monitoring, organizations can promptly detect network intrusions and work to prevent them from happening by securing network components.

## Protect your network

In this program, you’ve learned about **[[security operations center (SOC)]]** and their role in monitoring systems against security threats and attacks. Organizations may deploy a **[[network operations center (NOC)]]**, which is an organizational unit that monitors the performance of a network and responds to any network disruption, such as a network outage. While a SOC is focused on maintaining the security of an organization through detection and response, a NOC is responsible for maintaining network performance, availability, and uptime. 

![[Pasted image 20231025193917.png]]

Security analysts monitor networks to identify any signs of potential security incidents known as **[[indicators of compromise (IoC)]]** and protect networks from threats or attacks. To do this, they must understand the environment that network communications travel through so that they can identify deviations in network traffic. 

### **Network monitoring tools**

Network monitoring can be automated or performed manually. Some common network monitoring tools can include: 

- **[[Intrusion detection system (IDS)]]** monitors system activity and alert on possible intrusions. An IDS will detect and alert on the deviations you’ve configured it to detect. Most commonly, IDS tools will monitor the content of packet payload to detect patterns associated with threats such as malware or phishing attempts.
- **[[Network protocol analyzers]]**, also known as ***packet sniffers***, are tools designed to capture and analyze data traffic within a network. They can be used to analyze network communications manually in detail. Examples include tools such as tcpdump and Wireshark, which can be used by security professionals to record network communications through packet captures. Packet captures can then be investigated to identify potentially malicious activity.

## Key takeaways

Monitoring and protecting networks from intrusions and attacks are key responsibilities of security professionals. You can’t protect what you don’t know. As a security analyst, you’ll need to know the components of a network and the communications that happen on it, so you can better protect it. Baselines provide a way to understand network traffic by uncovering common patterns which help in identifying any deviations from the expected traffic patterns. Tools like intrusion detection systems and network protocol analyzers support efforts in monitoring network activities.

## Resources

- If you would like to learn more about network components organizations can monitor, check out [network traffic - MITRE ATT&CK®](https://attack.mitre.org/datasources/DS0029/)
- Attackers can leverage different techniques to exfiltrate data, should you like to learn more, check out [data exfiltration techniques - MITRE ATT&CK®](https://attack.mitre.org/tactics/TA0010/)

# Data exfiltration attacks

- **Attacker's Perspective:**
	1. **Initial Access:** Attackers typically gain initial access to a network and computer system through methods like social engineering, such as phishing attacks.
	2. **Maintaining Access:** Once inside, attackers aim to maintain their access and avoid detection, often by performing lateral movement to explore the network and access other systems.
	3. **Identifying Valuable Assets:** Attackers search for valuable assets, such as sensitive data like proprietary code, personally identifiable information, or financial records.
	4. **Data Preparation:** They collect and prepare the stolen data for exfiltration, often by reducing the data size to bypass security controls.
	5. **Data Exfiltration:** Finally, attackers exfiltrate the data to their chosen destination, which can involve various methods, such as emailing the stolen data using a compromised account.
- **Organization's Defense:***
	1. **Prevent Attacker Access:** Organizations can defend against data exfiltration attacks by preventing attacker access through methods like requiring multi-factor authentication to protect against phishing attempts.
	2. **Monitor Network Activity:** Security teams must monitor network activity for suspicious behavior that could indicate a compromise, such as multiple logins from outside IP addresses.
	3. **Asset Inventory and Security Controls:** All assets should be cataloged in an asset inventory, and the appropriate security controls must be applied to protect them from unauthorized access.
	4. **Detect and Stop Exfiltration:** In case of a successful attack, security teams need to detect and stop data exfiltration. Indicators of unusual data collection, such as large file transfers and unexpected file writes, can be identified through network monitoring using SIEM tools. Once detected, security teams can take actions like blocking IP addresses associated with the attacker using firewall rules.

The video effectively outlines the attacker's process and how organizations can defend against data exfiltration attacks through prevention, monitoring, and detection. This information is valuable for security professionals in protecting their organizations from such threats.
# Common cybersecurity tools

**[[Logs]]** - which are the source of data that the tools we'll cover are designed to organize.
	A log is a record of events that occur within an organization's systems.
		Examples of security-related logs include records of employees signing into their computers or accessing web-based services. 
		Logs help security professionals identify vulnerabilities and potential security breaches.

**[[Security Information and Event Management (SIEM) Tools]]** - A SIEM tool is an application that collects and analyzes log data to monitor critical activities in an organization. SIEM tools collect real-time, or instant, information, and allow security analysts to identify potential breaches as they happen.
	Imagine having to read pages and pages of logs to determine if there are any security threats. Depending on the amount of data, it could take hours or days. SIEM tools reduce the amount of data an analyst must review by providing alerts for specific types of risks and threats.

## Commonly used SIEM tools:

- **[[Splunk]]** - is a data analysis platform, and Splunk Enterprise provides SIEM solutions. Splunk Enterprise is a self-hosted tool used to retain, analyze, and search an organization's log data.
- **[[Chronicle]]** -  is a cloud-native SIEM tool that stores security data for search and analysis. Cloud-native means that Chronicle allows for fast delivery of new features.

Both of these SIEM tools, and SIEMs in general, collect data from multiple places, then analyze and filter that data to allow security teams to prevent and quickly react to potential security threats.

## Other security tools:

- **[[Playbook]]** - is a manual that provides details about any operational action, such as how to respond to an incident. 
	- Playbooks, which vary from one organization to the next, guide analysts in how to handle a security incident before, during, and after it has occurred. 
	- Playbooks can pertain to security or compliance reviews, access management, and many other organizational tasks that require a documented process from beginning to end.
- **[[Network Protocol Analyzer (Packet Sniffer)]]** -  A packet sniffer is a tool designed to capture and analyze data traffic within a network. Common network protocol analyzers include tcpdump and [[Wireshark]].

# Tools for protecting business operations

## An entry-level analyst’s toolkit

### Security information and event management (SIEM) tools

A **[[Security Information and Event Management (SIEM) Tools]]** is an application that collects and analyzes log data to monitor critical activities in an organization. 

A **[[logs]]** are records of events that occur within an organization’s systems. Depending on the amount of data you’re working with, it could take hours or days to filter through log data on your own. 

**SIEM tools** reduce the amount of data an analyst must review by providing alerts for specific types of threats, risks, and vulnerabilities.

**SIEM tools** provide a series of dashboards that visually organize data into categories, allowing users to select the data they wish to analyze. Different SIEM tools have different dashboard types that display the information you have access to. 

**SIEM tools** also come with different hosting options, including on-premise and cloud. Organizations may choose one hosting option over another based on a security team member’s expertise. For example, because a cloud-hosted version tends to be easier to set up, use, and maintain than an on-premise version, a less experienced security team may choose this option for their organization.

### Network protocol analyzers (packet sniffers)

A **[[network protocol analyzer (packet sniffer)]]**, is a tool designed to capture and analyze data traffic in a network. This means that the tool keeps a record of all the data that a computer within an organization's network encounters. Later in the program, you’ll have an opportunity to practice using some common network protocol analyzer (packet sniffer) tools.

### Playbooks

A **[[playbook]]** is a manual that provides details about any operational action, such as how to respond to a security incident. Organizations usually have multiple playbooks documenting processes and procedures for their teams to follow. Playbooks vary from one organization to the next, but they all have a similar purpose: To guide analysts through a series of steps to complete specific security-related tasks. 
	For example, consider the following scenario: You are working as a security analyst for an incident response firm. You are given a case involving a small medical practice that has suffered a security breach. Your job is to help with the forensic investigation and provide evidence to a cybersecurity insurance company. They will then use your investigative findings to determine whether the medical practice will receive their insurance payout. 
	In this scenario, playbooks would outline the specific actions you need to take to conduct the investigation. Playbooks also help ensure that you are following proper protocols and procedures. 

When working on a forensic case, there are two playbooks you might follow:
- The first type of playbook you might consult is called the **[[Chain of Custody Playbook]]**. 
	- **Chain of custody** is the process of documenting evidence possession and control during an incident lifecycle. As a security analyst involved in a forensic analysis, you will work with the computer data that was breached. You and the forensic team will also need to document who, what, where, and why you have the collected evidence. The evidence is your responsibility while it is in your possession. Evidence must be kept safe and tracked. Every time evidence is moved, it should be reported. This allows all parties involved to know exactly where the evidence is at all times.
- The second playbook your team might use is called the **[[Protecting and Preserving Evidence]]**. 
	- **Protecting and preserving** evidence is the process of properly working with fragile and volatile digital evidence. As a security analyst, understanding what fragile and volatile digital evidence is, along with why there is a procedure, is critical. 
		- As you follow this playbook, you will consult the **[[Order of Volatility]]**, which is a sequence outlining the order of data that must be preserved from first to last. It prioritizes volatile data, which is data that may be lost if the device in question powers off, regardless of the reason.
	- While conducting an investigation, improper management of digital evidence can compromise and alter that evidence. When evidence is improperly managed during an investigation, it can no longer be used. For this reason, the first priority in any investigation is to properly preserve the data. You can preserve the data by making copies and conducting your investigation using those copies.

# Explore: Tools and their purposes

![[Pasted image 20230821123259.png]]


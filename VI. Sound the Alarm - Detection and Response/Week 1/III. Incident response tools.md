# Incident response tools

- **Analogy to a Carpenter's Toolbox:** Just as a carpenter relies on a variety of tools like a tape measure, saw, and sandpaper to create furniture, a security analyst uses various tools and technologies to monitor, detect, and analyze security events.
- **Tools in a Security Analyst's Toolbox:** As a security analyst, you won't depend on a single tool for your tasks. Instead, you'll use a combination of tools, including:
	- **[[Detection and Management Tools]]:** These tools help monitor system activity and identify events that require investigation.
	- **[[Documentation Tools]]:** Tools for collecting and compiling evidence during an investigation.
	- **[[Investigative Tools]]:** Tools like packet sniffers for analyzing security events.
- **Continuous Learning:** The security field is dynamic, with evolving threats and emerging security technologies. Security analysts need to continually expand their knowledge and toolsets to stay effective at detecting threats.
- **Incident Handler's Journal:** The video introduces the incident handler's journal, which will be used throughout the course as a form of documentation. This journal serves as one of the first tools in a security analyst's toolbox.

The video underscores the need for security analysts to adapt and keep their skills and toolsets up to date to effectively detect and respond to evolving security threats.

# The value of documentation

- **Documentation Defined:** **[[Documentation]]** is any recorded content, which can take various forms like audio, digital text, handwritten notes, or videos. The purpose of documentation is to provide instructions and guidance on specific topics.
	- **Types of Documentation:** There are multiple types of documentation used in incident response, including:
		- Playbooks
		- Incident handler's journals 
		- Policies
		- Plans
		- Final reports
	- The video highlights that there's no industry-standard for documentation, and organizations often customize their documentation practices based on their specific needs and legal requirements.
- **Importance of Effective Documentation:** Effective documentation plays a crucial role in reducing uncertainty and confusion, particularly during security incidents when urgency is paramount. ***Clear, consistent, and accurate documentation*** enables security professionals to respond swiftly and decisively.
- **Documentation Tools:** Various tools and software can be employed for documentation, such as word processors (e.g., Google Docs, OneNote, Evernote, Notepad++), ticketing systems (e.g., Jira), Google Sheets, audio recorders, cameras, and handwritten notes.
- **Ongoing Discussion:** The video concludes by mentioning that the discussion on documentation has just begun, and learners will soon apply their documentation skills using their incident handler's journal.

The video underscores the critical role of documentation in incident response, ensuring that security professionals can effectively manage and respond to security incidents with clarity and accuracy.

# Intrusion detection systems

- **Home Intrusion Security System Analogy:** The video starts with an analogy of a home intrusion security system, where sensors detect intrusions by sending out sound waves and triggering alerts when something disrupts these waves.
- **[[Intrusion Detection System (IDS)]]:** An IDS is introduced as a system that functions similarly to home intrusion sensors. It ***monitors*** system and network activity, collecting and analyzing data for signs of abnormal activities. If unusual activities are detected, the IDS generates alerts to notify relevant personnel and channels.
- **[[Intrusion Prevention System (IPS)]]:** The video uses an analogy of a jewelry storefront with a window sensor to explain IPS. An IPS, like an IDS, monitors system activity for intrusions but has additional capabilities to take action and prevent intrusions from happening.
- **Tools with IDS and IPS Functions:** Several tools are mentioned that can perform the functions of both IDS and IPS. Some popular tools highlighted include Snort, Zeek, Kismet, Sagan, and Suricata, with a promise to explore Suricata in upcoming lessons.
- **Alert Notifications Management:** The video hints at managing alert notifications using security information and event management (SIEM) tools, suggesting that this topic will be covered in future lessons.

The video provides a clear and relatable explanation of IDS and IPS by using everyday analogies, making it easier for learners to understand the basic concepts of intrusion detection and prevention systems.

# Overview of detection tools

Previously, you explored **intrusion detection system** (**IDS**) and **intrusion prevention system** (**IPS**) technologies. In this reading, you’ll compare and contrast these tools and learn about **endpoint detection and response** (**EDR**). As a security analyst, you'll likely work with these different tools, so it's important to understand their functions.

## Why you need detection tools

Detection tools work similarly to home security systems. Whereas home security systems monitor and protect homes against intrusion, cybersecurity detection tools help organizations protect their networks and systems against unwanted and unauthorized access. For organizations to protect their systems from security threats or attacks, they must be made aware when there is any indication of an intrusion. Detection tools make security professionals aware of the activity happening on a network or a system. The tools do this by continuously monitoring networks and systems for any suspicious activity. Once something unusual or suspicious is detected, the tool triggers an alert that notifies the security professional to investigate and stop the possible intrusion. 

## Detection tools

As a security analyst, you'll likely encounter **IDS**, **IPS**, and **EDR** detection tools at some point, but it's important to understand the differences between them. Here is a comparison chart for quick reference: 

|**Capability**|**IDS**|**IPS**|**EDR**|
|---|---|---|---|
|Detects malicious activity|✓|✓|✓|
|Prevents intrusions|N/A|✓|✓|
|Logs activity|✓|✓|✓|
|Generates alerts|✓|✓|✓|
|Performs behavioral analysis|N/A|N/A|✓|

## Overview of IDS tools

An **[[intrusion detection system (IDS)]]** is an application that monitors system activity and alerts on possible intrusions. An IDS provides continuous monitoring of network events to help protect against security threats or attacks. The goal of an IDS is to detect potential malicious activity and generate an alert once such activity is detected. An IDS does _not_ stop or prevent the activity. Instead, security professionals will investigate the alert and act to stop it, if necessary. 

For example, an IDS can send out an alert when it identifies a suspicious user login, such as an unknown IP address logging into an application or a device at an unusual time. But, an IDS will not stop or prevent any further actions, like blocking the suspicious user login. 

Examples of IDS tools include Zeek, Suricata, Snort®, and Sagan. 

### **Detection categories**

As a security analyst, you will investigate alerts that an IDS generates. There are four types of detection categories you should be familiar with:

1. **A true positive** is an alert that correctly detects the presence of an attack.
2. **A true negative** is a state where there is no detection of malicious activity. This is when no malicious activity exists and no alert is triggered. 
3. **A false positive** is an alert that incorrectly detects the presence of a threat. This is when an IDS identifies an activity as malicious, but it isn't. False positives are an inconvenience for security teams because they spend time and resources investigating an illegitimate alert. 
4. **A false negative** is a state where the presence of a threat is not detected. This is when malicious activity happens but an IDS fails to detect it. False negatives are dangerous because security teams are left unaware of legitimate attacks that they can be vulnerable to. 

## Overview of IPS tools

An **[[intrusion prevention system (IPS)]]** is an application that monitors system activity for intrusive activity and takes action to stop the activity. An IPS works similarly to an IDS. But, IPS monitors system activity to detect and alert on intrusions, _and_ it also takes action to _prevent_ the activity and minimize its effects. For example, an IPS can send an alert and modify an access control list on a router to block specific traffic on a server.

**Note:** Many IDS tools can also operate as an IPS. Tools like Suricata, Snort, and Sagan have both IDS and IPS capabilities.

## Overview of EDR tools  

**[[Endpoint detection and response (EDR)]]** is an application that monitors an endpoint for malicious activity. EDR tools are installed on endpoints. Remember that an **[[endpoint]]** is any device connected on a network. Examples include end-user devices, like computers, phones, tablets, and more.

EDR tools monitor, record, and analyze endpoint system activity to identify, alert, and respond to suspicious activity. Unlike IDS or IPS tools, EDRs collect endpoint activity data and perform _behavioral analysis_ to identify threat patterns happening on an endpoint. Behavioral analysis uses the power of machine learning and artificial intelligence to analyze system behavior to identify malicious or unusual activity. EDR tools also use _automation_ to stop attacks without the manual intervention of security professionals. For example, if an EDR detects an unusual process starting up on a user’s workstation that normally is not used, it can automatically block the process from running.

Tools like Open EDR®, Bitdefender™ Endpoint Detection and Response, and FortiEDR™ are examples of EDR tools.

**Note**: Security information and event management (SIEM) tools also have detection capabilities, which you'll explore later.

## Key takeaways

Organizations deploy detection tools to gain awareness into the activity happening in their environments. IDS, IPS, and EDR are different types of detection tools. The value of detection tools is in their ability to detect, log, alert, and stop potential malicious activity.


# Alert and event management with SIEM and SOAR tools

In this video, the use and functionality of **[[Security Information and Event Management (SIEM)]]** tools are explained, followed by an introduction to **[[Security Orchestration, Automation, and Response (SOAR)]]** tools. Here are the key points covered in the video:

- **SIEM Overview:** SIEM stands for Security Information and Event Management. It is a tool that collects and analyzes log data to monitor critical activities within an organization's network. The analogy of a car dashboard is used to explain how SIEM tools provide a high-level overview of network activities, similar to how a car dashboard gives a driver information about the car's components.
- **SIEM Process:** 
	- SIEM **tools collect and aggregate data** from various sources, such as IDS/IPS, databases, firewalls, and applications. 
		- **SIEM Data Collection:** SIEM tools can collect a huge volume of raw data from multiple sources, which may not all be relevant for security analysis. Data normalization helps clean up and make data consistent for analysis.
	- This **data is then normalized** to remove non-essential attributes and create consistency in log records. 
	- After normalization, the **data is analyzed** against configured rules to detect security incidents, which are categorized and reported as alerts for security analysts to review.
- **SOAR Introduction:** Security Orchestration, Automation, and Response (SOAR) is introduced as a collection of applications, tools, and workflows that use automation to ***respond to security events and incidents***. SOAR can also be used for tracking and managing cases, where multiple incidents form a case, and SOAR centralizes the management of these incidents.

The video provides a clear understanding of how SIEM tools work to monitor and analyze security-related data and introduces SOAR as a tool for automating analysis and response to security events and incidents. The car dashboard analogy makes the concept more relatable and understandable for learners.

# Overview of SIEM technology

Previously, you learned about the SIEM process. In this reading, you'll explore more about this process and why SIEM tools are an important part of incident detection and response. As a refresher, a **security information and event management (SIEM)** tool is an application that collects and analyzes log data to monitor critical activities in an organization. You might recall that SIEM tools help security analysts perform **[[log analysis]]** which is the process of examining logs to identify events of interest.

## SIEM advantages

SIEM tools collect and manage security-relevant data that can be used during investigations. This is important because SIEM tools provide awareness about the activity that occurs between devices on a network. The information SIEM tools provide can help security teams quickly investigate and respond to security incidents. SIEM tools have many advantages that can help security teams effectively respond to and manage incidents. Some of the advantages are:

- **Access to event data:** SIEM tools provide access to the event and activity data that happens on a network, including real-time activity. Networks can be connected to hundreds of different systems and devices. SIEM tools have the ability to ingest all of this data so that it can be accessed.
- **Monitoring, detecting, and alerting:** SIEM tools continuously monitor systems and networks in real-time. They then analyze the collected data using detection rules to detect malicious activity. If an activity matches the rule, an alert is generated and sent out for security teams to assess.
- **Log storage:** SIEM tools can act as a system for data retention, which can provide access to historical data. Data can be kept or deleted after a period depending on an organization's requirements. 

## The SIEM process

The SIEM process consists of three critical steps:

1. **Collect and aggregate data**
2. **Normalize data** 
3. **Analyze data**

By understanding these steps, organizations can utilize the power of SIEM tools to gather, organize, and analyze security event data from different sources. Organizations can later use this information to improve their ability to identify and mitigate potential threats.

### **[[Collect and aggregate data]]**

SIEM tools require data for them to be effectively used. During the first step, the SIEM collects event data from various sources like firewalls, servers, routers, and more. This data, also known as logs, contains event details like timestamps, IP addresses, and more. **Logs** are a record of events that occur within an organization’s systems. After all of this log data is collected, it gets aggregated in one location. **[[Aggregation]]** refers to the process of consolidating log data into a centralized place. Through collection and aggregation, SIEM tools eliminate the need for manually reviewing and analyzing event data by accessing individual data sources. Instead, all event data is accessible in one location—the SIEM.

![[Pasted image 20231024220633.png]]

Parsing can occur during the first step of the SIEM process when data is collected and aggregated. _[[Parsing]]_ maps data according to their fields and their corresponding values. For example, the following log example contains fields with values. At first, it might be difficult to interpret information from this log based on its format:

`April 3 11:01:21 server sshd[1088]: Failed password for user nuhara from 218.124.14.105 port 5023`

In a parsed format, the fields and values are extracted and paired making them easier to read and interpret:

- host = `server`
- process = `sshd`
- source_user = `nuhara`
- source ip = `218.124.14.105`
- source port = `5023`

### **[[Normalize data]]**

SIEM tools collect data from many different sources. This data must be transformed into a single format so that it can be easily processed by the SIEM. However, each data source is different and data can be formatted in many different ways. For example, a firewall log can be formatted differently than a server log.

![[Pasted image 20231024222403.png]]

Collected event data should go through the process of normalization. _[[Normalization]]_ converts data into a standard, structured format that is easily searchable. 

### **[[Analyze data]]**

After log data has been collected, aggregated, and normalized, the SIEM must do something useful with all of the data to enable security teams to investigate threats. During this final step in the process, SIEM tools analyze the data. Analysis can be done with some type of detection logic such as a set of rules and conditions. SIEM tools then apply these rules to the data, and if any of the log activity matches a rule, alerts are sent out to cybersecurity teams.

**Note**: A part of the analysis process includes correlation. _[[Correlation]]_ involves the comparison of multiple log events to identify common patterns that indicate potential security threats.

## SIEM tools 

There are many SIEM tools. The following are some SIEM tools commonly used in the cybersecurity industry:

- AlienVault® OSSIM™
- Chronicle
- Elastic
- Exabeam
- IBM QRadar® Security Intelligence Platform
- LogRhythm
- Splunk

## Key takeaways

SIEM tools collect and organize enormous amounts of data to create meaningful insights for security teams. By understanding how SIEM tools work, what the process includes, and how organizations leverage them, you can contribute to efforts in detecting and responding to security incidents effectively. With this knowledge, you can assist in analyzing log data, identifying threats, and aiding incident response activities to help improve security posture and protect valuable assets from threats.
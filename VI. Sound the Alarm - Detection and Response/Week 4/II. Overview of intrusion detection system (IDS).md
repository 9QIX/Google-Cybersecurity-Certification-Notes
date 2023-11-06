# Security monitoring with detection tools

- **[[Telemetry]]:** Telemetry refers to the collection and transmission of data for analysis. It encompasses both logs and the data itself, such as packet captures. Logs and telemetry serve as sources of evidence used in investigations by security professionals.
- **[[Intrusion Detection System (IDS)]]:** An IDS is an application that monitors system and network activity for potential intrusions or threats. It generates alerts when suspicious activity is detected.
- **[[Endpoint]]:** An endpoint is any device connected to a network, such as laptops, tablets, desktop computers, and smartphones. These devices are potential entry points for malicious actors seeking unauthorized access to systems.
- **[[Host-Based Intrusion Detection System (HIDS)]]:** HIDS is a type of IDS that monitors the activity of the host on which it is installed. It is installed as an agent on individual hosts (e.g., laptops, servers) and records output as logs when it detects suspicious activity.
![[Pasted image 20231104194330.png]]
- **[[Network-Based Intrusion Detection System (NIDS)]]:** NIDS collects and analyzes network traffic and data. It works by analyzing network traffic at specific points in the network. Multiple IDS sensors can be deployed at different network locations for better visibility. When it detects unusual network activity, it generates alerts and logs the activity.
![[Pasted image 20231104194403.png]]
- **[[Signature Analysis]]:** IDS technologies use different detection methods, with signature analysis being one of the most common. Signature analysis involves using predefined sets of rules known as signatures. A detection method used to find events of interest. The IDS compares network or system activity against these signatures. If a match is found, the IDS generates an alert. For example, a signature can be configured to trigger an alert if it detects three consecutive failed login attempts, indicating a possible password attack.
- **[[IDS Logs]]:** IDS technologies log information related to the devices, systems, and networks they monitor. These logs are essential for tracking and analyzing suspicious activity. IDS logs can be centralized in a log repository like a Security Information and Event Management (SIEM) system for storage and analysis.

Understanding intrusion detection systems, their types, and detection methods, as well as how to analyze their logs and alerts, is crucial for security analysts in monitoring and responding to potential security threats and incidents.

# Detection tools and techniques

In this reading, you’ll examine the different types of intrusion detection system (IDS) technologies and the alerts they produce. You’ll also explore the two common detection techniques used by detection systems. Understanding the capabilities and limitations of IDS technologies and their detection techniques will help you interpret security information to identify, analyze, and respond to security events.

As you’ve learned, an **intrusion detection system (IDS)** is an application that monitors system activity and alerts on possible intrusions. IDS technologies help organizations monitor the activity that happens on their systems and networks to identify indications of malicious activity.  Depending on the location you choose to set up an IDS, it can be either host-based or network-based.

## Host-based intrusion detection system

A **[[host-based intrusion detection system (HIDS)]]** is an application that monitors the activity of the host on which it's installed. A HIDS is installed as an agent on a host. A host is also known as an **[[endpoint]]**, which is any device connected to a network like a computer or a server. 

Typically, HIDS agents are installed on all endpoints and used to monitor and detect security threats. A HIDS monitors internal activity happening on the host to identify any unauthorized or abnormal behavior. If anything unusual is detected, such as the installation of an unauthorized application, the HIDS logs it and sends out an alert. 

In addition to monitoring inbound and outbound traffic flows, HIDS can have additional capabilities, such as monitoring file systems, system resource usage, user activity, and more. 

This diagram shows a HIDS tool installed on a computer. The dotted circle around the host indicates that it is only monitoring the local activity on the single computer on which it’s installed.

![[Pasted image 20231104194658.png]]

## Network-based intrusion detection system

A **[[network-based intrusion detection system (NIDS)]]** is an application that collects and monitors network traffic and network data. NIDS software is installed on devices located at specific parts of the network that you want to monitor. The NIDS application inspects network traffic from different devices on the network. If any malicious network traffic is detected, the NIDS logs it and generates an alert.

This diagram shows a NIDS that is installed on a network. The highlighted circle around the server and computers indicates that the NIDS is installed on the server and is monitoring the activity of the computers.

![[Pasted image 20231104194708.png]]

Using a combination of HIDS and NIDS to monitor an environment can provide a multi-layered approach to intrusion detection and response. HIDS and NIDS tools provide a different perspective on the activity occurring on a network and the individual hosts that are connected to it. This helps provide a comprehensive view of the activity happening in an environment.

## Detection techniques

Detection systems can use different techniques to detect threats and attacks. The two types of detection techniques that are commonly used by IDS technologies are signature-based analysis and anomaly-based analysis.

## Signature-based analysis

**[[Signature analysis]]**, or signature-based analysis, is a detection method that is used to find events of interest. A **[[signature]]** is a pattern that is associated with malicious activity. Signatures can contain specific patterns like a sequence of binary numbers, bytes, or even specific data like an IP address. 

Previously, you explored the **[[Pyramid of Pain]]**, which is a concept that prioritizes the different types of **[[indicators of compromise (IoCs)]]** associated with an attack or threat, such as IP addresses, tools, tactics, techniques, and more. IoCs and other indicators of attack can be useful for creating targeted signatures to detect and block attacks.

Different types of signatures can be used depending on which type of threat or attack you want to detect. For example, an anti-malware signature contains patterns associated with malware. This can include malicious scripts that are used by the malware. IDS tools will monitor an environment for events that match the patterns defined in this malware signature. If an event matches the signature, the event gets logged and an alert is generated. 

### **Advantages**

- **Low rate of false positives:** Signature-based analysis is very efficient at detecting known threats because it is simply comparing activity to signatures. This leads to fewer false positives. Remember that a **[[false positive]]** is an alert that incorrectly detects the presence of a threat.

### **Disadvantages**

- **Signatures can be evaded:** Signatures are unique, and attackers can modify their attack behaviors to bypass the signatures. For example, attackers can make slight modifications to malware code to alter its signature and avoid detection.
- **Signatures require updates:** Signature-based analysis relies on a database of signatures to detect threats. Each time a new exploit or attack is discovered, new signatures must be created and added to the signature database.
- **Inability to detect unknown threats:** Signature-based analysis relies on detecting known threats through signatures. Unknown threats can't be detected, such as new malware families or **zero-day** attacks, which are exploits that were previously unknown.

## Anomaly-based analysis

**[[Anomaly-based analysis]]** is a detection method that identifies abnormal behavior. There are two phases to anomaly-based analysis: a training phase and a detection phase. In the training phase, a baseline of normal or expected behavior must be established. Baselines are developed by collecting data that corresponds to normal system behavior. In the detection phase, the current system activity is compared against this baseline. Activity that happens outside of the baseline gets logged, and an alert is generated. 

### **Advantages**

- **Ability to detect new and evolving threats:** Unlike signature-based analysis, which uses known patterns to detect threats, anomaly-based analysis _can_ detect unknown threats.

### **Disadvantages**

- **High rate of false positives:** Any behavior that deviates from the baseline can be flagged as abnormal, including non-malicious behaviors. This leads to a high rate of false positives.
- **Pre-existing compromise:** The existence of an attacker during the training phase will include malicious behavior in the baseline. This can lead to missing a pre-existing attacker.

## Key takeaways

IDS technologies are an essential security tool that you will encounter in your security journey. To recap, a NIDS monitors an entire network, whereas a HIDS monitors individual endpoints. IDS technologies generate different types of alerts. Lastly, IDS technologies use different detection techniques like signature-based or anomaly-based analysis to identify malicious activity.

# Components of a detection signature

- **Signature and Detection Rules:** A **[[signature]]** specifies detection rules, which outline the types of network intrusions an IDS should detect. For example, a signature can be written to detect and alert on suspicious network traffic attempting to connect to a specific port.
- **Components of NIDS Rules:** Network Intrusion Detection System (NIDS) rules generally consist of three components:
	1. **[[Action]]:** This is the first item in a signature and specifies the action to take when the rule criteria matches. Determine the action to take if the rule criteria is met. Common actions include "alert," "pass," or "reject."
	2. **[[Header]]:** The header defines the signature's network traffic and includes information like *source and destination IP addresses*, *source and destination ports, protocols, and traffic direction*.
		- **Header Information:** In the header, you define the source of suspicious traffic. You can specify external IP addresses, unusual protocols, and other characteristics to match the network traffic you want to detect. The header provides detailed information about the network packets you want to inspect. ![[Pasted image 20231105211355.png]]
	3. **[[Rule Options]]:** Rule options allow you to customize signatures with additional parameters. These options help narrow down network traffic to detect specific patterns. Rule options are separated by semicolons and enclosed in parentheses.
		- **Rule Options:** Rule options help tailor the signature to detect specific patterns or behaviors in network traffic. They allow you to customize the detection criteria and actions. Common rule options include "msg" for defining alert messages, "sid" for assigning a unique signature ID, and "rev" for indicating the revision number of the signature.![[Pasted image 20231105211705.png]]
- Understanding how to read and write signatures is essential for security analysts, as it allows you to customize intrusion detection rules and detect specific patterns or behaviors in network traffic that may indicate potential security threats.

# Examine signatures with Suricata

- **Pre-Written Signatures:** Many NIDS technologies come with pre-written signatures, which serve as customizable templates for defining detection rules. These templates provide a starting point for writing and customizing your own rules. You can also add custom signatures.
- **Suricata Configuration Files:** Suricata is an open-source signature-based IDS that runs on Linux. Configuration files for Suricata can be found in the `/etc/suricata` directory on a Linux machine.
- **Rules Folder:** The `/etc/suricata/rules` directory contains the pre-written signatures or rules that Suricata uses for network intrusion detection. You can also add your custom signatures here.
- **Examining a Signature:** To examine a pre-written signature, you can use a text editor or a command like `less` to view the contents of the rule file. Pre-written signatures typically include the following components:
	1. **[[Action]]:** Specifies the action to take when the rule criteria are met. Common actions include "alert," "pass," or "reject."
	2. **[[Header]]:** Defines the network traffic to which the signature applies. This includes information like source and destination IP addresses, source and destination ports, protocols, and traffic direction.
	3. **[[Rule Options]]:** Customizes the signature with additional parameters. These options narrow down the network traffic to match specific patterns or behaviors. Common rule options include "msg" (message), "flow" (network traffic direction), and "content" (content inspection).
- **Testing and Tailoring Signatures:** Every environment is different, and to be effective, IDS signatures must be tested and tailored to suit the specific needs of the network. Security analysts may test, modify, or create IDS signatures to improve threat detection and reduce false positives.

Understanding how to work with pre-written and custom signatures is a fundamental skill for security analysts and administrators when using intrusion detection systems like Suricata. It allows you to define rules that match specific patterns or behaviors indicative of security threats on your network. In the next sections, you'll explore how Suricata logs events and how to analyze these logs as part of your network security monitoring efforts.

# Examine Suricata logs

- **EVE JSON Format:** EVE stands for **Extensible Event Format**, and it's a log format used by Suricata. The logs are output in JSON (JavaScript Object Notation) format. JSON uses key-value pairs, making it easy to search for and extract information from log files.
- **[[Suricata Log Types]]:** Suricata generates two main types of log data:
	1. **[[Alert Logs]]:** These logs contain information that is relevant to security investigations. They typically capture details about network traffic that triggered specific signatures or rules, indicating potential security threats.![[Pasted image 20231106205315.png]]
	2. **[[Network Telemetry Logs]]:** These logs provide information about network traffic flows. They may not always be security-relevant but record network activities, such as connections to specific ports or websites. ![[Pasted image 20231106205352.png]]
- **Examining Example Logs:** You were provided with examples of both alert logs and network telemetry logs. These logs include fields that describe the event, its type (e.g., "alert" or "http"), IP addresses, protocols, and details about the associated signature. In the case of network telemetry logs, you may find information about HTTP requests, including the accessed website, user agent, and content type.

Understanding how to interpret logs generated by Suricata is crucial for security analysts and network administrators. These logs provide valuable information for security investigations and network monitoring, allowing you to identify and respond to potential security threats and analyze network activity. In an upcoming activity, you'll have the opportunity to apply your knowledge of Suricata logs hands-on.

# Overview of Suricata

So far, you've learned about detection signatures and you were introduced to Suricata, an incident detection system (IDS).

In this reading, you’ll explore more about Suricata. You'll also learn about the value of writing customized signatures and configuration. This is an important skill to build in your cybersecurity career because you might be tasked with deploying and maintaining IDS tools.

## Introduction to Suricata

[**Suricata**](https://suricata.io/) is an open-source intrusion detection system, intrusion prevention system, and network analysis tool.

### **Suricata features**

There are three main ways Suricata can be used:

- **[[Intrusion detection system (IDS)]]**: As a network-based IDS, Suricata can monitor network traffic and alert on suspicious activities and intrusions. Suricata can also be set up as a host-based IDS to monitor the system and network activities of a single host like a computer.
- **[[Intrusion prevention system (IPS)]]**: Suricata can also function as an intrusion prevention system (IPS) to detect and block malicious activity and traffic. Running Suricata in IPS mode requires additional configuration such as enabling IPS mode.
- **[[Network security monitoring (NSM)]]**: In this mode, Suricata helps keep networks safe by producing and saving relevant network logs. Suricata can analyze live network traffic, existing packet capture files, and create and save full or conditional packet captures. This can be useful for forensics, incident response, and for testing signatures. For example, you can trigger an alert and capture the live network traffic to generate traffic logs, which you can then analyze to refine detection signatures.

## Rules 

Rules or signatures are used to identify specific patterns, behavior, and conditions of network traffic that might indicate malicious activity. The terms rule and signature are often used interchangeably in Suricata. Security analysts use **[[signatures]]**, or patterns associated with malicious activity, to detect and alert on specific malicious activity. Rules can also be used to provide additional context and visibility into systems and networks, helping to identify potential security threats or vulnerabilities. 

Suricata uses **[[signatures analysis]]**, which is a detection method used to find events of interest. Signatures consist of three components:

- **[[Action]]**: The first component of a signature. It describes the action to take if network or system activity matches the signature. Examples include: alert, pass, drop, or reject.
- **[[Header]]**: The header includes network traffic information like source and destination IP addresses, source and destination ports, protocol, and traffic direction.
- **[[Rule options]]:** The rule options provide you with different options to customize signatures.

Here's an example of a Suricata signature:
![[Pasted image 20231106205547.png]]

Rule options have a specific ordering and changing their order would change the meaning of the rule.

**Note**: The terms rule and signature are synonymous.

**Note:** Rule order refers to the order in which rules are evaluated by Suricata. Rules are processed in the order in which they are defined in the configuration file. However, ***Suricata processes rules in a different default order: pass, drop, reject, and alert***. Rule order affects the final verdict of a packet especially when conflicting actions such as a drop rule and an alert rule both match on the same packet.

### **Custom rules**

Although Suricata comes with pre-written rules, it is highly recommended that you modify or customize the existing rules to meet your specific security requirements.

There is no one-size-fits-all approach to creating and modifying rules. This is because each organization's IT infrastructure differs. Security teams must extensively test and modify detection signatures according to their needs.

Creating custom rules helps to tailor detection and monitoring. Custom rules help to minimize the amount of false positive alerts that security teams receive. It's important to develop the ability to write effective and customized signatures so that you can fully leverage the power of detection technologies.

## Configuration file

Before detection tools are deployed and can begin monitoring systems and networks, you must properly configure their settings so that they know what to do. A **[[configuration file]]** is a file used to configure the settings of an application. Configuration files let you customize exactly how you want your IDS to interact with the rest of your environment. 

Suricata's configuration file is `suricata.yaml`, which uses the YAML file format for syntax and structure.

## Log files

There are two log files that Suricata generates when alerts are triggered:

- **[[eve.json]]**: The eve.json file is the standard Suricata log file. This file contains detailed information and metadata about the events and alerts generated by Suricata stored in JSON format. For example, events in this file contain a unique identifier called flow_id  which is used to correlate related logs or alerts to a single network flow, making it easier to analyze network traffic. The eve.json file is used for more detailed analysis and is considered to be a better file format for log parsing and SIEM log ingestion.
- **[[fast.log]]**: The fast.log file is used to record minimal alert information including basic IP address and port details about the network traffic. The fast.log file is used for basic logging and alerting and is considered a legacy file format and is not suitable for incident response or threat hunting tasks.

The main difference between the eve.json file and the fast.log file is the level of detail that is recorded in each. The fast.log file records basic information, whereas the eve.json file contains additional verbose information.

## Key takeaways

In this reading, you explored some of Suricata's features, rules syntax, and the importance of configuration. Understanding how to configure detection technologies and write effective rules will provide you with clear insight into the activity happening in an environment so that you can improve detection capability and network visibility. Go ahead and start practicing using Suricata in the upcoming activity! 

## Resources for more information

If you would like to learn more about Suricata including rule management and performance, check out the following resources: 

- [Suricata user guide](https://suricata.readthedocs.io/en/latest/index.html#) 
- [Suricata features](https://suricata.io/features/) 
- [Rule management](https://suricata.readthedocs.io/en/latest/rule-management/suricata-update.html)
- [Rule performance analysis](https://suricata.readthedocs.io/en/latest/configuration/suricata-yaml.html#engine-analysis-and-profiling)
- [Suricata threat hunting webinar](https://youtu.be/kaDGolhTu94)
- [Introduction to writing Suricata rules](https://youtu.be/tvoqFBVSShA)
- [Eve.json jq examples](https://suricata.readthedocs.io/en/latest/output/eve/eve-json-examplesjq.html)
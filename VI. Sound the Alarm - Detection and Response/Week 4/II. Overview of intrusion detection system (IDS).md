# Security monitoring with detection tools

- **[[Telemetry]]:** Telemetry refers to the collection and transmission of data for analysis. It encompasses both logs and the data itself, such as packet captures. Logs and telemetry serve as sources of evidence used in investigations by security professionals.
- **[[Intrusion Detection System (IDS)]]:** An IDS is an application that monitors system and network activity for potential intrusions or threats. It generates alerts when suspicious activity is detected.
- **[[Endpoint]]:** An endpoint is any device connected to a network, such as laptops, tablets, desktop computers, and smartphones. These devices are potential entry points for malicious actors seeking unauthorized access to systems.
- **[[Host-Based Intrusion Detection System (HIDS)]]:** HIDS is a type of IDS that monitors the activity of the host on which it is installed. It is installed as an agent on individual hosts (e.g., laptops, servers) and records output as logs when it detects suspicious activity.
![[Pasted image 20231104194330.png]]
- **[[Network-Based Intrusion Detection System (NIDS)]]:** NIDS collects and analyzes network traffic and data. It works by analyzing network traffic at specific points in the network. Multiple IDS sensors can be deployed at different network locations for better visibility. When it detects unusual network activity, it generates alerts and logs the activity.
![[Pasted image 20231104194403.png]]
- **[[Signature Analysis]]:** IDS technologies use different detection methods, with signature analysis being one of the most common. Signature analysis involves using predefined sets of rules known as signatures. A detection method used to find events of interest. The IDS compares network or system activity against these signatures. If a match is found, the IDS generates an alert. For example, a signature can be configured to trigger an alert if it detects three consecutive failed login attempts, indicating a possible password attack.
- **IDS Logs:** IDS technologies log information related to the devices, systems, and networks they monitor. These logs are essential for tracking and analyzing suspicious activity. IDS logs can be centralized in a log repository like a Security Information and Event Management (SIEM) system for storage and analysis.

Understanding intrusion detection systems, their types, and detection methods, as well as how to analyze their logs and alerts, is crucial for security analysts in monitoring and responding to potential security threats and incidents.
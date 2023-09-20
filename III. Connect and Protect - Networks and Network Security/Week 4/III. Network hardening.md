# Network Hardening

Earlier, you learned that **[[OS hardening]]** focuses on device safety and uses patch updates, secure configuration, and account access policies.

**[[Network hardening]]** focuses on network-related security hardening, like port filtering, network access privileges, and encryption over networks. Certain network hardening tasks are performed regularly, while others are performed once and then updated as needed.

## Regularly Performed Tasks:

Some tasks that are regularly performed in network hardening are:

- **[[Firewall Rules Maintenance]]:** Ensuring that the rules in the firewall are up-to-date and effectively block or allow traffic as required.
- **[[Network Log Analysis]]:** The process of examining network logs to identify events of interest. Security teams use a log analyzer tool or a Security Information and Event Management (SIEM) tool for this purpose.
- **[[Patch Updates]]:** Regularly updating network components and systems to address security vulnerabilities.
- **[[Server Backups]]:** Creating and maintaining backups of critical network servers and data.

Earlier, you learned that a log is a record of events that occur within an organization's systems. **[[Network log analysis]]** is the process of examining network logs to identify events of interest. Security teams use a log analyzer tool or a Security Information and Event Management tool, also known as a SIEM, to conduct network log analysis. 

A **[[SIEM tool]]** is an application that collects and analyzes log data to monitor critical activities in an organization. It gathers security data from a network and presents that data on a single dashboard. The dashboard interface is sometimes called a single pane of glass. 

A SIEM helps analysts to inspect, analyze, and react to security events across the network based on their priority. Reports from the SIEM provide a list of new or ongoing network vulnerabilities and list them on a scale of priority from high to low, where high-priority vulnerabilities have a much shorter deadline for mitigation.

## Tasks Performed Once:

Now that we've covered tasks that are performed regularly, let's examine tasks that are performed once and then updated as needed. These tasks include:

- **[[Port Filtering]]:** Port filtering is a firewall function that blocks or allows certain port numbers to limit unwanted communication. The basic principle is that only necessary ports should be allowed, and any unused ports should be disallowed to protect against vulnerabilities.
- **[[Network Access Privileges]]:** Managing and controlling access to the network, ensuring that users only have access to the resources and areas they need for their roles.
- **[[Encryption for Communication]]:** Ensuring that all network communication is encrypted using the latest encryption standards. Encryption standards are rules or methods used to conceal outgoing data and uncover or decrypt incoming data. Data in restricted zones should have much higher encryption standards, making it more difficult to access.

Additionally, networks should be set up with the most up-to-date wireless protocols available, and older wireless protocols should be disabled. Security analysts also use **[[network segmentation]]** to create isolated subnets for different departments in an organization, preventing issues in one subnet from affecting the whole company and ensuring that only specified users have access to the parts of the network they require for their roles. Network segmentation may also be used to separate different security zones, with restricted zones containing highly classified or confidential data being separate from the rest of the network.

You've learned about the most common hardening practices in network security. This knowledge will be useful as you complete the certificate program and is essential to your career as a security analyst.
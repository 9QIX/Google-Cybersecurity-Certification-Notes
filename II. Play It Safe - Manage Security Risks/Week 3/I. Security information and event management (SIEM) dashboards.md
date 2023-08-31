# Logs and SIEM tools

- **[[Log]]** is a record of events that occur within an organization's systems and networks. 
	- Security analysts access a variety of logs from different sources. 
	- Three common log sources include firewall logs, network logs, and server logs.
## Three common log sources:
- ### **[[Firewall Log]]** 
	- is a record of attempted or established connections for incoming traffic from the internet. It also includes outbound requests to the internet from within the network. 
- ### **[[Network Log]]** 
	- is a record of all computers and devices that enter and leave the network. It also records connections between devices and services on the network. 
- ### **[[Server Log]]** 
	- is a record of events related to services such as websites, emails, or file shares. It includes actions such as login, password, and username requests. 

By monitoring logs, like the one shown here, security teams can identify vulnerabilities and potential data breaches. Understanding logs is important because SIEM tools rely on logs to monitor systems and detect security threats. 

- ### **[[Security Information and Event Management (SIEM) Tool ]]**
	- is an application that collects and analyzes log data to monitor critical activities in an organization. It provides real-time visibility, event monitoring and analysis, and automated alerts. It also stores all log data in a centralized location. 
	- Because SIEM tools index and minimize the number of logs a security professional must manually review and analyze, they increase efficiency and save time. 
	- But, SIEM tools must be configured and customized to meet each organization's unique security needs. As new threats and vulnerabilities emerge, organizations must continually customize their SIEM tools to ensure that threats are detected and quickly addressed. 

# SIEM Dashboards

- **[[Dashboards]]** present information about your account or location in a format that's easy to understand. 
	- For example, weather apps display data like temperature, precipitation, wind speed, and the forecast using charts, graphs, and other visual elements. This format makes it easy to quickly identify weather patterns and trends, so you can stay prepared and plan your day accordingly.
		- Just like weather apps help people make quick and informed decisions based on data, SIEM dashboards help security analysts quickly and easily access their organization's security information as charts, graphs, or tables. 
	- For example, a security analyst receives an alert about a suspicious login attempt. The analyst accesses their SIEM dashboard to gather information about this alert. 
		- Using the dashboard, the analyst discovers that there have been 500 login attempts for Ymara's account in the span of five-minutes. 
		- They also discover that the login attempts happened from geographic locations outside of Ymara's usual location and outside of her usual working hours. 
		- By using a dashboard, the security analyst was able to quickly review visual representations of the the login attempts, location, and the exact time of the activity, then determine that the activity was suspicious. 
- In addition to providing a comprehensive summary of security-related data, SIEM dashboards also provide stakeholders with different metrics. 
	- **[[Metrics]]** are key technical attributes such as r***esponse time, availability, and failure rate***, which are used to assess the performance of a software application.
	- SIEM dashboards can be customized to display specific metrics or other data that are relevant to different members in an organization. 
	- For example, a security analyst may create a dashboard that displays metrics for monitoring everyday business operations, like the volume of incoming and outgoing network traffic. 

# The future of SIEM tools

Previously, you were introduced to **[[security information and event management (SIEM) tools]]**, along with a few examples of SIEM tools. In this reading, you will learn more about how SIEM tools are used to protect organizational operations. You will also gain insight into how and why SIEM tools are changing to help protect organizations and the people they serve from evolving threat actor tactics and techniques.

## Current SIEM solutions 

A **SIEM** tool is an application that collects and analyzes log data to monitor critical activities in an organization. SIEM tools offer real-time monitoring and tracking of security event logs. The data is then used to conduct a thorough analysis of any potential security threat, risk, or vulnerability identified. SIEM tools have many dashboard options. Each dashboard option helps cybersecurity team members manage and monitor organizational data. However, currently, SIEM tools require human interaction for analysis of security events.  

## The future of SIEM tools

As cybersecurity continues to evolve, the need for cloud functionality has increased. SIEM tools have and continue to evolve to function in cloud-hosted and cloud-native environments. Cloud-hosted SIEM tools are operated by vendors who are responsible for maintaining and managing the infrastructure required to use the tools. Cloud-hosted tools are simply accessed through the internet and are an ideal solution for organizations that don’t want to invest in creating and maintaining their own infrastructure.

Similar to cloud-hosted SIEM tools, cloud-native SIEM tools are also fully maintained and managed by vendors and accessed through the internet. However, cloud-native tools are designed to take full advantage of cloud computing capabilities, such as availability, flexibility, and scalability. 

Yet, the evolution of SIEM tools is expected to continue in order to accommodate the changing nature of technology, as well as new threat actor tactics and techniques. For example, consider the current development of interconnected devices with access to the internet, known as the Internet of Things (IoT). The more interconnected devices there are, the larger the cybersecurity attack surface and the amount of data that threat actors can exploit. The diversity of attacks and data that require special attention is expected to grow significantly. Additionally, as artificial intelligence (AI) and machine learning (ML) technology continues to progress, SIEM capabilities will be enhanced to better identify threat-related terminology, dashboard visualization, and data storage functionality.  

The implementation of automation will also help security teams respond faster to possible incidents, performing many actions without waiting for a human response. **Security orchestration, automation, and response (SOAR)** is a collection of applications, tools, and workflows that uses automation to respond to security events. Essentially, this means that handling common security-related incidents with the use of SIEM tools is expected to become a more streamlined process requiring less manual intervention. This frees up security analysts to handle more complex and uncommon incidents that, consequently, can’t be automated with a SOAR. Nevertheless, the expectation is for cybersecurity-related platforms to communicate and interact with one another. Although the technology allowing interconnected systems and devices to communicate with each other exists, it is still a work in progress.
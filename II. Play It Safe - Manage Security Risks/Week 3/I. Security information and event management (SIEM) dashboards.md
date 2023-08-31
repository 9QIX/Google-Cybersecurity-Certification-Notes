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
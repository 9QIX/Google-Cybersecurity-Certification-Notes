## Log ingestion

![[Pasted image 20231107204219.png]]

Data is required for SIEM tools to work effectively. SIEM tools must first collect data using log ingestion. **[[Log ingestion]]** is the process of collecting and importing data from log sources into a SIEM tool. Data comes from any source that generates log data, like a server.

In log ingestion, the SIEM creates a copy of the event data it receives and retains it within its own storage. This copy allows the SIEM to analyze and process the data without directly modifying the original source logs. The collection of event data provides a centralized platform for security analysts to analyze the data and respond to incidents. This event data includes authentication attempts, network activity, and more.
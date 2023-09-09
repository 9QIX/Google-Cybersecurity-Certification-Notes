### **Management Protocols**

The next category of network protocols is **[[management protocols]]**. Management protocols are used for ***monitoring and managing activity on a network***. They include protocols for error reporting and optimizing performance on the network.

- **[[Simple Network Management Protocol (SNMP)]]** is a network protocol used for ***monitoring and managing devices on a network***. 
	- SNMP can reset a password on a network device or change its baseline configuration. 
	- It can also send requests to network devices for a report on how much of the network’s bandwidth is being used up. In the TCP/IP model, SNMP occurs at the **application layer**.
	- SNMPv1 and SNMPv2c use **UDP port 161** for sending and receiving SNMP requests and responses.
	- SNMPv3 uses **UDP port 161** for SNMP requests and **UDP port 162** for SNMP traps, which are asynchronous notifications sent by devices to a management station.
- **[[Internet Control Message Protocol (ICMP)]]** is an internet protocol used by devices to ***tell each other about data transmission errors across*** the network. 
	- ICMP is used by a receiving device to ***send a report*** to the sending device about the data transmission. 
	- ICMP is commonly used as a quick way to troubleshoot network connectivity and latency by issuing the “ping” command on a Linux operating system. 
	- In the TCP/IP model, ICMP occurs at the **internet layer**.
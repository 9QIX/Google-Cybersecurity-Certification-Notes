- A **[[data packet]]** is a basic unit of information that travels from one device to another within a network. When data is sent from one device to another across a network, it is sent as a packet that contains information about where the packet is going, where it's coming from, and the content of the message. 
	- Think about data packets like a piece of physical mail. Imagine you want to send a letter to a friend. The envelope will need to have the address where you want the letter to go and your return address. Inside the envelope is a letter that contains the message that you want your friend to read. A data packet is very similar to a physical letter. 
		- It contains a **[[header]]** that includes the ***internet protocol address, the IP address, and the media access control, or MAC, address*** of the destination device. 
		- It also includes a **[[protocol number]]** that tells the receiving device what to do with the information in the packet. 
		- Then there's the **[[body]]** of the packet, which contains the message that needs to be transmitted to the receiving device. 
		- Finally, at the end of the packet, there's a **[[footer]]**, similar to a signature on a letter, the footer signals to the receiving device that the packet is finished.

**[[Header]]**: which includes information like the type of network protocol and port being used. Imagine this as being the name and mailing address located on an envelope. Network protocols are a set of rules that determine the transmission of data between devices on a network. Ports are non-physical locations on a computer that organize data transmission between devices on a network. The header also contains the packet's source and destination IP address. We'll explore more information contained in the header in a later section.

Packets begin with the most essential component: the header. Packets can have several headers depending on the protocols used such as an Ethernet header, an IP header, a TCP header, and more. Headers provide information that’s used to route packets to their destination. This includes information about the source and destination IP addresses, packet length, protocol, packet identification numbers, and more.

Here is an IPv4 header with the information it provides:
![[Pasted image 20231025211427.png]]


The header contains details like the timestamp; the hostname, which is the name of the machine that sends the log; the application name; and the message ID. 

- **Timestamp**: The timestamp in this example is `2022-03-21T01:11:11.003Z`, where `2022-03-21` is the date in YYYY-MM-DD format. `T` is used to separate the date and the time. 01:11:11.003 is the 24-hour format of the time and includes the number of milliseconds `003`. `Z` indicates the timezone, which is Coordinated Universal Time (UTC). 
- **Hostname**: `virtual.machine.com`
- **Application**: `evntslog` 
- **Message** **ID**: `ID01`


**[[Header]]:** The header defines the signature's network traffic and includes information like source and destination IP addresses, source and destination ports, protocols, and traffic direction.
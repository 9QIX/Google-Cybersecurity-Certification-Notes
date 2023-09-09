### **Communication protocols**

**[[Communication protocols]]** govern the ***exchange of information*** in network transmission. They dictate how the data is transmitted between devices and the timing of the communication. They also include methods to recover data lost in transit. Here are a few of them.

- **[[Transmission Control Protocol (TCP)]]** is an internet communication protocol that allows ***two devices to form a connection and stream data***. 
	- TCP uses a three-way handshake process: 
		- First, the device sends a synchronize (SYN) request to a server. 
		- Then the server responds with a SYN/ACK packet to acknowledge receipt of the device's request. 
		- Once the server receives the final ACK packet from the device, a TCP connection is established.
		- In the TCP/IP model, TCP occurs at the **transport layer**.
- **[[User Datagram Protocol (UDP)]]** is a connectionless protocol that ***does not establish a connection between devices*** before a transmission. 
	- This makes it less reliable than TCP. But it also means that it works well for transmissions that need to get to their destination quickly. 
		- For example, one use of UDP is for internet gaming transmissions. In the TCP/IP model, UDP occurs at the **transport layer**.
- **[[Hypertext Transfer Protocol (HTTP)]]** is an application layer protocol that provides a method of ***communication between clients and website*** servers. 
	- HTTP uses port 80. HTTP is considered insecure, so it is being replaced on most websites by a secure version, called HTTPS. 
	- However, there are still many websites that use the insecure HTTP protocol. In the TCP/IP model, HTTP occurs at the application layer.
- **[[Domain Name System (DNS)]]** is a protocol that ***translates internet domain names into IP addresses***. 
	- When a client computer wishes to access a website domain using their internet browser, a query is sent to a dedicated DNS server. 
	- The DNS server then looks up the IP address that corresponds to the website domain. DNS normally uses UDP on port 53. 
	- However, if the DNS reply to a request is large, it will switch to using the TCP protocol. In the TCP/IP model, DNS occurs at the application layer.
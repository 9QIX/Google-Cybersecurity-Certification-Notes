Communication over a network happens when data is transferred from one point to another. Pieces of data are typically referred to as data packets.

- A **[[data packet]]** is a basic unit of information that travels from one device to another within a network. When data is sent from one device to another across a network, it is sent as a packet that contains information about where the packet is going, where it's coming from, and the content of the message. 
	- Think about data packets like a piece of physical mail. Imagine you want to send a letter to a friend. The envelope will need to have the address where you want the letter to go and your return address. Inside the envelope is a letter that contains the message that you want your friend to read. A data packet is very similar to a physical letter. 
		- It contains a **[[header]]** that includes the ***internet protocol address, the IP address, and the media access control, or MAC, address*** of the destination device. 
		- It also includes a **[[protocol number]]** that tells the receiving device what to do with the information in the packet. 
		- Then there's the **[[body]]** of the packet, which contains the message that needs to be transmitted to the receiving device. 
		- Finally, at the end of the packet, there's a **[[footer]]**, similar to a signature on a letter, the footer signals to the receiving device that the packet is finished.
- The movement of data packets across a network can provide an indication of how well the network is performing. 

- Network ***performance can be measured*** by bandwidth. **[[Bandwidth]]** refers to the ***amount of data a device receives every second***. 
	- You can calculate bandwidth by dividing the quantity of data by the time in seconds. 

- **[[Speed]]** refers to the ***rate at which data packets are received or downloaded***. 
	- Security personnel are interested in network bandwidth and speed because if either are irregular, it could be an indication of an attack. 

- **[[Packet sniffing]]** is the practice of ***capturing and inspecting data packets*** across the network. Communication on the network is important for sharing resources and data because it allows organizations to function effectively.

# The TCP/IP model

TCP/IP stands for Transmission Control Protocol and Internet Protocol. TCP/IP is the ***standard model used for network communication***.

- ### **[[Transmission Control Protocol (TCP)]]**
	- Transmission Control Protocol, is an internet communication protocol that ***allows two devices to form a connection and stream data***. 
	- The protocol includes a set of instructions to organize data, so it can be sent across a network. It also ***establishes a connection between two devices and makes sure that packets reach their appropriate destination.***
- ### **[[Internet Protocol (IP)]]**
	- IP has a ***set of standards used for routing and addressing data*** packets as they travel between devices on a network. Included in the Internet Protocol (IP) is the IP address that functions as an address for each private network.

## Ports

- When data packets are sent and received across a network, they are assigned a port. Within the operating system of a network device, a **[[Port]]** is a software-based location that ***organizes the sending and receiving of data*** between devices on a network. 
	- **Ports** divide network traffic into segments based on the service they will perform between two devices. The computers sending and receiving these data segments know how to prioritize and process these segments based on their port number. 
	- This is like sending a letter to a friend who lives in an apartment building. The mail delivery person not only knows how to find the building, but they also know exactly where to go in the building to find the apartment number where your friend lives. 
	- **[[Data packets]]** include instructions that tell the receiving device what to do with the information. These instructions come in the form of a port number.
	- **[[Port numbers]]** allow computers to split the network traffic and prioritize the operations they will perform with the data. Some common port numbers are: port 25, which is used for e-mail, port 443, which is used for secure internet communication, and port 20, for large file transfers.

# The four layers of TCP/IP model

The **[[TCP/IP model]]** is a framework that is used to visualize how data is organized and transmitted across the network. The TCP/IP model has four layers. The four layers are: the network access layer, the internet layer, the transport layer, and the application layer. Knowing how the TCP/IP model organizes network activity allows security professionals to monitor and secure against risks.

- ### [[Network Access Layer]]
	- Layer one is the network access layer. The network access layer ***deals with creation of data packets and their transmission across a network***. 
	- This includes ***hardware devices connected to physical cables and switches*** that direct data to its destination.
- ### [[Internet Layer]]
	- The internet layer is where ***IP addresses are attached to data packets to indicate the location of the sender and receiver***. 
	- The internet layer also focuses on ***how networks connect to each other***. For example, data packets containing information that determine whether they will stay on the LAN or will be sent to a remote network, like the internet.
- ### **[[Transport Layer]]**
	- The transport layer includes ***protocols to control the flow of traffic across a network***. These protocols ***permit or deny communication*** with other devices and include information about the status of the connection. Activities of this layer include error control, which ensures data is flowing smoothly across the network.
- ### **[[Application Layer]]**
	- Finally, at the application layer, protocols ***determine how the data packets will interact with receiving devices***. Functions that are organized at application layer include file transfers and email services.
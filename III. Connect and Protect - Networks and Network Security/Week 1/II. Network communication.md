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

# Learn more about the TCP/IP model

In this reading, you will build on what you have learned about the Transmission Control Protocol/Internet Protocol (TCP/IP) model, consider the differences between the Open Systems Interconnection (OSI) model and TCP/IP model, and learn how they’re related. Then, you’ll review each layer of the TCP/IP model and go over common protocols used in each layer. 

As a security professional, it's important that you understand the TCP/IP model because all communication on a network is organized using network protocols. Network protocols are a language that systems use to communicate with each other. In order for two network systems to successfully communicate with each other, they need to use the same protocol. The two most common models available are the TCP/IP and the OSI model. These models are a representative guideline of how network communications work together and move throughout the network and the host. The examples provided in this course will follow the TCP/IP model.

## The TCP/IP model

The **TCP/IP model** is a framework used to visualize how data is organized and transmitted across a network. This model helps network engineers and network security analysts conceptualize processes on the network and communicate where disruptions or security threats occur. 

The TCP/IP model has four layers: network access layer, internet layer, transport layer, and application layer. When troubleshooting issues on the network, security professionals can analyze and deduce which layer or layers an attack occurred based on what processes were involved in an incident.

![Les quatre couches du modèle TCP/IP sont la couche application, la couche transport, la couche Internet et la couche accès ré](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/H9jj1YSsSDKlU8c8qzOgsQ_89f77799b50040b08911a8de1012e2f1_CS_R-210_S33G011-edited.png?expiry=1694131200000&hmac=aVxI-N5cwfKvCxR2cgxvi6I_9yzMyZP9OWKAQowRYDc)

## Network access layer 

The **network access layer**, sometimes called the data link layer, organizes sending and receiving data frames within a single network. This layer corresponds to the physical hardware involved in network transmission. Hubs, modems, cables, and wiring are all considered part of this layer. The address resolution protocol (ARP) is part of the network access layer. ARP assists IP with directing data packets on the same physical network by mapping IP addresses to MAC addresses on the same physical network.

## Internet layer

The **internet layer**, sometimes referred to as the network layer, is responsible for ensuring the delivery to the destination host, which potentially resides on a different network. The internet layer determines which protocol is responsible for delivering the data packets. Here are some of the common protocols that operate at the internet layer:

- **Internet Protocol (IP)**. IP sends the data packets to the correct destination and relies on the Transmission Control Protocol/User Datagram Protocol (TCP/UDP) to deliver them to the corresponding service. IP packets allow communication between two networks. They are routed from the sending network to the receiving network. The TCP/UDP retransmits any data that is lost or corrupt.
    
- **Internet Control Message Protocol (ICMP)**. The ICMP shares error information and status updates of data packets. This is useful for detecting and troubleshooting network errors. The ICMP reports information about packets that were dropped or that disappeared in transit, issues with network connectivity, and packets redirected to other routers.
    

## Transport layer

The **transport layer** is responsible for reliably delivering data between two systems or networks. TCP and UDP are the two transport protocols that occur at this layer. 

### Transmission Control Protocol 

The **TCP** ensures that data is reliably transmitted to the destination service. TCP contains the port number of the intended destination service, which resides in the TCP header of a TCP/IP packet.

### User Datagram Protocol

The **UDP** is used by applications that are not concerned with the reliability of the transmission. Data sent over UDP is not tracked as extensively as data sent using TCP. Because UDP does not establish network connections, it is used mostly for performance sensitive applications that operate in real time, such as video streaming.

## Application layer

The **application layer** in the TCP/IP model is similar to the application, presentation, and session layers of the OSI model. The application layer is responsible for making network requests or responding to requests. This layer defines which internet services and applications any user can access. Some common protocols used on this layer are: 

- Hypertext transfer protocol (HTTP)
    
- Simple mail transfer protocol (SMTP)
    
- Secure shell (SSH)
    
- File transfer protocol (FTP)
    
- Domain name system (DNS)
    

Application layer protocols rely on underlying layers to transfer the data across the network.

## TCP/IP model versus OSI model

![Le modèle TCP/IP comparé au modèle OSI.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/RbNt47PDRTGJZ6q_QtaNMg_9b9098ac04e84c2d8ad04b220c5456f1_CS_R-210_TCP-vs-OSI.png?expiry=1694131200000&hmac=z40uHVxxXPUlO5iG84dpfIZFzW2YcfQYadwyd5S4sxQ)

The **OSI** visually organizes network protocols into different layers. Network professionals often use this model to communicate with each other about potential sources of problems or security threats when they occur.

The TCP/IP model combines multiple layers of the OSI model. There are many similarities between the two models. Both models define standards for networking and divide the network communication process into different layers. The TCP/IP model is a simplified version of the OSI model.

## Key takeaways

Both the TCP/IP and OSI models are conceptual models that help network professionals visualize network processes and protocols in regards to data transmission between two or more systems. The TCP/IP model contains four layers, and the OSI model contains seven layers.
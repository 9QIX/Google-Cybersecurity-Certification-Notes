A **[[network]]** is a ***group of connected devices***. 
	- At home, the devices connected to your network might be your laptop, cell phones, and smart devices, like your refrigerator or air conditioner. 
	- In an office, devices like workstations, printers, and servers all connect to the network. 
	- The devices on a network can communicate with each other over network cables, or wireless connections. Networks in your home and office can communicate with networks in other locations, and the devices on them. 

**[[Devices]]** need to find each other on a network to establish communications. These devices will use unique addresses, or identifiers, to locate each other. The addresses will ensure that communications happens with the right device. These are called the ***IP and MAC addresses***. 

## Devices can communicate on two types of networks:

- ### [[Local Area Network (LAN)]]
	- ***Spans a small area*** like an office building, a school, or a home. For example, when a personal device like your cell phone or tablet connects to the WIFI in your house, they form a LAN. The LAN then connects to the internet. 
- ### [[Wide Area Network (WAN)]] 
	- ***Spans a large geographical area*** like a city, state, or country. You can think of the internet as one big WAN. An employee of a company in San Francisco can communicate and share resources with another employee in Dublin, Ireland over the WAN. 

## Useful skills for network security

An entry-level cybersecurity analyst would look at using command lines, log parsing, and network traffic analysis in their everyday scope of work. 

- ### **[[Command line ]]**
	- Allows you to interact with various levels of your operating system, whether it's the low-level things like the memory and the kernel, or if it's high-level things like the applications and the programs that you're running on your computer. 
- ### **[[Log parsing]]**
	- They're going to be times where you may need to figure out and debug what is going on in your program or application and these logs are there to help you and support you in finding the root issue and then resolve it from there. 
- ### **[[Network traffic analysis]]**
	- There may be times where you need to figure out why is my Internet going slow? Why is traffic not being routed to the appropriate destination? What can I do to ensure that my network is up and running? 
	- Network traffic analysis is looking at network across various application and network layers and seeing what that traffic is doing, how we can secure that traffic, as well as identify any vulnerabilities and concerns. 

## Common devices that make up a network:

- ### **[[Hub]]**
	- A hub is a network device that broadcasts information to every device on the network. Think of a hub like a radio tower that broadcasts a signal to any radio tuned to the correct frequency. 
- ### **[[Switch]]**
	- A switch makes connections between specific devices on a network by sending and receiving data between them. 
	- A switch is more intelligent than a hub. It only passes data to the intended destination. This makes switches more secure than hubs, and enables them to control the flow of traffic and improve network performance. 
- ### **[[Router]]**
	- A router is a network device that connects multiple networks together.
	- For example, if a computer in one network wants to send information to a tablet on another network, then the information will be transferred as follows: 
		- First, the information travels from the computer to the router. 
		- Then, the router reads the destination address, and forwards the data to the intended network's router. 
		- Finally, the receiving router directs that information to the tablet.
- ### **[[Modem]]**
	- A modem is a device that connects your router to the internet, and brings internet access to the LAN.
	- For example, if a computer from one network wants to send information to a device on a network in a different geographic location, it would be transferred as follows: 
		- The computer would send information to the router, and the router would then transfer the information through the modem to the internet. 
		- The intended recipient's modem receives the information, and transfers it to the router. 
		- Finally, the recipient's router forwards that information to the destination device.

Network tools such as hubs, switches, routers, and modems are physical devices. However, many functions performed by these physical devices can be completed by virtualization tools. 

**[[Virtualization tools]]** are pieces of software that perform network operations. Virtualization tools carry out operations that would normally be completed by a hub, switch, router, or modem, and they are offered by Cloud service providers. These tools provide opportunities for cost savings and scalability.

# Network components, devices, and diagrams

In this section of the course, you will learn about network architecture. 

Once you have a foundational understanding of network architecture, sometimes referred to as network design, you will learn about security vulnerabilities inherent in all networks and how malicious actors attempt to exploit them. In this reading, you will review network devices and connections and investigate a simple network diagram similar to those used every day by network security professionals. Essential tasks of a security analyst include setting up the tools, devices, and protocols used to observe and secure network traffic.

## Devices on a network 

**[[Network]]** devices are the devices that maintain information and services for users of a network. These devices connect over wired and wireless connections. After establishing a connection to the network, the devices send data packets. The data packets provide information about the source and the destination of the data.

![Un diagrama de red que muestra cómo diferentes dispositivos están conectados a una red interna.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/URorDIh9TNiq7e481RWHmQ_85911828bd7c43b38761dd2b520e8df1_CS_R-041_-Edited-S34G001-1-.png?expiry=1694044800000&hmac=CL7opw-3im8RkqO0jVZb3upOhFiFRN4iQt3pqt0BebA)

### **Devices and desktop computers** 

Most internet users are familiar with everyday devices, such as personal computers, laptops, mobile phones, and tablets. Each device and desktop computer has a ***unique MAC address and IP address***, which identify it on the network, and a network interface that sends and receives data packets. These devices can connect to the network via a hard wire or a wireless connection.

### **Firewalls**

A **[[firewall]]** is a network security device that monitors traffic to or from your network. Firewalls can also restrict specific incoming and outgoing network traffic. The organization configures the security rules. Firewalls often reside between the secured and controlled internal network and the untrusted network resources outside the organization, such as the internet.

### **Servers** 

**[[Servers]]** provide a service for other devices on the network. The devices that connect to a server are called ***clients***. The following graphic outlines this model, which is called the client-server model. In this model, clients send requests to the server for information and services. The server performs the requests for the clients. Common examples include DNS servers that perform domain name lookups for internet sites, file servers that store and retrieve files from a database, and corporate mail servers that organize mail for a company. 

![Modelo cliente-servidor: muestra 3 dispositivos clientes enviando solicitudes y recibiendo respuestas de un servidor.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/FI4hBJhWTEyWNXoKI9EgsA_5a3867623fe5482aa3cb88b2e17fd3f1_m11tx1zMlcjG_2VzVR5QC6doDnVW9U6b0n04lmDZCi1BdjEjt-owNV78CEYLQeX_OoblVT1iYfESmwKKY7KkWUA-CB_bQXn--BroYC9c6GVbiZT1DJimU5CCOfNOz8HTQJUVivm8pNKK7NHRzv3W9INsegVffLpT23LJ2sXvgAdmHUwchtuJksNQwLqw70E?expiry=1694044800000&hmac=buKJkEWRy6WTz0rkOvuyGkzJ6_SH1JpAbR-KA-DDz7w)

### **Hubs and switches**

**[[Hub]]s** and **[[switch]]es** both direct traffic on a local network. 

A **[[hub]]** is a device that provides a common point of connection for all devices directly connected to it. Hubs additionally repeat all information out to all ports. From a security perspective, this makes hubs vulnerable to eavesdropping. For this reason, hubs are not used as often on modern networks; most organizations use switches instead.

A **[[switch]]** forwards packets between devices directly connected to it. It maintains a MAC address table that matches MAC addresses of devices on the network to port numbers on the switch and forwards incoming data packets according to the destination MAC address.

### **Routers**

**[[Routers]]** sit between networks and direct traffic, based on the IP address of the destination network. The IP address of the destination network is contained in the IP header. The router reads the header information and forwards the packet to the next router on the path to the destination. This continues until the packet reaches the destination network. 

**Routers** can also include a firewall feature that allows or blocks incoming traffic based on information in the transmission. This stops malicious traffic from entering the private network and damaging the local area network.

### **Modems and wireless access points**

**Modems**

**[[Modems]]** usually interface with an internet service provider (ISP). ISPs provide internet connectivity via telephone lines or coaxial cables. Modems receive transmissions from the internet and translate them into digital signals that can be understood by the devices on the network. Usually, modems connect to a router that takes the decoded transmissions and sends them on to the local network.

**Note:** Enterprise networks used by large organizations to connect their users and devices often use other broadband technologies to handle high-volume traffic, instead of using a modem. 

![Un módem convirtiendo datos de Internet y conectándose a un router Wi-Fi.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/5cpm9ICmSJCX3MLFfqT6kw_a636fcf868104322ad316bc98fabc3f1_S34G002.png?expiry=1694044800000&hmac=eGm3CqxmxlU9xHeaN7mmQXQ8BkB4G07cWAUQ71FBCMU)

**Wireless access point**

A **[[wireless access point]]** sends and receives digital signals over radio waves creating a wireless network. Devices with wireless adapters connect to the access point using Wi-Fi. Wi-Fi refers to a set of standards that are used by network devices to communicate wirelessly. Wireless access points and the devices connected to them use Wi-Fi protocols to send data through radio waves where they are sent to routers and switches and directed along the path to their final destination.

![Un punto de acceso inalámbrico conectado a dispositivos cableados e inalámbricos en una red.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/dI_SIruhQeuOZZVnzI6fmA_36c5e1379c0f4990a6fe0ac0c27763f1_S34G003.png?expiry=1694044800000&hmac=C4NF7CDWcPPW1UGQwlMmvNa-J8gWcaFyzmAqqXgspkg)

## Using network diagrams as a security analyst

**[[Network diagrams]]** allow network administrators and security personnel to imagine the architecture and design of their organization’s private network.

Network diagrams are topographical maps that show the devices on the network and how they connect. Network diagrams use small representative graphics to portray each network device and dotted lines to show how each device connects to the other. Security analysts use network diagrams to learn about network architecture and how to design networks. 

![Un router que se conecta a dos firewalls y crea dos zonas de seguridad separadas.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/tj5DFJGVQDuBAxqnZ_AL2w_418d88f79e794c3082881500887fa7f1_CS_R-041_-Edited-S34G004.png?expiry=1694044800000&hmac=XDQdyg9MmrlGqast2nxoy2dp5Btil2OswGvDFyAeqxs)

## Key takeaways

In the client-server model, the client requests information and services from the server, and the server performs the requests for the clients. Network devices include routers, workstations, servers, hubs, switches, and modems. Security analysts use network diagrams to visualize network architecture.
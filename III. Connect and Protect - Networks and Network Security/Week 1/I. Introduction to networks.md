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
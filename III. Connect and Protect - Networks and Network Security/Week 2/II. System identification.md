# Firewalls and network security measures

**Firewall Types:**
- **[[Firewalls]]** serve as crucial network security devices that *regulate and control traffic* to and from a network.
- They come in different types:
   - **[[Hardware Firewalls]]**: These are *physical devices dedicated to protecting a network*. Hardware firewalls carefully inspect each incoming data packet before permitting it into the network. They're often the first line of defense against threats.
   - **[[Software Firewalls]]**: Unlike hardware firewalls, software firewalls are not physical devices. They are *programs installed on individual computers* or servers within a network. These firewalls analyze incoming and outgoing traffic for each specific device they are installed on, providing protection tailored to the host.
   - **[[Cloud-Based Firewalls]]**: Cloud service providers offer **Firewalls as a Service (FaaS)** for organizations. These firewalls are *software-based and hosted by the cloud service provider*. They allow organizations to configure firewall rules through the cloud provider's interface. Cloud-based firewalls inspect all incoming traffic before it reaches the organization's onsite network. They also safeguard cloud-hosted assets and processes used by the organization.

**Firewall Functions:**
- A **[[firewall]]** plays a pivotal role in network security by controlling the flow of traffic. It evaluates incoming and outgoing data packets and makes decisions based on a predefined set of security rules. These rules can either **allow** or **block** traffic based on criteria such as source, destination, and port.
- **[[Port Filtering]]**: Firewalls often utilize port filtering to selectively permit or deny communication on specific port numbers. For instance, a firewall might allow only port 443 for secure HTTPS communication or port 25 for email, effectively blocking other ports to restrict unwanted access.

**Stateful vs. Stateless Firewalls:**
- **[[Stateful Firewalls]]**: These firewalls maintain an awareness of the state of active connections. They keep track of the state of network connections and use this information to make more informed security decisions. Stateful firewalls can proactively identify and block threats by analyzing network traffic for suspicious characteristics and behaviors.
- **[[Stateless Firewalls]]**: In contrast, stateless firewalls operate based on predefined rules and do not maintain knowledge about the state of connections. They rely solely on preconfigured rules set by a firewall administrator. These rules dictate what traffic is accepted and what is rejected. Stateless firewalls do not store analyzed information or identify trends as stateful firewalls do. Consequently, they are generally considered less secure.

**[[Next Generation Firewall (NGFW)]]:**
- An **NGFW (Next Generation Firewall)** represents an advanced evolution of traditional stateful firewalls. NGFWs *combine stateful inspection with additional, more sophisticated security features*. These features include:
   - **[[Deep Packet Inspection (DPI)]]**: NGFWs *analyze the content of data packets*, not just the packet headers. They scrutinize the actual data within packets, making it more challenging for malicious content to pass through.
   - **[[Intrusion Protection]]**: NGFWs actively *identify and prevent intrusion attempts*. They can block traffic that exhibits patterns typical of known attacks.
   - **[[Integration with Threat Intelligence]]**: Some NGFWs *connect to cloud-based threat intelligence services*. These services provide real-time threat information, allowing NGFWs to quickly update their security policies to guard against emerging cyber threats.

# Virtual Private Network (VPN)

- A **[[Virtual Private Network (VPN)]]** is a network security service designed to enhance the security and privacy of your internet connection.
- When you connect to the internet, your **[[Internet Service Provider (ISP)]]** processes your network requests and directs them to the appropriate destination server.
- However, these internet requests contain your private information, making it possible for interceptors to associate your online activities with your physical location and personal details, including sensitive data like bank accounts and credit card numbers.

**How VPNs Work**:
- A VPN performs two key functions to safeguard your online privacy:
   - **[[Changing Public IP Address]]**: It alters your public IP address, making it appear as if you are accessing the internet from a different location.
   - **[[Encryption]]**: VPNs encrypt your data as it travels over the internet, ensuring the confidentiality of your information.

**[[Encapsulation]]**:
- VPN services use a process called **[[Encapsulation]]** to protect your data. This involves wrapping sensitive data within other data packets.
- Data packets typically contain the MAC and IP addresses of the destination device in their header and footer. However, this presents a security risk, as it reveals the IP and virtual location of your private network.
- While encrypting data can secure it, it poses a problem for network routers, as they won't be able to read the IP and MAC addresses necessary to route the data to its destination.
- **[[Encapsulation]]** solves this issue by encrypting your data packets and encapsulating them in other data packets that routers can read. This ensures your network requests can reach their destination while keeping your personal data unreadable during transit.

**[[Encrypted Tunnel]]**:
- VPNs establish an encrypted tunnel between your device and the VPN server. This tunnel is impenetrable without a cryptographic key, ensuring that no one can access your data.
- With this secure tunnel, your online activities are shielded from prying eyes and malicious actors.

**Benefits of VPNs**:
- VPN services are user-friendly and provide robust protection when you're on the internet.
- They offer the assurance that your data is encrypted, and your IP address and virtual location remain hidden from potential threats.

# Security Zones

- A **[[Security Zone]]** is a network security feature that acts as a segment of a network, protecting the internal network from external threats, particularly from the internet.
- Security zones are a fundamental aspect of **[[network segmentation]]**, a security technique that divides a network into segments, each with its own access permissions and security rules.
- They control and regulate access to different segments of a network, acting as barriers that safeguard internal networks, maintain privacy within corporate groups, and prevent issues from spreading across the entire network.

**[[network segmentation]]**:
- **[[network segmentation]]** is a security practice that divides a network into segments, each with its own unique security controls and rules.
- These segments help enhance network security by controlling access and limiting the impact of security incidents.

**Example of Network Segmentation**:
- An example of network segmentation is a hotel offering both unsecured public Wi-Fi for guests and an encrypted network for hotel staff.
- Organizations often use network segmentation to create subnetworks or subnets, maintaining privacy for various departments or groups within the organization.

**Types of Security Zones**:
- An organization's network is typically classified into two types of security zones: **[[Uncontrolled Zone]]** and **[[Controlled Zone]]**.
- The **[[Uncontrolled Zone]]** refers to any network outside the organization's control, such as the internet.
- The **[[Controlled Zone]]** consists of subnets that protect the internal network from the uncontrolled zone.

**Components of the Controlled Zone**:
- Within the **[[Controlled Zone]]**, there are several types of networks, including:
   - **[[Demilitarized Zone (DMZ)]]**: The DMZ contains public-facing services that can access the internet, such as web servers, proxy servers, DNS servers, email servers, and file servers for external communications.
   - **[[Internal Network]]**: This network houses private servers and sensitive data that the organization needs to protect.
   - **[[Restricted Zone]]**: The restricted zone safeguards highly confidential information and limits access to employees with specific privileges.

**Network Defense**:
- In an ideal setup, the DMZ is positioned between two firewalls. One firewall filters traffic from outside the DMZ, while the other filters traffic entering the internal network.
- This multilayered approach provides robust protection for the internal network, preventing attacks from spreading between zones.

**Role of Security Analysts**:
- Security analysts are responsible for regulating access control policies on these firewalls.
- They can control and restrict traffic reaching the DMZ and the internal network by managing IP addresses and ports.
- For instance, an analyst may ensure that only HTTPS traffic is allowed to access web servers in the DMZ.

**Importance of Security Zones**:
- Security zones play a vital role in securing networks, particularly in large organizations.
- Understanding their function and implementation is essential for security analysts and professionals.

# Subnetting and CIDR

Earlier in this course, you learned about network segmentation, a security technique that divides networks into sections. A private network can be segmented to protect portions of the network from the internet, which is an unsecured global network. 

For example, you learned about the uncontrolled zone, the controlled zone, the demilitarized zone, and the restricted zone. Feel free to review the video about [security zones](https://www.coursera.org/learn/networks-and-network-security/lecture/GccYm/security-zones)for a refresher on how network segmentation can be used to add a layer of security to your organization’s network operations. Creating security zones is one example of a networking strategy called subnetting.

## Overview of subnetting

**[[Subnetting]]** is the subdivision of a network into logical groups called subnets. It works like a network inside a network. Subnetting divides up a network address range into smaller subnets within the network. These smaller subnets form based on the IP addresses and network mask of the devices on the network. Subnetting creates a network of devices to function as their own network. This makes the network more efficient and can also be used to create security zones. If devices on the same subnet communicate with each other, the switch changes the transmissions to stay on the same subnet, improving speed and efficiency of the communications.

![Dos subredes para dos redes conectadas a un router.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/vzbgwk8-RoCJ8Ppet89raA_1a225a330b8b4eaeb4a2b8bc5baaaef1_qvNCswL7ECbUiKTyL6rjp35BTSD-bbfoAoajmAyy4hHvmBJwwr22RU8T5aGDunmwKb1kvZ5TneMbG-nngVlkPXF6W-BTMap_a6XP-kAy5jgW13XvT5OTSCmI7U9YVNX4JzC1qn-zCkiZSXhbKjm2zq7SESzmANYH17_p4jub1mNikwElbJZECK0VuM_4Yrwljgfgdx2VpNad7gx2lFHMiu01wfeRKp-sjRa_kQ?expiry=1694390400000&hmac=4yuKH4_zm-Xrqh2-YaaeJGR1Y2Tqm4UMbeA6uBGdEAY)

## Classless Inter-Domain Routing notation for subnetting

**[[Classless Inter-Domain Routing (CIDR)]]** is a method of assigning subnet masks to IP addresses to create a subnet. Classless addressing replaces classful addressing. **[[Classful addressing]]** was used in the 1980s as a system of grouping IP addresses into classes (Class A to Class E). Each class included a limited number of IP addresses, which were depleted as the number of devices connecting to the internet outgrew the classful range in the 1990s. Classless CIDR addressing expanded the number of available IPv4 addresses. 

**CIDR** allows cybersecurity professionals to segment classful networks into smaller chunks. CIDR IP addresses are formatted like IPv4 addresses, but they include a slash (“/’”) followed by a number at the end of the address, This extra number is called the **[[IP network prefix]]**.  For example, a regular IPv4 address uses the 198.51.100.0 format, whereas a CIDR IP address would include the IP network prefix at the end of the address, 198.51.100.0/24. This CIDR address encompasses all IP addresses between 198.51.100.0 and 198.51.100.255. The system of CIDR addressing reduces the number of entries in routing tables and provides more available IP addresses within networks. You can try converting CIDR to IPv4 addresses and vice versa through an online conversion tool, like [IPAddressGuide](https://www.ipaddressguide.com/cidr), for practice and to better understand this concept.

**Note:** You may learn more about CIDR during your career, but it won't be covered in any additional depth in this certificate program. For now, you only need a basic understanding of this concept.

## Security benefits of subnetting

**[[Subnetting]]** allows network professionals and analysts to create a network within their own network without requesting another network IP address from their internet service provider. This process uses network bandwidth more efficiently and improves network performance. 

Subnetting is one component of creating isolated subnetworks through physical isolation, routing configuration, and firewalls.

## Key takeaways

Subnetting is a common security strategy used by organizations. Subnetting allows organizations to create smaller networks within their private network. This improves the efficiency of the network and can be used to create security zones.

# Proxy servers

- A **[[Proxy Server]]** is a network security system that serves as an intermediary between a client and other servers on the internet.
- It fulfills client requests by forwarding them to their intended destinations, enhancing security and privacy.
- The proxy server is a dedicated server positioned between the internet and the organization's internal network.

**Proxy Server's Role in Network Security**:
- When an external request to connect to the network arrives, the proxy server acts as the gatekeeper, assessing the safety of the connection request.
- It uses a public IP address distinct from the internal network's IP addresses, effectively concealing the organization's network from potential threats on the internet.

**Use of Proxy Servers**:
- **[[Proxy servers]]** can obfuscate the IP addresses of an organization's web servers in responses, improving security.
- They are employed to block access to unsafe websites, restricting user access based on an organization's policies.
- To enhance performance and security, **[[Proxy servers]]** cache frequently requested data temporarily, reducing the need for repeated access to internal servers.

**Types of Proxy Servers**:
- **[[Forward Proxy Server]]**: This type is primarily used to control and restrict internet access for individuals. It hides users' IP addresses and validates outgoing requests. In organizational settings, it processes outgoing traffic from employees and forwards it to the internet.
- **[[Reverse Proxy Server]]**: The reverse proxy server is responsible for regulating and controlling external access to internal servers. It approves traffic from external sources and forwards it to internal servers, protecting them from exposing their IP addresses.
- **[[Email Proxy Server]]**: An email proxy server is a valuable tool for filtering spam emails and verifying the authenticity of sender addresses. It reduces the risk of phishing attacks that impersonate individuals within the organization.

**Real-World Example - Email Proxy**:
- A practical application of an email proxy server is illustrated. It was used at a large U.S. broadband ISP to implement robust anti-spam filtering, tagging a significant portion of incoming emails as spam before allowing them for delivery.
- The use of **[[Proxy servers]]** enabled efficient spam filtering without affecting the underlying email platform.

**Significance in Network Security**:
- **[[Proxy servers]]** play a pivotal role in network security by filtering both incoming and outgoing traffic. They remain vigilant for potential network attacks, adding an essential layer of protection against threats originating from the unsecured public network, commonly known as the internet.

# Virtual networks and privacy

This section of the course covered a lot of information about network operations. You reviewed the fundamentals of network architecture and communication and can now use this knowledge as you learn how to secure networks. Securing a private network requires maintaining the confidentiality of your data and restricting access to authorized users.

In this reading, you will review several network security topics previously covered in the course, including virtual private networks (VPNs), proxy servers, firewalls, and security zones. You'll continue to learn more about these concepts and how they relate to each other as you continue through the course.

## **Common network protocols**  

Network protocols are used to direct traffic to the correct device and service depending on the kind of communication being performed by the devices on the network. **[[Protocols]]** are the rules used by all network devices that provide a mutually agreed upon foundation for how to transfer data across a network.

There are three main categories of network protocols: communication protocols, management protocols, and security protocols. 

1. **[[Communication protocols]]** are used to establish connections between servers. Examples include TCP, UDP, and Simple Mail Transfer Protocol (SMTP), which provides a framework for email communication. 
2. **[[Management protocols]]** are used to troubleshoot network issues. One example is the Internet Control Message Protocol (ICMP).
3. **[[Security protocols]]** provide encryption for data in transit. Examples include IPSec and SSL/TLS.

Some other commonly used protocols are:

- **[[HyperText Transfer Protocol (HTTP)]]**. HTTP is an application layer communication protocol. This allows the browser and the web server to communicate with one another. 
- **[[Domain Name System (DNS)]]**. DNS is an application layer protocol that translates, or maps, host names to IP addresses.
- **[[Address Resolution Protocol (ARP)]]**. ARP is a network layer communication protocol that maps IP addresses to physical machines or a MAC address recognized on the local area network.

## **Wi-Fi**

This section of the course also introduced various wireless security protocols, including WEP, WPA, WPA2, and WPA3. WPA3 encrypts traffic with the Advanced Encryption Standard (AES) cipher as it travels from your device to the wireless access point. WPA2 and WPA3 offer two modes: personal and enterprise. Personal mode is best suited for home networks while enterprise mode is generally utilized for business networks and applications.

## **Network security tools and practices**  

### **Firewalls** 

Previously, you learned that **[[firewalls]]** are network virtual appliances (NVAs) or hardware devices that inspect and can filter network traffic before it’s permitted to enter the private network. Traditional firewalls are configured with rules that tell it what types of data packets are allowed based on the port number and IP address of the data packet. 

There are two main categories of firewalls.

- **[[Stateless]]:** A class of firewall that operates based on predefined rules and does not keep track of information from data packets
- **[[Stateful]]:** A class of firewall that keeps track of information passing through it and proactively filters out threats. Unlike stateless firewalls, which require rules to be configured in two directions, a stateful firewall only requires a rule in one direction. This is because it uses a "state table" to track connections, so it can match return traffic to an existing session 

**[[Next generation firewalls (NGFWs)]]** are the most technologically advanced firewall protection. They exceed the security offered by stateful firewalls because they include deep packet inspection (a kind of packet sniffing that examines data packets and takes actions if threats exist) and intrusion prevention features that detect security threats and notify firewall administrators. NGFWs can inspect traffic at the application layer of the TCP/IP model and are typically application aware. Unlike traditional firewalls that block traffic based on IP address and ports, NGFWs rules can be configured to block or allow traffic based on the application. Some NGFWs have additional features like Malware Sandboxing, Network Anti-Virus, and URL and DNS Filtering.  

### **Proxy servers** 

A **[[proxy server]]** is another way to add security to your private network. Proxy servers utilize network address translation (NAT) to serve as a barrier between clients on the network and external threats. Forward proxies handle queries from internal clients when they access resources external to the network. Reverse proxies function opposite of forward proxies; they handle requests from external systems to services on the internal network. Some proxy servers can also be configured with rules, like a firewall.  For example, you can create filters to block websites identified as containing malware.

### **[[Virtual Private Networks (VPN)]]**

A VPN is a service that encrypts data in transit and disguises your IP address. VPNs use a process called encapsulation. [[Encapsulation]] wraps your encrypted data in an unencrypted data packet, which allows your data to be sent across the public network while remaining anonymous. Enterprises and other organizations use VPNs to help protect communications from users’ devices to corporate resources. Some of these resources include connecting to servers or virtual machines that host business applications. VPNs can also be used for personal use to increase personal privacy. They allow the user to access the internet without anyone being able to read their personal information or access their private IP address. Organizations are increasingly using a combination of VPN and SD-WAN capabilities to secure their networks. A software-defined wide area network (SD-WAN) is a virtual WAN service that allows organizations to securely connect users to applications across multiple locations and over large geographical distances. 

### **Key takeaways**

There are three main categories of network protocols: communication, management, and security protocols. In this reading, you learned the fundamentals of firewalls, proxy servers, and VPNs. More organizations are implementing a cloud-based approach to network security by incorporating a combination of VPN and SD-WAN capabilities as a service.

# VPN protocols: Wireguard and IPSec

A VPN, or virtual private network, is a network security service that changes your public IP address and hides your virtual location so that you can keep your data private when you’re using a public network like the internet. VPNs provide a server that acts as a gateway between a computer and the internet. This server creates a path similar to a virtual tunnel that hides the computer’s IP address and encrypts the data in transit to the internet. The main purpose of a VPN is to create a secure connection between a computer and a network. Additionally, a VPN allows trusted connections to be established on non-trusted networks. VPN protocols determine how the secure network tunnel is formed. Different VPN providers provide different VPN protocols.

This reading will cover the differences between remote access and site-to-site VPNs, and two VPN protocols: WireGuard VPN and IPSec VPN. A VPN protocol is similar to a network protocol: It’s a set of rules or instructions that will determine how data moves between endpoints. An endpoint is any device connected on a network. Some examples of endpoints include computers, mobile devices, and servers.

## Remote access and site-to-site VPNs

Individual users use **[[remote access VPNs]]** to establish a connection between a personal device and a VPN server. Remote access VPNs encrypt data sent or received through a personal device. The connection between the user and the remote access VPN is established through the internet.

Enterprises use **[[site-to-site VPNs]]** largely to extend their network to other networks and locations. This is particularly useful for organizations that have many offices across the globe. **[[IPSec]]** is commonly used in site-to-site VPNs to create an encrypted tunnel between the primary network and the remote network. One disadvantage of site-to-site VPNs is how complex they can be to configure and manage compared to remote VPNs.

## WireGuard VPN vs. IPSec VPN

**[[WireGuard]]** and **[[IPSec]]** are two different VPN protocols used to encrypt traffic over a secure network tunnel. The majority of VPN providers offer a variety of options for VPN protocols, such as WireGuard or IPSec. Ultimately, choosing between IPSec and WireGuard depends on many factors, including connection speeds, compatibility with existing network infrastructure, and business or individual needs.

### WireGuard VPN

**[[WireGuard]]** is a high-speed VPN protocol, with advanced encryption, to protect users when they are accessing the internet. It’s designed to be simple to set up and maintain. WireGuard can be used for both site-to-site connection and client-server connections. WireGuard is relatively newer than IPSec, and is used by many people due to the fact that its download speed is enhanced by using fewer lines of code. WireGuard is also open source, which makes it easier for users to deploy and debug. This protocol is useful for processes that require faster download speeds, such as streaming video content or downloading large files.

### IPSec VPN

**[[IPSec]]** is another VPN protocol that may be used to set up VPNs. Most VPN providers use IPSec to encrypt and authenticate data packets in order to establish secure, encrypted connections. Since IPSec is one of the earlier VPN protocols, many operating systems support IPSec from VPN providers.

Although IPSec and WireGuard are both VPN protocols, IPSec is older and more complex than WireGuard. Some clients may prefer IPSec due to its longer history of use, extensive security testing, and widespread adoption. However, others may prefer WireGuard because of its potential for better performance and simpler configuration.

## Key Takeaways

A VPN protocol is similar to a network protocol: It’s a set of rules or instructions that will determine how data moves between endpoints. There are two types of VPNs: remote access and site-to-site. Remote access VPNs establish a connection between a personal device and a VPN server and encrypt or decrypt data exchanged with a personal device. Enterprises use site-to-site VPNs largely to extend their network to different locations and networks. IPSec can be used to create site-to-site connections and WireGuard can be used for both site-to-site and remote access connections.
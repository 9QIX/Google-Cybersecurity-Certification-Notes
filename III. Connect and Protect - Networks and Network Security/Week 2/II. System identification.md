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
- To enhance performance and security, **[[Proxy Servers]]** cache frequently requested data temporarily, reducing the need for repeated access to internal servers.

**Types of Proxy Servers**:
- **[[Forward Proxy Server]]**: This type is primarily used to control and restrict internet access for individuals. It hides users' IP addresses and validates outgoing requests. In organizational settings, it processes outgoing traffic from employees and forwards it to the internet.
- **[[Reverse Proxy Server]]**: The reverse proxy server is responsible for regulating and controlling external access to internal servers. It approves traffic from external sources and forwards it to internal servers, protecting them from exposing their IP addresses.
- **[[Email Proxy Server]]**: An email proxy server is a valuable tool for filtering spam emails and verifying the authenticity of sender addresses. It reduces the risk of phishing attacks that impersonate individuals within the organization.

**Real-World Example - Email Proxy**:
- A practical application of an email proxy server is illustrated. It was used at a large U.S. broadband ISP to implement robust anti-spam filtering, tagging a significant portion of incoming emails as spam before allowing them for delivery.
- The use of **[[Proxy Servers]]** enabled efficient spam filtering without affecting the underlying email platform.

**Significance in Network Security**:
- **[[Proxy Servers]]** play a pivotal role in network security by filtering both incoming and outgoing traffic. They remain vigilant for potential network attacks, adding an essential layer of protection against threats originating from the unsecured public network, commonly known as the internet.



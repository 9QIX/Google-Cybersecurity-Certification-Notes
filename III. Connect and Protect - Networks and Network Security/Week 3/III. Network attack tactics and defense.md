# Malicious packet sniffing

**[[Packet sniffing]]** is a network surveillance technique that involves the use of software tools to *intercept and inspect data packets as they travel across a network*. This practice can be employed for various purposes, both legitimate and malicious. In this discussion, we will delve into the details of packet sniffing, its applications, and the potential threats associated with it.

**[[Data Packets]]:**
Before diving into packet sniffing, it's essential to understand the structure of data packets. Data packets are fundamental units of information exchanged over a network. Each packet consists of a header and a body:
- **[[Header]]:** Contains *essential information such as the sender's and receiver's IP addresses*. This information is crucial for routing the packet to its intended destination.
- **[[Body]]:** Contains the *actual data being transmitted*, which may include sensitive information like names, date of birth, personal messages, financial data, and credit card numbers.

**Packet Sniffing in Security Analysis:**
Security analysts often use packet sniffing as a legitimate practice to analyze and capture packets when investigating network incidents or troubleshooting network issues. It helps them gain insights into the flow of data and identify anomalies or security breaches.

**Malicious Use of Packet Sniffing:**
However, malicious actors can also employ packet sniffing to gain unauthorized access to sensitive information. They may:
- **Intercept Data:** Malicious actors may insert themselves between two devices in an authorized connection and intercept data packets as they pass through. This interception allows them to access and potentially modify the data.
- **Data Manipulation:** Attackers can use software applications or hardware devices as packet sniffers to manipulate the content of data packets. For example, altering a recipient's bank account number can lead to financial fraud.
- **Passive vs. Active Packet Sniffing:** Packet sniffing can be categorized into passive and active forms. **[[Passive packet sniffing]]** involves the unauthorized reading of data packets in transit, much like a postal worker reading someone's mail. **[[Active packet sniffing]]** includes manipulating data packets in transit, which is akin to a neighbor changing the contents of a letter before delivering it.

**Preventing Malicious Packet Sniffing:**
Network security professionals have several methods to prevent malicious packet sniffing:
- **VPN Usage:** Employing a Virtual Private Network (VPN) can encrypt and protect data as it travels across the network. This encryption makes it challenging for malicious actors to decode and access private information.
- **HTTPS:** Ensuring that websites use HTTPS (HyperText Transfer Protocol Secure) helps protect data by encrypting it using SSL/TLS (Secure Sockets Layer/Transport Layer Security). This prevents eavesdropping on network transmissions.
- **Avoid Unprotected WiFi:** Public WiFi networks in places like coffee shops, restaurants, and airports are often unprotected, making them vulnerable to packet sniffing. To mitigate this risk, users can avoid connecting to such networks unless they have a VPN service installed on their devices.

By understanding the techniques and motivations behind packet sniffing, network professionals can take proactive steps to safeguard their data and networks from potential threats. Additionally, implementing security measures such as VPNs and HTTPS can significantly enhance data protection in an increasingly interconnected world.

# IP Spoofing

**[[IP spoofing]]** is a network attack technique in which an *attacker manipulates the source IP address of a data packet to impersonate an authorized system or gain unauthorized access to a network*. This deceptive practice allows the attacker to pose as someone else, enabling them to communicate over the network and potentially bypass firewall rules that restrict outside traffic. To understand IP spoofing comprehensively, we will explore its various aspects, common attack types, and protective measures.

**IP Spoofing Attack Overview:**
In an IP spoofing attack, the malicious actor disguises their true identity by altering the source IP address of a data packet. This deceitful act serves two primary purposes:
- **[[Impersonation]]:** The attacker pretends to be a legitimate user or system to deceive the target computer or network into accepting their traffic.
- **[[Firewall Bypass]]:** By spoofing an authorized IP address, the attacker can circumvent firewall rules that might otherwise block their access to the network.

**Common IP Spoofing Attack Types:**
1. **[[On-Path Attacks]]:** On-path attacks involve the malicious actor *positioning themselves between two devices engaged in an authorized connection*. This intermediary position allows them to intercept and potentially modify data packets in transit. By sniffing packet information, *attackers can learn the IP and MAC addresses of communicating devices*, enabling them to impersonate either of these devices.
2. **[[Replay Attacks]]:** In a replay attack, the malicious actor intercepts a data packet in transit and either *delays its transmission or repeats it at a later time*. Delayed packets can disrupt connections between target computers. Alternatively, the attacker might replay a network transmission originally sent by an authorized user to impersonate that user.
3. **[[Smurf Attacks]]:** A smurf attack *combines Distributed Denial of Service (DDoS) techniques with IP spoofing. Here*, the attacker sniffs an authorized user's IP address and floods it with numerous packets. This overwhelming volume of traffic can effectively bring down a server or even an entire network.

**Protecting Against IP Spoofing:**
Mitigating the risk of IP spoofing attacks is crucial for network security. Here are some protective measures:
- **[[Encryption]]:** As previously emphasized, implementing encryption is essential. Encryption ensures that data transferred over the network is unreadable to malicious actors, even if they manage to intercept it.
- **[[Firewall Configuration]]:** Firewalls can be configured to guard against IP spoofing. By monitoring incoming packets, a firewall can detect IP spoofing attempts. If a packet arrives with a sender's IP address matching that of the private network, it can be denied since devices with that IP address should already belong to the local network. Administrators can establish rules to reject incoming traffic with IP addresses identical to the local network.

Understanding the nuances of IP spoofing and its associated attacks equips network professionals with the knowledge needed to bolster network security. By implementing encryption, configuring firewalls effectively, and staying vigilant against potential spoofing attempts, organizations can significantly reduce the risk of falling victim to these malicious activities.

# Overview of interception tactics

In the previous course items, you learned how packet sniffing and IP spoofing are used in network attacks. Because these attacks intercept data packets as they travel across the network, they are called interception attacks.

This reading will introduce you to some specific attacks that use packet sniffing and IP spoofing. You will learn how hackers use these tactics and how security analysts can counter the threat of interception attacks.

## A closer review of packet sniffing 

As you learned in a previous video, **packet sniffing** is the practice of capturing and inspecting data packets across a network. On a private network, data packets are directed to the matching destination device on the network. 

The device’s Network Interface Card (NIC) is a piece of hardware that connects the device to a network. The NIC reads the data transmission, and if it contains the device’s MAC address, it accepts the packet and sends it to the device to process the information based on the protocol. This occurs in all standard network operations. However, a NIC can be set to promiscuous mode, which means that it accepts all traffic on the network, even the packets that aren’t addressed to the NIC’s device. You’ll learn more about NIC’s later in the program. Malicious actors might use software like Wireshark to capture the data on a private network and store it for later use. They can then use the personal information to their own advantage. Alternatively, they might use the IP and MAC addresses of authorized users of the private network to perform IP spoofing.

## A closer review of IP spoofing 

After a malicious actor has sniffed packets on the network, they can impersonate the IP and MAC addresses of authorized devices to perform an IP spoofing attack. Firewalls can prevent IP spoofing attacks by configuring it to refuse unauthorized IP packets and suspicious traffic. Next, you’ll examine a few common IP spoofing attacks that are important to be familiar with as a security analyst.

### 1. **On-path attack**

An **[[on-path attacks]]** happens when a hacker intercepts the communication between two devices or servers that have a trusted relationship. The transmission between these two trusted network devices could contain valuable information like usernames and passwords that the malicious actor can collect. An on-path attack is sometimes referred to as a **[[meddler-in-the middle attack]]** because the hacker is hiding in the middle of communications between two trusted parties.

Or, it could be that the intercepted transmission contains a DNS system look-up. You’ll recall from an earlier video that a DNS server translates website domain names into IP addresses. If a malicious actor intercepts a transmission containing a DNS lookup, they could spoof the DNS response from the server and redirect a domain name to a different IP address, perhaps one that contains malicious code or other threats. The most important way to protect against an on-path attack is to encrypt your data in transit, e.g. using TLS.

### 2. **Smurf attack**

A **[[smurf attacks]]** is a network attack that is performed when an attacker sniffs an authorized user’s IP address and floods it with packets. Once the spoofed packet reaches the broadcast address, it is sent to all of the devices and servers on the network. 

In a smurf attack, IP spoofing is combined with another denial of service (DoS) technique to flood the network with unwanted traffic. For example, the spoofed packet could include an Internet Control Message Protocol (ICMP) ping. As you learned earlier, ICMP is used to troubleshoot a network. But if too many ICMP messages are transmitted, the ICMP echo responses overwhelm the servers on the network and they shut down. This creates a denial of service and can bring an organization’s operations to a halt.

An important way to protect against a smurf attack is to use an advanced firewall that can monitor any unusual traffic on the network. Most next generation firewalls (NGFW) include features that detect network anomalies to ensure that oversized broadcasts are detected before they have a chance to bring down the network.

### 3. **DoS attack**

As you’ve learned, once the malicious actor has sniffed the network traffic, they can impersonate an authorized user. A **Denial of Service attack** is a class of attacks where the attacker prevents the compromised system from performing legitimate activity or responding to legitimate traffic. Unlike IP spoofing, however, the attacker will not receive a response from the targeted host. Everything about the data packet is authorized including the IP address in the header of the packet. In IP spoofing attacks, the malicious actor uses IP packets containing fake IP addresses. The attackers keep sending IP packets containing fake IP addresses until the network server crashes.

**Pro Tip**: Remember the principle of defense-in-depth. There isn’t one perfect strategy for stopping each kind of attack. You can layer your defense by using multiple strategies. In this case, using industry standard encryption will strengthen your security and help you defend from DoS attacks on more than one level. 

## Key takeaways

This reading covered several types of common IP spoofing attacks. You learned about how packet sniffing is performed and how gathering information from intercepting data transmissions can give malicious actors opportunities for IP spoofing. Whether it is an on-path attack, IP spoofing attack, or a smurf attack, analysts need to ensure that mitigation strategies are in place to limit the threat and prevent security breaches.

# Identify: Network attacks

- **[[Denial of service attack (DoS)]]** - A network attack that targets a network or server and floods it with network traffic
- **[[Distributed denial of service attack (DDoS)]]** - A type of denial or service attack that uses multiple devices or servers in different locations to flood the target network with unwanted traffic
- **[[SYN flood attack]]** - A type of DoS attack that simulates a TCP/IP connection and floods a server with SYN packets
- **[[Packet sniffing]]** - The practice of capturing and inspecting data packets across a network
- **[[IP spoofing]]** - A network attack performed when an attacker changes the source IP of a data packet to impersonate an authorized system and gain access to a network
- **[[On-path attack]]** - An attack where a malicious actor places themselves in the middle of an authorized connection and intercepts or alters the data in transit
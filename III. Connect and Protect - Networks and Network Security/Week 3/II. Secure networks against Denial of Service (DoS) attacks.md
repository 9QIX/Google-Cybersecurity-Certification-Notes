# Denial of Service (DoS) attacks

**[[Denial of Service (DoS) Attack]]**:
- A **Denial of Service (DoS) Attack** is a malicious attack that targets a network or server by overwhelming it with excessive network traffic.
- The primary objective of a DoS attack is to disrupt normal business operations by overloading the organization's network.
- The result of a successful attack is that the network device or server becomes unresponsive to legitimate user requests.
- Such disruptions can cost organizations time and money and leave them vulnerable to other security threats.

**[[Distributed Denial of Service (DDoS) Attack]]**:
- A **Distributed Denial of Service (DDoS) Attack** is a subtype of DoS attack that employs multiple devices or servers located in different locations to flood the target network with unwanted traffic.
- The use of numerous devices increases the likelihood of overwhelming the target server.
- In a DDoS attack, the combined volume of traffic from multiple sources can cripple the target's ability to function.
  
  An unfortunate example I've seen is an attacker who crafted a very careful packet that caused a router to spend extra time processing the request. The overall traffic volume didn't overload the router; the specifics within the packet did. 

## Network level DoS attacks that target network bandwidth

**[[SYN Flood Attack]]**:
- A **SYN Flood Attack** is a specific type of DoS attack that simulates the TCP connection handshake process and floods the server with SYN packets.
- During the TCP handshake, a device sends a SYN (synchronize) request to the server, which responds with a SYN/ACK packet.
- Malicious actors flood the server with SYN requests, aiming to exceed the available ports on the server and render it overwhelmed and unresponsive.

**[[ICMP Flood Attack]]**:
- An **ICMP Flood Attack** is another type of DoS attack where attackers repeatedly send ICMP (Internet Control Message Protocol) packets to a network server.
- ICMP is used by devices to report data transmission errors across the network.
- Attackers force the server to send ICMP packets in response, eventually depleting all incoming and outgoing bandwidth, causing the server to crash.

**[[Ping of Death Attack]]**:
- A **Ping of Death Attack** is a DoS attack where hackers send oversized ICMP packets (larger than 64 kilobytes, the maximum size for a correctly formed ICMP packet) to a vulnerable network server.
- The oversized ICMP packet overloads the system, causing it to crash.
- This attack analogy is likened to dropping a large rock on an anthill, where individual ants can carry a certain amount of weight, but a large rock crushes many ants, rendering the colony unable to function until it rebuilds.

# Read tcpdump logs

A **[[network protocol analyzer]]**, sometimes called a **packet sniffer or a packet analyzer**, is a *tool designed to capture and analyze data traffic within a network*. They are commonly used as investigative tools to monitor networks and identify suspicious activity. There are a wide variety of network protocol analyzers available, but some of the most common analyzers  include:

- SolarWinds NetFlow Traffic Analyzer
- ManageEngine OpManager
- Azure Network Watcher
- Wireshark
- tcpdump

This reading will focus exclusively on tcpdump, though you can apply what you learn here to many of the other network protocol analyzers you'll use as a cybersecurity analyst to defend against any network intrusions. In an upcoming activity, you’ll review a tcpdump data traffic log and identify a DoS attack to practice these skills.

## tcpdump 

**[[tcpdump]]** is a command-line *network protocol analyzer*. It is popular, lightweight–meaning it uses little memory and has a low CPU usage–and uses the open-source libpcap library. tcpdump is text based, meaning all commands in tcpdump are executed in the terminal. It can also be installed on other Unix-based operating systems, such as macOS®. It is preinstalled on many Linux distributions.

tcpdump provides a brief packet analysis and *converts key information about network traffic into formats easily read by humans*. It prints information about each packet directly into your terminal. tcpdump also displays the source IP address, destination IP addresses, and the port numbers being used in the communications.

## Interpreting output

[[tcpdump]] prints the output of the command as the sniffed packets in the command line, and optionally to a log file, after a command is executed. The output of a packet capture contains many pieces of important information about the network traffic. 

![Tipos de información presentados en una captura de paquetes tcpdump.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/B-PaECh0ToSFgBWpFczYZg_4896abe8c06443f08eec4dc003dcf8f1_image.png?expiry=1694476800000&hmac=ElB0J6NaT5AvUNAgzQlLb5I0h1yiU3RF8qifY5Tpuhw)

Some information you receive from a packet capture includes: 

- **[[Timestamp]]**: The output begins with the timestamp, formatted as hours, minutes, seconds, and fractions of a second.  
- **[[Source IP]]**: The packet’s origin is provided by its source IP address.
- **[[Source port]]**: This port number is where the packet originated.
- **[[Destination IP]]**: The destination IP address is where the packet is being transmitted to.
- **[[Destination port]]**: This port number is where the packet is being transmitted to.

**Note:** By default, tcpdump will attempt to resolve host addresses to hostnames. It'll also replace port numbers with commonly associated services that use these ports.

## Common uses

tcpdump and other network protocol analyzers are commonly used to capture and view network communications and to collect statistics about the network, such as troubleshooting network performance issues. They can also be used to:

- Establish a baseline for network traffic patterns and network utilization metrics.
- Detect and identify malicious traffic
- Create customized alerts to send the right notifications when network issues or security threats arise.
- Locate unauthorized instant messaging (IM), traffic, or wireless access points.

However, attackers can also use network protocol analyzers maliciously to gain information about a specific network. For example, attackers can capture data packets that contain sensitive information, such as account usernames and passwords. As a cybersecurity analyst, It’s important to understand the purpose and uses of network protocol analyzers. 

## Key takeaways

Network protocol analyzers, like tcpdump, are common tools that can be used to monitor network traffic patterns and investigate suspicious activity. tcpdump is a command-line network protocol analyzer that is compatible with Linux/Unix and macOS®. When you run a tcpdump command, the tool will output packet routing information, like the timestamp, source IP address and port number, and the destination IP address and port number. Unfortunately, attackers can also use network protocol analyzers to capture data packets that contain sensitive information, such as account usernames and passwords.

# Real-life DDoS attack

Previously, you were introduced to **[[Denial of Service (DoS)]]** attacks. You also learned that volumetric distributed DoS (DDoS) attacks overwhelm a network by sending unwanted data packets in such large quantities that the servers become unable to service normal users. This can be detrimental to an organization. When systems fail, organizations cannot meet their customers' needs. They often lose money, and in some cases, incur other losses. An organization’s reputation may also suffer if news of a successful DDoS attack reaches consumers, who then question the security of the organization.

In this reading you’ll learn about a 2016 DDoS attack against DNS servers that caused major outages at multiple organizations that have millions of daily users. 

## A DDoS targeting a widely used DNS server 

In previous videos, you learned about the function of a DNS server. As a review, DNS servers translate website domain names into the IP address of the system that contains the information for the website. For instance, if a user were to type in a website URL, a DNS server would translate that into a numeric IP address that directs network traffic to the location of the website’s server. 

On the day of the DDoS attack we are studying, many large companies were using a DNS service provider. The service provider was hosting the DNS system for these companies. This meant that when internet users typed in the URL of the website they wanted to access, their devices would be directed to the right place. On October 21, 2016, the service provider was the victim of a DDoS attack.

## Leading up to the attack

Before the attack on the service provider, a group of university students created a botnet with the intention to attack various gaming servers and networks. A **[[botnet]]** is a collection of computers infected by malware that are under the control of a single threat actor, known as the “**bot-herder**." Each computer in the botnet can be remotely controlled to send a data packet to a target system. In a botnet attack, cyber criminals instruct all the bots on the botnet to send data packets to the target system at the same time, resulting in a DDoS attack.

The group of university students posted the code for the botnet online so that it would be accessible to thousands of internet users and authorities wouldn’t be able to trace the botnet back to the students. In doing so, they made it possible for other malicious actors to learn the code to the botnet and control it remotely. This included the cyber criminals who attacked the DNS service provider.

## The day of attack

At 7:00 a.m. on the day of the attack, the botnet sent tens of millions of DNS requests to the service provider. This overwhelmed the system and the DNS service shut down. This meant that all of the websites that used the service provider could not be reached. When users tried to access various websites that used the service provider, they were not directed to the website they typed in their browser. Outages for each web service occurred all over North America and Europe. 

The service provider’s systems were restored after only two hours of downtime. Although the cyber criminals sent subsequent waves of botnet attacks, the DNS company was prepared and able to mitigate the impact.

## Key takeaways

As demonstrated in the above example, DDoS attacks can be very damaging to an organization. As a security analyst, it’s important to acknowledge the seriousness of such an attack so that you’re aware of opportunities to protect the network from them. If your network has important operations distributed across hosts that can be dynamically scaled, then operations can continue if the baseline host infrastructure goes offline. DDoS attacks are damaging, but there are concrete actions that security analysts can take to help protect their organizations. Keep going through this course and you will learn about common mitigation strategies to protect against DDoS attacks.
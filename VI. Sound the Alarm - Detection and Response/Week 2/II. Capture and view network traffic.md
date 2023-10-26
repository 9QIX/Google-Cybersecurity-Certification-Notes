# Packets and packet captures

- **[[Network Packets]]:** Network communications are divided into packets, which contain delivery information, including sender and receiver IP addresses, packet type, and more. Each packet consists of a 
	- **[[Header]]**: which includes information like the type of network protocol and port being used. Imagine this as being the name and mailing address located on an envelope. Network protocols are a set of rules that determine the transmission of data between devices on a network. Ports are non-physical locations on a computer that organize data transmission between devices on a network. The header also contains the packet's source and destination IP address. We'll explore more information contained in the header in a later section.
	- **[[Payload]]**: which contains the actual data that's being delivered. This is like the content of a letter inside of an envelope. And there's the footer, which signifies the end of the packet.
	- **[[Footer]]**: signifies the end of the packet.
- **Packet Sniffers:** Packet sniffers, also known as **[[network protocol analyzer]]**, are tools designed to capture and analyze data traffic within a network. Security analysts use packet sniffers to inspect packets for indicators of compromise.
- **[[Packet Capture]]:** Through packet sniffing, detailed snapshots of packets that travel over a network are captured in the form of a packet capture (P-cap) file. These captures are files containing intercepted data packets, much like intercepting an envelope in the mail.
- **Incident Investigation:** Packet captures are invaluable during incident investigations. They allow security professionals to access and observe the communications happening between devices over a network. This information helps in understanding network interactions and building a storyline to determine the events that occurred.

The video emphasizes the importance of packet analysis in network security and how packet captures provide security analysts with a powerful tool to investigate incidents and analyze network activities. This knowledge is vital for security professionals looking to defend against threats and monitor network traffic effectively.

# Learn more about packet captures

The role of security analysts involves monitoring and analyzing network traffic flows. One way to do this is by generating packet captures and then analyzing the captured traffic to identify unusual activity on a network.

Previously, you explored the fundamentals of networks. Throughout this section, you’ll refer to your foundation in networking to better understand network traffic flows. In this reading, you'll learn about the three main aspects of network analysis: packets, network protocol analyzers, and packet captures.

## [[Packets]]

Previously in the program, you learned that a **[[data packet]]** is a basic unit of information that travels from one device to another within a network. Detecting network intrusions begins at the packet level. That's because packets form the basis of information exchange over a network. Each time you perform an activity on the internet—like visiting a website—packets are sent and received between your computer and the website’s server. These packets are what help transmit information through a network. For example, when uploading an image to a website, the data gets broken up into multiple packets, which then get routed to the intended destination and reassembled upon delivery. 

In cybersecurity, packets provide valuable information that helps add context to events during investigations. Understanding the transfer of information through packets will not only help you develop insight on network activity, it will also help you identify abnormalities and better defend networks from attacks.

Packets contain three components: the header, the payload, and the footer. Here’s a description of each of these components.

### **[[Header]]**

Packets begin with the most essential component: the header. Packets can have several headers depending on the protocols used such as an Ethernet header, an IP header, a TCP header, and more. Headers provide information that’s used to route packets to their destination. This includes information about the source and destination IP addresses, packet length, protocol, packet identification numbers, and more.

Here is an IPv4 header with the information it provides:
![[Pasted image 20231025211427.png]]
### **[[Payload]]**

The payload component directly follows the header and contains the actual data being delivered. Think back to the example of uploading an image to a website; the payload of this packet would be the image itself.

### **[[Footer]]**

The footer, also known as the trailer, is located at the end of a packet. The Ethernet protocol uses footers to provide error-checking information to determine if data has been corrupted. In addition, Ethernet network packets that are analyzed might not display footer information due to network configurations.

**Note:** Most protocols, such as the Internet Protocol (IP), _do not_ use footers.

## Network protocol analyzers

**[[Network protocol analyzers (packet sniffers)]]** are tools designed to capture and analyze data traffic within a network. Examples of network protocol analyzers include tcpdump, Wireshark, and TShark. 

Beyond their use in security as an investigative tool used to monitor networks and identify suspicious activity, network protocol analyzers can be used to collect network statistics, such as bandwidth or speed, and troubleshoot network performance issues, like slowdowns. 

Network protocol analyzers can also be used for malicious purposes. For example, malicious actors can use network protocol analyzers to capture packets containing sensitive data, such as account login information.

Here’s a network diagram illustrating how packets get transmitted from a sender to the receiver. A network protocol analyzer is placed in the middle of the communications to capture the data packets that travel over the wire.

![[Pasted image 20231025211448.png]]

### **How network protocol analyzers work**

Network protocol analyzers use both software and hardware capabilities to capture network traffic and display it for security analysts to examine and analyze. Here’s how:

1. First, packets must be collected from the network via the **[[Network Interface Card (NIC)]]**, which is hardware that connects computers to a network, like a router. NICs receive and transmit network traffic, but by default they only listen to network traffic that’s addressed to them. To capture all network traffic that is sent over the network, a NIC must be switched to a mode that has access to all visible network data packets. In wireless interfaces this is often referred to as monitoring mode, and in other systems it may be called promiscuous mode. This mode enables the NIC to have access to all visible network data packets, but it won’t help analysts access all packets across a network. A network protocol analyzer must be positioned in an appropriate network segment to access all traffic between different hosts.
2. The network protocol analyzer collects the network traffic in raw binary format. Binary format consists of 0s and 1s and is not as easy for humans to interpret. The network protocol analyzer takes the binary and converts it so that it’s displayed in a human-readable format, so analysts can easily read and understand the information.  

### **Capturing packets**

**[[Packet sniffing]]** is the practice of capturing and inspecting data packets across a network. A **[[packet capture (p-cap)]]** is a file containing data packets intercepted from an interface or network. Packet captures can be viewed and further analyzed using network protocol analyzers. For example, you can filter packet captures to only display information that's most relevant to your investigation, such as packets sent from a specific IP address.

**Note**: Using network protocol analyzers to intercept and examine private network communications without permission is considered illegal in many places.

P-cap files can come in many formats depending on the packet capture library that’s used. Each format has different uses and network tools may use or support specific packet capture file formats by default. You should be familiar with the following libraries and formats:

1. **[[Libpcap]]** is a packet capture library designed to be used by Unix-like systems, like Linux and MacOS®. Tools like tcpdump use Libpcap as the default packet capture file format. 
2. **[[WinPcap]]** is an open-source packet capture library designed for devices running Windows operating systems. It’s considered an older file format and isn’t predominantly used.
3. **[[Npcap]]** is a library designed by the port scanning tool Nmap that is commonly used in Windows operating systems.
4. **[[PCAPng]]** is a modern file format that can simultaneously capture packets and store data. Its ability to do both explains the “ng,” which stands for “next generation.”

**Pro tip:** Analyzing your home network can be a good way to practice using these tools.

## Key takeaways

Network protocol analyzers are helpful investigative tools that provide you with insight into the activity happening on a network. As an analyst, you'll use network protocol analyzer tools to view and analyze packet capture files to better understand network communications and defend against intrusions.

## Resources for more information

This Infosec article describes the risks of [packet crafting](https://resources.infosecinstitute.com/topic/packet-crafting-a-serious-crime/), a technique used to test a network’s structure.

# Interpret network communications with packets

- **[[Network Noise]]:** Networks are often busy and noisy, with a high volume of communications between devices. This can result in packet captures containing a large amount of network traffic, which can be challenging and time-consuming to analyze.
- **Efficient Analysis:** Security professionals must work efficiently to protect networks and systems from potential attacks. Analyzing network evidence, such as packet captures, is essential for identifying indicators of compromise. To do this, the ability to filter network traffic using packet sniffers is crucial.
- **Filtering Packet Captures:** Network analyzer tools, such as tcpdump and Wireshark, can be used to filter packet captures. This allows security analysts to sort and identify specific events or patterns in the network traffic. For example, filtering can help in quickly identifying events associated with data exfiltration, such as large amounts of data leaving a database.
- **Network Analyzer Tools:** Two examples of network analyzer tools mentioned are tcpdump, which is command-line-based, and Wireshark, which has a graphical user interface (GUI). Both tools are valuable for security analysts, and the video suggests that viewers will have the opportunity to explore and use both tools.

The video underscores the importance of efficient packet analysis for security professionals, highlighting the use of network analyzer tools and filtering to quickly identify suspicious network activity and indicators of compromise. The video also teases upcoming exploration of packet fields, with a specific focus on IP headers, which are key components of packet analysis.

# Reexamine the fields of a packet header

- **TCP/IP Model:** The TCP/IP model consists of four layers that help visualize how data is organized and transmitted across a network.
- **Internet Layer and IP:** The Internet layer is responsible for accepting and delivering packets in the network. It is where the Internet Protocol (IP) operates as the foundation for internet communications. IP determines the best route for packets to reach their intended destinations.
![[Pasted image 20231025215515.png]]
- **IP Headers:** IP packets contain headers that contain data fields crucial for data transfer. Different protocols use different headers.
- **IPv4 and IPv6:** There are two versions of the Internet Protocol: IPv4 and IPv6. IPv4 is still the most widely used, and the video focuses on examining the fields of an IPv4 header.
- **Fields in an IPv4 Header:** The video provides an overview of various fields in an IPv4 header, including:
	- **Version**: Specifies the IP version (IPv4 or IPv6).
	- **IHL** (Internet Header Length): Indicates the length of the IP header plus any options.
	- **ToS** (Type of Service): Specifies if certain packets should be treated differently.
	- **Total Length**: Identifies the length of the entire packet.
	- **Identification, Flags, and Fragment Offset**: Deal with fragmentation and reassembly of IP packets.
		- **[[Fragmentation]]** is when an IP packet gets broken up into chunks, which then get transmitted over the wire and reassembled when they arrive at their destination. These three fields specify if fragmentation has been used and how to reassemble the broken packets in the correct order. This is similar to how mail can travel through multiple routes like mailboxes, processing facilities, airplanes, and mail trucks before it reaches its destination.
	- **TTL** (Time to Live): Determines how long a packet can live before it gets dropped.
	- **Protocol**: Specifies the protocol used.
	- **Header Checksum**: Stores a checksum value for error detection.
	- **Source Address and Destination Address**: Specify the source and destination IP addresses.
	- **Options**: An optional field used for network troubleshooting.
	- **Data**: Where the packet's actual data resides.
![[Pasted image 20231025215643.png]]

The video provides an informative overview of these IP header fields, using analogies like postal mail to make it easier to understand. It prepares the viewers for the upcoming opportunity to examine these packet fields in more detail.

# Investigate packet details

So far, you've learned about how network protocol analyzers (packet sniffers) intercept network communications. You've also learned how you can analyze packet captures (p-caps) to gain insight into the activity happening on a network. As a security analyst, you'll use your packet analysis skills to inspect network packets and identify suspicious activity during investigations.

In this reading, you'll re-examine IPv4 and IPv6 headers. Then, you'll explore how you can use Wireshark to investigate the details of packet capture files.

## Internet Protocol (IP)

Packets form the foundation of data exchange over a network, which means that detection begins at the packet level. The **[[Internet Protocol (IP)]]** includes a set of standards used for routing and addressing data packets as they travel between devices on a network. IP operates as the foundation for all communications over the internet.

IP ensures that packets reach their destinations. There are two versions of IP that you will find in use today: IPv4 and IPv6. Both versions use different headers to structure packet information.

### **[[IPv4]]**

IPv4 is the most commonly used version of IP. There are thirteen fields in the header:

- **[[Version]]**: This field indicates the IP version. For an IPv4 header, IPv4 is used. 
- **[[Internet Header Length (IHL)]]**: This field specifies the length of the IPv4 header including any Options.
- **[[Type of Service (ToS)]]**: This field provides information about packet priority for delivery.
- **[[Total Length]]**: This field specifies the total length of the entire IP packet including the header and the data.
- **[[Identification]]**: Packets that are too large to send are fragmented into smaller pieces. This field specifies a unique identifier for fragments of an original IP packet so that they can be reassembled once they reach their destination.
- **[[Flags]]**: This field provides information about packet fragmentation including whether the original packet has been fragmented and if there are more fragments in transit.
- **[[Fragment Offset]]**: This field is used to identify the correct sequence of fragments.
- **[[Time to Live (TTL)]]**: This field limits how long a packet can be circulated in a network, preventing packets from being forwarded by routers indefinitely.
- **[[Protocol]]**: This field specifies the protocol used for the data portion of the packet.
- **[[Header Checksum]]**: This field specifies a checksum value which is used for error-checking the header.
- **[[Source Address]]**: This field specifies the source address of the sender.
- **[[Destination Address]]**: This field specifies the destination address of the receiver.
- **[[Options]]**: This field is optional and can be used to apply security options to a packet.
![[Pasted image 20231025220542.png]]

### **IPv6**

IPv6 adoption has been increasing because of its large address space. There are eight fields in the header:

- **Version**: This field indicates the IP version. For an IPv6 header, IPv6 is used.
- **Traffic Class**: This field is similar to the IPv4 Type of Service field. The Traffic Class field provides information about the packet's priority or class to help with packet delivery.
- **Flow Label**: This field identifies the packets of a flow. A flow is the sequence of packets sent from a specific source. 
- **Payload Length**: This field specifies the length of the data portion of the packet.
- **Next Header**: This field indicates the type of header that follows the IPv6 header such as TCP.
- **Hop Limit**: This field is similar to the IPv4 Time to Live field. The Hop Limit limits how long a packet can travel in a network before being discarded.
- **Source Address**: This field specifies the source address of the sender.
- **Destination Address**: This field specifies the destination address of the receiver.
![[Pasted image 20231025220558.png]]
Header fields contain valuable information for investigations and tools like Wireshark help to display these fields in a human-readable format.

## Wireshark

**Wireshark** is an open-source network protocol analyzer. It uses a graphical user interface (GUI), which makes it easier to visualize network communications for packet analysis purposes. Wireshark has many features to explore that are beyond the scope of this course. You'll focus on how to use basic filtering to isolate network packets so that you can find what you need.
![[Pasted image 20231025220620.png]]

### Display filters

Wireshark's display filters let you apply filters to packet capture files. This is helpful when you are inspecting packet captures with large volumes of information. Display filters will help you find specific information that's most relevant to your investigation. You can filter packets based on information such as protocols, IP addresses, ports, and virtually any other property found in a packet. Here, you'll focus on display filtering syntax and filtering for protocols, IP addresses, and ports.

### Comparison operators

You can use different comparison operators to locate specific header fields and values. Comparison operators can be expressed using either abbreviations or symbols. For example, this filter using the `"=="` equal symbol in this filter `ip.src == 8.8.8.8` is identical to using the `eq` abbreviation in this filter `ip.src eq 8.8.8.8`.

| Operator Type            | Symbol | Abbreviation   |
|--------------------------|--------|----------------|
| Equal                    | ==     | eq             |
| Not Equal                | !=     | ne             |
| Greater Than             | >      | gt             |
| Less Than                | <      | lt             |
| Greater Than or Equal To | >=     | ge             |
| Less Than or Equal To    | <=     | le             |

**Pro tip:** You can combine comparison operators with Boolean logical operators like `and` and `or` to create complex display filters. Parentheses can also be used to group expressions and to prioritize search terms.

### Contains operator

The `contains` operator is used to filter packets that contain an exact match of a string of text. Here is an example of a filter that displays all HTTP streams that match the keyword `"moved"`.

![[Pasted image 20231025220947.png]]

### Matches operator

The `matches` operator is used to filter packets based on the regular expression (regex) that's specified. Regular expression is a sequence of characters that forms a pattern. You'll explore more about regular expressions later in this program. 

## Filter toolbar

You can apply filters to a packet capture using Wireshark's filter toolbar. In this example, `dns` is the applied filter, which means Wireshark will only display packets containing the DNS protocol.

![[Pasted image 20231025221015.png]]

**Pro tip**: Wireshark uses different colors to represent protocols. You can customize colors and create your own filters.

### **Filter for protocols**

Protocol filtering is one of the simplest ways you can use display filters. You can simply enter the name of the protocol to filter. For example, to filter for DNS packets simply type dns in the filter toolbar. Here is a list of some protocols you can filter for:

- dns
- http
- ftp
- ssh
- arp
- telnet
- icmp

### **Filter for an IP address**

You can use display filters to locate packets with a specific IP address.

For example, if you would like to filter packets that contain a specific IP address use `ip.addr`, followed by a space, the equal `"=="` comparison operator, and the IP address. Here is an example of a display filter that filters for the IP address `172.21.224.2`:

`ip.addr == 172.21.224.2`

To filter for packets originating from a specific source IP address, you can use the `ip.src` filter. Here is an example that looks for the `10.10.10.10` source IP address:

`ip.src == 10.10.10.10`

To filter for packets delivered to a specific destination IP address, you can use the `ip.dst` filter. Here is an example that searches for the `4.4.4.4` destination IP address:

`ip.dst == 4.4.4.4`

### **Filter for a MAC address**

You can also filter packets according to the **Media Access Control (MAC) address**. As a refresher, a MAC address is a unique alphanumeric identifier that is assigned to each physical device on a network.

Here's an example:

`eth.addr == 00:70:f4:23:18:c4`

### **Filter for ports**

Port filtering is used to filter packets based on port numbers. This is helpful when you want to isolate specific types of traffic. DNS traffic uses TCP or UDP port 53 so this will list traffic related to DNS queries and responses only.

For example, if you would like to filter for a UDP port:

`udp.port == 53`

Likewise, you can filter for TCP ports as well:

`tcp.port == 25`

## Follow streams

Wireshark provides a feature that lets you filter for packets specific to a protocol and view streams. A stream or conversation is the exchange of data between devices using a protocol. Wireshark reassembles the data that was transferred in the stream in a way that's simple to read.
![[Pasted image 20231025221351.png]]

Following a protocol stream is useful when trying to understand the details of a conversation. For example, you can examine the details of an HTTP conversation to view the content of the exchanged request and response messages.

## Key takeaways

In this reading, you explored basic display filters with Wireshark. Packet analysis is an essential skill that you will continue to develop over time in your cybersecurity journey. Put your skills to practice in the upcoming activity and explore investigating the details of a packet capture file using Wireshark!

## Resources

- To learn more about Wireshark's full features and capabilities, explore the [Wireshark official user guide](https://www.wireshark.org/docs/wsug_html/).
# IP addresses and network communication

An **[[Internet Protocol (IP) Address]]** is a unique string of characters that identifies a location of a device on the internet. Each device on the internet has a unique IP address, just like every house on a street has its own mailing address. 

## There are two types of IP addresses: 
- ### [[IP Version 4 (IPv4)]]
	- IPv4 addresses are written as ***four, 1, 2, or 3-digit numbers separated by a decimal point***. In the early days of the internet, IP addresses were all IPV4. But as the use of the internet grew, all the IPv4 addresses started to get used up, so IPv6 was developed. 
		- IPv4 Addresses:
			- 192.168.1.100
			- 10.0.0.1
			- 72.16.254.3
- ### [[IP Version 6 (IPv6)]]
	- IPv6 addresses are ***made up of 32 characters***. The length of the IPv6 address will allow for more devices to be connected to the internet without running out of addresses as quickly as IPv4. 
		- IPv6 Addresses: 
			- 2001:0db8:85a3:0000:0000:8a2e:0370:7334     
			- 2a03:2880:10:1f02:face:b00c:0:25     
			- fd00:cafe:abcd:1234:5678:9abc:def0:1234

## IP addresses can be either public or private

Your internet service provider assigns a **[[public IP address]]** that is ***connected to your geographic location***. When network communications goes out from your device on the internet, they all have the same public-facing address. Just like all the roommates in one home share the same mailing address, ***all the devices on a network share the same public-facing IP address***. 

**[[Private IP addresses]]** are only ***seen by other devices on the same local network***. This means that all the devices on your home network can communicate with each other using unique IP addresses that the rest of the internet can't see. 

## MAC Address

Another kind of address used in network communications is called a MAC address. A **[[MAC address]]** is a ***unique alphanumeric identifier that is assigned to each physical device*** on a network. When a switch receives a data packet, it reads the MAC address of the destination device and maps it to a port. 

It then keeps this information in a MAC address table. Think of the MAC address table like an address book that the switch uses to direct data packets to the appropriate device. 

Example 1:

| Port    | MAC Address          |
| ------- | -------------------- |
| Port 1  | 00:1A:2B:3C:4D:5E   |
| Port 2  | 08:00:27:AE:FD:42   |
| Port 3  | 5C:33:8E:9A:21:7F   |
| Port 4  | 3A:9F:C8:76:B2:1D   |
| Port 5  | 1B:6D:F0:5E:A2:C7   |

Example 2:

| Port    | MAC Address          |
| ------- | -------------------- |
| Port 1  | 00:0F:7C:12:34:56   |
| Port 2  | 4A:B7:81:29:63:DC   |
| Port 3  | 7E:8D:5F:18:92:A1   |
| Port 4  | 9D:2E:7A:C4:F6:0B   |
| Port 5  | A1:0C:3E:76:5B:9D   |

Example 3:

| Port    | MAC Address          |
| ------- | -------------------- |
| Port 1  | 08:00:27:3A:BC:EF   |
| Port 2  | 3C:FD:A2:58:6E:91   |
| Port 3  | 6A:17:E9:D4:87:2F   |
| Port 4  | 45:9B:FA:72:C5:38   |
| Port 5  | D7:80:14:5D:29:C6   |

These tables provide information about the MAC addresses associated with devices connected to different ports on a network switch. You can adapt and expand these tables to fit your specific needs.

# Components of network layer communication

In the reading about the [OSI model](https://www.coursera.org/learn/networks-and-network-security/supplement/YbKL0/the-osi-model-explained) , you learned about the seven layers of the OSI model that are used to conceptualize the way data is transmitted across the internet. In this reading, you will learn more about operations that take place at layer 3 of the OSI model: the network layer.

## Operations at the network layer

Functions at the network layer ***organize the addressing and delivery of data packets across the network and internet*** from the host device to the destination device. This includes directing the packets from one router to another router across the internet, based on the internet protocol (IP) address of the destination network. The destination IP address is contained within the header of each data packet. This address will be stored for future routing purposes in routing tables along the packet’s path to its destination.

All data packets include an IP address; this is referred to as an IP packet or datagram. A router uses the IP address to route packets from network to network based on information contained in the IP header of a data packet. Header information communicates more than just the address of the destination. It also includes information such as the source IP address, the size of the packet, and which protocol will be used for the data portion of the packet. 

## Format of an IPv4 packet

![An IP packet divided into two parts: a section on the left marked “header,” and section on the right marked “data”](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/NHNCeVwQQCCcfSTfEUTolg_afd9af6faf854e3db824471a7f2e56f1_CS_R-044_Edited_IP-packet-header-and-data-final.png?expiry=1694217600000&hmac=a5FZxE3xjNpOFw0l6JzJlh1x_CNwWXt1wKbzoVGhUFo)

Next, you can review the format of an **[[IP version 4 (IPv4)]]** packet and review a detailed graphic of the packet header. An IPv4 packet is made up of two sections, the header and the data:
- An **IPv4 header format** is determined by the IPv4 protocol and includes the IP routing information that devices use to direct the packet. The size of the IPv4 header ranges from 20 to 60 bytes. The first **20 bytes** are a *fixed set of information containing data such as the source and destination IP address, header length, and total length of the packet*. The last set of bytes can range from 0 to 40 and consists of the *options field*.
- The **length of the data section** of an IPv4 packet can vary greatly in size. However, the **maximum possible size of an IPv4 packet is 65,535 bytes**. It contains the message being transferred over the internet, like website information or email text.

![Diagram of an IPv4 packet header, 13 fields, and bit size](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ZlTJLULmT_-iQusFt5gHLA_34841ae20ac344f4a0248aebe8f0d6f1_CS_R-044_Edited_Pv4-packet-header-14-field.png?expiry=1694217600000&hmac=9mmo0CStjBJV3PXjCZ8x-1tfkc1szITYTbvvMylYGsc)

There are 13 fields within the header of an IPv4 packet:

- **[[Version (VER)]]:** This 4-bit component tells receiving devices what protocol the packet is using. The packet used in the illustration above is an IPv4 packet.
- **[[IP Header Length (HLEN or IHL)]]:** HLEN is the packet’s header length. This value indicates where the packet header ends and the data segment begins.
- **[[Type of Service (ToS)]]:** Routers prioritize packets for delivery to maintain quality of service on the network. The ToS field provides the router with this information.
- **[[Total Length]]:** This field communicates the total length of the entire IP packet, including the header and data. The maximum size of an IPv4 packet is 65,535 bytes.
- **[[Identification]]:** For IPv4 packets that are larger than 65,535 bytes, the packets are divided, or fragmented, into smaller IP packets. The identification field provides a unique identifier for all the fragments of the original IP packet so that they can be reassembled once they reach their destination.
- **[[Flags]]:** This field provides the routing device with more information about whether the original packet has been fragmented and if there are more fragments in transit.
- **[[Fragmentation Offset]]:** The fragment offset field tells routing devices where in the original packet the fragment belongs.
- **[[Time to Live (TTL)]]:** TTL prevents data packets from being forwarded by routers indefinitely. It contains a counter that is set by the source. The counter is decremented by one as it passes through each router along its path. When the TTL counter reaches zero, the router currently holding the packet will discard the packet and return an ICMP Time Exceeded error message to the sender.
- **[[Protocol]]:** The protocol field tells the receiving device which protocol will be used for the data portion of the packet.
- **[[Header Checksum]]:** The header checksum field contains a checksum that can be used to detect corruption of the IP header in transit. Corrupted packets are discarded.
- **[[Source IP Address]]:** The source IP address is the IPv4 address of the sending device.
- **[[Destination IP Address]]:** The destination IP address is the IPv4 address of the destination device.
- **[[Options]]:** The options field allows for security options to be applied to the packet if the HLEN value is greater than five. The field communicates these options to the routing devices.

## Difference between IPv4 and IPv6

In an earlier part of this course, you learned about the history of IP addressing. As the internet grew, it became clear that all of the IPv4 addresses would eventually be depleted; this is called IPv4 address exhaustion. At the time, no one had anticipated how many computing devices would need an IP address. IPv6 was developed to mitigate IPv4 address exhaustion and other related concerns. 

One of the key differences between IPv4 and IPv6 is the length of the addresses. IPv4 addresses are made of four decimal numbers, each ranging from 0 to 255. Together they span numeric, made of 4 bytes, and allow for up to 4.3 billion possible addresses. IPv4 addresses are made up of four strings and the numbers range from 0 to 255. An example of an IPv4 address would be: 198.51.100.0. IPv6 addresses are made of eight hexadecimal numbers consisting of four hexadecimal digits., Together, they span made up of 16 bytes, and allow for up to 340 undecillion addresses (340 followed by 36 zeros). An example of an IPv6 address would be: 2002:0db8:0000:0000:0000:ff21:0023:1234.

There are also some differences in the layout of an IPv6 packet header. The IPv6 header format is much simpler than IPv4. For example, the IPv4 Header includes the IHL, Identification, and Flags fields, whereas the IPv6 does not. The IPv6 header only introduces the Flow Label field, where the Flow Label identifies a packet as requiring special handling by other IPv6 routers. 

![Diagramas paralelos de un encabezado de paquete IPv4 y uno de IPv6 simplificado.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/PNld6YkmQNWyhZjFFHvC-Q_eb474e5ee3b3416fbc06a639503342f1_CS_R-044_IPv4-and-IPv6.png?expiry=1694217600000&hmac=zH-QRcqlKeo8eEYS1bp3We920HCOQDvQc1waHuQMn5A)

There are some important security differences between IPv4 and IPv6. IPv6 offers more efficient routing and eliminates private address collisions that can occur on IPv4 when two devices on the same network are attempting to use the same address. 

## Key takeaways

Analyzing the different fields in an IP data packet can be used to find out important security information about the packet. Some examples of security-related information found in IP address packets are: where the packet is coming from, where it’s going, and which protocol it’s using. Understanding the data in an IP data packet will allow you to make critical decisions about the security implications of packets that you inspect.
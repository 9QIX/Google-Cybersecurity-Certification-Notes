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

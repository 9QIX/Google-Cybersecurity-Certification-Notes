
IPv6 adoption has been increasing because of its large address space. There are eight fields in the header:

- **[[Version]]**: This field indicates the IP version. For an IPv6 header, IPv6 is used.
- **[[Traffic Class]]**: This field is similar to the IPv4 Type of Service field. The Traffic Class field provides information about the packet's priority or class to help with packet delivery.
- **[[Flow Label]]**: This field identifies the packets of a flow. A flow is the sequence of packets sent from a specific source. 
- **[[Payload Length]]**: This field specifies the length of the data portion of the packet.
- **[[Next Header]]**: This field indicates the type of header that follows the IPv6 header such as TCP.
- **[[Hop Limit]]**: This field is similar to the IPv4 Time to Live field. The Hop Limit limits how long a packet can travel in a network before being discarded.
- **[[Source Address]]**: This field specifies the source address of the sender.
- **[[Destination Address]]**: This field specifies the destination address of the receiver.
![[Pasted image 20231025220558.png]]
Header fields contain valuable information for investigations and tools like Wireshark help to display these fields in a human-readable format.
Hubs, modems, cables, and wiring are all considered part of this layer. The **[[address resolution protocol (ARP)]]** is part of the network access layer. ARP ***assists IP with directing data packets*** on the same physical network by ***mapping IP addresses to MAC addresses*** on the same physical network.

As data packets move across the network, they move between network devices such as routers. The **[[Address Resolution Protocol (ARP)]]**, is used to ***determine the MAC address*** of the next router or device on the path. This ensures that the data gets to the right place.

## Address Resolution Protocol

By now, you are familiar with IP and MAC addresses. You’ve learned that each device on a network has both an IP address that identifies it on the network and a MAC address that is unique to that network interface. A device’s IP address may change over time, but its MAC address is permanent. **[[Address Resolution Protocol (ARP)]]** is an internet layer protocol in the TCP/IP model used to translate the IP addresses that are found in data packets into the MAC address of the hardware device. 

Each device on the network performs ARP and keeps track of matching IP and MAC addresses in an ARP cache. ARP does not have a specific port number.
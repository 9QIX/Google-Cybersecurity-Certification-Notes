## Network Address Translation

The devices on your local home or office network each have a private IP address that they use to communicate directly with each other. In order for the devices with private IP addresses to communicate with the public internet, they need to have a public IP address. Otherwise, responses will not be routed correctly. Instead of having a dedicated public IP address for each of the devices on the local network, the router can replace a private source IP address with its public IP address and perform the reverse operation for responses. This process is known as **[[Network Address Translation (NAT)]]** and it generally requires a router or firewall to be specifically configured to perform NAT. NAT is a part of layer 2 (internet layer) and layer 3 (transport layer) of the TCP/IP model.

| Private IP Addresses                 | Public IP Addresses                   |
| ------------------------------------ | ------------------------------------- |
| Assigned by network admins           | Assigned by ISP and IANA              |
| Unique only within a private network | Unique address in the global internet |
| No cost to use                       | Costs to lease a public IP address    |
| Address ranges:                      | Address ranges:                       |
| - 10.0.0.0-10.255.255.255            | - 1.0.0.0-9.255.255.255               | 
| - 172.16.0.0-172.31.255.255          | - 11.0.0.0-126.255.255.255            |
| - 192.168.0.0-192.168.255.255        | - 128.0.0.0-172.15.255.255            |
|                                      | - 172.32.0.0-192.167.255.255          |
|                                      | - 192.169.0.0-233.255.255.255         |

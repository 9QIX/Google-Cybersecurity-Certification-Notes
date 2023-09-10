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
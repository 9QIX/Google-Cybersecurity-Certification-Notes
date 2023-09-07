- ### **[[Application Layer]]**
	- Finally, at the application layer, protocols ***determine how the data packets will interact with receiving devices***. Functions that are organized at application layer include file transfers and email services.

## Application layer

The **[[application layer]]** in the TCP/IP model is similar to the application, presentation, and session layers of the OSI model. The application layer is responsible for making network requests or responding to requests. This layer defines which internet services and applications any user can access. Some common protocols used on this layer are: 

1. **[[Hypertext Transfer Protocol (HTTP)]]**
   - Port Number: 80
   - Explanation: HTTP is the protocol used for transferring web pages on the internet. Port 80 is the default port for unencrypted web traffic.
2. **[[Simple Mail Transfer Protocol (SMTP)]]**
   - Port Number: 25
   - Explanation: SMTP is used for sending email messages. Port 25 is the default port for outgoing mail servers.
3. **[[Secure Shell (SSH)]]**
   - Port Number: 22
   - Explanation: SSH is a secure method for remotely accessing and managing servers. Port 22 is the default port for SSH connections.
4. **[[File Transfer Protocol (FTP)]]**
   - Port Numbers: 20 (for data transfer), 21 (for control)
   - Explanation: FTP is used for transferring files between computers on a network. Port 21 is used for sending commands, and port 20 is used for actual data transfer.
5. **[[Domain Name System (DNS)]]**
   - Port Numbers: 53
   - Explanation: DNS is responsible for translating human-readable domain names (like www.example.com) into IP addresses that computers can understand. Port 53 is used for DNS queries and responses.

These port numbers help networked devices know which specific service or application they should communicate with when sending data over a network.

Application layer protocols rely on underlying layers to transfer the data across the network.

## Layer 7: **[[Application layer]]**

The application layer includes processes that ***directly involve the everyday user***. This layer includes all of the networking protocols that software applications use to connect a user to the internet. This characteristic is the identifying feature of the application layer—user connection to the network via applications and requests.

An example of a type of communication that happens at the application layer is using a web browser. The internet browser uses HTTP or HTTPS to send and receive information from the website server. The email application uses simple mail transfer protocol (SMTP) to send and receive email information. Also, web browsers use the domain name system (DNS) protocol to translate website domain names into IP addresses which identify the web server that hosts the information for the website.
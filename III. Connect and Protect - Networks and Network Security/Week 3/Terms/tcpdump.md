## tcpdump 

**[[tcpdump]]** is a command-line *network protocol analyzer*. It is popular, lightweight–meaning it uses little memory and has a low CPU usage–and uses the open-source libpcap library. tcpdump is text based, meaning all commands in tcpdump are executed in the terminal. It can also be installed on other Unix-based operating systems, such as macOS®. It is preinstalled on many Linux distributions.

tcpdump provides a brief packet analysis and *converts key information about network traffic into formats easily read by humans*. It prints information about each packet directly into your terminal. tcpdump also displays the source IP address, destination IP addresses, and the port numbers being used in the communications.

**[[tcpdump]]:** **[[KALI LINUX™]]** includes tcpdump, a command-line packet analyzer that allows security professionals to capture and inspect network traffic, a fundamental component of digital forensics.
# Packet captures with tcpdump

- **Tcpdump Overview:** **[[Tcpdump]]** is a command-line network analyzer tool available on many Unix-like operating systems, including Linux and macOS. It allows you to capture and monitor network traffic, including TCP, IP, ICMP, and more.
	- **Command Line Tool:** Tcpdump is a command-line tool, meaning it doesn't have a graphical user interface. You use command-line commands with options and flags to filter and capture network traffic.
- **Tcpdump Command Example:** The video provides an example of a tcpdump command: `sudo tcpdump -i any -v -c 1`. Here's a breakdown of the command:
	- `sudo`: Used to run tcpdump with elevated permissions.
	- `tcpdump`: The command to start tcpdump.
	- `-i any`: Specifies to capture traffic on any available network interface.
	- `-v`: Enables verbose mode, displaying detailed packet information.
	- `-c 1`: Limits tcpdump to capture only one packet.

## What is tcpdump?

**[[Tcpdump]]** is a command-line network protocol analyzer. Recall that a **command-line interface (CLI)** is a text-based user interface that uses commands to interact with the computer. 

Tcpdump is used to capture network traffic. This traffic can be saved to a **[[packet capture (p-cap)]]**, which is a file containing data packets intercepted from an interface or network. The p-cap file can be accessed, analyzed, or shared at a later time. Analysts use tcpdump for a variety of reasons, from troubleshooting network issues to identifying malicious activity. Tcpdump comes pre-installed in many Linux distributions and can also be installed on other Unix-based operating systems such as macOS®. 

**Note**: It's common for network traffic to be encrypted, which means data is encoded and unreadable. Inspecting the network packets might require decrypting the data using the appropriate private keys. 

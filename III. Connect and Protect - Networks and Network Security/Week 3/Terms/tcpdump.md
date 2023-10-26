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
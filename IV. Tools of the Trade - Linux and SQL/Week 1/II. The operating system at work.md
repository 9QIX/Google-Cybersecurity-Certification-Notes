# **Understanding How Operating Systems Work**

In this section, we'll delve into the mechanics of operating systems (OS) and their role when you use a computer. An OS serves as a crucial intermediary between hardware and users, ensuring the smooth execution of various tasks. Let's explore what happens behind the scenes.

### **The Car Analogy:**
Consider driving a car—you press the gas pedal, and the car moves without needing to understand its internal mechanics. Similarly, when using a computer, you interact with the OS without needing to comprehend the intricate details that make it function.

### **The OS's Function:**
The primary function of an OS is to facilitate the efficient execution of computer programs. It achieves this by managing the complexities of hardware control, allowing users to focus on their tasks.

### **The Booting Process:**
When you power on your computer, a series of events occur:
- Pressing the power button activates a microchip called BIOS (or UEFI in newer computers).
- BIOS/UEFI contains booting instructions and initializes a bootloader.
- The bootloader launches the OS, and your computer springs to life.

Understanding this process is valuable for security analysts. Vulnerabilities can emerge during booting, as BIOS is often not scanned by antivirus software, making it susceptible to malware.

### **User-System Interaction:**
The interaction process involves you, the user, and applications on your computer:
- **[[Applications]]** are specialized programs for specific tasks.
- When you use an application, it communicates with the OS.
- The OS interprets your request and directs it to the relevant hardware component.

The hardware sends information back to the OS, which, in turn, relays it to the application. This bidirectional communication ensures task completion.

### **Illustrating the Process with a Calculator Example:**
Consider using a calculator application on your computer:
- You use your mouse to launch the calculator.
- When you input a calculation, the application communicates with the OS.
- The OS directs the calculation request to the central processing unit (CPU), a key hardware component.
- The CPU performs the calculation and sends the result back to the OS.
- Finally, the result is displayed in your calculator application.

Understanding this process is essential for security analysts when investigating security events. They must trace this flow to pinpoint potential security issues.

### **The Mechanic Analogy:**
Much like a mechanic's in-depth knowledge of a car's inner workings exceeds that of an average driver, comprehending how OSs operate is fundamental for a security analyst. It empowers them to identify and address security concerns effectively.

# Requests to the operating system

Operating systems are a critical component of a computer. They make connections between applications and hardware to allow users to perform tasks. In this reading, you’ll explore this complex process further and consider it using a new analogy and a new example.

## Booting the computer

When you boot, or turn on, your computer, either a **BIOS** or **UEFI** microchip is activated. The **[[Basic Input-Output System (BIOS)]]** is a microchip that contains loading instructions for the computer and is prevalent in older systems. The **[[Unified Extensible Firmware Interface (UEFI)]]** is a microchip that contains loading instructions for the computer and replaces BIOS on more modern systems.

The BIOS and UEFI chips both perform the same function for booting the computer. BIOS was the standard chip until 2007, when UEFI chips increased in use. Now, most new computers include a UEFI chip. UEFI provides enhanced security features.

The BIOS or UEFI microchips contain a variety of loading instructions for the computer to follow. For example, one of the loading instructions is to verify the health of the computer’s hardware.

The last instruction from the BIOS or UEFI activates the bootloader. The **[[bootloader]]** is a software program that boots the operating system. Once the operating system has finished booting, your computer is ready for use.

## Completing a task

As previously discussed, operating systems help us use computers more efficiently. Once a computer has gone through the booting process, completing a task on a computer is a four-part process.

![Un processus qui passe de l'utilisateur à l'application, aux systèmes d'exploitation et enfin au matériel.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/bfvQyeg_SC-DSgUsegf8PQ_8405d4e94af147e1b98df5150c2fd7f1_CS_R-060_User-Application-Operating-System-Hardware.png?expiry=1695600000000&hmac=_cY2D1wgtwWA_-4xg14Op1GWwAzzOCtJ_jGY1hjUiLU)

### User

The first part of the process is the **[[user]]**. The user initiates the process by having something they want to accomplish on the computer. Right now, you’re a user!  You’ve initiated the process of accessing this reading.

### Application

The **[[application]]** is the software program that users interact with to complete a task. For example, if you want to calculate something, you would use the calculator application. If you want to write a report, you would use a word processing application. This is the second part of the process.

### Operating system

The **[[operating system]]** receives the user’s request from the application. It’s the operating system’s job to interpret the request and direct its flow. In order to complete the task, the operating system sends it on to applicable components of the hardware. 

### Hardware

The **[[hardware]]** is where all the processing is done to complete the tasks initiated by the user. For example, when a user wants to calculate a number, the CPU figures out the answer. As another example, when a user wants to save a file, another component of the hardware, the hard drive, handles this task. 

After the work is done by the hardware, it sends the output back through the operating system to the application so that it can display the results to the user.

## The OS at work behind the scenes

Consider once again how a computer is similar to a car. There are processes that someone won’t directly observe when operating a car, but they do feel it move forward when they press the gas pedal. It’s the same with a computer. Important work happens inside a computer that you don’t experience directly. This work involves the operating system.

You can explore this through another analogy. The process of using an operating system is also similar to ordering at a restaurant. At a restaurant you place an order and get your food, but you don’t see what’s happening in the kitchen when the cooks prepare the food.

Ordering food is similar to using an application on a computer. When you order your food, you make a specific request like “a small soup, very hot.” When you use an application, you also make specific requests like “print three double-sided copies of this document.” 

You can compare the food you receive to what happens when the hardware sends output. You receive the food that you ordered. You receive the document that you wanted to print. 

Finally, the kitchen is like the OS. You don’t know what happens in the kitchen, but it’s critical in interpreting the request and ensuring you receive what you ordered. Similarly, though the work of the OS is not directly transparent to you, it’s critical in completing your tasks.

## An example: Downloading a file from an internet browser

Previously, you explored how operating systems, applications, and hardware work together by  examining a task involving a calculation. You can expand this understanding by exploring how the OS completes another task, downloading a file from an internet browser: 

- First, the user decides they want to download a file that they found online, so they click on a download button near the file in the internet browser application.
- Then, the internet browser communicates this action to the OS.
- The OS sends the request to download the file to the appropriate hardware for processing.
- The hardware begins downloading the file, and the OS sends this information to the internet browser application. The internet browser then informs the user when the file has been downloaded.

## Key takeaways

Although it operates in the background, the operating system is an essential part of the process of using a computer. The operating system connects applications and hardware to allow users to complete a task.

# **Managing System Resources with Operating Systems**

In this section, we'll explore how operating systems (OS) are responsible for efficiently managing a computer's resources. Much like managing energy for various tasks, an OS must balance and allocate resources effectively to ensure the computer runs smoothly.

### **The Energy Analogy:**
Think of your computer as needing energy, much like a person does for different tasks. Some tasks demand more energy, while others require less. For instance, running a marathon demands more energy than watching TV. Similarly, an OS must allocate resources appropriately for different computer tasks.

### **The OS as the Orchestra Conductor:**
Imagine your computer as an orchestra, with various instruments like violins, drums, and trumpets—all integral parts of the ensemble. The orchestra also has a conductor to guide the music's flow. In the computer world, the OS plays the role of the conductor. It manages resource and memory allocation, ensuring optimal utilization of the computer's limited capacity. Many programs, tasks, and processes vie for resources from the central processing unit (CPU), each with its own resource requirements. The OS is responsible for allocating and de-allocating resources efficiently, ensuring the computer functions smoothly even with multiple tasks running simultaneously.

### **Resource Management Behind the Scenes:**
Much of this resource management is hidden from users, operating silently in the background.

### **Monitoring Resource Usage:**
As a user, you can monitor resource usage through the task manager, which lists all ongoing tasks and their memory and CPU consumption.

### **Relevance for Security Analysts:**
For security analysts, understanding resource allocation is valuable. It can aid in incident response and troubleshooting applications within a system. For instance, if a computer experiences slowdowns, an analyst might discover that resources are being allocated to malware. A foundational understanding of OS operations is crucial for comprehending the security concepts and skills covered in this program.

# Virtualization technology

You've explored a lot about operating systems. One more aspect to consider is that operating systems can run on virtual machines. In this reading, you’ll learn about virtual machines and the general concept of virtualization. You’ll explore how virtual machines work and the benefits of using them.

## What is a virtual machine?

A **[[virtual machine (VM)]]** is a virtual version of a physical computer. Virtual machines are one example of virtualization. **[[Virtualization]]** is the process of using software to create virtual representations of various physical machines. The term “virtual” refers to machines that don’t exist physically, but operate like they do because their software simulates physical hardware. Virtual systems don’t use dedicated physical hardware. Instead, they use software-defined versions of the physical hardware. This means that a single virtual machine has a virtual CPU, virtual storage, and other virtual hardware. Virtual systems are just code.

![A dark gray computer with arrows to light gray computers that have “VM” on the screen and are surrounded by dotted lines.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/C0Cpca6gRquuxTow47dD1A_2a73d66bee5c40b78984e532c09994f1_82635VQFzN8LaD6GAv3bNTQs6oACAmxKjdlZebYCGsO10hvIVpxBElK4gbJ-KJvmRBsxvQd3XHXUfUtgWzNhR4Va6ODC5D42owmm2vyiluDeV86UAaL9d-pyaxXnjzgHARaWckVzCqj12dnrOq1Ca4o?expiry=1695600000000&hmac=3Bh6KWdD3QTa2KdO3I6HE9o44CTdAnlcbiM-PU8e4U8)

You can run multiple virtual machines using the physical hardware of a single computer. This involves dividing the resources of the host computer to be shared across all physical and virtual components. For example, **[[Random Access Memory (RAM)]]** is a hardware component used for short-term memory. If a computer has 16GB of RAM, it can host three virtual machines so that the physical computer and virtual machines each have 4GB of RAM. Also, each of these virtual machines would have their own operating system and function similarly to a typical computer.

## Benefits of virtual machines

Security professionals commonly use virtualization and virtual machines. Virtualization can increase security for many tasks and can also increase efficiency.

### **Security**

One benefit is that virtualization can provide an isolated environment, or a sandbox, on the physical host machine. When a computer has multiple virtual machines, these virtual machines are “guests” of the computer. Specifically, they are isolated from the host computer and other guest virtual machines. This provides a layer of security, because virtual machines can be kept separate from the other systems. For example, if an individual virtual machine becomes infected with malware, it can be dealt with more securely because it’s isolated from the other machines. A security professional could also intentionally place malware on a virtual machine to examine it in a more secure environment.

**Note:** Although using virtual machines is useful when investigating potentially infected machines or running malware in a constrained environment, there are still some risks. For example, a malicious program can escape virtualization and access the host machine. This is why you should never completely trust virtualized systems.

### **Efficiency**

Using virtual machines can also be an efficient and convenient way to perform security tasks. You can open multiple virtual machines at once and switch easily between them. This allows you to streamline security tasks, such as testing and exploring various applications.

You can compare the efficiency of a virtual machine to a city bus. A single city bus has a lot of room and is an efficient way to transport many people simultaneously. If city buses didn’t exist, then everyone on the bus would have to drive their own cars. This uses more gas, cars, and other resources than riding the city bus. 

Similar to how many people can ride one bus, many virtual machines can be hosted on the same physical machine. That way, separate physical machines aren't needed to perform certain tasks.

## Managing virtual machines

Virtual machines can be managed with a software called a hypervisor. Hypervisors help users manage multiple virtual machines and connect the virtual and physical hardware. Hypervisors also help with allocating the shared resources of the physical host machine to one or more virtual machines.

One hypervisor that is useful for you to be familiar with is the Kernel-based Virtual Machine (KVM). KVM is an open-source hypervisor that is supported by most major Linux distributions. It is built into the Linux kernel, which means it can be used to create virtual machines on any machine running a Linux operating system without the need for additional software.

## Other forms of virtualization

In addition to virtual machines, there are other forms of virtualization. Some of these virtualization technologies do not use operating systems. For example, multiple virtual servers can be created from a single physical server. Virtual networks can also be created to more efficiently use the hardware of a physical network. 

## Key takeaways

Virtual machines are virtual versions of physical computers and are one example of virtualization. Virtualization is a key technology in the security industry, and it’s important for security analysts to understand the basics. There are many benefits to using virtual machines, such as isolation of malware and other security risks. However, it’s important to remember there’s still a risk of malicious software escaping their virtualized environments.
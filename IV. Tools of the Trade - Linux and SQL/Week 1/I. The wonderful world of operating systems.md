# **Understanding Operating Systems and Their Significance**

In the realm of computing, operating systems (OS) are the unseen yet indispensable companions of devices like computers, smartphones, and tablets. If you've ever utilized a desktop or laptop computer, you're likely familiar with the Windows or MacOS operating systems. Similarly, smartphones and tablets rely on mobile operating systems such as Android and iOS. Another notable player in the world of operating systems is Linux, which holds particular importance in the security industry, making it highly relevant for security professionals.

**Defining the [[Operating System (OS)]]**

But what exactly is an operating system? At its core, the OS serves as the vital intermediary between the hardware components of a computer and the user. Often referred to simply as the OS, it assumes a pivotal role in ensuring the optimal performance of a computer system while simultaneously enhancing user-friendliness. 

To better grasp the significance of the OS, it's essential to understand the term "**[[hardware]]**," which alludes to the tangible and physical components that constitute a computer.

**The Evolution of OS and Its Impact**

The contemporary OS interface that we rely on daily represents a substantial evolution from the early days of computing. In the 1950s, a significant challenge was the considerable time required to execute computer programs. During this era, computers lacked the capability to run multiple programs simultaneously. Consequently, users had to patiently wait for one program to conclude its operation before resetting the computer and loading a new program. 

Consider the inconvenience of having to power your computer on and off each time you wished to open a different application. Simple tasks like sending an email would entail substantial time and effort. Fortunately, the evolution of operating systems has alleviated these concerns. Present-day computers run efficiently, supporting the concurrent operation of multiple applications. Furthermore, they seamlessly interact with external devices such as printers, keyboards, and mice.

**Facilitating Human-Computer Communication**

Operating systems play another pivotal role: bridging the communication gap between humans and computers. Computers inherently communicate in **[[binary]]**, a language composed of 0s and 1s. The OS functions as an interface, facilitating complex interactions between users and computers. It empowers users to interact with computers in ways that transcend the binary foundation, enabling intuitive and efficient communication.

**The Critical Role of [[OS Security]]**

Recognizing the criticality of operating systems, it becomes evident that OS security is paramount in safeguarding computing devices. OS security encompasses various aspects, including securing files, managing data access, and implementing robust user authentication mechanisms. These security measures collectively contribute to the protection against a wide array of threats, including viruses, worms, and malware.

Understanding the inner workings of operating systems is imperative for individuals undertaking security-related roles. As a security analyst, you might find yourself responsible for configuring and upholding the security of a system through access management. Additionally, tasks like configuring and managing firewalls, establishing security policies, enabling virus protection, and performing auditing, accounting, and logging to detect anomalies all demand a profound understanding of operating systems.

As you progress through this course, we will delve deeper into the intricate facets of operating systems, equipping you with the knowledge and skills required to excel in security-related roles and effectively fortify network and system security.

# Compare operating systems

You previously explored why operating systems are an important part of how a computer works.  In this reading, you’ll compare some popular operating systems used today. You’ll also focus on the risks of using legacy operating systems.

## Common operating systems

The following operating systems are useful to know in the security industry: Windows, macOS®, Linux, ChromeOS, Android, and iOS.

### **Windows and macOS**

**[[Windows]]** and **[[macOS]]** are both common operating systems. The *Windows operating system was introduced in 1985*, and *macOS was introduced in 1984*. Both operating systems are used in personal and enterprise computers. 

**[[Windows]]** is a closed-source operating system, which means the source code is not shared freely with the public. **[[macOS]]** is partially open source. It has some open-source components, such as macOS’s kernel. macOS also has some closed-source components. 

### **Linux**

The first version of **[[Linux]]** was released in 1991, and other major releases followed in the early 1990s. Linux is a *completely open-source operating system*, which means that anyone can access Linux and its source code. The open-source nature of Linux allows developers in the Linux community to collaborate.

Linux is particularly important to the security industry. There are some distributions that are specifically designed for security. Later in this course, you’ll learn about Linux and its importance to the security industry.

### **ChromeOS**

**[[ChromeOS]]** launched in 2011. It’s partially open source and is derived from Chromium OS, which is completely open source. ChromeOS is frequently used in the education field.

### **Android and iOS**

**[[Android]]** and **[[iOS]]** are both mobile operating systems. Unlike the other operating systems mentioned, mobile operating systems are typically used in mobile devices, such as phones, tablets, and watches. Android was introduced for public use in 2008, and iOS was introduced in 2007. Android is open source, and iOS is partially open source.

## Operating systems and vulnerabilities

Security issues are inevitable with all operating systems. An important part of protecting an operating system is *keeping the system and all of its components up to date*.

### **Legacy operating systems**

A **[[legacy operating system]]** is an operating system that is outdated but still being used. Some organizations continue to use legacy operating systems because software they rely on is not compatible with newer operating systems. This can be more common in industries that use a lot of equipment that requires embedded software—software that’s placed inside components of the equipment.

Legacy operating systems can be vulnerable to security issues because they’re no longer supported or updated. This means that legacy operating systems might be vulnerable to new threats. 

### **Other vulnerabilities**

Even when operating systems are kept up to date, they can still become vulnerable to attack. Below are several resources that include information on operating systems and their vulnerabilities.

- [Microsoft Security Response Center (MSRC)](https://msrc.microsoft.com/update-guide/vulnerability): A list of known vulnerabilities affecting Microsoft products and services
- [Apple Security Updates](https://support.apple.com/en-us/HT201222): A list of security updates and information for Apple® operating systems, including macOS and iOS, and other products
- [Common Vulnerabilities and Exposures (CVE) Report for Ubuntu](https://ubuntu.com/security/cves): A list of known vulnerabilities affecting Ubuntu, which is a specific distribution of Linux
- [Google Cloud Security Bulletin](https://cloud.google.com/support/bulletins): A list of known vulnerabilities affecting Google Cloud products and services

Keeping an operating system up to date is one key way to help the system stay secure. Because it can be difficult to keep all systems updated at all times, it’s important for security analysts to be knowledgeable about legacy operating systems and the risks they can create.

## Key takeaways

Windows, macOS, Linux, ChromeOS, Android, and iOS are all commonly used operating systems. Security analysts should be aware of vulnerabilities that affect operating systems. It’s especially important for security analysts to be familiar with legacy operating systems, which are systems that are outdated but still being used.

# **Understanding How Operating Systems Work**

In this section, we'll delve into the mechanics of operating systems (OS) and their role when you use a computer. An OS serves as a crucial intermediary between hardware and users, ensuring the smooth execution of various tasks. Let's explore what happens behind the scenes.

**The Car Analogy:**
Consider driving a car—you press the gas pedal, and the car moves without needing to understand its internal mechanics. Similarly, when using a computer, you interact with the OS without needing to comprehend the intricate details that make it function.

**The OS's Function:**
The primary function of an OS is to facilitate the efficient execution of computer programs. It achieves this by managing the complexities of hardware control, allowing users to focus on their tasks.

**The Booting Process:**
When you power on your computer, a series of events occur:
- Pressing the power button activates a microchip called BIOS (or UEFI in newer computers).
- BIOS/UEFI contains booting instructions and initializes a bootloader.
- The bootloader launches the OS, and your computer springs to life.

Understanding this process is valuable for security analysts. Vulnerabilities can emerge during booting, as BIOS is often not scanned by antivirus software, making it susceptible to malware.

**User-System Interaction:**
The interaction process involves you, the user, and applications on your computer:
- Applications are specialized programs for specific tasks.
- When you use an application, it communicates with the OS.
- The OS interprets your request and directs it to the relevant hardware component.

The hardware sends information back to the OS, which, in turn, relays it to the application. This bidirectional communication ensures task completion.

**Illustrating the Process with a Calculator Example:**
Consider using a calculator application on your computer:
- You use your mouse to launch the calculator.
- When you input a calculation, the application communicates with the OS.
- The OS directs the calculation request to the central processing unit (CPU), a key hardware component.
- The CPU performs the calculation and sends the result back to the OS.
- Finally, the result is displayed in your calculator application.

Understanding this process is essential for security analysts when investigating security events. They must trace this flow to pinpoint potential security issues.

**The Mechanic Analogy:**
Much like a mechanic's in-depth knowledge of a car's inner workings exceeds that of an average driver, comprehending how OSs operate is fundamental for a security analyst. It empowers them to identify and address security concerns effectively.
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
- **[[Applications]]** are specialized programs for specific tasks.
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
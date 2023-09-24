# **Linux Distributions**

To effectively navigate the Linux landscape as a security analyst, it's crucial to grasp the concept of **[[Linux distributions]]**, often referred to as distros. These distributions offer a high level of customization and cater to various needs and preferences of users. Let's explore the significance of **[[Linux distributions]]** in the context of security analysis:

**Linux Distributions Overview**:
- **Definition:** **[[Linux distributions]]**, also known as distros or flavors of Linux, are customized versions of the Linux operating system. Each distribution is built around the Linux kernel and offers a unique combination of preinstalled programs, user interfaces, and system configurations.

**Analogical Understanding**:
- **Vehicle Analogy:** Think of **[[Linux distributions]]** like vehicles. The **[[Linux kernel]]**, akin to an engine in a vehicle, is the heart of the operating system. Just as manufacturers use the same engine to create different types of vehicles (trucks, cars, buses, etc.), Linux enthusiasts can take the open-source **[[Linux kernel]]** and customize it to create various distributions.
- **Diverse Purposes:** Different vehicles serve distinct purposes, just as **[[Linux distributions]]** are tailored for various needs. For instance, some distributions are designed for general-purpose computing, while others target specific tasks, such as penetration testing or server management.
- **Customization:** Like vehicles with varying components (e.g., control panels in aircraft or the number of tires on trucks), **[[Linux distributions]]** include diverse preinstalled programs, utilities, and user interfaces. Users select a distribution based on their specific requirements or preferences.

**Advantages of Linux Customization**:
- **Customizability:** **[[Linux distributions]]** include essential components like the **[[Linux kernel]]**, utilities, a package management system, and an installer. Being open source, Linux allows users and developers to contribute to the source code and create new distributions tailored to specific needs.

**Hierarchy of Distributions**:
- **Derived from Parent Distributions:** Most **[[Linux distributions]]** are derived from existing distributions. Some distributions, known as parent distributions, serve as the basis for others. For instance, Red Hat is the parent of CentOS, and Slackware is the parent of SUSE. Ubuntu and KALI LINUX™ are derived from Debian.

**Relevance to Security Analysts**:
- **Critical Knowledge:** As a security analyst, understanding different **[[Linux distributions]]** is essential. Familiarity with these distributions facilitates your work, as specific tools and applications may be available on one distribution but not on another. Knowing which distribution suits your security needs can streamline your tasks and enhance your effectiveness.

In the following sections, we will explore some of the **[[Linux distributions]]** commonly used by security analysts, providing insights into their features and functionalities, further enhancing your proficiency in the field of security analysis.

You've provided an informative overview of KALI LINUX™ and its significance for security analysts. Here's your text with key terms emphasized using double square brackets:

# KALI LINUX ™

In the realm of security analysis, one Linux distribution that stands out is **[[KALI LINUX™]]**. Developed and trademarked by Offensive Security, **[[KALI LINUX™]]** is derived from Debian and purposefully designed for penetration testing and digital forensics. Let's delve deeper into the significance of **[[KALI LINUX™]]** for security analysts:

**KALI LINUX™ Overview**:
- **Specialized Linux Distribution:** **[[KALI LINUX™]]** is an open-source Linux distribution tailored to meet the demands of penetration testing and digital forensics. It is renowned for its extensive collection of pre-installed security tools and utilities, making it an indispensable resource for security professionals.

**Safe Usage and Virtualization**:
- **Virtual Machine Recommended:** Given the powerful penetration testing tools within **[[KALI LINUX™]]**, it is strongly recommended to run this distribution within a virtual machine environment. Utilizing a virtual machine safeguards your physical system against unintended damage or system compromise that may result from the misuse of these potent security tools.
- **Snapshot Capability:** Virtualization not only ensures system safety but also offers the invaluable ability to create and revert to snapshots of your virtual machine. This feature allows security analysts to maintain a clean and stable system state for various testing scenarios and forensic investigations.

**Applications in Penetration Testing**:
- **Penetration Testing Definition:** **[[Penetration testing]]**, often referred to as pen testing, involves simulated attacks on systems, networks, applications, websites, and processes to identify vulnerabilities and weaknesses.
- **[[Metasploit]]:** **[[KALI LINUX™]]** features the Metasploit tool, which is instrumental in identifying and exploiting vulnerabilities in target systems. Security professionals rely on Metasploit for comprehensive penetration testing.
- **[[Burp Suite]]:** For assessing the security of web applications, **[[KALI LINUX™]]** includes Burp Suite, a versatile tool that aids in the detection of weaknesses in web-based systems.
- **[[John the Ripper]]:** Password guessing is a crucial aspect of penetration testing, and **[[KALI LINUX™]]** incorporates John the Ripper, a password-cracking tool widely used to assess password security.

**Applications in Digital Forensics**:
- **[[Digital Forensics]] Defined:** Digital forensics involves the systematic collection, preservation, and analysis of digital data to ascertain events or activities that occurred after a security incident or attack.
- **[[tcpdump]]:** **[[KALI LINUX™]]** includes tcpdump, a command-line packet analyzer that allows security professionals to capture and inspect network traffic, a fundamental component of digital forensics.
- **[[Wireshark]]:** Wireshark, another vital tool in the security field, offers a graphical user interface for live and captured network traffic analysis. This tool is indispensable for detailed network forensics.
- **[[Autopsy]]:** Autopsy is a forensic tool included with **[[KALI LINUX™]]**, enabling security analysts to conduct in-depth analysis of hard drives and smartphones, assisting in the reconstruction of digital events.

**Rich Toolset for Security Professionals**:
- **Vast Array of Tools:** **[[KALI LINUX™]]** boasts a vast array of tools specifically curated for conducting penetration testing, digital forensics, and security assessments. These tools empower security analysts to efficiently carry out their responsibilities in securing systems, networks, and data.

As we progress, we will explore additional Linux distributions that hold relevance in the realm of security analysis, providing insights into their distinctive features and applications for security professionals.

# More Linux Distributions

Previously, you were introduced to different distributions of Linux. This included **[[KALI LINUX™]]**. (**[[KALI LINUX™]]** is a trademark of OffSec.) In addition to **[[KALI LINUX™]]**, there are multiple other Linux distributions that security analysts should be familiar with. In this reading, you’ll learn about additional Linux distributions.

### **KALI LINUX™**
**[[KALI LINUX™]]** is an open-source distribution of Linux that is widely used in the security industry. This is because **[[KALI LINUX™]]**, which is Debian-based, is pre-installed with many useful tools for penetration testing and digital forensics. A [[penetration test]] is a simulated attack that helps identify vulnerabilities in systems, networks, websites, applications, and processes. [[Digital forensics]] is the practice of collecting and analyzing data to determine what has happened after an attack. These are key activities in the security industry.

However, **[[KALI LINUX™]]** is not the only Linux distribution that is used in cybersecurity.

### **Ubuntu**
**[[Ubuntu]]** is an open-source, user-friendly distribution that is widely used in security and other industries. It has both a command-line interface (CLI) and a graphical user interface (GUI). **[[Ubuntu]]** is also Debian-derived and includes common applications by default. Users can also download many more applications from a package manager, including security-focused tools. Because of its wide use, **[[Ubuntu]]** has an especially large number of community resources to support users.

**[[Ubuntu]]** is also widely used for cloud computing. As organizations migrate to cloud servers, cybersecurity work may more regularly involve **[[Ubuntu]]** derivatives.

### Parrot
**[[Parrot]]** is an open-source distribution that is commonly used for security. Similar to **[[KALI LINUX™]]**, **[[Parrot]]** comes with pre-installed tools related to penetration testing and digital forensics. Like both **[[KALI LINUX™]]** and **[[Ubuntu]]**, it is based on Debian.

**[[Parrot]]** is also considered to be a user-friendly Linux distribution. This is because it has a GUI that many find easy to navigate. This is in addition to **[[Parrot]]**’s CLI.

### **Red Hat® Enterprise Linux®**
**[[Red Hat® Enterprise Linux®]]** is a subscription-based distribution of Linux built for enterprise use. **[[Red Hat]]** is not free, which is a major difference from the previously mentioned distributions. Because it’s built and supported for enterprise use, **[[Red Hat]]** also offers a dedicated support team for customers to call about issues.

### **CentOS**
**[[CentOS]]** is an open-source distribution that is closely related to **[[Red Hat]]**. It uses source code published by **[[Red Hat]]** to provide a similar platform. However, **[[CentOS]]** does not offer the same enterprise support that **[[Red Hat]]** provides and is supported through the community.

#### **Key takeaways**
**[[KALI LINUX™]], [[Ubuntu]], [[Parrot]], [[Red Hat® Enterprise Linux®]],** and **[[CentOS]]** are all widely used Linux distributions. It’s important for security analysts to be aware of these distributions that they might encounter in their career.

# Package Managers for Installing Applications

Previously, you learned about Linux distributions and that different distributions derive from different sources, such as Debian or Red Hat Enterprise Linux distribution. You were also introduced to package managers, and learned that Linux applications are commonly distributed through package managers. In this reading, you’ll apply this knowledge to learn more about package managers.

### **Introduction to package managers**
A **[[package]]** is a piece of software that can be combined with other packages to form an application. Some packages may be large enough to form applications on their own.

Packages contain the files necessary for an application to be installed. These files include dependencies, which are supplemental files used to run an application.

Package managers can help resolve any issues with dependencies and perform other management tasks. A **[[package manager]]** is a tool that helps users install, manage, and remove packages or applications. Linux uses multiple package managers.

Note: It’s important to use the most recent version of a package when possible. The most recent version has the most up-to-date bug fixes and security patches. These help keep your system more secure.

### **Types of package managers**
Many commonly used Linux distributions are derived from the same parent distribution. For example, **[[KALI LINUX™]], [[Ubuntu]],** and **[[Parrot]]** all come from Debian. **[[CentOS]]** comes from Red Hat.

This knowledge is useful when installing applications because certain package managers work with certain distributions. For example, the **[[Red Hat Package Manager (RPM)]]** can be used for Linux distributions derived from Red Hat, and package managers such as **[[dpkg]]** can be used for Linux distributions derived from Debian.

Different package managers typically use different file extensions. For example, **[[Red Hat Package Manager (RPM)]]** has files which use the .rpm file extension, such as Package-Version-Release_Architecture.rpm. Package managers for Debian-derived Linux distributions, such as **[[dpkg]]**, have files which use the .deb file extension, such as Package_Version-Release_Architecture.deb.

### **Package management tools**
In addition to package managers like **[[RPM]]** and **[[dpkg]]**, there are also package management tools that allow you to easily work with packages through the shell. Package management tools are sometimes utilized instead of package managers because they allow users to more easily perform basic tasks, such as installing a new package. Two notable tools are the **[[Advanced Package Tool (APT)]]** and **[[Yellowdog Updater Modified (YUM)]]**.

**Advanced Package Tool (APT)**
**[[APT]]** is a tool used with Debian-derived distributions. It is run from the command-line interface to manage, search, and install packages.

**Yellowdog Updater Modified (YUM)**
**[[YUM]]** is a tool used with Red Hat-derived distributions. It is run from the command-line interface to manage, search, and install packages. **[[YUM]]** works with `.rpm` files.

**Key takeaways**
A package is a piece of software that can be combined with other packages to form an application. Packages can be managed using a package manager. There are multiple package managers and package management tools for different Linux distributions. Package management tools allow users to easily work with packages through the shell. Debian-derived Linux distributions use package managers like **[[dpkg]]** as well as package management tools like **[[Advanced Package Tool (APT)]]**. Red Hat-derived distributions use the **[[Red Hat Package Manager (RPM)]]** or tools like **[[Yellowdog Updater Modified (YUM)]]**.


# Resources for completing Linux labs

This course features hands-on lab activities where you’ll have the opportunity to practice Linux commands in the terminal. You’ll use a platform called Qwiklabs to complete these labs. In this reading, you’ll learn how to use Qwiklabs.

This reading first provides a section on how to use Qwiklabs, which includes details on how to launch a lab, how to interact within the Qwiklabs environment, and how to end a lab. This is followed by another section on helpful navigation tips and keyboard shortcuts; these may be useful when working in the terminal.

**Note**: You will not launch Qwiklabs directly from this reading and instead will do this through lab activities and exemplars that you encounter throughout the course.

## How to use Qwiklabs

### **Launching Qwiklabs**

When you select a lab, you start from a Coursera page. You will need to click **Launch App** on that page. After you click **Launch App**, a new tab will open with a Qwiklabs page that contains instructions for that particular lab.  

### **Start Lab button**

On the Qwiklabs page, you must click **Start Lab** to open a temporary terminal. The instructions for the lab will move to the right side of the screen.

![Bouton vert avec le texte « Start Lab » (Démarrer l'atelier) à gauche d'un minuteur réglé sur 20 minutes.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/bbLYK8KXTheEmp-pArlF-g_ef7afc94b9304f30844a19e45e922ff1_wPU2KdBxIZhEA0euFsDlhs_nHve2ceZ69LNUPx4ZE0Bb8jVXhx-Qq2dfRIK1a8IFwZ08_GkPEgh4NR_8yvGYvn0U4FTm6l8QGhpbBlTwXew2thU31_64Ivi7nwPKJNCtemriZhtJWAfZdc0dQ-tTfEo?expiry=1695686400000&hmac=qjwwePQD7yLM7GMPZzxC0HmZTPh6gG7wWjDqcPIz-5Q)

Read the instructions and complete all the tasks in the lab by entering commands in the terminal.

**Note**: It may take a moment for the terminal to start.

### **Lab control dialog box**

After you click **Start Lab**, the lab control dialog box opens. It contains the **End Lab** button, the **timer**, and the **Open Linux Console** button.

You can hide or unhide the dialog box by clicking the following icon in the red box:

![Quatre rectangles formant une spirale dans un carré, lui-même encadré en rouge dans une capture d'écran de l'atelier.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/9J3KUOFWRNWzekD6Uiykyg_f489a579c31c4a8b8c2f9b68467495f1_LuMypehj-sqYyJlYCJGk-0LPWQirKP_cVeCYhsw1ism9amvqsYDhZEdh-Wyzh1tW__cut8UToAifaNs6LRj3iXCr4ujUo_RA7h-qx4rJVs1CRjAwAwCGM-gnKcx4wIWeV2b9IqCRB14qOVyda1LeQDA?expiry=1695686400000&hmac=aHP72qr0FtHZ8Qhb16QJu4JipWi0u-z-Hpwn6zoMbnI)

### **The timer**

The **timer** starts when the terminal has loaded. The timer keeps track of the amount of time you have left to complete a lab. The timer counts down until it reaches 00:00:00. When it does, your temporary terminal and resources are deleted.

You will have ample time to complete the labs. But, stay focused on completing the tasks to ensure you use your time well.

### **Open Linux Console button**

When you click the button to **Open Linux Console**, the terminal opens in a new browser window:

![Un bouton avec le texte « Open Linux Console » (Ouvrir la console Linux) encadré en rouge.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/GL_lszqoS_SwMddGbzYgEQ_1bd87af68f5f46a0be668b190f51f6f1_tEIGaT6dW10ie3BjpmzvFivoi8feEG9-Iw7O_lAjvdvWpFXlZOm8HmiNc2c9OgRKvKUBjJhp8HfoR3qu9JPY4GzGbCSOvh_nC-pKywu_G0B7V_ULMpjKTT06CYfx4b7oS1HPZnudcST_D-LjQmdIwmY?expiry=1695686400000&hmac=pUF5AzcUChv7LHUXKMtQyda5jzOjM7wpOyZwD8J1MWc)

Use this feature if you want a full-screen view of the terminal. You can close this window at any time. Closing the window does not end your lab, and you can continue working in the terminal in the original tab.

### **Check progress**

You can check your progress by clicking **Check my progress** at the end of each task.

![Bouton bleu avec le texte « Check my progress » (Vérifier ma progression) en dessous d'un exemple de tâche.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/IbOfFeajT2q9yZWHyXxHOA_e8b0749220334c5aa3ac5f0aa7070ef1_kN58Isr_cUeyITXiw1gAqBQeWHP4UIaMnQbwyVY6sRQre_L0gtmYjALeqKvApc1L8XchdZeLsfUaNwA9aQZL0Kir1h0c8BJjGsKWq8mfHEmrS0pVNBb4h5c-3hJ-__kbwaa0LN5U8CbJBLlqWToABF0?expiry=1695686400000&hmac=AWi94nNPRs5faQAbfkUfwCHF77TjPG63qB9uCW9-qYE)

If you haven’t yet completed a task, you’ll receive hints on what you must do to complete it.

You can click **Check my progress** whenever you want to check the completion status of a task or receive a hint.

### **Using copy/paste commands**

The first time you try to use copy or paste keyboard shortcuts (such as **CTRL + C**), you’ll receive a pop-up requesting permission to use your device’s clipboard:  “**googlecoursera.qwiklabs.com wants to see text and images copied to the clipboard.**” Please click **Allow** if you would like to be able to use these shortcuts in the Qwiklabs platform. If you choose not to allow Qwiklabs access to your clipboard, you cannot use keyboard shortcuts but you can still complete the lab.

### **Code block**

Certain steps may include a code block. Click the copy button to copy the code provided and then paste it into the terminal.

![Deux rectangles superposés symbolisant l'action « Copier » dans un encadré rouge, à droite d'un exemple de bloc de code.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/tSaH4Zd2T9qHv2ALlr1fGA_a4c26fdc722a4b3c8f38f12e15c863f1_OhCX3BSN-yf0Nd8lnjLLk4t5hUVBbpR913lAp_yIdqsaOEgDIiV-p9N2nflw4o4ED_Fwxsg6Dez7gopRSYphMueEEoblkkIBY3ELnRDiqKhC6ZILGCJH1NSugmPxU2Y50M2sGk98kdv--GwRMchPRJU?expiry=1695686400000&hmac=ibRi_YmO9XthUmqSG6U9JGKZ6QZlaY85R9RhZFoPhUo)

To paste code or other text content that you have copied from the instructions into the terminal, activate the terminal by clicking anywhere inside it. The terminal is active when the cursor in the terminal changes from a static empty outline to a flashing solid block.

![Une invite avec un signe dollar et un curseur rectangulaire blanc encadrés en rouge dans le terminal.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/cgjBaqtES0ayrgvTCk3QZQ_25005fa6300f4d1ba01ef6a768097ef1_NCn3RU6ab8eSTxYYo2V1zh5y2ehRWaP-OavQGkZpJgxI-K-JeeIL5QSJCMqQqMQ-09eapv_GCAub7jZG6zmqX3VZ3Vx59qV_qXdJVo4LUqGW2kQz36DXIGk17rzkSmMmPvVRlrMp3nfeoC9dbYjk98Q?expiry=1695686400000&hmac=-Yh4I_VcrYgdqoYSFEe3CsikAl3uFNubr5MlQ0sfI3g)

Once the terminal is active, use the keyboard shortcut **CTRL + V** (hold down the **CTRL** key and press the **V** key) to insert the copied text into the terminal at the location of the flashing cursor.

### **Scrolling**

In certain situations, you may want to scroll within the terminal window. To do so, use the scroll wheel on your mouse or the touchpad of your computer.

### **End Lab button**

![Un bouton rouge avec le texte « End Lab » (Terminer l'atelier) dans un encadré rouge.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/dN9wPgYMQl2fBxFAffoZjw_38694553980f42cd94d8906a1f2d1bf1_Mfw27huMPvdOZI21TbioE29m49cakKuRkC3cEtNpIUkdnVMw7P8r1N9ETGXSSloVpG_zhsBqeA4uj7RTVMTFLChkhBUdF4yYkeIfa5Y42X6AWHf7HrQqiBm9sPcDBpY2pxdpvQVQRQSvbQbmCS43wY8?expiry=1695686400000&hmac=kgsOwmM0fGniVjRLB_a8zjWC4WKl2fce90YVPtFiHT4)

Finally, click **End Lab** when you’ve completed the tasks in the lab.

**Note**: Don't click **End Lab** until you're finished; you'll lose access to the work you've done throughout the lab.

### **Tracking progress on Coursera**

If you complete a lab but your progress hasn’t been tracked on Coursera, you may need to refresh the page for your progress to be registered. Once you complete the lab and refresh the page, the green check mark should appear.

## Helpful navigation tips and keyboard shortcuts

The following contains a list of navigation tips and keyboard shortcuts you may find useful when completing your Linux labs. Your cursor must be in the terminal window to use these navigation tips and keyboard shortcuts.

- CTRL + C: Terminates a command that is currently running; from the instructions portion of Qwiklabs, you can use CTRL + C to copy, but within the terminal, it will only terminate a command and if one isn't running, it will display ^C at the prompt
    
- CTRL + V: Pastes text
    
- clear: Clears the terminal screen; this can also be done by entering CTRL + L
    
- CTRL + A: Sets your cursor at the beginning of a command
    
- CTRL + E: Sets your cursor at the end of a command
    
- Left arrow **key**: Moves left within a command
    
- Right arrow **key**: Moves right within a command
    
- Up arrow **key**: Provides the last command you entered into the command line; can be entered multiple times to go through multiple commands from the command history
    
- Down arrow **key**: Provides the next command in the command history; must be after using the up arrow key
    
- Tab **key**: Provides available suggestions for completing your text
    

## Key takeaways

Knowing how to navigate Qwiklabs will be useful as you complete the labs throughout this course. These labs can help you practice what you’ve learned in an interactive environment.
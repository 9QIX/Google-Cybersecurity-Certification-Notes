# A proactive approach to security

- **Diverse Cyber Threats:** Different organizations and entities face varying types of threats based on their assets and defenses. Preparing for attacks involves understanding the specific risks associated with different targets.
- **Threat Modeling Definition:** **[[Threat modeling]]** is the process of identifying assets, their vulnerabilities, and the ways they are exposed to threats. It is a comprehensive security-related activity that can be applied to systems, applications, or business processes.
	- **Complex and Advanced Skill:** Creating threat models is a detailed and advanced security activity that usually involves a team of experienced professionals. It's considered an advanced skill in the field of cybersecurity.
	- **Threat Modeling Frameworks:** Several threat modeling frameworks are used in the industry, with each being more suitable for certain aspects of security, such as network security, information security, or application development.
- **Six Steps of Threat Modeling:**
	1. **[[Define Scope]]:** Determine the scope of the model by creating an inventory of assets and classifying them.
	2. **[[Identify Threats]]:** Define potential **threat actors**, characterizing them as internal or external.
		1. **[[threat actors]]** could be employees, hackers, or competing businesses. Internal or external.
		2. **[[Attack tree]]** - diagram that maps threats to assets. 
	3. **[[Characterize the Environment]]:** Adopt an attacker's perspective to understand how customers, employees, external partners, and vendors interact with the environment.
	4. **[[Analyze Threats]]:** Examine existing protections and identify gaps, ranking threats based on their risk scores.
	5. **[[Mitigate Risk]]:** Create a defense plan to mitigate threats, which may involve avoiding, transferring, reducing, or accepting risk.
	6. **[[Evaluate Findings]]:** Document all activities, implement necessary fixes, record successes, and note lessons learned for future threat modeling efforts.
- **Ongoing and Continuous Process:** Threat modeling is not a one-time task but a continuous and iterative process to ensure that an organization remains prepared and protected against evolving threats.

The video provides an overview of the threat modeling process and highlights that this is just one of many methods used in the field of cybersecurity to assess and mitigate threats.

# PASTA: The Process for Attack Simulation and Threat Analysis

- **[[PASTA Framework]]:** PASTA stands for "Process for Attack Simulation and Threat Analysis," and it is a widely used threat modeling framework in various industries.
- **Seven Stages of PASTA:**
	1. **[[Define Business and Security Objectives]]:** The first stage involves setting clear goals for the threat modeling exercise. In the example of the fitness company's mobile app, the main objective is protecting customer data.
	2. **[[Define Technical Scope]]:** In this stage, the focus is on identifying the components of the application that need evaluation, including the attack surface, such as network protocols and security controls.
	3. **[[Decompose the Application]]:** The team works on breaking down the application by identifying existing controls and producing a data flow diagram. This diagram helps visualize how data flows from users' devices to the company's database.
	4. **[[Threat Analysis]]:** The team collects up-to-date information on the types of attacks relevant to the application, considering various attack vectors used in mobile apps.
	5. **[[Vulnerability Analysis]]:** This stage involves a deeper investigation of potential vulnerabilities by addressing their root causes.
	6. **[[Attack Modeling]]:** The team simulates attacks based on the vulnerabilities analyzed in the previous stage. They create attack trees to map out attack vectors that need testing and validation.
	7. **[[Analyze Risk and Impact]]:** In the final stage, the team consolidates all the gathered information from the previous stages to make informed risk management recommendations to business stakeholders, aligning with the defined objectives.

The video successfully demonstrates how to apply the PASTA framework to assess and mitigate threats to a mobile app, ensuring the protection of customer data. This comprehensive threat modeling process aids organizations in enhancing their security measures effectively.

# Traits of an effective threat model

**Threat modeling** is the process of identifying assets, their vulnerabilities, and how each is exposed to threats. It is a strategic approach that combines various security activities, such as vulnerability management, threat analysis, and incident response. Security teams commonly perform these exercises to ensure their systems are adequately protected. Another use of threat modeling is to proactively find ways of reducing risks to any system or business process.

Traditionally, threat modeling is associated with the field of application development. In this reading, you will learn about common threat modeling frameworks that are used to design software that can withstand attacks. You'll also learn about the growing need for application security and ways that you can participate.

## Why application security matters

Applications have become an essential part of many organizations' success. For example, web-based applications allow customers from anywhere in the world to connect with businesses, their partners, and other customers.

Mobile applications have also changed the way people access the digital world. Smartphones are often the main way that data is exchanged between users and a business. The volume of data being processed by applications makes securing them a key to reducing risk for everyone who’s connected. 

For example, say an application uses Java-based logging libraries with the Log4Shell vulnerability ([CVE-2021-44228](https://nvd.nist.gov/vuln/detail/CVE-2021-44228)

). If it's not patched, this vulnerability can allow remote code execution that an attacker can use to gain full access to your system from anywhere in the world. If exploited, a critical vulnerability like this can impact millions of devices.

## Defending the application layer

Defending the application layer requires proper testing to uncover weaknesses that can lead to risk. Threat modeling is one of the primary ways to ensure that an application meets security requirements. A DevSecOps team, which stands for development, security, and operations, usually performs these analyses.

A typical threat modeling process is performed in a cycle:

- Define the scope
    
- Identify threats
    
- Characterize the environment
    
- Analyze threats
    
- Mitigate risks
    
- Evaluate findings
    

![Se muestran los seis pasos de un ejercicio de modelado de amenazas como un ciclo.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/jcxiyXGsSgiFzXVKEA2MlA_e5fb4921773047658ae29b53532617f1_IkNCZRnA8vFZL9bPa3yahdiNcz5YvwZzxcn1GyvaYWkF00CzvIWq3MkCyR_IgzOSs5bKO7iIiROjznDNMHk60Cun_ZP-OriA0rGw7gQqWHj-jiTAFPzddosn0AJ9zQxySZuHVXi856Oqf1ZWNZBt34U?expiry=1698019200000&hmac=CTaOijMdtG-JMBpoFJk3icCJC7pKwgiit5ALXYPVjOc)

Ideally, threat modeling should be performed before, during, and after an application is developed. However, conducting a thorough software analysis takes time and resources. Everything from the application's architecture to its business purposes should be evaluated. As a result, a number of threat-modeling frameworks have been developed over the years to make the process smoother. 

**Note:** Threat modeling should be incorporated at every stage of the software development lifecycle, or SDLC.

## Common frameworks

When performing threat modeling, there are multiple methods that can be used, such as:

- STRIDE
    
- PASTA
    
- Trike
    
- VAST
    

Organizations might use any one of these to gather intelligence and make decisions to improve their security posture. Ultimately, the “right” model depends on the situation and the types of risks an application might face.

### **STRIDE** 

STRIDE is a threat-modeling framework developed by Microsoft. It’s commonly used to identify vulnerabilities in six specific attack vectors. The acronym represents each of these vectors: spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.

### **PASTA**

The **Process of Attack Simulation and Threat Analysis** (PASTA) is a risk-centric threat modeling process developed by two OWASP leaders and supported by a cybersecurity firm called VerSprite. Its main focus is to discover evidence of viable threats and represent this information as a model. PASTA's evidence-based design can be applied when threat modeling an application or the environment that supports that application. Its seven stage process consists of various activities that incorporate relevant security artifacts of the environment, like vulnerability assessment reports.

### **Trike** 

Trike is an open source methodology and tool that takes a security-centric approach to threat modeling. It's commonly used to focus on security permissions, application use cases, privilege models, and other elements that support a secure environment.

### **VAST**

The Visual, Agile, and Simple Threat (VAST) Modeling framework is part of an automated threat-modeling platform called ThreatModeler®. Many security teams opt to use VAST as a way of automating and streamlining their threat modeling assessments.

## Participating in threat modeling

Threat modeling is often performed by experienced security professionals, but it’s almost never done alone. This is especially true when it comes to securing applications. Programs are complex systems responsible for handling a lot of data and processing  a variety of commands from users and other systems.

One of the keys to threat modeling is asking the right questions:

- What are we working on?
    
- What kinds of things can go wrong?
    
- What are we doing about it?
    
- Have we addressed everything?
    
- Did we do a good job?
    

It takes time and practice to learn how to work with things like data flow diagrams and attack trees. However, anyone can learn to be an effective threat modeler. Regardless of your level of experience, participating in one of these exercises always starts with simply asking the right questions.

## Key takeaways

Many people rely on software applications in their day to day lives. Securing the applications that people use has never been more important. Threat modeling is one of the main ways to determine whether security controls are in place to protect data privacy. Building the skills required to lead a threat modeling activity is a matter of practice. However, even a security analyst with little experience can be a valuable contributor to the process. It all starts with applying an attacker mindset and thinking critically about how data is handled.
# Cloud Network Security and Hardening:

In recent years, the adoption of cloud services by organizations has become increasingly prevalent. This shift necessitates a comprehensive approach to security, where not only on-premises networks but also cloud networks must be safeguarded. In the preceding video, we gained an understanding of what constitutes a cloud network—an assembly of servers or computers that store resources and data within a remote data center accessible via the internet. These cloud servers enable organizations to host their data and applications through cloud computing, offering the advantages of on-demand storage, processing power, and data analytics. Just as traditional web servers require rigorous maintenance, cloud servers also demand careful attention through various security hardening procedures. It is important to emphasize that while cloud servers are hosted by cloud service providers, these providers cannot entirely shield the cloud from intrusions, especially those stemming from malicious actors, both internal and external to an organization.

## Key Aspects of Cloud Network Security and Hardening:

### 1. [[Server Baseline Image]]:
A notable distinction between cloud network hardening and traditional network hardening lies in the utilization of a **server baseline image** for all server instances stored in the cloud. This practice involves creating a reference image that represents a securely configured server. By comparing the configuration of cloud servers to this baseline image, security analysts can identify any unauthorized or unverified changes. Any such alterations could potentially indicate an intrusion within the cloud network.
### 2. [[Segmentation and Isolation]]:
Similar to **[[OS hardening]]**, the principle of segmentation and isolation is applied to cloud networks. Data and applications within a cloud environment should be segregated based on their service category. For instance, older applications should be isolated from newer ones, and software handling internal functions should be separated from front-end applications accessible to users. This approach enhances security by minimizing the potential attack surface and limiting unauthorized access to critical resources.
### 3. [[Shared Responsibility Model]]:
In the context of cloud security, it is essential to understand the concept of a **shared responsibility model**. While cloud service providers bear responsibility for securing the underlying cloud infrastructure, organizations utilizing these services must also take proactive security measures. This shared responsibility encompasses aspects of cloud network operations, including access controls, data protection, and compliance with security best practices.

## Conclusion:

Securing cloud networks has become a paramount concern for organizations leveraging cloud services. Security analysts must adapt their practices to the unique characteristics of the cloud environment and implement robust security measures. Just as with traditional on-premises networks, the security of cloud networks is indispensable for protecting sensitive data, ensuring business continuity, and safeguarding against a wide range of security threats, both internal and external.

# Secure the cloud

Earlier in this course, you were introduced to [cloud computing](https://www.coursera.org/learn/networks-and-network-security/lecture/BGlnq/cloud-networks). **Cloud computing** is a model for allowing convenient and on-demand network access to a shared pool of configurable computing resources. These resources can be configured and released with minimal management effort or interaction with the service provider. 

Just like any other IT infrastructure, a cloud infrastructure needs to be secured. This reading will address some main security considerations that are unique to the cloud and introduce you to the shared responsibility model used for security in the cloud. Many organizations that use cloud resources and infrastructure express concerns about the privacy of their data and resources. This concern is addressed through cryptography and other additional security measures, which will be discussed later in this course.

## Cloud security considerations

Many organizations choose to use cloud services because of the ease of deployment, speed of deployment, cost savings, and scalability of these options. Cloud computing presents unique security challenges that cybersecurity analysts need to be aware of. 

### Identity access management

**[[Identity access management (IAM)]]** is a collection of processes and technologies that helps organizations manage digital identities in their environment. This service also authorizes how users can use different cloud resources. A common problem that organizations face when using the cloud is the loose configuration of cloud user roles. An improperly configured user role increases risk by allowing unauthorized users to have access to critical cloud operations. 

### Configuration

The number of available cloud services adds complexity to the network. Each service must be carefully configured to meet security and compliance requirements. This presents a particular challenge when organizations perform an initial migration into the cloud. When this change occurs on their network, they must ensure that every process moved into the cloud has been configured correctly. If network administrators and architects are not meticulous in correctly configuring the organization’s cloud services, they could leave the network open to compromise. Misconfigured cloud services are a common source of cloud security issues. 

### Attack surface 

**[[Cloud service providers (CSPs)]]** offer numerous applications and services for organizations at a low cost. 

Every service or application on a network carries its own set of risks and vulnerabilities and increases an organization’s overall **[[attack surface]]**. An increased attack surface must be compensated for with increased security measures.

Cloud networks that utilize many services introduce lots of entry points into an organization’s network. However, if the network is designed correctly, utilizing several services does not introduce more entry points into an organization’s network design. These entry points can be used to introduce malware onto the network and pose other security vulnerabilities. It is important to note that CSPs often defer to more secure options, and have undergone more scrutiny than a traditional on-premises network. 

### Zero-day attacks

**[[Zero-day attacks]]** are an important security consideration for organizations using cloud or traditional on-premise network solutions. A **zero day** attack is an exploit that was previously unknown. CSPs are more likely to know about a zero day attack occurring before a traditional IT organization does. CSPs have ways of patching hypervisors and migrating workloads to other virtual machines. These methods ensure the customers are not impacted by the attack. There are also several tools available for patching at the operating system level that organizations can use.

### Visibility and tracking 

Network administrators have access to every data packet crossing the network with both on-premise and cloud networks. They can sniff and inspect data packets to learn about network performance or to check for possible threats and attacks.

This kind of visibility is also offered in the cloud through flow logs and tools, such as packet mirroring. CSPs take responsibility for security in the cloud, but they do not allow the organizations that use their infrastructure to monitor traffic on the CSP’s servers. Many CSPs offer strong security measures to protect their infrastructure. Still, this situation might be a concern for organizations that are accustomed to having full access to their network and operations. CSPs pay for third-party audits to verify how secure a cloud network is and identify potential vulnerabilities. The audits can help organizations identify whether any vulnerabilities originate from on-premise infrastructure and if there are any compliance lapses from their CSP.

### Things change fast in the cloud

CSPs are large organizations that work hard to stay up-to-date with technology advancements. For organizations that are used to being in control of any adjustments made to their network, this can be a potential challenge to keep up with. Cloud service updates can affect security considerations for the organizations using them. For example, connection configurations might need to be changed based on the CSP’s updates. 

Organizations that use CSPs usually have to update their IT processes. It is possible for organizations to continue following established best practices for changes, configurations, and other security considerations. However, an organization might have to adopt a different approach in a way that aligns with changes made by the CSP. 

Cloud networking offers various options that might appear attractive to a small company—options that they could never afford to build on their own premises. However, it is important to consider that each service adds complexity to the security profile of the organization, and they will need security personnel to monitor all of the cloud services. 

## Shared responsibility model

A commonly accepted cloud security principle is the shared responsibility model. The **shared responsibility model** states that the CSP must take responsibility for security involving the cloud infrastructure, including physical data centers, hypervisors, and host operating systems. The company using the cloud service is responsible for the assets and processes that they store or operate in the cloud.

The shared responsibility model ensures that both the CSP and the users agree about where their responsibility for security begins and ends. A problem occurs when organizations assume that the CSP is taking care of security that they have not taken responsibility for. One example of this is cloud applications and configurations. The CSP takes responsibility for securing the cloud, but it is the organization’s responsibility to ensure that services are configured properly according to the security requirements of their organization. 

## Key takeaways

It is essential to know the security considerations that are unique to the cloud and understanding the shared responsibility model for cloud security. Organizations are responsible for correctly configuring and maintaining best security practices for their cloud services. The shared responsibility model ensures that both the CSP and users agree about what the organization is responsible for and what the CSP is responsible for when securing the cloud infrastructure.


# Cryptography and cloud security

Earlier in this course, you were introduced to the concepts of the shared responsibility model and identity and access management (IAM). Similar to on-premise networks, cloud networks also need to be secured through a mixture of security hardening practices and cryptography.

This reading will address common cloud security hardening practices, what to consider when implementing cloud security measures, and the fundamentals of cryptography. Since cloud infrastructure is becoming increasingly common, it’s important to understand how cloud networks operate and how to secure them.

## Cloud security hardening

There are various techniques and tools that can be used to secure cloud network infrastructure and resources. Some common cloud security hardening techniques include incorporating IAM, hypervisors, baselining, cryptography, and cryptographic erasure.

### Identity access management (IAM)

**[[Identity access management (IAM)]]** is a collection of processes and technologies that helps organizations manage digital identities in their environment. This service also authorizes how users can leverage different cloud resources.

### Hypervisors

A **[[hypervisor]]** abstracts the host’s hardware from the operating software environment. 

There are two types of hypervisors:
- Type one hypervisors run on the hardware of the host computer. An example of a type one hypervisor is VMware®'s EXSi. 
- Type two hypervisors operate on the software of the host computer. An example of a type two hypervisor is VirtualBox. Cloud service providers (CSPs) commonly use type one hypervisors. 
  
CSPs are responsible for managing the hypervisor and other virtualization components. The CSP ensures that cloud resources and cloud environments are available, and it provides regular patches and updates. Vulnerabilities in hypervisors or misconfigurations can lead to virtual machine escapes (VM escapes). A VM escape is an exploit where a malicious actor gains access to the primary hypervisor, potentially the host computer and other VMs. As a CSP customer, you will rarely deal with hypervisors directly.

### Baselining

**[[Baselining]]** for cloud networks and operations cover how the cloud environment is configured and set up. A baseline is a fixed reference point. This reference point can be used to compare changes made to a cloud environment. Proper configuration and setup can greatly improve the security and performance of a cloud environment. Examples of establishing a baseline in a cloud environment include: restricting access to the admin portal of the cloud environment, enabling password management, enabling file encryption, and enabling threat detection services for SQL databases.

## Cryptography in the cloud

**[[Cryptography]]** can be applied to secure data that is processed and stored in a cloud environment. Cryptography uses encryption and secure key management systems to provide data integrity and confidentiality. Cryptographic encryption is one of the key ways to secure sensitive data and information in the cloud.

**[[Encryption]]** is the process of scrambling information into ciphertext, which is not readable to anyone without the encryption key. Encryption primarily originated from manually encoding messages and information using an algorithm to convert any given letter or number to a new value. Modern encryption relies on the secrecy of a key, rather than the secrecy of an algorithm. Cryptography is an important tool that helps secure cloud networks and data at rest to prevent unauthorized access. You’ll learn more about cryptography in-depth in an upcoming course.

## Cryptographic erasure

**[[Cryptographic erasure]]** is a method of erasing the encryption key for the encrypted data. When destroying data in the cloud, more traditional methods of data destruction are not as effective.

**[[Crypto-shredding]]** is a newer technique where the cryptographic keys used for decrypting the data are destroyed. This makes the data undecipherable and prevents anyone from decrypting the data. When crypto-shredding, all copies of the key need to be destroyed so no one has any opportunity to access the data in the future.

## Key Management

Modern encryption relies on keeping the encryption keys secure. Below are the measures you can take to further protect your data when using cloud applications:

- **[[Trusted platform module (TPM)]]**. TPM is a computer chip that can securely store passwords, certificates, and encryption keys.
- **[[Cloud hardware security module (CloudHSM)]]**. CloudHSM is a computing device that provides secure storage for cryptographic keys and processes cryptographic operations, such as encryption and decryption.

Organizations and customers do not have access to the cloud service provider (CSP) directly, but they can request audits and security reports by contacting the CSP. Customers typically do not have access to the specific encryption keys that CSPs use to encrypt the customers’ data. However, almost all CSPs allow customers to provide their own encryption keys, depending on the service the customer is accessing. In turn, the customer is responsible for their encryption keys and ensuring the keys remain confidential. The CSP is limited in how they can help the customer if the customer’s keys are compromised or destroyed. One key benefit of the shared responsibility model is that the customer is not entirely responsible for maintenance of the cryptographic infrastructure. Organizations can assess and monitor the risk involved with allowing the CSP to manage the infrastructure by reviewing a CSPs audit and security controls. For federal contractors, FEDRAMP provides a list of verified CSPs.

## Key takeaways

Cloud security hardening is a critical component to consider when assessing the security of various public cloud environments and improving the security within your organization. Identity access management (IAM), correctly configuring a baseline for the cloud environment, securing hypervisors, cryptography, and cryptographic erasure are all methods to use to further secure cloud infrastructure.
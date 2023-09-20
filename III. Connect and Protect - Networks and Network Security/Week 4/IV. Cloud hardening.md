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

**Identity access management (IAM)** is a collection of processes and technologies that helps organizations manage digital identities in their environment. This service also authorizes how users can use different cloud resources. A common problem that organizations face when using the cloud is the loose configuration of cloud user roles. An improperly configured user role increases risk by allowing unauthorized users to have access to critical cloud operations. 

### Configuration

The number of available cloud services adds complexity to the network. Each service must be carefully configured to meet security and compliance requirements. This presents a particular challenge when organizations perform an initial migration into the cloud. When this change occurs on their network, they must ensure that every process moved into the cloud has been configured correctly. If network administrators and architects are not meticulous in correctly configuring the organization’s cloud services, they could leave the network open to compromise. Misconfigured cloud services are a common source of cloud security issues. 

### Attack surface 

Cloud service providers (CSPs) offer numerous applications and services for organizations at a low cost. 

Every service or application on a network carries its own set of risks and vulnerabilities and increases an organization’s overall attack surface. An increased attack surface must be compensated for with increased security measures.

Cloud networks that utilize many services introduce lots of entry points into an organization’s network. However, if the network is designed correctly, utilizing several services does not introduce more entry points into an organization’s network design. These entry points can be used to introduce malware onto the network and pose other security vulnerabilities. It is important to note that CSPs often defer to more secure options, and have undergone more scrutiny than a traditional on-premises network. 

### Zero-day attacks

Zero-day attacks are an important security consideration for organizations using cloud or traditional on-premise network solutions. A **zero day** attack is an exploit that was previously unknown. CSPs are more likely to know about a zero day attack occurring before a traditional IT organization does. CSPs have ways of patching hypervisors and migrating workloads to other virtual machines. These methods ensure the customers are not impacted by the attack. There are also several tools available for patching at the operating system level that organizations can use.

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
# The role of triage in incident response

- **Triage in Medicine:** In a hospital emergency department, patients are triaged to categorize them based on the urgency of their medical conditions. Patients with life-threatening conditions receive immediate medical attention, while those with non-life-threatening issues may need to wait. Triage helps manage limited medical resources effectively.
- **Triage in Security:** **[[Triage]]** is also applied in the field of security. Before an alert is escalated, it goes through a triage process to determine its level of importance or urgency. Security teams have limited resources available for incident response, and not all incidents are equal. Incidents are triaged based on the threat they pose to the confidentiality, integrity, and availability of systems.
	- **Prioritizing Incidents:** Security analysts prioritize incidents according to their urgency. For example, an incident involving ransomware is given a higher priority than an incident such as an employee receiving a phishing email, as ransomware can cause significant financial, reputational, and operational damage.
- **When Triage Occurs:** Triage begins as soon as an incident is detected and an alert is sent out. Security analysts identify various alert types and prioritize them based on organizational policies and guidelines. The assigned priority level defines the organization's response to the incident.
	- **Triage Process:** The triage process typically includes the following steps:
		1. **[[Receive and assess]]** the alert to determine if it's a false positive or if it's related to an existing incident.
		2. **[[Assign priority]]** level to the alert based on organizational guidelines.
		3. Investigate the alert, **[[collect and analyze]]** evidence, such as system logs.
	- **Questions to ask:**
		- Is there anything out of the ordinary?
		- Are there multiple login attempts?
		- Did the login happen outside of normal working hours?
		- Did the login happen outside of the network?
- **Importance of Context:** Security analysts should conduct a thorough analysis to make informed decisions about their findings. Adding context to an investigation is crucial to determine whether an alert is malicious. Questions such as whether there were multiple failed login attempts, whether the login occurred outside of normal working hours or the network, help build a complete picture of the incident. This prevents making assumptions that could lead to incomplete or incorrect conclusions.

Triage is a vital step in the incident response process, helping security teams make informed decisions about how to allocate their resources effectively and respond to incidents based on their level of importance and urgency.

# The triage process

Previously, you learned that triaging is used to assess alerts and assign priority to incidents. In this reading, you'll explore the triage process and its benefits. As a security analyst, you'll be responsible for analyzing security alerts. Having the skills to effectively triage is important because it allows you to address and resolve security alerts efficiently.

## Triage process

Incidents can have the potential to cause significant damage to an organization. Security teams must respond quickly and efficiently to prevent or limit the impact of an incident before it becomes too late. **[[Triage]]** is the prioritizing of incidents according to their level of importance or urgency. The triage process helps security teams evaluate and prioritize security alerts and allocate resources effectively so that the most critical issues are addressed first.

The triage process consists of three steps:

1. Receive and assess 
2. Assign priority 
3. Collect and analyze

### **Receive and assess**

During this first step of the triage process, a security analyst receives an alert from an alerting system like an **intrusion detection system** (IDS). You might recall that an IDS is an application that monitors system activity and alerts on possible intrusions. The analyst then reviews the alert to verify its validity and ensure they have a complete understanding of the alert. 

This involves gathering as much information as possible about the alert, including details about the activity that triggered the alert, the systems and assets involved, and more. Here are some questions to consider when verifying the validity of an alert: 

- **Is the alert a false positive?** Security analysts must determine whether the alert is a genuine security concern or a **false positive**, or an alert that incorrectly detects the presence of a threat.
- **Was this alert triggered in the past?** If so, how was it resolved? The history of an alert can help determine whether the alert is a new or recurring issue. 
- **Is the alert triggered by a known vulnerability?** If an alert is triggered by a known vulnerability, security analysts can leverage existing knowledge to determine an appropriate response and minimize the impact of the vulnerability. 
- **What is the severity of the alert?** The severity of an alert can help determine the priority of the response so that critical issues are quickly escalated.

### **Assign priority** 

Once the alert has been properly assessed and verified as a genuine security issue, it needs to be prioritized accordingly. Incidents differ in their impact, size, and scope, which affects the response efforts. To manage time and resources, security teams must prioritize how they respond to various incidents because not all incidents are equal. Here are some factors to consider when determining the priority of an incident:

- **[[Functional impact]]:** Security incidents that target information technology systems impact the service that these systems provide to its users. For example, a ransomware incident can severely impact the confidentiality, availability, and integrity of systems. Data can be encrypted or deleted, making it completely inaccessible to users. Consider how an incident impacts the existing business functionality of the affected system.
- **[[Information impact]]:** Incidents can affect the confidentiality, integrity, and availability of an organization’s data and information. In a data exfiltration attack, malicious actors can steal sensitive data. This data can belong to third party users or organizations. Consider the effects that information compromise can have beyond the organization. 
- **[[Recoverability]]:** How an organization recovers from an incident depends on the size and scope of the incident and the amount of resources available. In some cases, recovery might not be possible, like when a malicious actor successfully steals proprietary data and shares it publicly. Spending time, effort, and resources on an incident with no recoverability can be wasteful. It’s important to consider whether recovery is possible and consider whether it’s worth the time and cost.

**Note**: Security alerts often come with an assigned priority or severity level that classifies the urgency of the alert based on a level of prioritization. 

### **Collect and analyze**

The final step of the triage process involves the security analyst performing a comprehensive analysis of the incident. **[[Analysis]]** involves gathering evidence from different sources, conducting external research, and documenting the investigative process. The goal of this step is to gather enough information to make an informed decision to address it. Depending on the severity of the incident, escalation to a level two analyst or a manager might be required. Level two analysts and managers might have more knowledge on using advanced techniques to address the incident. 

## Benefits of triage

By prioritizing incidents based on their potential impact, you can reduce the scope of impact to the organization by ensuring a timely response. Here are some benefits that triage has for security teams: 

- **[[Resource management]]:** Triaging alerts allows security teams to focus their resources on threats that require urgent attention. This helps team members avoid dedicating time and resources to lower priority tasks and might also reduce response time.
- **[[Standardized approach]]:** Triage provides a standardized approach to incident handling. Process documentation, like playbooks, help to move alerts through an iterative process to ensure that alerts are properly assessed and validated. This ensures that only valid alerts are moved up to investigate.

## Key takeaways

Triage allows security teams to prioritize incidents according to their level of importance or urgency. The triage process is important in ensuring that an organization meets their incident response goals. As a security professional, you will likely utilize triage to effectively respond to and resolve security incidents.

# The containment, eradication, and recovery phase of the lifecycle

The third phase of the incident response lifecycle involves containing, eradicating, and recovering from an incident. These steps are essential for managing and mitigating the impact of a security incident. Here's a summary of the key points from the video:

- **[[Containment]]:** Containment is the first step after detecting an incident. It involves limiting and preventing additional damage caused by the incident. Organizations outline their containment strategies in their incident response plans. Different strategies are used for various types of incidents. 
	- For example, in the case of a malware incident on a single computer system, a common containment strategy is to isolate the affected system by disconnecting it from the network. This prevents the malware from spreading to other systems, limiting further damage.
- **[[Eradication]]:** Once containment is in place, the next step is eradication. Eradication involves the complete removal of incident elements from all affected systems. 
	- This may involve actions such as performing vulnerability tests, applying patches to vulnerabilities related to the threat, and ensuring that no traces of the incident remain in the environment.
- **[[Recovery]]:** Recovery is the final step in this phase. It focuses on returning affected systems to normal operations. Incidents can disrupt key business operations and services, so during the recovery phase, any services impacted by the incident are brought back to normal operation. 
	- Recovery actions may include reimaging affected systems, resetting passwords, and adjusting network configurations, such as firewall rules.
- **[[Cyclical Nature]]:** It's important to remember that the incident response lifecycle is cyclical. Multiple incidents can occur over time, and some incidents may be related. Security teams may need to revisit previous phases of the lifecycle to conduct additional investigations or take further actions. The goal is to continually improve incident response and learn from each incident to enhance the organization's security posture.

This phase of the incident response lifecycle is crucial for minimizing the impact of security incidents and restoring normal operations as efficiently as possible. It aligns with the core functions of the NIST Cybersecurity Framework, Respond (containment and eradication) and Recover (recovery), which help organizations effectively manage and recover from security incidents.

# Business continuity considerations

Previously, you learned about how security teams develop incident response plans to help ensure that there is a prepared and consistent process to quickly respond to security incidents. In this reading, you'll explore the importance that business continuity planning has in recovering from incidents.

## Business continuity planning

Security teams must be prepared to minimize the impact that security incidents can have on their normal business operations. When an incident occurs, organizations might experience significant disruptions to the functionality of their systems and services. Prolonged disruption to systems and services can have serious effects, causing legal, financial, and reputational damages. Organizations can use business continuity planning so that they can remain operational during any major disruptions.

Similar to an incident response plan, a **[[business continuity plan (BCP)]]** is a document that outlines the procedures to sustain business operations during and after a significant disruption. A BCP helps organizations ensure that critical business functions can resume or can be quickly restored when an incident occurs.

Entry level security analysts aren't typically responsible for the development and testing of a BCP. However, it's important that you understand how BCPs provide organizations with a structured way to respond and recover from security incidents.

**Note**: Business continuity plans are not the same as _disaster recovery plans_. **[[Disaster recovery plans]]** are used to recover information systems in response to a major disaster. These disasters can range from hardware failure to the destruction of facilities from a natural disaster, like a flood. 

### **Consider the impacts of ransomware to business continuity**

Impacts of a security incident such as ransomware can be devastating for business operations. Ransomware attacks targeting critical infrastructure such as healthcare can have the potential to cause significant disruption. Depending on the severity of a ransomware attack, the accessibility, availability, and delivery of essential healthcare services can be impacted. For example, ransomware can encrypt data, resulting in disabled access to medical records, which prevents healthcare providers from accessing patient records. At a larger scale, security incidents that target the assets, systems, and networks of critical infrastructure can also undermine national security, economic security, and the health and safety of the public. For this reason, BCPs help to minimize interruptions to operations so that essential services can be accessed.

### **Recovery strategies** 

When an outage occurs due to a security incident, organizations must have some sort of a functional recovery plan set to resolve the issue and get systems fully operational. BCPs can include strategies for recovery that focus on returning to normal operations. Site resilience is one example of a recovery strategy. 

### **Site resilience** 

**[[Resilience]]** is the ability to prepare for, respond to, and recover from disruptions. Organizations can design their systems to be resilient so that they can continue delivering services despite facing disruptions. An example is **[[site resilience]]**, which is used to ensure the availability of networks, data centers, or other infrastructure when a disruption happens. There are three types of recovery sites used for site resilience:

- **[[Hot sites]]**: A fully operational facility that is a duplicate of an organization's primary environment. Hot sites can be activated immediately when an organization's primary site experiences failure or disruption.
- **[[Warm sites]]**: A facility that contains a fully updated and configured version of the hot site. Unlike hot sites, warm sites are not fully operational and available for immediate use but can quickly be made operational when a failure or disruption occurs.
- **[[Cold sites]]**: A backup facility equipped with some of the necessary infrastructure required to operate an organization's site. When a disruption or failure occurs, cold sites might not be ready for immediate use and might need additional work to be operational.

## Key takeaways

Security incidents have the potential to seriously disrupt business operations. Having the right plans in place is essential so that organizations can continue to function. Business continuity plans help organizations understand the impact that serious security incidents can have on their operations and work to mitigate these impacts so that regular operations can resume.
# Introduction to the incident response lifecycle

- **Incident Response Frameworks:** Incident response frameworks provide a structured approach for organizations to handle security incidents effectively. They help in standardizing the incident response process, ensuring consistency and efficiency.
- **NIST CSF Core Functions:** The NIST CSF consists of five core functions: identify, protect, detect, respond, and recover. The video concentrates on the last three functions: detect, respond, and recover. These functions are crucial during the incident response process.
- **[[NIST Incident Response Lifecycle]]:** The NIST incident response lifecycle consists of several phases, which include 
	- Preparation
	- Detection and analysis
	- Containment, eradication and recovery
	- Post-incident activity
- Importantly, this lifecycle is ***cyclical***, allowing for overlapping steps as new information emerges.
- **Understanding Incidents:** The video provides a definition of an incident according to NIST. An **[[incident]]** is an occurrence that threatens the confidentiality, integrity, or availability of information or an information system without lawful authority. It can also involve violations or imminent threats to security policies, procedures, or acceptable use policies.
	- **Events vs. Security Incidents:** **[[Events]]** are observable occurrences, whereas security incidents involve unlawful actions, policy violations, or actions that threaten information systems' security. The video illustrates the difference with an example involving password resets.
- **[[Incident Investigation]]:** Just as detectives carefully handle and document evidence in a case, security analysts must do the same when investigating security incidents. 
	- An incident investigation aims to determine: 
		- Who triggered the incident
		- What happened
		- When the incident took place 
		- Where the incident took place
		- Why the incident occurred
- **[[Incident Handler's Journal]]:** To facilitate organized documentation of incident details, the video recommends using an incident handler's journal. This journal helps security analysts record vital information during incident response and investigation.

The video provides an in-depth understanding of incident response frameworks, with a focus on the NIST CSF and the cyclical nature of the NIST incident response lifecycle. It also underscores the significance of clear incident definitions and thorough documentation in the incident response process.

# Apply the NIST lifecycle to a vishing scenario

## Vishing attack: how to respond?

- ### [[Preparation]]: the planning and training process
	- The organization takes action to ensure it has the correct tools and resources in place:
		- Set up uniform company email conventions
		- Create a collaborative, ethical environment where employees feel comfortable asking questions
		- Provide cybersecurity training on a quarterly basis
- ### [[Detection and analysis]]: the detect and assess process
	- Security professionals create processes to detect and assess incidents:
		- Identify signs of an incident
		- Filter external emails to flag messages containing attachments such as voicemails
		- Have an incident response plan to reference
- ### [[Containment, eradication, and recovery]]: the minimize and mitigate process
	- Security professionals and stakeholders collaborate to minimize the impact of the incident and mitigate any operational disruption.
		- Communicate with sender to confirm the origin of the voice message
		- Provide employees with an easy way to report and contain suspicious messages
- ### [[Post-incident activity]]: the learning process
	- New protocols, procedures, playbooks, etc. are implemented to help reduce any similar incidents in the future.
		- Update the playbook to highlight additional red flags employees should be aware of
		- Review processes and workflows related to permissions and adjust oversight of those permissions
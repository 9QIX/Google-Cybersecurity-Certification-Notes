### Hypervisors

A **[[hypervisor]]** abstracts the host’s hardware from the operating software environment. 

There are two types of hypervisors:
- Type one hypervisors run on the hardware of the host computer. An example of a type one hypervisor is VMware®'s EXSi. 
- Type two hypervisors operate on the software of the host computer. An example of a type two hypervisor is VirtualBox. Cloud service providers (CSPs) commonly use type one hypervisors. 
  
CSPs are responsible for managing the hypervisor and other virtualization components. The CSP ensures that cloud resources and cloud environments are available, and it provides regular patches and updates. Vulnerabilities in hypervisors or misconfigurations can lead to virtual machine escapes (VM escapes). A VM escape is an exploit where a malicious actor gains access to the primary hypervisor, potentially the host computer and other VMs. As a CSP customer, you will rarely deal with hypervisors directly.
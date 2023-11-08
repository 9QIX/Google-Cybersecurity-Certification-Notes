The UDM Search is the default search type used in Chronicle. You can perform a UDM search by typing your search, clicking on “Search,” and selecting “UDM Search.” Through a UDM Search, Chronicle searches security data that has been ingested, parsed, and normalized. A UDM Search retrieves search results faster than a Raw Log Search because it searches through indexed and structured data that’s normalized in UDM.

![[Pasted image 20231107212128.png]]

A UDM Search retrieves events formatted in UDM and these events contain UDM fields. There are many different types of UDM fields that can be used to query for specific information from an event. Discussing all of these UDM fields is beyond the scope of this reading, but you can learn more about UDM fields by exploring [Chronicle's UDM field list](https://cloud.google.com/chronicle/docs/reference/udm-field-list). Know that all UDM events contain a set of common fields including:

- **Entities**: Entities are also known as nouns. All UDM events must contain at least one entity. This field provides additional context about a device, user, or process that’s involved in an event. For example, a UDM event that contains entity information includes the details of the origin of an event such as the hostname, the username, and IP address of the event
- **Event metadata**: This field provides a basic description of an event, including what type of event it is, timestamps, and more. 
- **Network metadata**: This field provides information about network-related events and protocol details. 
- **Security results**: This field provides the security-related outcome of events. An example of a security result can be an antivirus software detecting and quarantining a malicious file by reporting "virus detected and quarantined." 

Here’s an example of a simple UDM search that uses the event metadata field to locate events relating to user logins:

`metadata.event_type = “USER_LOGIN” `

- `metadata.event_type = “USER_LOGIN”`: This UDM field `metadata.event_type` contains information about the event type. This includes information like timestamp, network connection, user authentication, and more. Here, the event type specifies `USER_LOGIN`, which searches for events relating to authentication. 

Using just the metadata fields, you can quickly start searching for events. As you continue practicing searching in Chronicle using UDM Search, you will encounter more fields. Try using these fields to form specific searches to locate different events.
## Intrusion Prevention System

An **[[intrusion prevention system (IPS)]]** is an application that monitors system activity for intrusive activity and takes action to stop the activity. It offers even more protection than an IDS because it actively stops anomalies when they are detected, unlike the IDS that simply reports the anomaly to a network administrator.

An IPS searches for signatures of known attacks and data anomalies. An IPS reports the anomaly to security analysts and blocks a specific sender or drops network packets that seem suspect. 

![Un IPS está situado entre un firewall y la red interna.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/sp1NiS2HR3KoLCBP36lq3g_f612a9b5e6cc47b2a9341208200b3ff1_CS_R-055_IPS.png?expiry=1695340800000&hmac=kercme9TJtF8CS-uoxOOWIjriEte7XefaGSc2pJdxpg)

The IPS (like an IDS) sits behind the firewall in the network architecture. This offers a high level of security because risky data streams are disrupted before they even reach sensitive parts of the network. However, one potential limitation is that it is inline: If it breaks, the connection between the private network and the internet breaks. Another limitation of IPS is the possibility of false positives, which can result in legitimate traffic getting dropped.
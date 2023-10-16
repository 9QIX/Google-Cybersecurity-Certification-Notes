- **[[Server-Side Request Forgery]]:** Allows attackers to manipulate a server-side application into accessing and updating backend resources. It can also allow threat actors to steal data.

### **[[Server-side request forgery]]**

Companies have public and private information stored on web servers. When you use a hyperlink or click a button on a website, a request is sent to a server that should validate who you are, fetch the appropriate data, and then return it to you.

![Un hacker que utiliza la computadora de su víctima para robar datos de un servidor web.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/DT6Hkom1RcugsbS_BFgoLw_7e1de97a7fdc4e00b7c9b14a0ad5fcf1_Pfjezx6XbwJ_TAJbWmCtLMpwLX4YD2xP4Se2IJeQF4uTD6BtqNXlcpObbGHeJuzWlxr5A3WqWQzZ2K6E6kFLsX3JiI0bxbFtWFjNUCxZTgs7ftpEgVEcI87zvBxN2flvGXs37nW_RJF0QVLY7798FCXB9pAH_uUI3zYLbXOiOpGcdhti00aMTwl7xbMFpg?expiry=1697587200000&hmac=ty90OVJKfQHBgiPwOrjHGScUHqQOyH0eQakg6r9Ubwc)

Server-side request forgeries (SSRFs) are when attackers manipulate the normal operations of a server to read or update other resources on that server. These are possible when an application on the server is vulnerable. Malicious code can be carried by the vulnerable app to the host server that will fetch unauthorized data.
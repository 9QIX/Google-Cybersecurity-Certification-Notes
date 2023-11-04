**[[Common Event Format (CEF)]]** is a log format that uses key-value pairs to structure data and identify fields and their corresponding values. The CEF syntax is defined as containing the following fields: 

```CSV
CEF:Version|Device Vendor|Device Product|Device Version|Signature ID|Name|Severity|Extension 
```

Fields are all separated with a pipe character |. However, anything in the Extension part of the CEF log entry must be written in a key-value format. Syslog is a common method used to transport logs like CEF. When Syslog is used a timestamp and hostname will be prepended to the CEF message. Here is an example of a CEF log entry that details malicious activity relating to a worm infection:

```CSV
Sep 29 08:26:10 host CEF:1|Security|threatmanager|1.0|100|worm successfully stopped|10|src=10.0.0.2 dst=2.1.2.2 spt=1232
```

Here is a breakdown of the fields:

- **Syslog Timestamp**: `Sep 29 08:26:10`
- **Syslog Hostname**: `host`
- **Version**: `CEF:1`
- **Device Vendor**: `Security`
- **Device Product**: `threatmanager`
- **Device Version**: `1.0`
- **Signature ID**: `100`
- **Name**: `worm successfully stopped`
- **Severity**: `10`
- **Extension**: This field contains data written as key-value pairs. There are two IP addresses, `src=10.0.0.2` and `dst=2.1.2.2`, and a source port number `spt=1232`. Extensions are not required and are optional to add.

This log entry contains details about a `Security` application called `threatmanager` that `successfully stopped a worm` from spreading from the internal network at `10.0.0.2` to the external network `2.1.2.2` through the port `1232`. A high severity level of `10` is reported.

**Note**: Extensions and syslog prefix are optional to add to a CEF log.
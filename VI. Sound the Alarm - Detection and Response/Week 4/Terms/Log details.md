Generally, logs contain a date, time, location, action, and author of the action. Here is an example of an authentication log:

`Login Event [05:45:15] User1 Authenticated successfully`

Logs contain information and can be adjusted to contain even more information. Verbose logging records additional, detailed information beyond the default log recording. Here is an example of the same log above but logged as verbose.

`Login Event [2022/11/16 05:45:15.892673] auth_performer.cc:470 User1 Authenticated successfully from device1 (192.168.1.2)`
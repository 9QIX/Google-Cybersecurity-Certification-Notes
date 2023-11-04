XML **[[elements]]** include _both_ the data contained inside of a tag and the tags itself. All XML entries must contain at least one root element. Root elements contain other elements that sit underneath them, known as child elements. 

Here is an example:

```XML
<Event> 
	<EventID>4688</EventID> 
	<Version>5</Version> 
</Event>
```

In this example, `<Event>` is the root element and contains two child elements `<EventID>` and `<Version>`. There is data contained in each respective child element.
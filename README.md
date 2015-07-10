# TypeWriter
This is a javascript function based on JQuery to implement a basic typewriter animation for html.

##Tutorial:
- Include JQuery
- Include the typewriter.js
- Execute the typeOut(selector, delay) function

##Usage:
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="typewriter.js"></script>
    
<script>
    $(function(){
        typeOut("#text", 10);
    });
</script>

<div id="text">
    Some <b>HTML</b> <i>text</i> here...
</div>
```

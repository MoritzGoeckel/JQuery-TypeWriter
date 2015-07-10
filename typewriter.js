function typeOut(selector, speed){
    var text = $(selector).html();

    var chars = new Array();

    var tag = "";
    $.each(text.split(''), function(i, letter){

        if(letter == "<" || tag != ""){
            tag += letter;
        }

        if(letter == ">" && tag != ""){
            chars.push(tag);
            tag = "";
        }

        if(letter != "<" && letter != ">" && tag == ""){
            if(letter != " " || chars[chars.length - 1] != " ")
                chars.push(letter);
        }
    });

    console.log(chars);

    $(selector).html("");
    setTimeout(function(){
        writeout(selector, 0, chars)
    }, speed);


    function writeout(selector, element, chars){
        var html = "";
        for(var i = 0; i < element; i++)
            html += chars[i];

        $(selector).html(html);

        if(element + 1 < chars.length)
            setTimeout(function(){
                writeout(selector, element + 1, chars)
            }, speed);
    }
}

var fortunes = [
    "Moo",
    "This fortune is longer than 30 characters, and should be wrapped in the console.",
    "moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo moo",
    "MOO!"
]

function output () {
    var randomInt = Math.floor( Math.random() * 5);
    
    var msg = fortunes[randomInt];
    
    if (msg.length > 30) {
        var words = msg.split(' ');
        var newMsg = '';
        
        for (var i = 0; i < words.length; i++) {
            var lastLineLength = newMsg.length + words[i].length - newMsg.lastIndexOf('\n') + 1;
            
            if (lastLineLength <= 30) {
                newMsg += " " + words[i];
            }
            else {
                newMsg += "|\n" + words[i];
            }
        }
        
        console.log(newMsg);
    }
    else {
        console.log(msg);
    }
}

output();
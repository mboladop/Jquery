$(document).ready(function() {
    $("#myParagraph").click(function(){
        for (let i=1; i<=10; i++) {
            $("#myParagraph").append("<p>This is paragraph number "+ i + "</p>"); 
        }
    })


})
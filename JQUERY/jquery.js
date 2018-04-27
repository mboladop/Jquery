$(document).ready(function() {
    $("#myParagraph").click(function() {
        for (let i = 1; i <= 10; i++) {
            $("#myParagraph").append("<p>This is paragraph number " + i + "</p>");
        }
    })
    
    $("img").click(function() {
            $("[alt='change me']").attr("src", "../img/1.png");
        })
    
   
    $(".switches").click(function() {
     
       $(".switchOff1").attr("src", "../img/switch_on.png");
       $(".light1").attr("src", "../imgbulb/bulbon.gif");
       $(".switchOff2").attr("src", "../img/switch_on.png");
       $(".light2").attr("src", "../imgbulb/bulbon.gif");
       $(".switchOff3").attr("src", "../img/switch_on.png");
       $(".light3").attr("src", "../imgbulb/bulbon.gif");
        
        
    })    
        
})

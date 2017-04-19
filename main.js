
$(document).ready(function(){
//---index Page Start---// 

    $("#SubmitButton").hover(function(){
    

if( $('#EmailField').val() == "" ) {
         
         $("#EmailField:first").css({"border": "1px solid #ff0000"});
         //$("#SubmitButton:first").removeClass("hvr-grow-shadow");
         $("#SubmitButton:first").addClass("hvr-buzz-out");
        }
else{
   
   $("#SubmitButton:first").removeClass("hvr-buzz-out");
   $("#SubmitButton:first").addClass("hvr-grow-shadow");
}
        }, function(){
          $("#EmailField:first").css({"border": ""});
        $("#SubmitButton:first").removeClass("hvr-buzz-out");
    });

//---index Page Ends---//

//---ImportVideo Page Start//

$("#ImportButton").hover(function(){
    

if( $('#ImportField').val() == "" ) {
         
         $("#ImportField:first").css({"border": "1px solid #ff0000"});
         //$("#SubmitButton:first").removeClass("hvr-grow-shadow");
         $("#ImportButton:first").addClass("hvr-buzz-out");
        }
else{
   
   $("#ImportButton:first").removeClass("hvr-buzz-out");
   $("#ImportButton:first").addClass("hvr-grow-shadow");
}
        }, function(){
          $("#ImportField:first").css({"border": ""});
        $("#ImportButton:first").removeClass("hvr-buzz-out");
    });


//---ImportVideo Page Ends//

//--ImportVideo2 Page Starts//

$("#ImportButton1").hover(function(){
    

if( $('#ImportField1').val() == "" ) {
         
         $("#ImportField1:first").css({"border": "1px solid #ff0000"});
         //$("#SubmitButton:first").removeClass("hvr-grow-shadow");
         $("#ImportButton1:first").addClass("hvr-buzz-out");
        }
else{
   
   $("#ImportButton1:first").removeClass("hvr-buzz-out");
   $("#ImportButton1:first").addClass("hvr-grow-shadow");
}
        }, function(){
          $("#ImportField1:first").css({"border": ""});
        $("#ImportButton1:first").removeClass("hvr-buzz-out");
    });




//---ImportVideo2 Page Ends//


//---Add Cta page Start---//

$("#DoneButton").hover(function(){
    
    if( ($('#EmailField').val() == "")  && ($('#WebsiteField').val() == "" ) ) {
         
         $("#EmailField:first").css({"border": "1px solid #ff0000"});
         $("#WebsiteField:first").css({"border": "1px solid #ff0000"});
         //$("#SubmitButton:first").removeClass("hvr-grow-shadow");
         $("#DoneButton:first").addClass("hvr-buzz-out");
        }

        else if( $('#EmailField').val() == "" ) {
         
         $("#EmailField:first").css({"border": "1px solid #ff0000"});
         //$("#SubmitButton:first").removeClass("hvr-grow-shadow");
         $("#DoneButton:first").addClass("hvr-buzz-out");
        }
        else if( $('#WebsiteField').val() == "" ) {
         
         $("#WebsiteField:first").css({"border": "1px solid #ff0000"});
         //$("#SubmitButton:first").removeClass("hvr-grow-shadow");
         $("#DoneButton:first").addClass("hvr-buzz-out");
        }

else{
   
   $("#DoneButton:first").removeClass("hvr-buzz-out");
   $("#DoneButton:first").addClass("hvr-grow-shadow");
}
        }, function(){
          $("#EmailField:first").css({"border": ""});
          $("#WebsiteField:first").css({"border": ""});
        $("#DoneButton:first").removeClass("hvr-buzz-out");
    });

//--Add Cta Page Ends---//



});


let clickHappened = false;

$(document).ready(function() {
    let headclix=0;
    let eyesclix = 0;
    let noseclix = 0;
    let mouthclix = 0;
    lightning_one();
    lightning_two();
    lightning_three();

    $('#head').on("click", function() {
        if ( headclix < 9) {
            $(this).animate({ left:"-=367px"},500);
            headclix +=1
        } else if (headclix == 9) {
            $(this).animate({left: "0px"},0);
            headclix =0;
        }
        let clickHappened = true;
    });
    $('#eyes').on('click', function() {
        if ( eyesclix < 9) {
            $(this).animate({ left:"-=367px"},500);
            eyesclix +=1
        } else if (eyesclix == 9) {
            $(this).animate({left: "0px"},0);
            eyesclix =0;
        }
        let clickHappened = true;
    });
    $('#nose').on('click', function() {
        if ( noseclix < 9) {
            $(this).animate({ left:"-=367px"},500);
            noseclix +=1
        } else if (noseclix == 9) {
            $(this).animate({left: "0px"},0);
            noseclix =0;
        }
        let clickHappened = true;
    });
    $('#mouth').on('click', function() {
        if ( mouthclix < 9) {
            $(this).animate({ left:"-=367px"},500);
            mouthclix +=1
        } else if (mouthclix == 9) {
            $(this).animate({left: "0px"},0);
            mouthclix =0;
        }
        let clickHappened = true;
    });


    $('#head').on('contextmenu',function(e){
        e.preventDefault();
        if(headclix > 0){
            $(this).animate({left: "+=367px"}
            ,500);
            headclix -= 1;
        }
        return false;
    });
    $('#eye').on('contextmenu',function(e){
        e.preventDefault();
        if(eyeclix > 0){
            $(this).animate({left: "+=367px"}
            ,5000);
            eyeclix -= 1;
        }
        return false;
    });
    $('#nose').on('contextmenu',function(e){
        e.preventDefault();
        if(noseclix > 0){
            $(this).animate({left: "+=367px"}
            ,5000);
            noseclix -= 1;
        }
        return false;
    });
    $('#mouth').on('contextmenu',function(e){
        e.preventDefault();
        if(mouthclix > 0){
            $(this).animate({left: "+=367px"}
            ,5000);
            mouthclix -= 1;
        }
        return false;
    });
});

    function lightning_one(){
        $("#container #lightning1").fadeIn(250).fadeOut(250);
        setTimeout("lightning_one()",3000);
    };
    function lightning_two(){
        $("#container #lightning2").fadeIn(250).fadeOut(250);
        setTimeout("lightning_two()",5000);
    };    
    function lightning_three(){
        $("#container #lightning3").fadeIn(250).fadeOut(250);
        setTimeout("lightning_three()",7000);
        if(clickHappened)
            playThunder();
    };
    function playThunder() {
        $('#thunder').get(0).playbackRate = 3;
        $('#thunder').get(0).play();
        $('#thunder').get(0).muted = false;
        
        
    };

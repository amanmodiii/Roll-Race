var name1 = "Player1";
var name2 = "Player2";

$(".start").click(function(){
    name1 = prompt("Enter player 1's name : ");
    $(".pl1").text(name1);

    name2 = prompt("Enter player2's name : ");
    $(".pl2").text(name2);

    $(".pl1path").attr("src","images\\path\\path-1.png");
    $(".pl2path").attr("src","images\\path\\path-1.png");
    $(".turn").text(name1+"\'s turn");

    var ctr=2,c1=-1,c2=-1;
    $(".roll").click(function(){
        ctr--;
        if(ctr%2==0){
            ctr=2;
        }
        var num=Math.floor(Math.random()*6+1);
        $(".diceimg").attr("src","images\\dice\\dice" + num + ".png");
        if(num == 6){
            ctr--;
            $(".turn").text("Roll Again...");
            if(ctr == 2){
                if(c2==-1){
                    c2=0;
                }
            }
            else{
                if(c1==-1){
                    c1=0;
                }
            }
        }
        else{
            if(ctr==1){
                $(".turn").text(name1+"\'s turn");
            }
            else{
                $(".turn").text(name2+"\'s turn");
            }
        }
    });
});

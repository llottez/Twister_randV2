const color = ["Red","Blue","Green","Yellow"];
const bb =["Left_Hand","Right_hand","Left_Foot","Right_Foot","Remove"];
var his1=[];
var his2=[];

var tmps1;

    function Bruh(){
        document.getElementById("BRUH1").innerHTML = "Press Spacebar ";
    }
    function Bruh2(){
        document.getElementById("BRUH2").innerHTML = "BRUH just press 'd'";
    }
    if(his2.length>0)
    document.getElementById("BRUH2").innerHTML = "Press 'd' ";
    else
    document.getElementById("BRUH2").innerHTML = "Press 'Delete' ToDeLeTe ";
    
    function RC(maxs){
        const wow1 = color[Math.floor(Math.random()*(maxs))];
        return wow1;
    }
    function RW(maxs){
        const wow2 = bb[Math.floor(Math.random()*(maxs))];
        return wow2;
    }

    function CLICKSP(){
        var pp1 = RC(color.length);
            var pp2 =  RW(bb.length);
            his1.push((his2.length+1).toString()+ ":  " + pp1 + " " + pp2);
            
            document.getElementById("dem1").innerHTML = his1[his1.length-1];
            his2=his1;
    }

    function CLICKD(){
        his2.pop();
            console.log(his2);
            if(his2.length>0)
            document.getElementById("dem1").innerHTML = his2[his2.length-1];
            else
            document.getElementById("dem1").innerHTML = "E M P T Y";
    }

    window.onkeypress = function(event) {
        if (event.which == 32) {
            var pp1 = RC(color.length);
            var pp2 =  RW(bb.length);
            his1.push((his2.length+1).toString()+ ":  " + pp1 + " " + pp2);
            
            document.getElementById("dem1").innerHTML = his1[his1.length-1];
            his2=his1;
        
        console.log(his2);
}
        if(event.which == 100){
           his2.pop();
            console.log(his2);
            if(his2.length>0)
            document.getElementById("dem1").innerHTML = his2[his2.length-1];
            else
            document.getElementById("dem1").innerHTML = "E M P T Y";
        }
      }

 


    
var x;
var y;
var xx;
var offl=0;
window.onload = function(){
    move()
}






//key function

  function baser(e){
   // alert("key");

      //left 37
      if(e.which==37){
          console.log("left")
          offl-=25
   var ba = document.getElementById("bas");
   str=ba.style.left=offl+"px";
   x=str;
}
   //right 39

if(e.which==39){
    console.log("right")

    offl+=25

    var ba = document.getElementById("bas");
    str=ba.style.left = offl+"px";
    x=str;
}
  }



///move function

 function move(){
    var ba=document.getElementById("bas");
    ba.style.top=400+"px";
    y=ba.style.top

    ba.style.left=10+"px";
     x=ba.style.left;
    console.log(y+x)
    let b=document.getElementById("ball");
    let m=document.getElementById("main");
    let conter=0;
    let to=0;
    let le=0;
     xx=parseInt(x.replace("px",""))

    function touch(){
        xx=parseInt(x.replace("px",""))

        if(to==390&&(le>xx&&le<xx+100)){
            conter++;

        }
    }

    let lo=setInterval(function(){
        to++
        le++
        b.style.top=to+"px";
        b.style.left=le+"px";
       //g console.log("le="+le+"x="+x)
        xx=parseInt(x.replace("px",""))
        touch()
        if(to==m.offsetWidth -15||le==m.offsetHeight-15||to==390&&(le>xx&&le<xx+100)){
            console.log("up"+xx)
           clearInterval(lo)
           moveup()}
           ///////////////////////////
        function moveup(){

        let lo=setInterval(function(){
        to--
        le++
        b.style.top=to+"px";
        b.style.left=le+"px";
        xx=parseInt(x.replace("px",""))
        touch()
        if(to==0||le==0){
            console.log("left"+xx)
            clearInterval(lo)
            moveleft()
        }
        if(le==m.offsetWidth-15||to==390&&(le>xx&&le<xx+100)){
            console.log("right"+xx)
            clearInterval(lo)
            moveright()
        }
             },5)};

        function moveleft(){
            touch()
        let lo=setInterval(function(){
            to++
            le++
            b.style.top=to+"px";
            b.style.left=le+"px";
            xx=parseInt(x.replace("px",""))

            if(le==m.offsetWidth-15){
                console.log("down"+xx)

               clearInterval(lo)
               movedown()
            }
            if(to==m.offsetHeight -15||le==0||to==390&&(le>xx&&le<xx+100)){
                console.log("up"+xx)

                clearInterval(lo)
                moveup()
            }
                    },5)}

        function movedown(){
            touch()
            let lo=setInterval(function(){
                to++
                le--
                b.style.top=to+"px";
                b.style.left=le+"px";
                xx=parseInt(x.replace("px",""))

                if(to==m.offsetHeight-15||to==390&&(le>xx&&le<xx+100) ){
                    console.log("right"+xx)

                   clearInterval(lo)
                   moveright()
                }
                if(le==m.offsetWidth-15||le==0||to==0 ){
                    console.log("left"+xx)

                    clearInterval(lo)
                    moveleft()
                }
            },5)}
            function moveright(){
            //    baseTouch();
            touch()
                let lo=setInterval(function(){
                    to--
                    le--
                    b.style.top=to+"px";
                    b.style.left=le+"px";
                   // console.log(le)
                   xx=parseInt(x.replace("px",""))

                    if(to==0 ||to==390&&(le>xx&&le<xx+100)){
                        console.log("down"+xx)

                       clearInterval(lo)
                       movedown()   
                }
                if(le==0){
                    console.log("up"+xx)
                    clearInterval(lo)
                    moveup() }
                },5)}
            },5)};

                
            
 


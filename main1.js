var x;
var y;
var xx;
var offl=0;
window.onload = function(){
    move()
}
//key function
  function baser(e){
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
         offl+=25
         var ba = document.getElementById("bas");
         str=ba.style.left = offl+"px";
         x=str;
            }};
///move function
 function move(){
    
    var ba=document.getElementById("bas");
    ba.style.left=10+"px";
    x=ba.style.left;
    let b=document.getElementById("ball");
    let m=document.getElementById("main");
    let conter=0;
    let to=0;
    let le=0;
    xx=parseInt(x.replace("px",""))
  
    //moving start
    let lo=setInterval(function(){
        to++
        le++
        b.style.top=to+"px";
        b.style.left=le+"px";
        xx=parseInt(x.replace("px",""))
        if(le==m.offsetHeight-15){
           console.log("up"+xx)
           clearInterval(lo)
           moveup()}
        if(to==390&&(le>xx&&le<xx+100)){
            conter+=1;
            ba.innerText=conter;
            console.log("up"+xx)
            clearInterval(lo)
            moveup()}
        if(to==m.offsetWidth -15){
            conter -=1;
            ba.innerText=conter;

            console.log("up"+xx)
            clearInterval(lo)
            moveup()}
           //move up
        function moveup(){
        let lo=setInterval(function(){
        to--
        le++
        b.style.top=to+"px";
        b.style.left=le+"px";
        xx=parseInt(x.replace("px",""))
        if(to==0){
            console.log("left"+xx)
            clearInterval(lo)
            moveleft()}
        if(le==0){
            console.log("right"+xx)
            clearInterval(lo)
            moveright()
        }
        if(to==390&&(le>xx&&le<xx+100)){
            conter +=1;
            ba.innerText=conter;

            console.log("right"+xx)
            clearInterval(lo)
            moveright()
        }
        if(le==m.offsetLeft){
            console.log("right"+xx)
            clearInterval(lo)
            moveright()}
        
        if(to==m.offsetWidth -15){
            conter -=1;
            ba.innerText=conter;

            console.log("right"+xx)
            clearInterval(lo)
            moveright()}
    },5)};
        //move left
        function moveleft(){
        let lo=setInterval(function(){
            to++
            le++
            b.style.top=to+"px";
            b.style.left=le+"px";
            xx=parseInt(x.replace("px",""))
        if(le==m.offsetWidth-15){
            console.log("down"+xx)
            clearInterval(lo)
            movedown()}
        if(to==m.offsetHeight -15){
            conter -=1
            ba.innerText=conter;
            console.log("up"+xx)
            clearInterval(lo)
            moveup()
            }
            if(le==0){
                console.log("up"+xx)
                clearInterval(lo)
                moveup()  
            }
        if(to==390&&(le>xx&&le<xx+100)){
            conter +=1;
            ba.innerText=conter;
            console.log("up"+xx)
            clearInterval(lo)
            moveup()
            }   
        },5)}
            //move down
        function movedown(){
            let lo=setInterval(function(){
            to++
            le--
            b.style.top=to+"px";
            b.style.left=le+"px";
            xx=parseInt(x.replace("px",""))
        if(to==m.offsetHeight-15){
            conter -=1
            ba.innerText=conter;
            console.log("right"+xx)
            clearInterval(lo)
            moveright()}
        if(to==390&&(le>xx&&le<xx+100)){
            conter +=1
            ba.innerText=conter;
            console.log("right"+xx)
            clearInterval(lo)
            moveright()}
        if(le==m.offsetWidth-15||le==0||to==0 ){
            console.log("left"+xx)
            clearInterval(lo)
            moveleft()
            }},5)}
            //move right
            function moveright(){
            let lo=setInterval(function(){
            to--
            le--
            b.style.top=to+"px";
            b.style.left=le+"px";
            xx=parseInt(x.replace("px",""))
        if(to==0){
            console.log("down"+xx)
            clearInterval(lo)
            movedown()   
            }
        // if(to==390&&(le>xx&&le<xx+100)){
        //     conter+1
        //     ba.innerText=conter;

        //     console.log("down"+xx)
        //     clearInterval(lo)
        //     movedown()  
        // }
        if(le==0){
            console.log("up"+xx)
            clearInterval(lo)
            moveup() }},5)}
            },5)};

                        
            
 


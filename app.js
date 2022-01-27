function check_winner(){
    var y=Math.floor(Math.random() * 3+1);
    
    
    var x=document.getElementById("option").value ;
    //document.write(y);
    //document.write(x); 
    if(x==1&&y==2)
    {
        document.getElementById("ques").src="rock.png";
        document.getElementById("res").innerHTML="YOU WIN";
        
        document.getElementById("comp").src="scissor.png";
       // console.log("vnh")
       //  document.write("YOU WIN");
    }
    if(x==1&&y==3)
    {
        
        document.getElementById("ques").src="rock.png";
        document.getElementById("res").innerHTML="YOU LOSE";
        
        document.getElementById("comp").src="hand.png";
    }
        //document.write("YOU LOSE");
    if(x==1&&y==1)
    {
        
        document.getElementById("ques").src="rock.png";
        document.getElementById("res").innerHTML="TIE";
        
        document.getElementById("comp").src="rock.png";
    }
        //document.write("TIE");
        if(x==2&&y==3)
        {
        
            document.getElementById("ques").src="scissor.png";
            document.getElementById("res").innerHTML="YOU WIN";
            
            document.getElementById("comp").src="hand.png";
        }
        //document.write("YOU WIN");
    if(x==2&&y==1)
    {
        
        document.getElementById("ques").src="scissor.png";
        document.getElementById("res").innerHTML="YOU LOSE";
        
        document.getElementById("comp").src="rock.png";
    }
    //    document.write("YOU LOSE");
    if(x==2&&y==2)
    {
        
        document.getElementById("ques").src="scissor.png";
        document.getElementById("res").innerHTML="TIE";
        
        document.getElementById("comp").src="scissor.png";
    }    
    //document.write("TIE");
    if(x==3&&y==1)
    {
        
        document.getElementById("ques").src="hand.png";
        document.getElementById("res").innerHTML="YOU WIN";
        
        document.getElementById("comp").src="rock.png";
    }
    //    document.write("YOU WIN");
    if(x==3&&y==2)
    {
        
        document.getElementById("ques").src="hand.png";
        document.getElementById("res").innerHTML="YOU LOSE";
        
        document.getElementById("comp").src="scissor.png";
    }
    //    document.write("YOU LOSE");
    if(x==3&&y==3)
    {
        
        document.getElementById("ques").src="hand.png";
        document.getElementById("res").innerHTML="TIE";
        
        document.getElementById("comp").src="hand.png";
    }
    //    document.write("TIE");
    

}
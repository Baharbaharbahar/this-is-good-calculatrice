function un ()
{
    document.getElementById("cal").value+="1";

}
function deux ()
{
    document.getElementById("cal").value+="2";
}
function trois ()
{
    document.getElementById("cal").value+="3";
}
function quatre ()
{
    document.getElementById("cal").value+="4";
}
function cinq ()
{
    document.getElementById("cal").value+="5";
}
function six ()
{
    document.getElementById("cal").value+="6";
}
function sept ()
{
    document.getElementById("cal").value+="7";
}
function huit ()
{
    document.getElementById("cal").value+="8";
}
function neuf ()
{
    document.getElementById("cal").value+="9";
}
function zero ()
{
    document.getElementById("cal").value+="0";
}
var a ;
var op ;
function plus()
{
    a=Number(document.getElementById("cal").value);
    document.getElementById("cal").value="";
    op="+";
}

function moins()
{
    a=Number(document.getElementById("cal").value);
    document.getElementById("cal").value="";
    op="-";
}
function fois()
{
    a=Number(document.getElementById("cal").value);
    document.getElementById("cal").value="";
    op="*";
}
function div()
{
    a=Number(document.getElementById("cal").value);
    document.getElementById("cal").value="";
    op="/";
}
function egale()
{  
    let b=Number(document.getElementById("cal").value);
 
    if(op=="+")
    {
        res=a+b;
    }
    else
    if(op=="-")
     {
        res=a-b;
     }
     else
     if(op=="*")
     {
        res=a*b;
     }
     else
     if(op=="/")
     {
        if(b!=0)
        {
            res=a/b;
        }
        else
        {
            res="Erreur Division impossible par 0";
        }
     }
   
    document.getElementById("cal2").value=res;
    

}
function func()
{
    var a=document.getElementById("num1").value;
    var b=document.getElementById("temp").value;
    if(b=="Fahrenheit")
    {
        document.getElementById("num2").value=((5/9)*(a-32));
    }
    else
    {
        document.getElementById("num2").value=(((9/5)*a)+32);
    }
}

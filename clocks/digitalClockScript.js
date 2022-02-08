function getTime()
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
    
    m=checkTime(m);
    s=checkTime(s);
    
    document.getElementById("myclock_24").innerHTML= h + ":" + m + ":" + s ;

    var mer="am";
    if(h>12)
    	mer="pm";
    new_h=checkTime(checkHours(h));

    document.getElementById("myclock_12").innerHTML= new_h + ":" + m + ":" + s +" "+ mer ;
    var t=setTimeout(getTime,1000);
}
function checkTime(t)
{
	if(t<10)t="0"+t;
	return t;
}

function checkHours(h)
{
	if(h>12)
	{
		return h-12; 
	}
	return h;
}
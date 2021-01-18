function required()
{
var empt = document.forms["contact"]["firstname"].value;
if (empt == "")
{
alert("Please fill in your First Name");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}

function required()
{
var empt = document.forms["contact"]["lastname"].value;
if (empt == "")
{
alert("Please fill in your Last Name");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}

function required()
{
var empt = document.forms["contact"]["email"].value;
if (empt == "")
{
alert("Please fill in your E-mail");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}




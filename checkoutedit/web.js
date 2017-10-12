
var one="";
var two="";
var three="";
var four="";
var five="";
var six="";
var seven="";
var eight="";
var nine="";
var ten="";


var oneprice=0;
var twoprice=0;
var threeprice=0;
var fourprice=0;
var fiveprice=0;
var sixprice=0;
var sevenprice=0;
var eightprice=0;
var nineprice=0;
var tenprice=0;

var price="";
var temp="";


var i=0;


var print=document.getElementById('print');
document.getElementById('gocart').onclick=checkout;
var modal = document.getElementById('myModal');





var span = document.getElementsByClassName("close")[0];






span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


animation();
 

function cabbage() {

var cab=document.getElementById('item1').value;

if(cab==1)  {
oneprice=15;	
}
if(cab==2)  {
oneprice=30;	
}
if(cab==3)  {
oneprice=45;	
}
if(cab==4)  {
oneprice=60;	
}
if(cab==5)  {
oneprice=75;	
}

if(cab>0) {
one="Cabbage  -  "+cab+"kg"+" /"+oneprice+"&#2352"+"</br>";
 
document.getElementById('item1').value="0";
if(i<10)  {
i++;





 setTimeout(function() {
document.getElementById('imag1').setAttribute("class", "imag1");
}, 500);
setTimeout(function() {
document.getElementById('imag1').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1700);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}



	
}
	
}
function redchilly() {
var cab=document.getElementById('item2').value;
if(cab==1)  {
twoprice=15;	
}
if(cab==2)  {
twoprice=30;	
}
if(cab==3)  {
twoprice=45;	
}
if(cab==4)  {
twoprice=60;	
}
if(cab==5)  {
twoprice=75;	
}

 

 
 
if(cab>0) {
	
two="Red chilly  -  "+cab+"kg"+" /"+twoprice+"&#2352"+"</br>";

document.getElementById('item2').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag2').setAttribute("class", "imag2");
}, 500);
setTimeout(function() {
document.getElementById('imag2').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1700);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}

}
	
}
function capsicum() {
var cab=document.getElementById('item3').value;
if(cab==1)  {
threeprice=15;	
}
if(cab==2)  {
threeprice=30;	
}
if(cab==3)  {
threeprice=45;	
}
if(cab==4)  {
threeprice=60;	
}
if(cab==5)  {
threeprice=75;	
}


if(cab>0) {
	
three="Capsicum  -  "+cab+"kg"+" /"+threeprice+"&#2352"+"</br>";

document.getElementById('item3').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag3').setAttribute("class", "imag3");
}, 500);
setTimeout(function() {
document.getElementById('imag3').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1700);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}
	
}
	
}
function tomato() {
var cab=document.getElementById('item4').value;
if(cab==1)  {
fourprice=15;	
}
if(cab==2)  {
fourprice=30;	
}
if(cab==3)  {
fourprice=45;	
}
if(cab==4)  {
fourprice=60;	
}
if(cab==5)  {
fourprice=75;	
}


if(cab>0) {
	
four="Tomato    -  "+cab+"kg"+" /"+fourprice+"&#2352"+"</br>";

document.getElementById('item4').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag4').setAttribute("class", "imag4");
}, 500);
setTimeout(function() {
document.getElementById('imag4').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1300);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}

	
}
	
}
function onion() {
var cab=document.getElementById('item5').value;
if(cab==1)  {
fiveprice=15;	
}
if(cab==2)  {
fiveprice=30;	
}
if(cab==3)  {
fiveprice=45;	
}
if(cab==4)  {
fiveprice=60;	
}
if(cab==5)  {
fiveprice=75;	
}


if(cab>0) {
	
five="Onion      -   "+cab+"kg"+" /"+fiveprice+"&#2352"+"</br>";

document.getElementById('item5').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag5').setAttribute("class", "imag5");
}, 500);
setTimeout(function() {
document.getElementById('imag5').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}


	
}
	
}
function dontknow() {
var cab=document.getElementById('item6').value;
if(cab==1)  {
sixprice=15;	
}
if(cab==2)  {
sixprice=30;	
}
if(cab==3)  {
sixprice=45;	
}
if(cab==4)  {
sixprice=60;	
}
if(cab==5)  {
sixprice=75;	
}


if(cab>0) {
	
six="Moosambi  -  "+cab+"kg"+" /"+sixprice+"&#2352"+"</br>";

document.getElementById('item6').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag6').setAttribute("class", "imag6");
}, 500);
setTimeout(function() {
document.getElementById('imag6').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1500);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2500);
}
else {

alert("Cart is full");	
	
}


	
}
	
}
function papaya() {
var cab=document.getElementById('item7').value;
if(cab==1)  {
sevenprice=15;	
}
if(cab==2)  {
sevenprice=30;	
}
if(cab==3)  {
sevenprice=45;	
}
if(cab==4)  {
sevenprice=60;	
}
if(cab==5)  {
sevenprice=75;	
}


if(cab>0) {
	
seven="Papaya      -  "+cab+"kg"+" /"+sevenprice+"&#2352"+"</br>";

document.getElementById('item7').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag7').setAttribute("class", "imag7");
}, 500);
setTimeout(function() {
document.getElementById('imag7').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2300);
}
else {

alert("Cart is full");	
	
}
	
}
	
}
function strawberry() {
var cab=document.getElementById('item8').value;
if(cab==1)  {
eightprice=15;	
}
if(cab==2)  {
eightprice=30;	
}
if(cab==3)  {
eightprice=45;	
}
if(cab==4)  {
eightprice=60;	
}
if(cab==5)  {
eightprice=75;	
}


if(cab>0) {
	
eight="Strawberry  -  "+cab+"kg"+" /"+eightprice+"&#2352"+"</br>";

document.getElementById('item8').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag8').setAttribute("class", "imag8");
}, 500);
setTimeout(function() {
document.getElementById('imag8').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2300);
}
else {

alert("Cart is full");	
	
}

	
}
	
}
function ladyfinger() {
var cab=document.getElementById('item9').value;
if(cab==1)  {
nineprice=15;	
}
if(cab==2)  {
nineprice=30;	
}
if(cab==3)  {
nineprice=45;	
}
if(cab==4)  {
nineprice=60;	
}
if(cab==5)  {
nineprice=75;	
}


if(cab>0) {
	
nine="Ladyfinger  -  "+cab+"kg"+" /"+nineprice+"&#2352"+"</br>";

document.getElementById('item9').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag9').setAttribute("class", "imag9");
}, 500);
setTimeout(function() {
document.getElementById('imag9').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2300);
}
else {

alert("Cart is full");	
	
}
	
}
	
}
function orange() {
var cab=document.getElementById('item10').value;
if(cab==1)  {
tenprice=15;	
}
if(cab==2)  {
tenprice=30;	
}
if(cab==3)  {
tenprice=45;	
}
if(cab==4)  {
tenprice=60;	
}
if(cab==5)  {
tenprice=75;	
}


if(cab>0) {
	
ten="Orange      -  "+cab+"kg"+" /"+tenprice+"&#2352"+"</br>";

document.getElementById('item10').value="0";
if(i<10)  {
i++;

setTimeout(function() {
document.getElementById('imag10').setAttribute("class", "imag10");
}, 500);
setTimeout(function() {
document.getElementById('imag10').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "cartt");
 setTimeout(function() {document.getElementById('print').style.visibility = 'hidden';},500 )
}, 1200);


setTimeout(function() {
document.getElementById('cart0').setAttribute("class", "go");
}, 3000);
setTimeout(function() {
document.getElementById('print').style.visibility = 'visible';  
print.innerHTML=i;
}, 2300);
}
else {

alert("Cart is full");	
	
}
	
}
	
}
function animation() {  


	
	document.getElementById('cart').setAttribute("class", "halo");
 

setTimeout(function() {
document.getElementById('cart').setAttribute("class", "bla");
}, 3000);



	
}



function checkout()  {
	 document.getElementById("modal").style.backgroundImage="url(images/payimg.jpg)";
	
	 document.getElementById('gif').setAttribute("src", "nonempty.jpg");
	 document.getElementById('gif').style.visibility="visible";
	 document.getElementById("text").style.color="white";
	
	
	if(i>0)  {
		// document.getElementById('total').remove();
		//document.getElementById('total').style.visibility="visible";
		  document.getElementById("text").style.fontSize="20px";	 
		  document.getElementById("canbtn").style.visibility="visible";
		  document.getElementById("ordbtn").style.visibility="visible";
		 modal.style.display = "block";
		 
		 total();
		 
		 var lastprice="Total - " +price+"&#2352";
   temp=one+two+three+four+five+six+seven+eight+nine+ten;   
	
	
	
    document.getElementById("text").innerHTML=temp+"<div id='last'></div>";
		 document.getElementById("last").style.fontSize="25px";
	  document.getElementById("last").innerHTML=lastprice;	
	
       
    } 
	
		
    
	
	else {
	 

     document.getElementById("text").style.fontSize="35px";	 
	 modal.style.display = "block";	
	document.getElementById("text").style.color="white";
		 document.getElementById("text").innerHTML="YOUR CART IS EMPTY";
		 
		  document.getElementById("canbtn").style.visibility="hidden";
		   document.getElementById("ordbtn").style.visibility="hidden";
		  // document.getElementById('gif').style.visibility="hidden";
		   
		    document.getElementById('gif').setAttribute("src", "empty.jpg");
			// document.getElementById("total").innerHTML="";
		
		
	}
   
	}

function cancel() {
	
 one="";
		two="";
	    three="";
        four="";
        five="";
        six="";
        seven="";
        eight="";
        nine="";
        ten="";
		i=0;
		print.innerHTML=i;
		 //document.getElementById("total").innerHTML="";
		  document.getElementById("text").style.fontSize="35px";	 
		 document.getElementById("text").style.color="white";
		 document.getElementById("text").innerHTML="YOUR CART IS EMPTY";
		  document.getElementById("canbtn").style.visibility="hidden";
		   document.getElementById("ordbtn").style.visibility="hidden";
		  document.getElementById('gif').setAttribute("class", "gif");
		  
		  setTimeout(function() {
              document.getElementById('gif').setAttribute("class", "bla");
			  document.getElementById('gif').style.visibility="hidden";
			   setTimeout(function() {
              document.getElementById('gif').setAttribute("src", "empty.jpg");
			  document.getElementById('gif').style.visibility="visible";
             }, 4);
             }, 1000);

		  
}

function order()  {
	 document.getElementById("modal").style.backgroundImage="url(images/backk.jpg)";
	document.getElementById('gif').style.visibility="hidden";
	document.getElementById('canbtn').style.visibility="hidden";
	document.getElementById('ordbtn').style.visibility="hidden";
	//document.getElementById('total').style.visibility="hidden";
	
	 document.getElementById("text").innerHTML="PLEASE ENTER YOUR ADDRESS FOR DELIVERY "+"<image  style='width:40px; height:20px;' src='imag5.png' />";
	 
	
	  var div = document.createElement('div');

    div.id = 'row';

    div.innerHTML = '<br><span> Name :</span><input type="text" name="name"  id="csname" placeholder="Full Name" /><br>\
      <br> <span>E-mail :</span> <input id="email" type="email" name="email" placeholder="@email.com" /><br>\
		<br> <span>Address :</span> <textarea id="address" rows="4" cols="25"  /> </textarea>\
		&emsp;&emsp;<image id="csimage" src="imag1.jpg" />\
		<br><br><span>Zip code:</span><input type="number"  id="zip"/>\
		<br><br><span>Phone no:</span><input type="text" value="+91"  id="no"/>\
		<br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="button" id="continue"  value="CONTINUE"  />';

		
		
		
		
     document.getElementById('text').appendChild(div);
	 
	  document.getElementById("row").style.fontWeight="bold";
	  document.getElementById('csimage').style.height="50px";
	    document.getElementById('csimage').style.width="50px";
	 
	  document.getElementById('address').style.color="darkblue";
	    document.getElementById('csname').style.color="darkblue";
		 document.getElementById('email').style.color="darkblue";
		  document.getElementById('zip').style.color="darkblue";
		    document.getElementById('no').style.color="darkblue";
	 
	 
	 
	 
	
	   document.getElementById('address').style.borderColor="skyblue";
	    document.getElementById('csname').style.borderColor="skyblue";
		 document.getElementById('email').style.borderColor="skyblue";
		  document.getElementById('zip').style.borderColor="skyblue";
		    document.getElementById('no').style.borderColor="skyblue";
			 
	  document.getElementById('address').style.height="50px";
	   document.getElementById('continue').style.backgroundColor="#0e4253";
	    document.getElementById('continue').style.color="white";
		 document.getElementById('continue').style.height="40px";
		 document.getElementById('continue').style.borderColor="#0e4253";
		  document.getElementById('continue').style.borderRadius="5px";
		
		 document.getElementById('continue').style.transitionDuration="0.4s";  
	 document.getElementById('continue').onmouseover=function() {document.getElementById('continue').style.backgroundColor="#0e4253";
 document.getElementById('continue').style.boxShadow="0 12px 16px 0 rgba(0,0,0,0.27),0 17px 50px 0 rgba(0,0,0,0.25)";
 document.getElementById('continue').style.borderColor="#0e4253"; } ;
	  document.getElementById('continue').onmouseout=function() {document.getElementById('continue').style.backgroundColor="#0e4253"; 
	  document.getElementById('continue').style.boxShadow="0 0px 0px 0 rgba(0,0,0,0),0 0px 0px 0 rgba(0,0,0,0.0)";
 document.getElementById('continue').style.borderColor="#0e4253";} ;
 
 var ad= document.getElementById('address');
var  na=document.getElementById('csname').value;
var  em=document.getElementById('email');
var zip=document.getElementById('zip');
var noo= document.getElementById('no');
	 
 
	 
	 document.getElementById('continue').onclick=function() {
var ad= document.getElementById('address').value;
var  na=document.getElementById('csname').value;
var  em=document.getElementById('email').value;
var zip=document.getElementById('zip').value;
var noo= document.getElementById('no').value;
		 
		if((na.length>0)&&(ad.length>0)&&(em.length>5)&&(zip.length>0)&&(noo.length>0)) {
			
			payment();
			
		}
		else  {
			
		alert("Plese fill out the page");
			
		}
 	
		 
		 
		 
	 }; 
	 
 
 
 
                                                                
}


function shake() {
	
	 document.getElementById('gif').setAttribute("class", "shake");
	 
	 setTimeout(function() {
              document.getElementById('gif').setAttribute("class", "ake");
			 
             }, 600);
	
	
}

function  total()  {
	
	price=oneprice+ +twoprice+ +threeprice+ +fourprice+ +fiveprice+ +sixprice+ +sevenprice+ +eightprice+ +nineprice+ +tenprice;
	
//document.getElementById("total").innerHTML="Total - " +price+"&#2352";
	
	
	
}


function payment() {
	
	 document.getElementById("modal").style.backgroundImage="url(images/payimg.jpg)";
	
	 document.getElementById("text").innerHTML="PAYMENT METHOD";
	 
	
	  var div = document.createElement('div');

    div.id = 'row';

    div.innerHTML = '<br><div id="cards">\
	<input type="radio"  id="rdebit" name="card" value="Debit Card" style="font-size:30px; ">Debit Card<br>\
      <br><input type="radio"  id="rcredit" name="card"  value="Credit Card" style="font-size:30px; ">Credit Card<br>\
		 <br><input type="radio"  id="rcash" name="card"  value="Cash On Delivery" style="font-size:30px; ">Cash On Delivery<br></div>\
	   <br><br><br><br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="button" id="continue"  value="CONTINUE"  />';

	document.getElementById('text').appendChild(div);
	  document.getElementById("row").style.color="#07343d";
	   document.getElementById("row").style.fontWeight="bold";
	  document.getElementById("row").style.font="normal";
	    document.getElementById("row").style.fontSize="23px";
	  
	  
	  
	  
	    document.getElementById('continue').style.backgroundColor="#0e4253";
	    document.getElementById('continue').style.color="white";
		 document.getElementById('continue').style.height="40px";
		 document.getElementById('continue').style.borderColor="#0e4253";
		  document.getElementById('continue').style.borderRadius="5px";
		
		 document.getElementById('continue').style.transitionDuration="0.4s";  
	 document.getElementById('continue').onmouseover=function() {document.getElementById('continue').style.backgroundColor="#0e4253";
 document.getElementById('continue').style.boxShadow="0 12px 16px 0 rgba(0,0,0,0.27),0 17px 50px 0 rgba(0,0,0,0.25)";
 document.getElementById('continue').style.borderColor="#0e4253"; } ;
	  document.getElementById('continue').onmouseout=function() {document.getElementById('continue').style.backgroundColor="#0e4253"; 
	  document.getElementById('continue').style.boxShadow="0 0px 0px 0 rgba(0,0,0,0),0 0px 0px 0 rgba(0,0,0,0.0)";
 document.getElementById('continue').style.borderColor="#0e4253";	  } ;
 
 
  document.getElementById('continue').onclick=function() {
	
if(document.getElementById('rdebit').checked)  {

debitcard();

}	
if(document.getElementById('rcredit').checked)  {

debitcard();

}	
if(document.getElementById('rcash').checked)  {

placed();

}	
	 
	 
}
	
}


function debitcard() {
	
		 document.getElementById("modal").style.backgroundImage="url(images/payimg.jpg)";
	
  var lastt=price+"/-";
	 document.getElementById("text").innerHTML="PAYMENT GATEWAY";
	 
	
	  var div = document.createElement('div');

    div.id = 'row';

    div.innerHTML = '<br><br><span>Card Number :</span><input type="number"  id="cdnum" max="16" maxlength="16"  />&nbsp;<span id=vis><image id="top" style="width:40px; height:30px; border:1px;" src="vissa.png" /></span><br>\
      <br><span>CVV :</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="password"  id="cdcvv" maxlength="3"  placeholder="cvv"  /><br>\
		 <br><span>Card Name :</span>&emsp;<input type="text"  id="cdname" /><br>\
	   <br><input type="button" id="continue"  value="PAY"  /><br>';

	document.getElementById('text').appendChild(div);
	
	 document.getElementById('vis').style.position="absolute";
	
	 document.getElementById('continue').value="PAY  "+lastt;
	 document.getElementById('cdcvv').style.width="40px";
	
	  document.getElementById("row").style.color="white";
	   document.getElementById("row").style.fontWeight="bold";
	  document.getElementById("row").style.font="normal";
	    document.getElementById("row").style.fontSize="23px";
	  
	  
	  
	  
	    document.getElementById('continue').style.backgroundColor="#0e4253";
	    document.getElementById('continue').style.color="white";
		 document.getElementById('continue').style.height="40px";
		 document.getElementById('continue').style.borderColor="#0e4253";
		  document.getElementById('continue').style.borderRadius="5px";
		  
		  
		  
		
		 document.getElementById('continue').style.transitionDuration="0.4s";  
	 document.getElementById('continue').onmouseover=function() {document.getElementById('continue').style.backgroundColor="#0e4253";
 document.getElementById('continue').style.boxShadow="0 12px 16px 0 rgba(0,0,0,0.27),0 17px 50px 0 rgba(0,0,0,0.25)";
 document.getElementById('continue').style.borderColor="#0e4253"; } ;
	  document.getElementById('continue').onmouseout=function() {document.getElementById('continue').style.backgroundColor="#0e4253"; 
	  document.getElementById('continue').style.boxShadow="0 0px 0px 0 rgba(0,0,0,0),0 0px 0px 0 rgba(0,0,0,0.0)";
 document.getElementById('continue').style.borderColor="#0e4253";	  } ;	
	
	 document.getElementById('continue').onclick=placed;
var num =document.getElementById('cdnum').value
  document.getElementById('top').style.visibility="hidden";
 setInterval(function() {
	
	cardimage();	 
		 
	 },3000);
function cardimage() {	 
	
	var num =document.getElementById('cdnum').value;	
    // var str= document.getElementById("cdnum").value;
    var res = num.substring(0, 2);	
	var str =num.substring(0, 1);	
	if((res==51)||(res==52)||(res==53)||(res==54)) {
		   document.getElementById('top').style.visibility="visible";
		  document.getElementById('top').setAttribute("src","masterr.png");
		
	}
	else if(str==4) {
		
		 document.getElementById('top').style.visibility="visible";
		  document.getElementById('top').setAttribute("src","vissa.png");
		
		}
		
	 else {
		  document.getElementById('top').style.visibility="hidden";
		 document.getElementById('top').setAttribute("src","vissa.png"); 
		 
		 
	 }
	 
	
	 
}
	 
}


function placed() {
	
	 document.getElementById("modal").style.backgroundImage="url(images/backk.jpg)";
	 document.getElementById("text").innerHTML="ORDER PLACED SUCCESFULLY";
	 document.getElementById("text").style.fontSize="30px";
	 
	 
	 
	  var div = document.createElement('div');

    div.id = 'row';
	   div.innerHTML = '<br><div id="orid" style="font-size:20px;"></div>\
	  <br><image  style="width:110px; height:100px;" src="van2.png" /> ';
	   	document.getElementById('text').appendChild(div);
	   var temp=Math.random();
	   document.getElementById("orid").innerHTML ="ORDER ID : " +temp+"TDH";
	
}







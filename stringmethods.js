var s='string with "single" quotation marks';

document.writeln("SINGLE QUOTATION WITH DOUBLE QUOTES: "+s+" TYPE OF STRING : "+typeof s+"<br>");

var s2="string with 'double' quotation marks";

document.writeln("DOUBLE QUOTATION WITH INSIDE SINGLE QUOTES :"+s2+" TYPE OF STRING : "+typeof s2+"<br>");

var s3=new String("This is 'string' object");
document.writeln("STRING OBJECT:"+s3+" TYPE OF S3 : "+typeof s3);

document.writeln("<h4>STRING METHODS</h4>");

var str="javascript";
document.writeln("INDEXOF:"+str.indexOf("i")+"<br>");
document.writeln("INDEXOF with start index-(position of):"+str.indexOf("v",4)+"<br>");
document.writeln("LAST INDEX OF STRING : "+str.lastIndexOf("a")+"<br>");
document.writeln("SEARCHING OF ELEMENTS : "+s.search("single")+"<br>");
document.writeln("SLICE ie.., "+str.slice(2,5)+"<br>");
document.writeln("SLICE ie.., -ve index "+s.slice(-6,-2)+"<br>");
document.writeln("SUBSTRING()-",str.substring(2,6)+"<br>");
var string="hello this is developed india";
document.writeln("ORIGINAL STR : ",string,"<br>");
document.writeln("SUBSTR()-",string.substr(2,6)+"<br>");
document.writeln("SUBSTR()-",string.substr(5,6)+"<br>");
document.writeln("REPLACE()-",string.replace("hello","Hello"),"<br>");
document.writeln("REPLACE()-",string.replace("developed","developing"),"<br>");
document.writeln("original string will not be changed at all.","<br>");

document.writeln("TO UPPER CASE : ",str.toUpperCase(),"<br>");
document.writeln("TO UPPER CASE : ",string.toUpperCase(),"<br>");
document.writeln("TO LOWER CASE : ",s3.toLowerCase(),"<br>");

document.writeln("CONCATENATION :",string.concat(str),"<br>");
var s4=" removes spaces at last index and starting index ";
document.writeln("trim method : ",s4.trim(),"<br>");

document.writeln("<h4>EXTRACTING THE CHARACTERS FROM THE POSITION</h4>");
document.writeln("charAt() : ",s4.charAt(4),"<br>");
document.writeln("charcodeat : ",s4.charCodeAt(4));

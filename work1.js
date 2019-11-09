//插入的使用方法
  //var newnode=document.createElement("li");
 // newnode.innerHTML="PHP";
 // otest.appendChild(newnode);

 // var newnode=document.createElement("li");
  //newnode.innerHTML="php";
 // otest.insertBefore(newnode,node);


var nav=document.getElementsByClassName("nav")[0];
var item=document.getElementsByClassName("item")[0];
var newnode=document.createElement("li");//创建li标签在首位
newnode.innerHTML="首页";
nav.insertBefore(newnode,item);

var newnode2=document.createElement("li");//创建li标签在末尾
nav.appendChild(newnode2);
var litemp1=document.createTextNode('关于');
newnode2.appendChild(litemp1);

var item2=document.getElementsByClassName("item")[2];
var newnode3=document.createElement("li");
nav.appendChild(newnode3);
var litemp2=document.createTextNode('文章');
newnode3.appendChild(litemp2);
nav.replaceChild(newnode3,item2);
var item1=document.getElementsByClassName("item")[1];
nav.removeChild(item1);



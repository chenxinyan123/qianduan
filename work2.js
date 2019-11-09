var button = document.getElementsByClassName("button")[0]
button.onclick = function() {
    var link = document.getElementsByClassName('link');
    link.setAttribute(href="css/21.css");//这里有问题。。。忘记怎么在js里link css了
    alert('这个好难我做错了');
    console.log("我的透明度从0.8变成0.5了");
}

//document.getElementByClassName("button").onclick();

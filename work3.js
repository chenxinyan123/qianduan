var li = document.getElementById("container").getElementsByTagName("li");
const listTemp = ['list1', 'list2', 'list3', 'list4', 'list5'];
listTemp[i] = listTemp;

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        for (let i = 0; i < listTemp.length; i++) {
            li[i].onclick = function () {
                li[i].innerHTML = listTemp[i];
            }
        }
    }, false);
    //alert ('difficult');
    console.log(listTemp);
}

//document.getElementById("  ").click()；先触发onclick事件,再触发click事件
//document.getElementById("  ").onclick();这种只会触发onclick事件
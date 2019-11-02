const arr = [5, 3, 8, 1];
let filterRange = arr.filter(function(item, index, array){
    return (item >=1)&&(item<4);
});
alert(filterRange);
console.log(filterRange);


//快排 抽象的概念 a b(女神) c  一次
// [8,2,5(女神),9,7]
// 递归
function quickSort(arr) {
    if (arr.length <= 1) {return arr;}  //递归要有退出条件
    var left = [],
    right = [],
    //找到中间值  Math.round是四舍五入 Math.ceil是向上
       baseDot = Math.round(arr.length/2),
       base = arr.splice(baseDot,1)[0];
    // left a   right b
    for(var i = 0;i<arr.length;i++) {
        if(arr[i]<base) {
            left.push(arr[i]);
        }else {
            right.push(arr[i])
        }
    }
    //base 中间值  concat连接一个数组
    return quickSort(left).concat([base],quickSort(right))
}

console.log(quickSort([8,2,5,9,7]))
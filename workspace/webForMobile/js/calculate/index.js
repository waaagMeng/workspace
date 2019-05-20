// ali  14.6 2.6
// meituan 16 4
// 51信用卡 17 5
// S  5
// A  3
// B  2
// C  1
// D  
// 把level看成一个key 计算函数
let stratigies = {
    'S':function(salary) {
        return salary * 5;
    },
    'A':function(salary) {
        return salary *3;
    },
    'B':function(salary) {
        return salary * 2;
    },
    'C':function(salary) {
        return salary * 1;
    }
}
function calculate(level,salary) {
    return stratigies[level](salary);
    //去掉分支？
//  if (level === 'S') {
//      return salary * 5;
//  }
//  if (level === 'S') {
//     return salary * 5;
// }
// if (level === 'S') {
//     return salary * 5;
// }
// if (level === 'S') {
//     return salary * 5;
// }
}
console.log(calculate('A',10000));

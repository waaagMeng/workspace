//数组是最廉价的数据结构
let enc_qq=[6,3,1,7,5,8,9,2,4],
qq=[];//真正的
head=0,//head指针指向第一个数,対首指针,要移除的元素
tail=9;//对尾指针，要加入的元素位置
//第一个数移除
while(head<tail){
qq.push(enc_qq[head]);
head++;//指向第二个数了
//要将第二个数移到最末尾？ 
enc_qq[tail]=enc_qq[head];
tail++;
head++;
}
//enc_qq.shift();
console.log(typeof qq);
//enc_qq.shift();//移除数组的第一个元素
//console.log(enc_qq);
//enc_qq.unshift(0);//在数组的起始位置插入元素

//enc_qq.pop();//删除数组最后一个元素
//enc_qq.push(0);//在数组的末尾添加一个元素
//console.log(enc_qq);
//字符串是字符集合
//console.log(enc_qq.length,enc_qq[0]);

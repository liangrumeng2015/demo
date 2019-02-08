// if(false){
// 	var a = '苹果';
// }
// console.log(a);

//常量   
//1.const可以提醒大家不能被改变    
//2.const比较符合函数式编程    
//3.和var本质区别：编译器内部对处理机制不一样
const a = '山竹';
a = '橙子';

const b = [];
b.push('你好');    //push是可以的
console.log(b);


//数组的解构
const s = ['香蕉','橘子','橙子','山竹'];
const [first,second,three,four] = s;
console.log(three);

//对象解构
function test(){
	return {
		a:'hello',
		b:'world'
	}
}
const result = test();
const {a,b} = result;
console.log(a);	

//字符串模板
var s = 'hello';
var e = 'world';
console.log(s+e);   //之前的字符串

const s = 'hello';
const e = 'world';
const c = `fo ${s} ${e} oter`;
// console.log(c); 
console.log(c.startsWith("fo")); //startsWith() 以...开头
console.log(c.endsWith('bar'));
console.log(c.includes('ot'));

const s = 'hello';
const e = 'world';
const c = test `fo ${s} ${e} oter`;
function test(strs,...values){
	console.log(strs);   //(3) ["fo ", " ", " oter", raw: Array(3)]
}

//数组
const s = "哈哈嘿嘿哦哦";
const result = Array.from(s);   //变成对应的数组
console.log(result);     //["哈", "哈", "嘿", "嘿", "哦", "哦"]

//数组
const s = "哈嘿哦啊";
const test = ["玫瑰","百合","水仙花",...s];    //类似直接追加到后面
console.log(test);      //(7) ["玫瑰", "百合", "水仙花", "哈", "嘿", "哦", "啊"]

//对象
//数组
const s = "哈嘿哦啊";
const test = ["玫瑰","百合","水仙花",...s];    //类似直接追加到后面
const result = {
	k1:1,
	k2:2,
	s,
	test,
	q(){
		console.log("企鹅");
	}
}
// console.log(result);      //{k1: 1, k2: 2, s: "哈嘿哦啊", test: Array(7)}
result.q();      //企鹅

//对象
const a = {x:null};
a.x = 3;
console.log(a);         //{x: 3}


console.log(NaN === NaN);      //false
console.log(Object.is(NaN,NaN)); //true    万物皆对象
//面向对象
const eat = {
	getEat(){
		return "鸡腿";
	}
}
const drink = {
	getDrink(){
		return "可乐";
	}
}
let sunday = Object.create(eat);
// console.log(sunday.getEat());
// console.log(Object.getPrototypeOf(sunday));    //{getEat: ƒ}

Object.setPrototypeOf(sunday,drink);
console.log(Object.getPrototypeOf(sunday));

//原生链
const eat = {
	getEat(){
		return "鸡腿";
	}
}
const drink = {
	getDrink(){
		return "可乐";
	}
}
let sunday = {
	__proto__:eat
}
// console.log(sunday.getEat());

sunday.__proto__ = drink;     //可以设置原型链
console.log(sunday.getDrink());

//super原生链
const eat = {
	getEat(){
		return "鸡腿";
	}
}
const drink = {
	getDrink(){
		return "可乐";
	}
}
let sunday = {
	__proto__:eat,
	getDrink(){
		return super.getDrink() + '咖啡';        //添加个super就可以拿到两个drink
	}
}
// console.log(sunday.getEat());

sunday.__proto__ = drink;     //可以设置原型链
console.log(sunday.getDrink());

//函数
const fn = function pp(arguments){
	
}
console.log(fn.name);

//箭头函数
// (()=>{
// 	console.log("fn init");
// })();

// eg:  (1=>2)();
const result = [1,2,3].map(function(index){
	return index*3;
})
console.log(result);

//改造得到
const result1 = [1,2,3].map((index)=>index*4);
console.log(result1);

//箭头函数会绑定顶级作用于
window.a = 50;
const sxx = {
	a:40,
	p:()=>{
		console.log(this.a);
	}
}
sxx.p();

//类似于arguments
function test(...results){
	//arguments
	console.log(results);
}
test(30,{options:111});
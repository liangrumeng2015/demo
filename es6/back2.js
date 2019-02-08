let qq = function*(){
	yield "冰淇淋";
	yield "汉堡包";
}
const ss = qq();
console.log(ss.next());
console.log(ss.next());
console.log(ss.next());

//循环遍历for
const arr = ['苹果','香蕉','菠萝'];
for (let v of arr){
	console.log(v);
}

const arr = ['苹果','香蕉','菠萝'];
const obj = {
	a:'白菜',
	b:'青菜',
	c:'豆芽'
};
for(var i in arr){
	console.log(i); //得到索引
}
for (let v of arr){
	console.log(v);   //拿到值
}


class Person{
	constructor(age){      //构造函数
		this.age = age;
	}
	tell(){
		console.log(`小王的年龄是${this.age}`);
	}
}
// const xiaowang = new Person(30);
// console.log(xiaowang.age);

class Man extends Person{
	constructor(age){
		super(age);
		this.arr = [];
	}
	set menu(){
		this.arr.push(data);
	}
	get menu(){
		return this.arr;
	}
	tell(){
		super.tell();
		console.log('hello');
	}
	static init(){
		console.log('static');
	}
}
Man.init();
// const xiaowang = new Man(20);
// console.log(xiaowang.test());
// console.log(xiaowang.tell());
// xiaowang.menu('西红柿');
// console.log(xiaowang.menu());



//set 和数组有点像
let arr = new Set("汉堡包");
arr.add("曲奇");
arr.add("曲奇1");
// console.log(arr);
// console.log(arr.size);
// arr.delete('包');
// console.log(arr.has('汉'));
for (let data of arr){
	console.log(data);
}
arr.clear();
console.log(arr.size);


//map
let food = new Map();
let fruit = {},cook = function(){};
food.set(fruit,"柠檬");
food.set(cook,'饼干');
console.log(food.get(cook));
console.log(food.size);
console.log(food);
food.delete(fruit);
console.log(food);

const arr = [12,34,56,78,13];
const result = [...new Set(arr)];
console.log(result);

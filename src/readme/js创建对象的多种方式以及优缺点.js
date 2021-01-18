// 1. 工厂模式

function createObj() {
  var obj = new Object()
  obj.name = 'zzj'
  obj.age = 18
  return obj
}

// 无法识别创建对象的类型person instance Object


// 2.构造函数模式

// function Person() {
//   this.name = 'zzj'
//   this.age = 18
//   this.fn=()=>{
//       console.log(this.name)
//   }
// }

// let person = new Person()
// 可以识别为一个特定的类型 person instance Person
// 每次创建实例，每个方法都会被创建一次

// 2.1构造函数模式优化
// function Person() {
//   this.name = 'zzj'
//   this.age = '18'
//   this.fn = fn
// }

// function fn() {
//   console.log(this.name)
// }

// let person = new Person()

// 解决了每个方法都被重新创建的问题
// 没有封装

// 3原型模式

// function Person() {

// }

// Person.prototype.name = 'zzj'
// Person.prototype.fn = () => {
//   console.log(this.name)
// }
// let person=new Person()
// 优点：方法不会重复创建
// 缺点：所有的属性与方法都共享，不能初始化参数

// 3.1原型模式优化
// function Person() {

// }

// Person.prototype = {
//   name: 'zzj',
//   fn: () => {
//     console.log(this.name)
//   }
// }

// 封装的好一点
// 缺点：重写原型，丢失了constructor属性

// 3.2原型模式优化
// function Person() {

// }

// Person.prototype = {
//   constructor: Person,
//   name: 'zzj',
//   fn: () => {
//     console.log(this.name)
//   }
// }

// 实例可以通过constructor属性找到所属构造函数
// 原型模式该有的缺点还在

// 4.组合模式 （构造函数模式与原型模式结合）

// function Person() {
//   this.name = 'zzj'
// }
// Person.prototype.fn = () => {
//   console.log(this.name)
// }

// 该共享的共享，该私有的私有
// 没有封装

// 4.1组合模式优化
function Person() {
  this.name = 'zzj'
  if (typeof this.fn !='function') {
    Person.prototype.fn = () => {
      console.log(this.name)
    }
  }
}

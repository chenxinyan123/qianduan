//定义了父类
class Father {
    constructor(x, y) {
    this.x = x;
    this.y = y;
    }
    sum() {
    console.log(this.x + this.y);
     }
  }
 //子元素继承父类
     class Son extends Father {
             constructor(x, y) {
           //使用super调用了父类中的构造函数
             super(x, y);
         }
     }
     let Father= new father('Mike');
     let Son= new son('Jack');
     var son = new Son(10, 20);
     son.sum(); //结果为30

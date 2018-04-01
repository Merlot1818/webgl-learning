/**
 * Calculate类的定义
 */
class Calculate {
    //构造函数
    constructor(precision) {
        this.precision = precision;
    }

    precision() {
        return this.precision;
    }

    //prototype原型链上的方法
    add(a, b) {
        console.log(this.precision, a + b);
    }
}

var calculate = new Calculate('mediump');//mediump 
calculate.add(100,200);


class HighpCalculate extends Calculate {
    constructor(precision,fix) {
        super(precision); // 记得用super调用父类的构造方法!
        this.fix = fix;
    }

    add(a, b) {
        console.log(this.precision, Number(a + b).toFixed(2));
    }
}

var highpCalculate = new HighpCalculate('highp')
highpCalculate.add(200,120);
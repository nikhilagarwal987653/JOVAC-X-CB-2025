function add(){
    let a=0;
    for(let i=0;i<this.length;i++){
        a+=this[i];
    }
    return a;
}
function subtract(){
    let b=0;
    for(let i=0;i<this.length;i++){
        b-=this[i];
    }
    return b;
}
function multiply(){
    let c=1;
    for(let i=0;i<this.length;i++){
        c*=this[i];
    }
    return c;
}
function hof(func1,func2,func3){
    return {
        [func1.name]: func1.call(numbers),
        [func2.name]: func2.call(numbers),
        [func3.name]: func3.call(numbers),
    };
}
const result= hof(add,subtract,multiply,[1,2,3]);
console.log(result);

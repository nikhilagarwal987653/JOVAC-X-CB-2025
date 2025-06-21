function totalmarks(){
    let sum =0;
    for(let i=0;i<this.length;i++){
        sum += this[i].marks;
    }
    return sum;
}
function averageMarks(){
    let sum =0;
    for(let i=0;i<this.length;i++){
        sum += this[i].marks;
    }
    return (sum/this.length).toFixed(2);
}
function highestMarks(){
    let max=0;
    for(let i=0;i<this.length;i++){
        if(this[i]>max){
            max = this[i];
        }
    }
    return max;
}
function lowestMarks(){
    let min=this[0];
    for(let i=0;i<this.length;i++){
        if(this[i]<min){
            min = this[i];
        }
    }
    return min;
}
function passpercantage(){
    const totalMarks = this.reduce((sum, current) => sum + current.marks, 0);
    const passPercentage = (totalMarks / (this.length * 100)) * 100;
    return passPercentage.toFixed(2);
}
function marksAnalyzeHOF(func1,func2,func3,func4,func5,marksArray){
    return {
        [func1.name]: func1.call(marksArray),
        [func2.name]: func2.call(marksArray),
        [func3.name]: func3.call(marksArray),
        [func4.name]: func4.call(marksArray),
        [func5.name]: func5.call(marksArray),

    };
}
const studentmarks=[85,67,91,78,99];
const result = marksAnalyzeHOF(totalmarks,averageMarks,highestMarks,lowestMarks,passpercantage,studentmarks);
console.log(result);

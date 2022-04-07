let n = [3,6,67,6,23,11,100,8,17,24,7,2,33,45,28,33,23,12,99,100];

let minim = Math.min(...n)

//console.log(minim);

const getSum = (a,b) => b ? getSum(a ^ b, (a & b) << 1) : a;

  
const arr1 = [1,2,3]


console.log(arr1.reverse())
// 一种写法
// const printMe = {
//     printMe(){
//         console.log('I get called form print.js!')
//     }
// }
// module.exports =  printMe

// 官方案例写法
export default function printMe() {
    console.log('I get called from print.js!');
  }
printMe()  
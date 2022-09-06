// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);
// 1つの条件式で、処理を2つに分ける場合

// if(条件1){
//   処理1
// } else{
//   処理2
// }
// 条件1を満たすときは処理1、満たさないときは処理2を実行

// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');
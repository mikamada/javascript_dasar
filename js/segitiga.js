var s = '';
var n = 5;

/* 
    *
    **
    ***
    ****
    *****
*/

// for(var i = 0; i < 5; i++) {
//     for(var j = 0; j <= i; j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

/* 
    *****
    ****
    ***
    **
    *
*/

// for(var x = 1; x <= n; x++){
//     for(var y = n; y >= x; y--){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

/* 
    *****
     ****
      ***
       **
        *
*/

// for(var i = 0; i < n; i++){
//     for(var j = 1; j <= i; j++){
//         s += ' ';
//     } for(var k = n; k > i; k--){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);


/* 
         *
        **
       ***
      ****
     *****
*/

// for(var i = 1; i <= n; i++){
//     for(var j = n; j > i; j--){
//         s += ' ';
//     }for(var k = 1; k <= i; k++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);


/* 
        *
       ***
      *****
     *******
    *********
*/
// for(var i = 1; i <= n; i++){
//     for(var j = n; j > i; j--){
//         s += ' ';
//     }for(var k = 1; k <= (2*i - 1); k++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

/* 
    *********
     *******
      *****
       ***
        *
*/

// for(var i = 1; i <= n; i++){
//     for(var j = 1; j <= i; j++){
//         s += ' ';
//     } for(var k = n; k >= (2*i - n); k--){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

/*
        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *
*/

// for(var i = 1; i <= n; i++){
//     for(var j = n; j > i; j--){
//         s += ' ';
//     }for(var k = 1; k <= (2*i - 1); k++){
//         s += '*';
//     }
//     s += '\n';
// }
// for(var i = 2; i <= n; i++){
//     for(var j = 1; j < i; j++){
//         s += ' ';
//     } for(var k = n; k >= (2*i - n); k--){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

for(var i = 0; i < 10; i++){
    for(var j = 1; j <= 10; j++){
        s += i+j;
    }
    s += '\n';
}
if(s % 2 === 0){
    s += '';
}else{
    s += '#';
    console.log(s);
}

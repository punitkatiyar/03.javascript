// string : [ "", '', `ECMAscript` ]

let msg1="Welcome to";
let msg2='Javascript';
let msg3=`Tutorial`;

console.log(msg1);
console.log(msg2);
console.log(msg3);

console.log(msg1,msg2,msg3);

console.log(msg1+msg2+msg3);

console.log(msg1+" "+msg2+" "+msg3);

console.log(" msg1 msg2 msg3 ");

console.log(' msg1 msg2 msg3 ');

// ecma script [ template string ]

console.log(` ${msg1} ${msg2} msg3 `);



//document.getElementById('root').innerHTML= ` ${msg1} ${msg2} ${msg3} `;


let msg4="hello in javascript class";
let res1=msg4.toUpperCase();
let res2=msg4.toLowerCase();
document.getElementById('root').innerHTML=res1;
document.getElementById('root').innerHTML=res2;


let count=msg4.length;
console.log(count);








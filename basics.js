// temp=26;
// if(temp>30)
// {
//     console.log("it is a hot day")
// }
// else if(temp>20 && temp <30)
// {
//     console.log("its a plesent day")
// }
// else{
//     console.log("its a cold day")
// }
// i=0;
// while(i<10)
// {


//     console.log(i);
//     i++;
// }
// i=0;
// do{
//     console.log(i)
//     i++
// }
// while(i<5)
// for(i=1;i<16;i++)
// {
    
// if(i%2==0)
// {
//     console.log(i," a even number")
// }
// else{
//     console.log(i," a odd number")
// }
// }
//array
// let fruits=["apple","banana","mango"]
// console.log(fruits);
// console.log(fruits.length);
// fruits[2]='grappe';
// console.log(fruits);
// for(i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i]);
// }
// fruits.push('kiwi');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift('banana');
// console.log(fruits);
//  function greet(name)
//  {
//     console.log('welcome'+' '+name+"!");
    
//  }
//  greet("navya");
//  function odd(a,b)
//  {
//     return a+b;
//  }
//  console.log(odd(2,3));
// let people=[

// {
//     name:'navya',
//     age:20,
//     city:'calicut',
// },
// {
//     name:'diya',
//     age:12,
//     city:'kochi',
// },
// {
//     name:"kavi",
//     age :25,
//     city:'tvm',
// }
// ];
// console.log(people[2].age);
// var add=(a,b)=>{
//     var sum=a+b
//     console.log(sum);
//     console.log(`sum is  ${sum}`)

// }
// add(30,20)
// var [a,b,c,d]=['apple','orange','mango','kiwi'];
// console.log(d);
// console.log(c);

// var a=[1,2,3]
// var b=[4,5,6]
// var c=[...a,...b];
// console.log(c);

var [a,b,..t]=[1,3,45,5,9];
console.log(t);
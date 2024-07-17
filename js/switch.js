a=[]
let n=prompt("enter your number:");
for(i=0;i<n;i++){
if (i%3==0 && i%5==0) {
    a.push("fizzzbuzz")
}
else if(i % 3== 0){
    a.push("fizz");
}
else if(i % 5 == 0){
    a.push("buzz");
}
else{
    a.push(i);
}
}
console.log(a);
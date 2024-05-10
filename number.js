let btn=document.querySelector("button");
function getrandomnum(){
    let n=Math.floor((Math.random()*10)+1);
    return n;
}
btn.addEventListener("click",function(){

    let d1=document.querySelector("#first");
    let r1=getrandomnum();
    d1.innerText=r1;

    let d2=document.querySelector("#second");
    let r2=getrandomnum();
    d2.innerText=r2;

    let d3=document.querySelector("#third");
    let r3=getrandomnum();
    d3.innerText=r3;
    
    
    
    console.log("number is generated");
});
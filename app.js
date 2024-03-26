const sc1=document.getElementById('play1');
const sc2=document.getElementById('play2');
// Scores of both the palayeers

let p1score=0;
let p2score=0;

const bt1=document.getElementById('pb1');
const bt2=document.getElementById('pb2');
const res=document.getElementById('reset');
//both the button 

bt1.addEventListener('click',()=>{
    p1score+=1;
    play1.textContent=p1score;
})

bt2.addEventListener('click',()=>{
    p2score+=1;
    play2.textContent=p2score;
})

res.addEventListener('click',()=>{
    p2score=0;
    p1score=0;
    play1.textContent=0;
    play2.textContent=0;
})
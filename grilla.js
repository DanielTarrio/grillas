
let grilla = () => {

    console.log('grilla');

}


const q = document.getElementById('k1');
const q2 = document.getElementById('k2');
q.addEventListener("click", function(){
    let q2 = document.getElementById("ppp");
    q2.innerHTML="<table id='e'><tr><th>Company</th><th>Contact</th><th>Country</th></tr> <tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr></table>";
});
console.dir(document);
q2.addEventListener("click", function(){
    let q2 = document.getElementById("e");
    q2.innerHTML=q2.innerHTML+"<tr><td>Centro comercial ewer</td><td>Francisco wer</td><td>sdf</td></tr>";
});
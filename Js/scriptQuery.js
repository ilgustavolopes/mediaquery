let valor = 0;
document.getElementById("number").textContent = valor;

function add(){
    valor++;
    document.getElementById("number").textContent = valor;
}
function res(){
    valor--;
    document.getElementById("number").textContent = valor;
}
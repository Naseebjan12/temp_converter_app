

function celcius(){
    var input=document.getElementById('input').value;

    var cel=document.getElementById('cel');
    if(cel.checked==true){
        var celcius_temp=Math.ceil((9/5)*input+32);
        document.getElementById('res').innerHTML=`${celcius_temp} Farnheit`;
    }
}
document.getElementById('btn').onclick=()=>{
    celcius();
}
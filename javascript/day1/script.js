let x=0;
let Odd="The number is Odd";
let even="Even";
const p = document.getElementById('displayy');
function evenorodd(){
    let y=document.getElementById('textInside').value;
    console.log(y);
    if(y==""){
        alert("Please enter a number");
        return;
    }
    if(!(isNaN(y))){

    
    if(y%2==0 && y!=0){
        p.style.display = "block";
        p.textContent=`The number ${y} is Even`;
        p.style.color="green";
    }else if(y%2!=0){
        p.style.display = "block";
        p.textContent=`The number ${y} is Odd`;
        p.style.color="red";
    }
    else{
        p.style.display="block";
        p.textContent="it is not even or odd";
        p.style.color="yellow";
    }
}else{
    alert("please Enter valid number");
    document.getElementById('textInside').value=" ";
     p.textContent=' ';
    return 0;
}

}
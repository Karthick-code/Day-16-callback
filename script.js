var parent_div=document.createElement("div");
parent_div.className="main";
parent_div.setAttribute("style","font-size: 100px; margin: 250px;text-align: center;")

print_data(display);

document.body.append(parent_div);


function print_data(callback){
    var x=0;
    setTimeout(()=>{
        parent_div.innerHTML="10";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="9";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="8";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="7";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="6";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="5";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="4";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="3";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="2";
    },x+=1000);
    setTimeout(()=>{
        parent_div.innerHTML="1";
    },x+=1000);
    callback("Happy Independence Day",x)
    

}

function display(data,x){
    setTimeout(()=>{
        parent_div.innerHTML=data;
    },x+=1000);
}
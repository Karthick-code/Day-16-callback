var parent_div=document.createElement("div");
parent_div.className="main";
parent_div.setAttribute("style","font-size: 100px; margin: 250px;text-align: center;")

print_data(display);

document.body.append(parent_div);


function print_data(callback){
    var x=0;
    x=callback("10",x);
    x=callback("9",x);
    x=callback("8",x);
    x=callback("7",x);
    x=callback("6",x);
    x=callback("5",x);
    x=callback("4",x);
    x=callback("3",x);
    x=callback("2",x);
    x=callback("1",x);
    x=callback("Happy Independence Day",x) ;   

}

function display(data,x){
    setTimeout(()=>{
        parent_div.innerHTML=data;
    },x+=1000);
    return x;
}
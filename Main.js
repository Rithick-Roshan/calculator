let out=$("#out-element");
function dispaly(num){
    out.val(out.val()+num);
}

function calculate()
{
    try{
        //out.val(eval(out.val()));
       let exp=out.val();
        let result=eval(exp);
        
        out.val(result);
        console.log(result);
    }
    catch(error)
    {
        //alert("invalid");
        out.val("INVALID")
        
    }
}
function Clear(){
    out.val("");
}

function del()
{
    out.val(out.val().slice(0,-1));
    
}

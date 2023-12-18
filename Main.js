let out=$("#out-element");
function dispaly(num){
    out.val(out.val()+num);
}
function calculate()
{
    
    try{
        //out.val(eval(out.val()));
        let exp=out.val();
        let Ex=exp;
         exp = exp.replace(/\^/g, '**');
         exp= exp.replace(/√/g,'Math.sqrt');
         exp= exp.replace(/log/g,'Math.log10');
         exp= exp.replace(/ln/g,'Math.log');
         exp= exp.replace(/sin/g,'Math.sin');
         exp= exp.replace(/cos/g,'Math.cos');
         exp= exp.replace(/tan/g,'Math.tan');
         let result=eval(exp);
         return out.val(result);
         console.log(result);
    }
    catch(error)
    {
        //alert("invalid");
        out.val(error);
        
    }
}
function Clear(){
    out.val("");
}

function del()
{
    out.val(out.val().slice(0,-1));
    
}

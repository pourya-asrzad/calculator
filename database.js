

export function calculator(puter,answer,cal ,operators,button){
    button.addEventListener("click",(e)=>{
       let value= ( e.target.value);
       if( value=="1" ||value=="2"||value=="3"||value=="4"||value=="5"||value=="6"||value=="7"||value=="8"||value=="9"||value=="0"||value=="00"){
          puter.innerHTML=puter.textContent+value
          cal.push(value)
       }
       else if(value==="clear"){
          cal.splice(0, cal.length)
          localStorage.removeItem('answer');
          localStorage.removeItem('put');
          puter.innerHTML="";
          answer.innerHTML="";
       }else if(value=="equel"){
       const answer1= eval(`${puter.textContent}`)
                    answer.innerHTML=answer1   
                    localStorage.setItem("answer",answer.textContent)
                    localStorage.setItem("put",puter.textContent)
                   }
                })
                const save= localStorage.getItem('answer');
                const put= localStorage.getItem('put');
                puter.innerHTML=put;
                answer.innerHTML=save;
 
 function operchecker(){
   for (let operator of operators ){
    operator.addEventListener("click",(event)=>{
       if(["+","-","/","*"].includes(cal[cal.length-1])){
          cal.pop() 
          cal.push(event.target.value)
          puter.innerHTML=cal.join("")
       }else{
          cal.push(event.target.value)
          puter.innerHTML=puter.textContent+event.target.value
       }
    })
   }
 }
 operchecker()
 } 
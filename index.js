document.getElementById("getAdvice").addEventListener("click", getadvice);


async function getadvice(){
   try{
    let res=await fetch("https://api.api-ninjas.com/v1/advice",
      {
        headers : {
          'X-Api-Key': 'R4E+sacdvnxhAJy6dNl0/w==4UEFvxxh5bPVbrH5'  
        }
      }
    );
    
    console.log(res);
     let data = await res.json();
    document.getElementById("advice").textContent = data.advice;
   }
   catch(error){
    console.log(error);
   }
}

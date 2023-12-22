document.getElementById('openPageButton').addEventListener('click', function() {
   
    window.open('./join_group.html', '_blank');
});

const close = document.getElementById("close"); //
const signuo = document.getElementById("sigup");

const createAc= document.getElementById("acCreate");
const signAc = document.getElementById("Acsign");

const showCreateAccount = document.getElementById("showCreateAccount"); 
const haveAccount = document.getElementById("haveAccount");


close.addEventListener("click",()=>{
    signuo.style.display = "none";  

});   

showCreateAccount.addEventListener("click",()=>{
    signAc.style.display = "none";  
    createAc.style.display = "block";  
    alert("njca")
});  

haveAccount.addEventListener("click",()=>{
    createAc.style.display = "none";  
    signAc.style.display = "block";  
    alert("x n")
}); 



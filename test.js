const showbtn = document.getElementById("showpass");
showbtn.addEventListener("click",()=>{
    console.log("hi");
    
   const pass = document.getElementById("password"); 
   const typ = pass.getAttributeNode("type").value;
   if(typ === "password")
   {
    pass.getAttributeNode("type").value = "text";
}
else if(typ === "text"){
       pass.getAttributeNode("type").value = "password";

   }
   
})


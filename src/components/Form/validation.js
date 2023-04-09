const regexEmail = /\S+@\S+\.\S+/;

let Validate = (userData)=>{
   const error = {}
   if(!userData.email){
       error.email = "Debe completar con el email"
   } else if(userData.email.length > 35){
       error.email = "No puede tener más de 35 caracteres"
   } else if(!regexEmail.test(userData.email)){
       error.email = "Email no válido"
   }
   else error.email= "" 
   
   if(userData.password.length < 6 || userData.password.length > 10){
       error.password = "Longitud inválida"
   } else if(!/\d/.test(userData.password)){
       error.password = "Debe tener al menos un número"
   } else error.password = ""
   
   return error}

export default Validate;

import  User  from "./user.js";

let user = new User()


function serializeForm(formNode) {
  return new FormData(formNode)
}

async function FormSubmit(event) {
  
  event.preventDefault()
  let data = serializeForm(applicantForm)
  data =  Array.from(data.entries())
  data.forEach(value=>user[value[0]] = value[1])
  await user.RegisterUser()
  console.log(user);
}



const applicantForm = document.getElementById('sendForm')
applicantForm.addEventListener('submit', FormSubmit)



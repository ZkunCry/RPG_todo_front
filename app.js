const url = "http://127.0.0.1:5000/"

let user = {
  email:"aksentev.04@mail.ru",
  password:"testJS"
}

async function Register(url)
{
  try {
    url+='register'
    const resposnse = await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
    const result =  await resposnse.json()
    console.log(result);
  } 
  catch (error) {
    console.error('Error:',error);
  }    
}
async function Login(url){
  try {
    url+='login'
    const resposnse = await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
    const result = await resposnse.json()
    console.log(result);

  } catch (error) {
    console.error('Error:',error)
  }
}

Login(url)
export const url = "http://127.0.0.1:5000/"

export async function sendRequest(method,url,body = null){
  console.log(url);
  const headers = {
    'Content-Type': 'application/json;charset=utf-8'
  }
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  })
  if(response.ok)
  {
    return await response.json()
  }
   
}
export async function Register(url,user)
{
  try {
    url +='register'
    const result  = sendRequest('POST',url,user)
    return result
  } 
  catch (error) {
    console.error("Error: ",error)
}
  
}
export async function Login(url,user){
  try {
    url+='login'
    const result = sendRequest('POST',url,user)
    return result
  } 
  catch (error) {
    console.error("Error: ",error)
  }
}
export async function changeName(url,user,name){

}
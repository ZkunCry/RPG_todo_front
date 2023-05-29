import { Login,Register,url } from "./sendrequest.js"

export default class User{
  
  constructor(name,email,password,id=null,token=null){
    this.name = name
    this.email = email
    this.password = password
    this.id = id
    this.token = token
  }
  set Id(value){
      this.id = value
  }
  get Id(){
    return this.id
  }
  set Token(value){
    this.token = value
  }
  get Token(){
    return this.token
  }
  
  async RegisterUser(){
    const data = await Register(url,this)
    this.Id  = data['id']
    this.Token = data['access_token']
    return data
  }
  async LoginUser(){
    const data = await Login(url, this).then(value=>value)
    this.Id  = data['id']
    this.Token = data['access_token']
    return data
  }
  async ChangeName(){

  }
  CreateList(){

  }
}
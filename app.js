import  User  from "./user.js";
let user = new User("Eugene","aksentev.04@mail.ru","testJS")
let result = await user.LoginUser()
console.log(result);
console.log(user);
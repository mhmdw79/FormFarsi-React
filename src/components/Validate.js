const Validate = (data,type) =>{
    const error = {}


    if(!data.email){
        error.email = "لطفا ایمیل خود را وارد نمایید"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        error.email = "ایمیل نامعتبر میباشد"
    }else{
        delete error.email
    }

    if(!data.password){
        error.password = "لطفا رمز عبور خود را وارد کنید"
    }else if (data.password.length < 6){
        error.password = "رمز عبور باید حداقل دارای 8 کاراکتر باشد"
    }else{
        delete error.password
    }
  
  
    if(type  === "SignUp"){
        
    if(!data.name.trim()){
        error.name= "لطفا نام خود را وارد کنید"
    }else{
        delete error.name
    }
    if(!data.confirmPassword){
        error.confirmPassword = "تکرار رمز عبور خود را وارد کنید"
    }else if (data.confirmPassword !== data.password){
        error.confirmPassword="رمز عبور با تکرارش یکسان نیست"
    }else{
        delete error.confirmPassword
    }
    if(data.isAccepted){
        delete error.isAccepted
    }else{
        error.isAccepted = "قوانین باید تایید شود"
    }

    }
    return error
}

export default Validate


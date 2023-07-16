import toast from 'react-hot-toast';
export async function passwordValidate(values){
    const error =  passwordVerify({},values);
    return error;
}

function passwordVerify(error = {} , values){
    if(!values.password)
        error.password =toast.error("password is required");
    if(values.password.includes(" "))
        error.password = toast.error("invalid password");
    if(values.password.length < 4)
        error.password = toast.error("password must be at least 4 characters long")
    return error;
}
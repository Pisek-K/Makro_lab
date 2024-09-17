


exports.login = (req,res,next) => {
    res.json({message: "Login"})
}

exports.register = (req,res,next) => {
    res.json({message: "Register"})
}

exports.forgetPassword = (req,res,next) => {
    res.json({message: "Forget-Password"})
}

exports.resetPassword = (req,res,next) => {
    res.json({message: "Reset-Password"})
}
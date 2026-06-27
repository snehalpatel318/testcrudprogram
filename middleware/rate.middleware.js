import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
    windowMs:60*1000,
    max:5,
    message:{
        success:false,
        message:"Too many login attempts"
    }
});
export default loginLimiter;
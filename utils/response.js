export const success=(res,data)=>{
    return res.json({
        success:true,
        data
    });
};

export const error=(res,message,status=400)=>{
    return res.status(status).json({
        success:false,
        message
    });
};
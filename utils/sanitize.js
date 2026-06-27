import sanitizeHtml from "sanitize-html";

const sanitize=(value)=>{
    return sanitizeHtml(value,{
        allowedTags:[],
        allowedAttributes:{}
    });
};

export default sanitize;
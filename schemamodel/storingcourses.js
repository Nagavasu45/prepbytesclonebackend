const mongoose=require("mongoose")
const courseSchema=new mongoose.Schema({
    useremail:{
        type:String,
        required:true
    },
    bookname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    
    
})
const coursestr=mongoose.model('usercourses', courseSchema);
module.exports={coursestr}
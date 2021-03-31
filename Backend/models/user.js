import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    firstName: { type: String, required:  true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    password:{type:String,required:true},
    Email:{type:String,required:true},
    PhoneNumber:{type:String,required:true},
    MobileNumber:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true},
    id: { type: String }
});

export default mongoose.model("User", userSchema);

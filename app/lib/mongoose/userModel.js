import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email es requerido"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password es requerida"],
        select: false
    }
}, {timestamps: true}
);
  
export default mongoose.models.User || mongoose.model('User', userSchema);
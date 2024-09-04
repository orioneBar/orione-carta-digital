import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ]
}, {timestamps: true}
);
  
export default mongoose.models.Category || mongoose.model('Category', categorySchema);

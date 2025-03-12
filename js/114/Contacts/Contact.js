import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
  First: { type: String, required: true },
  last: { type: String, required: true },
  number: { type: String, required: true },
  email:{type:String,required:false}
});

export default mongoose.model('Contact', contactSchema);

import mongoose from 'mongoose';
const { Schema } = mongoose;


const contactListSchema = new schema({
    Name: { type: string, required: true },
    contacts: [{ type: schema.objectId, ref: 'Contact' }]
});

contactListSchema.Methods.print=function(){
    console.log(Name);
    
}


export default mongoose.model('ContactList', contactListSchema);
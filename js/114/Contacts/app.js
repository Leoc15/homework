import mongoose from 'mongoose';
import contactList from './contactList';
import Contact from './Contact';

await mongoose.connect('mongodb://localhost:27017/Contacts');

const studybuddy = new Contact({
    First: 'studyBuddy',
    last: 'David',
    number: '917-717-1872',
    email: 'davidStudy@pcs.woodmont.edu'
});

await Contact.save(studybuddy);
await Contact.print(studybuddy);
contactList1 = new contactList({
    Name: 'college'
})
contactList.Contact.push(studybuddy);
await contactList1.save();
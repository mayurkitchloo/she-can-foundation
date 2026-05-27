import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import connectDB from './config/db.js';
import Admin from './models/Admin.js';

dotenv.config();

const seedAdmin = async () => {
    try{
        await connectDB();

        const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
        if(existingAdmin) {
            console.log('Admin already exists');
            process.exit();
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

        await Admin.create({
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword
        });

        console.log('Admin created succesfully');
        process.exit();
    }
    catch(error){
        console.log('Error creating admin', error.message);
        process.exit(1);
    }
}

seedAdmin();
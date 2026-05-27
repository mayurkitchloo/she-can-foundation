import express from 'express';
import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// @route   POST /api/auth/login
// @desc    Login admin and return token
// @access  Public
router.post('/login', async (req, res) => {
    try{
        const { email, password } = req.body;

        //find admin by email
        const admin = await Admin.findOne({ email });
        if(!admin){
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        //compare password
        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
        
        //generate token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ token });
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
});
    
export default router;
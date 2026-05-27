import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

const protect = async( req, res, next) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(401).json({ message: 'Not authorized' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = await Admin.findById(decoded.id);
        next();
    }
    catch(error){
        res.status(401).json({ message: 'Not authorized' });
    }
}

export default protect;
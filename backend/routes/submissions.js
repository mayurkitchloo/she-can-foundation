import express from 'express';
import Submission from '../models/Submission.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router()

// @route   POST /api/submissions
// @desc    Create a new submission
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    const submission = new Submission({ name, email, message });

    try {
        await submission.save();
        res.status(201).json({ message: 'Submission created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @route   GET /api/submissions
// @desc    Get all submissions
// @access  Protected
router.get('/', protect, async (req, res) => {
    try {
        const submissions = await Submission.find().sort('-createdAt');
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
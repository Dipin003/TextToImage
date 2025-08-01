
import express from 'express';
import { loginUser, paymentRazorpay, registerUser, userCredits, verifyRazorpay } from '../controllers/userController.js';
import userAuth from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/credits', userAuth, userCredits)
router.post('/pay-razor', userAuth, paymentRazorpay)
router.post('/verify-razor', userAuth, verifyRazorpay)

export default router;
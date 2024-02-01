import express from 'express';
import { test } from '../controllers/user.controller.js';

// initiate route
const router = express.Router();

// Define route
router.get('/test', test); // referring from contriller 

// exporting route
export default router;

import express from 'express';
import { getUser, getUserFriends, addRemoveFriend } from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router()


//TODO FLAG https://youtu.be/K8YELRmUb5o?t=3682
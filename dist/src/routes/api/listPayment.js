"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
// import { login } from '../../controllers/carsController';
const middleware = require('../../middlewares/auth');
router.get('/', middleware.auth, getBills);
exports.default = router;

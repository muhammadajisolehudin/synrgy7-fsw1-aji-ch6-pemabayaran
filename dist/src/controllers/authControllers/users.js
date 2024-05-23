"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_1 = require("../../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY = 'secret' } = process.env;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.UserModel.query().findOne({ email });
        if (user) {
            if (user.password === password) {
                const payload = {
                    id: user.id,
                    role: user.role
                };
                const token = yield jwt.sign(payload, JWT_SECRET_KEY, {
                    expiresIn: "30d",
                });
                return res.status(200).json({
                    status: true,
                    message: "login success.",
                    data: {
                        token: token
                    }
                });
            }
            else {
                return res.status(400).json({
                    status: false,
                    message: "login failed!"
                });
            }
        }
        return res.status(400).json({
            status: false,
            message: "Email is not registered!, please register first!",
        });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.login = login;

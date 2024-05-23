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
const models_1 = require("../models");
class PaymentService {
    static getAllBills() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bills = yield models_1.BillModel.query();
                return bills;
            }
            catch (error) {
                throw new Error(`Error fetching bills: ${error.message}`);
            }
        });
    }
    static createBill(userId, totalPrice) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bill = yield models_1.BillModel.query().insert({
                    user_id: userId,
                    total_price: totalPrice,
                });
                return bill;
            }
            catch (error) {
                throw new Error(`Error creating bill: ${error.message}`);
            }
        });
    }
    static addBillDetail(billId, billTypeId, amount, totalPrice) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const billDetail = yield models_1.BillDetailModel.query().insert({
                    bill_id: billId,
                    bill_type_id: billTypeId,
                    amount: amount,
                    total_price: totalPrice,
                });
                return billDetail;
            }
            catch (error) {
                throw new Error(`Error adding bill detail: ${error.message}`);
            }
        });
    }
    static getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield models_1.UserModel.query();
                return users;
            }
            catch (error) {
                throw new Error(`Error fetching users: ${error.message}`);
            }
        });
    }
    static getAllBillTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const billTypes = yield models_1.BillTypeModel.query();
                return billTypes;
            }
            catch (error) {
                throw new Error(`Error fetching bill types: ${error.message}`);
            }
        });
    }
}
exports.default = PaymentService;

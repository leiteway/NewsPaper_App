import { body } from 'express-validator';
import validateResult from '../helpers/ValidationResult';
import { Request, Response, NextFunction } from 'express';

export const userValidationRules = [
 body('name').notEmpty().withMessage('A name is required'),
 body('email').notEmpty().withMessage('email is required'),
 body('password').notEmpty().withMessage('this field can not be empty')
 .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
    .matches(/[0-9]/).withMessage('Password must contain at least one digit')
    .matches(/[^a-zA-Z0-9]/).withMessage('Password must contain at least one special character'),
 (req: Request, res: Response, next: NextFunction) =>{
   validateResult(req, res, next)
}
];
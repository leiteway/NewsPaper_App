import { body } from 'express-validator';
import validateResult from '../helpers/ValidationResult';
import { Request, Response, NextFunction } from 'express';

export const newsValidationRules = [
  body('title').notEmpty().withMessage('A title is require'),
  body('content').notEmpty().withMessage('You must write your News here'),
  body('date').notEmpty().withMessage('A date is required'),
  body('image').notEmpty().withMessage('An url is required'),
  (req: Request, res: Response, next: NextFunction) =>{
    validateResult(req, res, next)
  }
];
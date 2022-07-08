import * as express from 'express'
import { IuserCreate } from '../interfaces/users'

declare global {
  namespace Express {
    interface Request {
      userEmail: string
      newUser: IUserCreate
    }
  }
}  
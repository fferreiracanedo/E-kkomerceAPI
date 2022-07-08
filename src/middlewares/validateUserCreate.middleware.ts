
// src/middlewares/validadeUserCreate.middleware.ts

// importações dos tipos dos parâmetros de uma função middleware
import { Request, Response, NextFunction } from 'express'

// importamos a interface de criação de um usuário
import { IuserCreate } from '../interfaces/users'

// importação da biblioteca yup
import * as yup from 'yup'
import { SchemaOf } from 'yup'
export const userCreateSchema: SchemaOf<IuserCreate> = yup.object().shape({
  name: yup
    .string().required(),
  email: yup
    .string().email().required(),
  password: yup
    .string().required()
})

export const validateUserCreate = (schema: SchemaOf<IuserCreate>) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction) => {

    try {
      const data = req.body

      try {

        const validatedData = await schema.validate(
          data,
          {
            abortEarly: false,
            stripUnknown: true
          })
        req.newUser = validatedData

        next()

      } catch (err: any) {


        return res.status(400).json({
          error: err.errors?.join(', ')
        })
      }

    } catch (err) {

      next(err)
    }
  }
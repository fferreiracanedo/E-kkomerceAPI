import { Request, Response } from 'express'
import { AppError, handleError } from '../../Errors/appError'
import userCreateService from '../../services/user/userCreate.service'

const UserCreateController = async (req: Request, res: Response) => {



  try {

    const { name, email, password } = req.newUser




    const createUser = await userCreateService({ name, email, password })

    return res.status(201).send(createUser)

  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}

export default UserCreateController
import { IuserLogin } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../Errors/appError";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IuserLogin) => {


  const userRepository = AppDataSource.getRepository(User)

  const users = await userRepository.find()


  const account = users.find(user => user.email === email)


  if (!account) {
    throw new AppError(403, "Account not found")
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError(403, "Wrong email/password")
  }

  const token = jwt.sign(
    { email: email },
    String(process.env.JWT_SECRET),
    { expiresIn: "1d" }
  )
  return token
}

export default userLoginService
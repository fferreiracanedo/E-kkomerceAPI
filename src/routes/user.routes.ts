import { Router } from "express";
import { userCreateSchema } from '../middlewares/validateUserCreate.middleware'
import { validateUserCreate } from '../middlewares/validateUserCreate.middleware'
import { authUser } from '../middlewares/authUser.middleware'

const routes = Router()

import UserCreateController from "../controllers/users/userCreate.controller";
import UserListController from "../controllers/users/userList.controller";
import userListOneController from '../controllers/users/userListOne.controller'
import userLoginController from '../controllers/users/userLogin.controller'
import userDeleteSelfController from "../controllers/users/userDeleteSelf.controller";
import userUpdatePasswordController from '../controllers/users/userUpdatePassword.controller'

export const userRoutes = () => {


  routes.post('/', validateUserCreate(userCreateSchema), UserCreateController)
  routes.post('/login', userLoginController)
  routes.get('/', authUser, UserListController)
  routes.get('/me', authUser, userListOneController)
  routes.delete('/me', authUser, userDeleteSelfController)
  routes.patch('/me/updatePassword', authUser, userUpdatePasswordController)


  return routes
}





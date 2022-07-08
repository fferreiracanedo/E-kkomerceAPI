import { Request, Response } from 'express'
import UserListService from '../../services/user/userList.service'



const UserListController = async (req: Request, res: Response) => {


  try {

    const listUser = await UserListService()


    return res.status(200).send(listUser)

  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        "error": error.name,
        "message": error.message
      })
    }
  }

}
export default UserListController
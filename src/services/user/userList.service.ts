import { User } from "../../entities/user.entity"
import { AppDataSource } from "../../data-source"

const UserListService = async () => {


  const userRepository = AppDataSource.getRepository(User)

  const users = userRepository.find()

  return users

}

export default UserListService
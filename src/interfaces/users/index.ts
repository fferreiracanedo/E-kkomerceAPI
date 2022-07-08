export interface Iuser {
  id: string,
  name: string,
  email: string
}


export interface IuserCreate {
  name: string,
  email: string,
  password: string
}


export interface IuserLogin {
  email: string,
  password: string
}


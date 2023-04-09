export type IUser = {
  id: number
  name: string
  username: string
  phone: string
  email: string
  website: string
  address: IAddress
  company: ICompany
}

export type IAddress = {
  city: string
  street: string
  suite: string
  zipcode: string
  geo: IGeo
}

export type IGeo = {
  lat: string
  lng: string
}

export type ICompany = {
  name: string
  catchPhrase: string
  bs: string
}

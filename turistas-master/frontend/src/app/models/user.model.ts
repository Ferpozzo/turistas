export interface UserInterface {
    _id?: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    gender: TUserGender,
    documentId: string,
    type: TUserType,
    status: TUserStatus,
    updatedAt?: Date,
    createdAt?: Date
}
export interface UserLoginInterface {
    _id?: string,
    email: string,
    password: string,
    token?: string
}
export type TUserType = 'Consumer' | 'Commercial' | 'Both'
export type TUserStatus = 'Active' | 'Inactive' | 'Banned'
export type TUserGender = 'Male' | 'Female' | 'Other'
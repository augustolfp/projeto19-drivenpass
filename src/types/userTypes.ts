import { Users } from "@prisma/client";

export type IUserData = Omit<Users, 'id'>;
export type ILoginUserData = Omit<Users, 'id' | 'name'>;
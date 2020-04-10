import { UserRolesModel } from "./user-roles.model";

export class UsersModel {

   public userId: number;
   public passwordHash: string;
   public securityStamp: string;
   public userName: string;
   public fullName: string;
   public isBlocked: boolean;
   public countryId: number;
   public documentTypeId: number;
   public name: string;
   public lastName: string;
   public mail: string;
   public documentNumber: number;
      
}
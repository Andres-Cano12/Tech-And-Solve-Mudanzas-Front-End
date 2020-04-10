import { RoleModel } from "../role/role.model";

export class UserModel {
    public userId: number;
    public firstName: string;
    public lastName: string;
    public userName: string;
    public email: string;
    public password: string;
    public countryId: number;
    public documentTypeId: number;
    public identification: string;
    public externalUser: boolean;
    public isBlocked: boolean;
    public creationDate: string;
    public updateDate: string;
    public roleId: number;
    public roleUser: RoleModel;
}

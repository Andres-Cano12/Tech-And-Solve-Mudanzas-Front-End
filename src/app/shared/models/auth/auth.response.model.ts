import { UserModel } from "../user/user.model";
import { TokenModel } from "./token.model";

export class AuthResponseModel{
    public token: TokenModel;
    public user: UserModel;
}
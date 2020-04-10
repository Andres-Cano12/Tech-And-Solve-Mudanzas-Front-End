import { CountryModel } from "./country.model";

export class CityModel {

   public cityId: number;
   public countryId: number;
   public name: string;
   public state: boolean;
   public country: CountryModel;
   public countryName: string;
}

import { PersonalInfo } from './personal-info.interface';

export interface Order {
  id: number;
  quantity: number;
  personalInformation: PersonalInfo;
}

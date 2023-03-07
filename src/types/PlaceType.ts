import { ContactType } from './ContactType';
import { LocationType } from './LocationType';

export interface PlaceType {
  placeId: number;
  description: string;
  price: number;
  name: string;
  location: LocationType;
  schedule: string;
  createDate: Date;
  updateDate: Date;
  сontact: ContactType;
}

import { LocationType } from '../types/LocationType';
import { subways } from './subways';

export const locations: LocationType[] = [
  {
    locationId: 1,
    subway: [subways[0]],
    fullAddress: 'пл. Сталина, 37',
    latitude: 55.75 + Math.random() / 10,
    longitude: 37.55 + Math.random() / 10,
  },
  {
    locationId: 2,
    subway: [subways[1], subways[2]],
    fullAddress: 'бульвар Славы, 93',
    latitude: 55.75 + Math.random() / 10,
    longitude: 37.55 - Math.random() / 10,
  },
  {
    locationId: 3,
    subway: [subways[3]],
    fullAddress: 'ул. 1905 года, 2',
    latitude: 55.75 - Math.random() / 10,
    longitude: 37.55 + Math.random() / 10,
  },
  {
    locationId: 4,
    subway: [subways[4]],
    fullAddress: 'пл. Ломоносова, 84',
    latitude: 55.75 - Math.random() / 10,
    longitude: 37.55 - Math.random() / 10,
  },
  {
    locationId: 5,
    subway: [subways[5], subways[6]],
    fullAddress: 'бульвар Космонавтов, 99',
    latitude: 55.75 + Math.random() / 10,
    longitude: 37.55 - Math.random() / 10,
  },
  {
    locationId: 6,
    subway: [subways[7]],
    fullAddress: 'ул. Косиора, 7',
    latitude: 55.75 - Math.random() / 10,
    longitude: 37.55 + Math.random() / 10,
  },
];

import { places } from '../mocks/places';

import { PinType } from '../types/PinType';

export const getPins = async (page: number): Promise<PinType[]> => {
  // const body = await fetch('fakeapi');
  // const res = await body.json();
  // return res;
  const res = places.map((place) => ({
    latitude: place.location.latitude,
    longitude: place.location.longitude,
    placeId: place.placeId,
    price: place.price,
    name: place.name,
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 3000);
  });
};

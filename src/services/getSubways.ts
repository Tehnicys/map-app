import { places } from '../mocks/places';

export const getSubways = async (): Promise<any[]> => {
  try {
    // const body = await fetch('fakeapi');
    // const res = await body.json();
    // return res;
  } catch (error) {
    // Здесь можно как угодно вытаскивать нужные поля и сообщения из тела ошибки
    // Затем пробросить необходимое для конкретного компонента, и там уже выводить сообщение
    throw error;
  }

  const res = places.map((place) => place.location.subway).flat();
  const arr = res.map((item) => ({
    name: item.station.name,
    value: item.station.name,
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 1000);
  });
};

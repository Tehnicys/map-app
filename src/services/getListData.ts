import { FilterStateType } from '../components/NavPanel/NavPanel';
import { places } from '../mocks/places';
import { PlaceType } from '../types/PlaceType';

export const getListData = async (page: number, filterState?: FilterStateType): Promise<PlaceType[]> => {
  try {
    // const body = await fetch('fakeapi', {
    //body: filterState
    //});
    // const res = await body.json();
    // return res;
  } catch (error) {
    // Здесь можно как угодно вытаскивать нужные поля и сообщения из тела ошибки
    // Затем пробросить необходимое для конкретного компонента, и там уже выводить сообщение
    throw error;
  }

  const res = places
    .filter((item) => {
      if (!filterState) return true;

      if (filterState?.minPrice! <= item.price && filterState?.maxPrice! >= item.price) {
        if (!filterState.subway) return true;
        if (item.location.subway.map((subway) => subway.station.name === filterState.subway).every((i) => i))
          return true;
      }
      return false;
    })
    .slice(0, page);

  console.log(res);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 3000);
  });
};

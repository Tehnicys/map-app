import { PlaceType } from '../types/PlaceType';
import { contacts } from './contact';
import { locations } from './locations';

export const places: PlaceType[] = [
  {
    placeId: 0,
    description:
      'Nihil qui praesentium repudiandae maxime. Qui incidunt fugiat perspiciatis soluta cumque in repudiandae in. Nostrum officia eligendi a aut earum iste nulla mollitia',
    price: 500,
    name: 'Программирование',
    location: locations[0],
    schedule: 'ПН-ПТ 10:00 – 18:00',
    createDate: new Date(),
    updateDate: new Date(),
    сontact: contacts[0],
  },
  {
    placeId: 1,
    description:
      'Voluptatum in animi voluptatem qui. Omnis aperiam iste at qui et praesentium recusandae ducimus. Similique aut qui repellat et culpa explicabo ducimus dolore',
    price: 2000,
    name: 'Ремонт мебели',
    location: locations[1],
    schedule: 'ПТ 10:00 – 11:00',
    createDate: new Date(),
    updateDate: new Date(),
    сontact: contacts[1],
  },
  {
    placeId: 2,
    description:
      'Quo iure libero amet consectetur est enim aliquam. Recusandae repellat nesciunt neque quisquam. Ut tempore enim inventore quo non ex',
    price: 1500,
    name: 'Уборка',
    location: locations[2],
    schedule: 'ВТ, ЧТ 6:00 – 12:00',
    createDate: new Date(),
    updateDate: new Date(),
    сontact: contacts[2],
  },
  {
    placeId: 3,
    description:
      'Rerum eum recusandae dicta ducimus. Numquam quam non enim quibusdam. Necessitatibus at ipsam perferendis in corrupti voluptate. Nulla ut ipsa voluptatem porro',
    price: 1300,
    name: 'Переезд',
    location: locations[3],
    schedule: 'Ежедневно 8:00 – 20:00',
    createDate: new Date(),
    updateDate: new Date(),
    сontact: contacts[3],
  },
  {
    placeId: 4,
    description:
      'Iusto veniam minus voluptatem sunt voluptate quia ullam. Quaerat molestiae corrupti pariatur quae. Et ad distinctio minima aut et labore nam',
    price: 700,
    name: 'Груминг',
    location: locations[4],
    schedule: 'ПН-ПТ 10:00 – 19:00',
    createDate: new Date(),
    updateDate: new Date(),
    сontact: contacts[4],
  },
  {
    placeId: 5,
    description:
      'Tempore quia optio eos molestias corporis vitae consequatur. Quidem laboriosam mollitia reiciendis nostrum. Dolorem eum qui ullam harum id laborum iusto',
    price: 3500,
    name: 'Ремонт обуви',
    location: locations[5],
    schedule: 'ПН, СР-ПТ 9:30 – 20:00',
    createDate: new Date(),
    updateDate: new Date(),
    сontact: contacts[5],
  },
];

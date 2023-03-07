import { SubwayType } from '../types/SubwayType';
import { lines } from './lines';
import { stations } from './stations';

export const subways: SubwayType[] = [
  {
    subwayId: 1,
    station: stations[Math.trunc(Math.random() * stations.length)],
    line: lines[Math.trunc(Math.random() * lines.length)],
    distance: Math.ceil(Math.random() * 20) * 50,
  },
  {
    subwayId: 2,
    station: stations[Math.trunc(Math.random() * stations.length)],
    line: lines[Math.trunc(Math.random() * lines.length)],
    distance: Math.ceil(Math.random() * 20) * 50,
  },
  {
    subwayId: 3,
    station: stations[Math.trunc(Math.random() * stations.length)],
    line: lines[Math.trunc(Math.random() * lines.length)],
    distance: Math.ceil(Math.random() * 20) * 50,
  },
  {
    subwayId: 4,
    station: stations[Math.trunc(Math.random() * stations.length)],
    line: lines[Math.trunc(Math.random() * lines.length)],
    distance: Math.ceil(Math.random() * 20) * 50,
  },
  {
    subwayId: 5,
    station: stations[Math.trunc(Math.random() * stations.length)],
    line: lines[Math.trunc(Math.random() * lines.length)],
    distance: Math.ceil(Math.random() * 20) * 50,
  },
  {
    subwayId: 6,
    station: stations[Math.trunc(Math.random() * stations.length)],
    line: lines[Math.trunc(Math.random() * lines.length)],
    distance: Math.ceil(Math.random() * 20) * 50,
  },
  {
    subwayId: 7,
    station: stations[Math.trunc(Math.random() * stations.length)],
    line: lines[Math.trunc(Math.random() * lines.length)],
    distance: Math.ceil(Math.random() * 20) * 50,
  },
  {
    subwayId: 8,
    station: stations[Math.trunc(Math.random() * stations.length)],
    line: lines[Math.trunc(Math.random() * lines.length)],
    distance: Math.ceil(Math.random() * 20) * 50,
  },
];

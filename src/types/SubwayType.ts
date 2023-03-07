import { SubwayLineType } from "./SubwayLineType";
import { SubwayStationType } from "./SubwayStationType";

export interface SubwayType {
  subwayId: number,
  station: SubwayStationType,
  line: SubwayLineType,
  distance: number,
}
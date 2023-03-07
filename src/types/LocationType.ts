import { SubwayType } from "./SubwayType";

export interface LocationType {
  locationId: number,
  subway: SubwayType[],
  fullAddress:string, 
  latitude:number,
  longitude: number,
}
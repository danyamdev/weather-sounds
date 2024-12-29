import { WeatherNamesEnum } from '../enums';

export interface WeatherSound {
  id: number
  weather: WeatherNamesEnum
  bgPath: string
  iconPath: string
  audioPath: string
}

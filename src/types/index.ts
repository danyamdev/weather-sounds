import { WeatherNamesEnum } from '../enums';

export interface IWeatherSound {
  id: number
  weather: WeatherNamesEnum
  bgPath: string
  iconPath: string
  audioPath: string
}

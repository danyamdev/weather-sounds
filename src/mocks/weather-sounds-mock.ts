import SummerBg from '../assets/backgrounds/summer-bg.jpg'
import RainyBg from '../assets/backgrounds/rainy-bg.jpg'
import WinterBg from '../assets/backgrounds/winter-bg.jpg'
import SunIcon from '../assets/icons/sun.svg'
import CloudRainIcon from '../assets/icons/cloud-rain.svg'
import CloudSnowIcon from '../assets/icons/cloud-snow.svg'
import SummerMP3 from '../assets/sounds/summer.mp3'
import RainMP3 from '../assets/sounds/rain.mp3'
import WinterMP3 from '../assets/sounds/winter.mp3'

import { WeatherSound } from '../types';
import { WeatherNamesEnum } from '../enums';

export const WeatherSoundsData: WeatherSound[] = [
  {
    id: 1,
    weather: WeatherNamesEnum.Summer,
    bgPath: SummerBg,
    iconPath: SunIcon,
    audioPath: SummerMP3
  },
  {
    id: 2,
    weather: WeatherNamesEnum.Rainy,
    bgPath: RainyBg,
    iconPath: CloudRainIcon,
    audioPath: RainMP3
  },
  {
    id: 3,
    weather: WeatherNamesEnum.Winter,
    bgPath: WinterBg,
    iconPath: CloudSnowIcon,
    audioPath: WinterMP3
  }
]

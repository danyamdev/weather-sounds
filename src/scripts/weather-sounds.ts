import SummerBg from '../assets/summer-bg.jpg'
import RainyBg from '../assets/rainy-bg.jpg'
import WinterBg from '../assets/winter-bg.jpg'
import SunIcon from '../assets/icons/sun.svg'
import CloudRainIcon from '../assets/icons/cloud-rain.svg'
import CloudSnowIcon from '../assets/icons/cloud-snow.svg'
import SummerMP3 from '../assets/sounds/summer.mp3'
import RainMP3 from '../assets/sounds/rain.mp3'
import WinterMP3 from '../assets/sounds/winter.mp3'

export type WeatherSound = {
  id: number
  weather: 'summer' | 'rainy' | 'winter'
  bgPath: string
  iconPath: string
  audioPath: string
}

export const WeatherSoundsData: WeatherSound[] = [
  {
    id: 1,
    weather: 'summer',
    bgPath: SummerBg,
    iconPath: SunIcon,
    audioPath: SummerMP3
  },
  {
    id: 2,
    weather: 'rainy',
    bgPath: RainyBg,
    iconPath: CloudRainIcon,
    audioPath: RainMP3
  },
  {
    id: 3,
    weather: 'winter',
    bgPath: WinterBg,
    iconPath: CloudSnowIcon,
    audioPath: WinterMP3
  }
]

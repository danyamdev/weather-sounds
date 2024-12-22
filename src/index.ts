import { ClassNames } from './constants'
import { WeatherSoundsData, WeatherSound } from './scripts/weather-sounds'
import './styles/index.scss'

const overlay = document.querySelector(`.${ClassNames.overlay}`) as HTMLDivElement
const weatherSoundsContainer = document.querySelector(`.${ClassNames.weatherSounds}`) as HTMLDivElement

const renderWeatherSoundItem = (sound: WeatherSound, index: number ): void => {
  const soundHtml = `
  <div data-id="${index + 1}" class="${ClassNames.sound}">
    <div class="${ClassNames.sound}_view">
      <img class="${ClassNames.sound}_view-bg" src="${sound.bgPath}" alt="${sound.weather}-bg" />
      <img class="${ClassNames.sound}_view-icon" src="${sound.iconPath}" alt="${sound.weather}-icon" />
    </div>
    <audio class="${ClassNames.soundAudio}" loop>
      <source src="${sound.audioPath}" type="audio/mpeg">
    </audio>
  </div>
  `
  weatherSoundsContainer.insertAdjacentHTML('beforeend', soundHtml)
}

const toggleAudioPlayback = (soundElement: HTMLDivElement): void => {
  const audio = soundElement.querySelector(`.${ClassNames.soundAudio}`) as HTMLAudioElement

  if (audio) {
    soundElement.classList.contains(ClassNames.active) ? audio.play() : audio.pause();
  }
}

const updateBackgroundForContainer = (soundElement: HTMLDivElement): void => {
  const dataId = soundElement.dataset.id
  const bgPath = WeatherSoundsData.find(item => item.id === Number(dataId))?.bgPath

  if (bgPath) {
    overlay.style.backgroundImage = soundElement.classList.contains(ClassNames.active) ? `url(${bgPath})` : ''
  }
}

const initializeWeatherSounds = (): void => {
  WeatherSoundsData.forEach(renderWeatherSoundItem)

  const weatherSounds = weatherSoundsContainer.querySelectorAll(`.${ClassNames.sound}`)

  weatherSoundsContainer.addEventListener('click', (event) => {
    const currentWeatherSound = (event.target as HTMLElement).closest(`.${ClassNames.sound}`) as HTMLDivElement

    if (!currentWeatherSound) {
      return
    }

    weatherSounds.forEach(weatherSound => {
      if (weatherSound === currentWeatherSound) {
        currentWeatherSound.classList.toggle(ClassNames.active)
      } else {
        weatherSound.classList.remove(ClassNames.active)
      }

      toggleAudioPlayback(weatherSound as HTMLDivElement)
    })

    updateBackgroundForContainer(currentWeatherSound)
  })
}

initializeWeatherSounds()

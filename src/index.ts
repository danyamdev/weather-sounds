import { WeatherSound } from './types'
import { ClassNames } from './constants'
import { WeatherSoundsData } from './mocks'
import './assets/styles/index.scss'

const overlay = document.querySelector(`.${ClassNames.overlay}`) as HTMLDivElement
const weatherSoundsContainer = document.querySelector(`.${ClassNames.weatherSounds}`) as HTMLDivElement

const renderWeatherSoundItem = (sound: WeatherSound ): void => {
  const soundHtml = `
  <div data-id="${sound.id}" class="${ClassNames.sound}">
    <div class="${ClassNames.soundView}">
      <img class="${ClassNames.soundView}-bg" src="${sound.bgPath}" alt="${sound.weather}-bg" />
      <img class="${ClassNames.soundView}-icon" src="${sound.iconPath}" alt="${sound.weather}-icon" />
    </div>
    <audio class="${ClassNames.soundAudio}" loop>
      <source src="${sound.audioPath}" type="audio/mpeg">
    </audio>
    <input class="${ClassNames.soundRange}" type="range" min="0" max="100">
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

const initializeVolume = (weatherSounds: NodeListOf<Element>) => {
  const initialVolume = 50

  weatherSounds.forEach(weatherSound => {
    const audio = weatherSound.querySelector(`.${ClassNames.soundAudio}`) as HTMLAudioElement;
    const range = weatherSound.querySelector(`.${ClassNames.soundRange}`) as HTMLInputElement;

    if (audio && range) {
      range.value = initialVolume.toString();
      audio.volume = initialVolume / 100;

      range.addEventListener('input', () => {
        audio.volume = +range.value / 100;
      });
    }
  });
};

const initializeWeatherSounds = (): void => {
  WeatherSoundsData.forEach(renderWeatherSoundItem)

  const weatherSounds = weatherSoundsContainer.querySelectorAll(`.${ClassNames.sound}`)

  initializeVolume(weatherSounds)

  weatherSoundsContainer.addEventListener('click', (event) => {
    const currentWeatherSound = (event.target as HTMLElement).closest(`.${ClassNames.sound}`) as HTMLDivElement
    const currentWeatherSoundRange = (event.target as HTMLElement).closest(`.${ClassNames.soundRange}`) as HTMLInputElement

    if (!currentWeatherSound || currentWeatherSoundRange) {
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

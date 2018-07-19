import { store } from 'react-easy-state'
import rebassTheme from './rebassTheme';

export const themeMode = store(
  {
    darkMode: true,
  }
)



export const themeVariables = store({
         primaryColor: 'white',
         secondaryColor: 'white',
         additionalColor: 'tealdarker',
         tagBadgeBgColor: 'black',
         fontColor: 'black',
         fontAdditionalColor: 'tealdarker',
         headerFont:
           '"Poppins","Helvetica Neue", "Segoe UI","Helvetica", "Arial", "sans-serif"',
         bodyFont: '"Roboto", sans-serif',
         AdditionalFont: '"SF Mono", "Roboto Mono", Menlo, monospace',
       })

export const lightMode = store(
  {
    primaryColor: 'black',
    secondaryColor: 'white',
    additionalColor: 'teal',
    fontColor: 'black',
    fontAdditionalColor: 'green',
  }
)


export const darkMode = store({
  primaryColor: 'black',
  secondaryColor: 'white',
  additionalColor: 'teal',
  fontColor: 'black',
  fontAdditionalColor: 'green',
})

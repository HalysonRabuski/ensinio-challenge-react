import 'styled-components'

import theme from './theme'
// and extend them!

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

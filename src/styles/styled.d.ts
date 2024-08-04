// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      link: string;
      linkHover: string;
    };
    fonts: {
      body: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    borders: {
      radius: string;
    };
    transition: string;
  }
}
/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_THEME: string;
    REACT_APP_DRAWER_WIDTH: number
  }
}
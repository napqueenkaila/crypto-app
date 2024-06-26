import "styled-components";
import { ThemeType } from "../styling/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export interface PercentProps {
  $percent?: number | string;
}

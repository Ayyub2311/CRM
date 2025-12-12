import "styled-components";
import { AppTheme } from "@crema/context/AppContextProvider/ThemeContextProvider";

declare module "styled-components" {
    export interface DefaultTheme extends AppTheme {}
}
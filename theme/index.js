import COLORS from "./colors";
import { FONTS, WEIGHTS, SIZES } from "./fonts";

const theme = {
  bgWhite: (opacity) => `rgba(255,255,255, ${opacity})`,
  nunito: { fontFamily: "Nunito" },
};

export { COLORS, FONTS, WEIGHTS, SIZES, theme };

// project import
import Default from './default';
import Colonymon from './colonymon';

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const Theme = (colors, presetColor, mode) => {
  switch (presetColor) {
    case 'colonymon':
      return Colonymon(colors, mode);
    default:
      return Default(colors);
  }
};

export default Theme;

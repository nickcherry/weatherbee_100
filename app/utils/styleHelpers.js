import hextToRgb from 'hex-to-rgb';

const DEPTHS = {
  background: 1,
  backgroundPattern: 2,
  mainContent: 3,
  userInputUnderlay: 8,
  userInputInnerWrapper: 9,
  userInputIncrementer: 10,
  linkIcon: 15,
  modalWrapper: 9996,
  modalUnderlay: 9997,
  modalBody: 9998,
  modalCloseButton: 9999,
};

const COLORS = {
  cerise: '#db397d',
  dodgerBlue: '#2974ff',
  codGrey: '#161616',
  frenchGrey: '#b6b6c0',
  electricViolet: '#aa29e8',
  londonHue: '#bda5c9',
  mediumRedViolet: '#b52ca2',
  mineShaft: '#1f1f1f',
  studio: '#8A40AF',
  tuna: '#33333d',
  white: '#fff6ff',
  windsor: '#570d7b',
};

export function getDefaultFont() {
  return "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif";
}

export function getCursiveFont() {
  return 'Sacramento, cursive';
}

export function getDepth(name) {
  if (!DEPTHS[name]) throw new Error(`Depth "${name}" is not recognized!`);
  return DEPTHS[name];
}

export function getHexColor(name) {
  if (!COLORS[name]) throw new Error(`Color "${name}" is not recognized!`);
  return COLORS[name];
}

export function getRgbaColor(name, alpha = 1) {
  if (!COLORS[name]) throw new Error(`Color "${name}" is not recognized!`);
  const rgb = hextToRgb(COLORS[name]);
  return `rgba(${rgb.join(', ')}, ${alpha})`;
}

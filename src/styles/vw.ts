import config from '@/config/app.config';

type WidthValue = number | string;

// Property Name, Desktop, Tablet, Mobile
type MQProperty = [string, WidthValue, WidthValue, WidthValue];

type Scale = (width: number) => string;

const pxScale = (deviceVwSize: number, windowWidth: number) => (
  width: number,
): number => {
  return (width / deviceVwSize) * windowWidth;
};
const scale = (deviceVwSize: number) => (width: number): string => {
  return `${(width / deviceVwSize) * 100}vw`;
};

const scaleVwMobile = scale(config.stage.mobile);
const scaleVwTablet = scale(config.stage.tablet);
const scaleVwDesktop = scale(config.stage.desktop);

const setProperty = (scaleVw: Scale) => (width: WidthValue) => (typeof width === 'string' ? width : scaleVw(width));

const scaleMobile = setProperty(scaleVwMobile);
const scaleTablet = setProperty(scaleVwTablet);
const scaleDesktop = setProperty(scaleVwDesktop);

function vw(properties: MQProperty[]) {
  const generateProperties = (scaleFn: Function, propertyIdx: number) => properties
    .map((prop) => `${prop[0]}: ${scaleFn(prop[propertyIdx])};`)
    .join('');

  return `
    ${generateProperties(scaleMobile, 3)}
    @media (min-width: ${config.mediaQuery.tablet}px) {
        ${generateProperties(scaleTablet, 2)}
    }
    @media (min-width: ${config.mediaQuery.desktop}px) {
      ${generateProperties(scaleDesktop, 1)}
    }
    `;
}

export const vwMobile = (width: WidthValue) => scaleMobile(width);
export const vwTablet = (width: WidthValue) => scaleTablet(width);
export const vwDesktop = (width: WidthValue) => scaleDesktop(width);

export const pxDesktop = (width: number, windowWidth: number) =>
  pxScale(config.stage.desktop, windowWidth)(width);
export const pxTablet = (width: number, windowWidth: number) =>
  pxScale(config.stage.tablet, windowWidth)(width);
export const pxMobile = (width: number, windowWidth: number) =>
  pxScale(config.stage.mobile, windowWidth)(width);

export default vw;

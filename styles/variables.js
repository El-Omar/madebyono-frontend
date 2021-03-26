const _cc = color => color.replace(`#`, `%23`);

export const Colors = {
  yellow: '#f7eb0b',
  blue: '#3f90de',
  purple: '#d63187',
  gray: `#8c8c8c`,
};

export const Svgs = {
  cart: (color = ``) => `
    background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='${_cc(color)}' x='0px' y='0px' width='81.44px' height='68.5px' viewBox='0 0 81.44 68.5' style='overflow:visible;enable-background:new 0 0 81.44 68.5;' xml:space='preserve'%3E%3Cdefs%3E%3C/defs%3E%3Cg%3E%3Cpath d='M32.6,49.7c-5.19-0.11-9.49,4.01-9.6,9.2c-0.11,5.19,4.01,9.49,9.2,9.6c5.19,0.11,9.49-4.01,9.6-9.2c0-0.1,0-0.2,0-0.3 c0.06-5.08-4.02-9.24-9.1-9.3C32.67,49.7,32.63,49.7,32.6,49.7z'/%3E%3Cpath d='M61.3,49.7c-5.19-0.17-9.53,3.91-9.69,9.1c-0.17,5.19,3.91,9.53,9.1,9.69s9.53-3.91,9.69-9.1c0-0.13,0.01-0.26,0-0.39 C70.46,53.92,66.38,49.76,61.3,49.7C61.3,49.7,61.3,49.7,61.3,49.7z'/%3E%3Cpath d='M78.4,10.5H19.1l-2.6-8.3c-0.35-1.27-1.49-2.16-2.8-2.2H0v6h11.4l11.9,38.2c0.36,1.25,1.5,2.11,2.8,2.1h43.3 c1.31-0.01,2.48-0.86,2.9-2.1l9-29.8c0.5-1.58-0.38-3.26-1.96-3.76C79.03,10.54,78.72,10.5,78.4,10.5z'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `,
  arrow: (color = ``) => `
    background-image: url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='${_cc(color)}' width='75.8px' height='18.9px' viewBox='0 0 75.8 18.9' style='overflow:visible;enable-background:new 0 0 75.8 18.9;' xml:space='preserve'%3E%3Cdefs%3E%3C/defs%3E%3Cpath d='M8.8,18.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-6.8-6.7h71.4c0.6,0,1-0.4,1-1s-0.4-1-1-1H3.4 l6.8-6.8c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L0.3,8.8c-0.4,0.4-0.4,1,0,1.4L8.8,18.6z'/%3E%3C/svg%3E%0A");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left center;
  `,
};
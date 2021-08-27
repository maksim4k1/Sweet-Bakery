export const gap = (gapX, gapY=gapX) => `
  column-gap: ${gapX};
  -webkit-column-gap: ${gapX};
  -o-column-gap: ${gapX};
  -moz-column-gap: ${gapX};
  -ms-column-gap: ${gapX};
  row-gap: ${gapY};
  -webkit-row-gap: ${gapY};
  -o-row-gap: ${gapY};
  -moz-row-gap: ${gapY};
  -ms-row-gap: ${gapY};
`;

export const container = `
  max-width: 875px;
  width: 100%;
  padding: 0 25px;
  margin: 0 auto;
`;

export const navigation = () => `
  width: 316px;
  height: 100%;
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: transform 0.5s;
`;

export const closeNavigationButton = () => `
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  &:hover{
    transform: rotate(90deg);
  }
`;

export const navigationContent = () => `
  height: 100%;
  display: flex;
  flex-flow: column;
`;
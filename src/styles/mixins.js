export const gap = (gap) => `
  gap: ${gap};
  -webkit-gap: ${gap};
  -o-gap: ${gap};
  -moz-gap: ${gap};
  -ms-gap: ${gap};
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
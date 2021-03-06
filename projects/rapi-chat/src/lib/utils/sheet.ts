import jss from "jss";

export interface Sheet {
  readonly classes: any;
  readonly update: () => void;
}

export const getStyleSheet = styles => {
  const sheet: Sheet = jss.createStyleSheet(styles, { link: true }).attach();
  return sheet;
};

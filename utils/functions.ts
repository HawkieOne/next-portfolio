import { ResumeItem } from "../interfaces";

export const sortByDate = (a: any, b: any) => {
  return new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf();
};

export const getYearsInArray = (objArray: ResumeItem[]) => {
  let result = objArray.map((item) => item.year);
  const years = result.filter(function (item, pos) {
    return result.indexOf(item) == pos;
  });
  return years;
};

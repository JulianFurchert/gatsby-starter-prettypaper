module.exports = (option, content) => {
  let allComponents = "";
  content.forEach(props => {
    if (props.family && props.weight) {
      let family = `family="${props.family}"`;
      let weight = `weight="${props.weight}"`;
      let style = props.style ? `fontstyle="${props.style}"` : '';
      let url = props.url ? `url="${props.url}"` : '';
      let component = `<prettypaper-font ${family} ${weight} ${style} ${url}></prettypaper-font>`;
      allComponents = allComponents + component;
    }
  });
  allComponents = `<prettypaper-container grid="medium">${allComponents}</prettypaper-container>`;
  return allComponents;
};
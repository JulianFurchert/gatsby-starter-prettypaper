module.exports = (option, content) => {
  let allComponents = "";
  content.forEach(props => {
    if (props.name && props.family && props.weight && props.size) {
      let name = `name="${props.name}"`;
      let family = `family="${props.family}"`;
      let weight = `weight="${props.weight}"`;
      let size = `size="${props.size}"`;

      let style = props.style ? `fontstyle="${props.style}"` : '';
      let lineHeight = props.lineHeight ? `lineheight="${props.lineHeight}"` : '';
      let letterSpacing = props.letterSpacing ? `letterspacing="${props.letterSpacing}"` : '';

      let component = `<prettypaper-textstyle ${name} ${family} ${weight} ${style} ${size} ${lineHeight} ${letterSpacing}></prettypaper-textstyle>`;
      allComponents = allComponents + component;
    }
  });
  allComponents = `<prettypaper-container gap="8px" grid="large">${allComponents}</prettypaper-container>`;
  return allComponents;
};
module.exports = (option, content) => {
  let allComponents = "";
  let grid = option ? option : "medium";

  content.forEach(props => {
    if (props.src) {
      let src = `src="${props.src}"`;
      let alt = props.alt ? `alt="${props.alt}"` : '';
      allComponents = allComponents + `<prettypaper-galleryimage ${alt} ${src}></prettypaper-galleryimage>`;
    }
  });

  let wrapComponents = `<prettypaper-container grid=${grid}>${allComponents}</prettypaper-container>`;
  return wrapComponents;
};
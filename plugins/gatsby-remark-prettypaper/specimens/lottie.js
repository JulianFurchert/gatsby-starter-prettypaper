module.exports = (option, props) => {
  let components = "";

  if (props.src) {
    let src = `src="${props.src}"`;
    let caption = props.caption ? `caption="${props.caption}"` : '';
    components = `<prettypaper-lottie ${caption} ${src}></prettypaper-lottie>`;
  }

  if (components) components = `<prettypaper-container grid="large">${components}</prettypaper-container>`;
  return components;
};
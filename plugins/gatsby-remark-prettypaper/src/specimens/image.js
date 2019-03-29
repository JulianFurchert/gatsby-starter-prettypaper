module.exports = (option, props) => {
  let components = "";

  if(props.src){
    let src = `src="${props.src}"`;
    let alt = props.alt ? `alt="${props.alt}"` : '';
    let caption =  props.caption ? `caption="${props.caption}"` : '';
    components = `<prettypaper-singleimage ${caption} ${alt} ${src}></prettypaper-singleimage>`;
  }

  if (components) components = `<prettypaper-container grid="large">${components}</prettypaper-container>`;
  return components;
};
module.exports = (option, props) => {
  let components = "";

  if(props.src){
    let src = `src="${props.src}"`;
    let caption =  props.caption ? `caption="${props.caption}"` : '';
    let autoplay =  props.autoplay ? `autoplay="${props.autoplay}"` : `autoplay="false"`;
    components = `<prettypaper-singleVideo ${caption} ${src} ${autoplay}></prettypaper-singleVideo>`;
  }

  if (components) components = `<prettypaper-container grid="large">${components}</prettypaper-container>`;
  return components;
};
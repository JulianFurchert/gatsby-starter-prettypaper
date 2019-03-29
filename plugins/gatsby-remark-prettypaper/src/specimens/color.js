const namer = require('color-namer');
const chroma = require('chroma-js');

module.exports = (option, content) => {
  let allComponents = "";

  content.forEach(props => {
    if (props.hex) {
      let hex = `hex="${props.hex}"`;
      let rgb = `rgb="${chroma(props.hex).get('rgb')}"`;
      let cw = `cw="${chroma.contrast(props.hex, 'white')}"`;
      let cb = `cb="${chroma.contrast(props.hex, 'black')}"`;
      let name = props.name ? `name="${props.name}"` : `name="${namer(props.hex).html[0].name}"`
      let usage = props.usage ? `usage="${props.usage}"` : '';
      let component = `<prettypaper-colors ${hex} ${rgb} ${cw} ${cb} ${name} ${usage}></prettypaper-colors>`;
      allComponents = allComponents + component;
    }
  });

  allComponents = `<prettypaper-container grid="medium">${allComponents}</prettypaper-container>`;
  return allComponents;
};
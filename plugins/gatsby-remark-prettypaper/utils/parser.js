// Single

//INPUT:
// label: value
// label: value

// OUTPUT:
// {
//   label:  "value",
//   label: "value"
// }

// Multiply

// INPUT:
// label: value | label: value
// label: value | label: value

//  OUTPUT:
// [
//   {label: "value", label: "value"},
//   {label: "value", label: "value"}
// ]


const singleObject = content => {
  let obj = {};
  content.split('\n').forEach(prop => {
    prop = prop.split(':').map(x => x.trim());
    if (prop[0] && prop[1]) obj[prop[0]] = prop[1];
  });
  return obj;
};

const multiplyObjects = content => {
  return content.split('\n').map(row => {
    let obj = {};
    row.split('|').forEach(prop => {
      prop = prop.split(':').map(x => x.trim());
      if (prop[0] && prop[1]) obj[prop[0]] = prop[1];
    });
    return obj;
  });
};

module.exports = {
  singleObject,
  multiplyObjects
};
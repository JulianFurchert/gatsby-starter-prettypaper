const defaultCharacters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,q,r,s,t,u,v,w,x,y,z"

module.exports = (option, props) => {
  let component = "";
  if(props.family && props.weight){
    let family = `family="${props.family}"`;
    let weight = `weight="${props.weight}"`;
    let style = props.style ? `fontstyle="${props.style}"` : '';
    let characters = props.characters ? `characters="${props.characters}"` : `characters="${defaultCharacters}"`;
    component = `<prettypaper-glyphs ${family} ${weight} ${style} ${characters}></prettypaper-glyphs>`
  }
  return component;
}
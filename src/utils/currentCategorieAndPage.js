const currentCategorieAndPage = location =>{
  let selectedCategorie = '';
  let selectedPage = '/';
  let locationArray = location.pathname.split('/').filter( e => { return e });
  if(locationArray.length > 0){
    selectedCategorie = locationArray[0];
    selectedPage = locationArray[1];
  }
  return {selectedCategorie, selectedPage};
}

export default currentCategorieAndPage;
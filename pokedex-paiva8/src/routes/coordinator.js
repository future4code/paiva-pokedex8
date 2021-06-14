
export const goToDetails = (history, id) => {
    history.push("/details/"+id);
  };

export const goToPokedex = (history) => {
    history.push("/pokedex");
  };
  
  export const goToHome = (history) => {
    history.push("/");
  };
      
  export const goToLastPage = (history) => {
    history.goBack();
  };
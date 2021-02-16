
export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bVrOqs7Q9JQlGl2L2xnUbd4ddnALsSKE&q=${ encodeURI(categoria) }&limit=10`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;

}
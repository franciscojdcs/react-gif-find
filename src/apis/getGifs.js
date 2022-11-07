export const getGifs = async (category) =>  {
    const apiKey = 'N3icAZrxzY0LpYsSFvDV80wM1Z23Jeya';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
  
    const gifs = data.map( miImg => ({
      id : miImg.id,
      title: miImg.title,
      url: miImg.images.downsized_medium.url,
  
    }));
  

    return gifs;
  } 
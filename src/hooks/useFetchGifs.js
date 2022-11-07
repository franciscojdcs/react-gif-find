import { useEffect, useState } from "react";
import { getGifs } from "../apis/getGifs";


export const useFetchGifs = (category) => {

    const [images, setiImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const  getImages = async() =>{
      const newImages = await getGifs(category) ;
      setiImages(newImages);
      setIsLoading(false);
    }
  
    useEffect(() => {
      getImages();
  
    }, [])


  return {
    images,
    isLoading: isLoading
  }
}

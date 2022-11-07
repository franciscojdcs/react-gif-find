
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';




export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category); //hook personalizado

 

  return (
    <>
        <h4>{category}</h4>
        {
          isLoading && (<h2>Loading ...</h2>) 
        }

        <div className='card-grid'>
          {
            images.map( ( imag) => ( 
                <GifItem 
                  key={ imag.id }  
                  { ...imag }  
                />
              )
            )
            
          }
        </div>
        
    </>
    
  )
}

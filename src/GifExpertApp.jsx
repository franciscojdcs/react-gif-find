import React, {useState} from 'react';
import { AddCategory , GifGrid} from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    //console.log(categories);

    const onAddCategory =(newCategory) =>{
        //forma corta de validar si existe el registro
        if (categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
        //setCategories([...categories, 'Naruto']);
        //setCategories( categ => [...categ, 'Naruto']); // usando callback
    }

  return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
            //onSetCategory = {setCategories} 
            onNewCategory = { (valueRet) => onAddCategory(valueRet) }
        /> 


        {
            categories.map(category =>{
                return <GifGrid key={category} category={category} />
            })
        }

    </>
  )
}

import { useEffect, useState } from "react/cjs/react.development";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000);

    useEffect(() => {
        getGifs(category)

        .then(imgs => {
            
      
                setstate({
                    data: imgs,
                    loading: false
                })
 

        })
    },[category])
        // useEffect(() => {
    //     getGifs(category)
    //     // .then(imgs => setImages(imgs))
    //     .then(setImages)
    // },[category]);

    return state;

}
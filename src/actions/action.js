import {types} from '../types/types';
import {db} from '../firebase/firebaseConfig';


export const listarHeroe = () => {

    return async(dispatch) => {
        const data = await db.collection(`/Heroes`).get();
        const superheroe = [];
    
        data.forEach(hero=>{
            superheroe.push({
                uid: hero.id,
            ...hero.data()
           })
        })
        console.log(superheroe)
        dispatch(listar(superheroe));

    }
}

export const listar = (heroes) => {
    return {
        type: types.Listar,
        payload: heroes
    }
}

//Buscador
export const listaSearch = (searchText) => {

    return async(dispatch) => {
        const data = await db.collection(`/Heroes`).where('superhero','==',searchText).get();
        const superheroe = [];
    
        data.forEach(hero=>{
            superheroe.push({
                uid: hero.id,
            ...hero.data()
           })
        })
        console.log(superheroe)
        dispatch(listarSe(superheroe));

    }
}

export const listarSe = (heroes) => {
    return {
        type: types.ListarBusqueda,
        payload: heroes
    }
}
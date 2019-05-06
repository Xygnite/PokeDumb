import axios from "axios";
import { pokemonsEndPoint, pokemonEndPoint } from "../../helper/routes";

export const allData = () => dispatch => {
    axios.get(pokemonsEndPoint).then(res => {
        console.log(res.data.data),
            dispatch({
                type: "ALL_DATA",
                payload: res.data.data
            });
    });
};

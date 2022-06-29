import axios from 'axios';
import data from '../data/data.json';


export const fetchBuildings = () => axios.get(data);
// fetchBuildings().then((res) => console.log(res.data));
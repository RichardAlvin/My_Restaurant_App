import resto from '../../DATA.json';

class RestoSource{
    static restoSource(){
        return new Promise((resolve, reject) =>{
            const allResto = resto.restaurants;

            if(allResto.length){
                resolve(allResto);
            }else{
                reject('Resto Source is Not Found.');
            }
        })
    }
}

export default RestoSource;
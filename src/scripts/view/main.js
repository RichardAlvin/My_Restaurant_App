import '../component/resto-item.js';
import '../component/resto-list.js';
import RestoSource from '../data/resto-source.js';

const main = () => {
    //const restoListElement = document.querySelector('resto-list');
    //const results = RestoSource.restoSource();
    //renderResult(results);
    // try{
    //     const results = RestoSource.restoSource();
    //     renderResult(results);
    // }catch(message){
    //     fallbackResult(message);
    // }

    const renderResult = results =>{
        restoListElement.restos = results;
    }

    const fallbackResult = message => {
        restoListElement.renderError(message);
    };
}

export default main;
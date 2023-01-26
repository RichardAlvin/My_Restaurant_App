import './resto-item.js';
import resto from "../../DATA.json";
const restoList = resto.restaurants;

class RestoList extends HTMLElement{
    // constructor(){
    //     super();
    //     this.shadowDOM = this.attachShadow({mode: 'open'});
    // }

    set restos(restos){
        this._restos = restos;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        // this.shadowDOM.innerHTML = `
        // <style>
        //     :host{
        //         display: grid;
        //         grid-template-columns: 1fr;
        //         column-gap: 10px;
        //         row-gap: 10px;
        //     }
        // </style>
        // `;
        this.innerHTML=`
        <style>
        </style>
        `
        restoList.forEach(resto => {
            const restoItemElement = document.createElement('resto-item');
            restoItemElement.resto = resto;
            this.appendChild(restoItemElement);
        })
    }

    renderError(message){
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('resto-list', RestoList);
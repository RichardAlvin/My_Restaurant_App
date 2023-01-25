class RestoItem extends HTMLElement{
    set resto(resto){
        this._resto = resto;
        this.render();
    }

    render(){
        this.innerHTML = `
        <img src="${this._resto.pictureId}" alt="">
        <p class="rate">Rating: ${this._resto.rating}</p>
        <h2>${this._resto.name}</h2>
        <p class="desc">${this._resto.description}</p>
        `;
    }
}

customElements.define("resto-item", RestoItem);
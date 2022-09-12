import { HTMLElements } from "../main.js";

class Layer {



currentLayer = ''
    





changeLayer (element) {

    this.currentLayer.classList.remove('active');
    this.currentLayer = element;
    this.currentLayer.classList.add('active')

}


}

export const layer = new Layer()
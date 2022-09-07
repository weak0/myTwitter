import {posts} from './scripts/Wall.js'
import {EmojiPicker} from './scripts/EmojiPicker.js'



class Main {

    emotes = new EmojiPicker('.fa-face-smile', '#text-area')

    init() {
        posts.sortElements();
    }

}

const main = new Main (); 

window.addEventListener('DOMContentLoaded',  () =>  main.init());
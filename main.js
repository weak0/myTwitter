import {posts} from './scripts/Posts.js'
import {EmojiPicker} from './scripts/EmojiPicker.js'



class Main {

    emotes = new EmojiPicker('.fa-face-smile', '#text-area')

    init() {
        posts.loadWall();
    }

}

const main = new Main (); 

window.addEventListener('DOMContentLoaded',  () =>  main.init());
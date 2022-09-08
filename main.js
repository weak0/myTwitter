import {wall} from './scripts/Wall.js'
import {EmojiPicker} from './scripts/EmojiPicker.js'
import { trending } from './scripts/Trending.js'
import { user } from './scripts/User.js'


export const HTMLElements = {

    wall: document.querySelector('[data-wall]'),
    tweetButton: document.querySelector('[data-tweet]'),
    textarea: document.querySelector('#text-area'),
    currentLetter: document.querySelector('[data-current-letter]'),
    limitLetter: document.querySelector('[data-limit-letter]'),
    inputFile: document.querySelector('#input-file'),
    like: document.querySelector('[data-like]'),
    sortElementsBtn: document.querySelector('.fa-sort'),
    emotePickerSelector:'.fa-face-smile',
    textAreaSelector:'#text-area',
    trendsSection:document.querySelector('.trends ul'),
    showMoreTrendsBtn: document.querySelector('[data-more-trends]'),
    liTrendsSelector: '.li-trends'

}




class Main {

    emotes = new EmojiPicker(HTMLElements.emotePickerSelector, HTMLElements.textAreaSelector)

    init() {
        wall.init();
        trending.init()
        user.getWhoToFollow()

    }

}

const main = new Main (); 

window.addEventListener('DOMContentLoaded',  () =>  main.init());
import {wall} from './scripts/Wall.js'
import {EmojiPicker} from './scripts/EmojiPicker.js'
import { trending } from './scripts/Trending.js'
import { user } from './scripts/User.js'
import { layer } from './scripts/Layer.js'


export const HTMLElements = {

    mainElement: document.querySelector('.wall'),
    notificationElement: document.querySelector('.notification'),
    messageElement: document.querySelector('.messages'),
    userElement: document.querySelector('.user'),

    modalAddPost:document.querySelector('.modal-add-post'),
    modalAddPostInput:document.querySelector('.modal-add-post.add-post'),

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
    liTrendsSelector: '.li-trends',
    ulFollowrecomendation: document.querySelector('.follow-recomendation ul'),
    showmoreFollowrecomendation: document.querySelector('.follow-recomendation .showmore'),

    menuTwitter:document.querySelector('.twitter-icon'),
    menuSearch:document.querySelector('.search-icon'),
    menuNotification:document.querySelector('.notification-icon'),
    menuMessages:document.querySelector('.message-icon'),
    menuUser:document.querySelector('.user-icon'),
    menuAddPost:document.querySelector('.newPost-icon'),
    menuSettings:document.querySelector('.settings-icon'),

    searchInput:document.querySelector('.search--input'),
    searchDiv:document.querySelector('.rightbar .search')

}




class Main {

    emotes = new EmojiPicker(HTMLElements.emotePickerSelector, HTMLElements.textAreaSelector)
    

    init() {
        wall.init();
        trending.init()
        user.getWhoToFollow()
        HTMLElements.showmoreFollowrecomendation.addEventListener('click' , () => user.moreRecomedation())
        this.menuHandler();
        this.setCurrentLayer()

    }

    setCurrentLayer() {

        layer.currentLayer = HTMLElements.mainElement

    }

    menuHandler() {

        HTMLElements.menuTwitter.addEventListener('click', () => wall.refresch())
        HTMLElements.menuSearch.addEventListener('click', () => {
            HTMLElements.searchInput.focus()
            HTMLElements.searchDiv.classList.add('active')
            window.addEventListener('click', (e) => {
                if(e.target.closest('li') !== HTMLElements.menuSearch  && e.target.closest('div') !== HTMLElements.searchDiv ) {
                HTMLElements.searchDiv.classList.remove('active')
                }
            })
        })
        HTMLElements.menuNotification.addEventListener('click', () => layer.changeLayer(HTMLElements.notificationElement))
        HTMLElements.menuMessages.addEventListener('click', () => layer.changeLayer(HTMLElements.messageElement))
        HTMLElements.menuUser.addEventListener('click', () => layer.changeLayer(HTMLElements.userElement))
        HTMLElements.menuAddPost.addEventListener('click', () => {
            HTMLElements.modalAddPost.classList.add('active')
            window.addEventListener('click', (e) => {
                if(e.target === HTMLElements.modalAddPost) {

                    HTMLElements.modalAddPost.classList.remove('active')

                }
            })

        })


    }



}

const main = new Main (); 

window.addEventListener('DOMContentLoaded',  () =>  main.init());
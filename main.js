import {
    wall
} from './scripts/Wall.js'
import {
    EmojiPicker
} from './scripts/EmojiPicker.js'
import {
    trending
} from './scripts/Trending.js'
import {
    user
} from './scripts/User.js'
import {
    layer
} from './scripts/Layer.js'


export const HTMLElements = {

    mainElement: document.querySelector('.wall'),
    notificationElement: document.querySelector('.notification'),
    messageElement: document.querySelector('.messages'),
    userElement: document.querySelector('.user'),
    settingsElement: document.querySelector('.modal-user-settings'),

    profileWall: document.querySelector('.wall-profile'),

    addPost: document.querySelector('.add-post'),
    modalAddPost: document.querySelector('.modal-add-post'),
    containterAddPost:document.querySelector('.add-post-container'),

    settingsProfilePicture:document.querySelector('.settings-profile-picture'),
    settingsImageBtn:document.querySelector('.settings-img button'),
    setiingsInputFile:document.querySelector('#settings-change-image'),

    settingsProfileNick:document.querySelector('.settings-nick-load'),
    settingsInputText:document.querySelector('#settings-change-nick'),
    settingsNickBtn:document.querySelector('.settings-nick button'),

    profileSettingsIcon:document.querySelector('.profile.settings-icon'),
    addPostProfile:document.querySelector('.add-post-profile'),
    profileProfileImage:document.querySelector('img.profile-profile-image'), 
    nickProfileText:document.querySelector('.nick-profile-text'),


    wall: document.querySelector('[data-wall]'),
    tweetButton: document.querySelector('[data-tweet]'),
    textarea: document.querySelector('#text-area'),
    currentLetter: document.querySelector('[data-current-letter]'),
    limitLetter: document.querySelector('[data-limit-letter]'),
    inputFile: document.querySelector('#input-file'),
    like: document.querySelector('[data-like]'),
    sortElementsBtn: document.querySelector('.fa-sort'),
    emotePickerSelector: '.fa-face-smile',
    textAreaSelector: '#text-area',
    trendsSection: document.querySelector('.trends ul'),
    showMoreTrendsBtn: document.querySelector('[data-more-trends]'),
    liTrendsSelector: '.li-trends',
    ulFollowrecomendation: document.querySelector('.follow-recomendation ul'),
    showmoreFollowrecomendation: document.querySelector('.follow-recomendation .showmore'),

    menuTwitter: document.querySelector('.twitter-icon'),
    menuSearch: document.querySelector('.search-icon'),
    menuNotification: document.querySelector('.notification-icon'),
    menuMessages: document.querySelector('.message-icon'),
    menuUser: document.querySelector('.user-icon'),
    menuAddPost: document.querySelector('.newPost-icon'),
    menuSettings: document.querySelector('.settings-icon'),

    searchInput: document.querySelector('.search--input'),
    searchDiv: document.querySelector('.rightbar .search')



}




class Main {

    emotes = new EmojiPicker(HTMLElements.emotePickerSelector, HTMLElements.textAreaSelector)


    init() {
        wall.init();
        trending.init()
        user.getWhoToFollow()
        user.init()
        HTMLElements.showmoreFollowrecomendation.addEventListener('click', () => user.moreRecomedation())
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
                if (e.target.closest('li') !== HTMLElements.menuSearch && e.target.closest('div') !== HTMLElements.searchDiv) {
                    HTMLElements.searchDiv.classList.remove('active')
                }
            })
        })
        HTMLElements.menuNotification.addEventListener('click', () => layer.changeLayer(HTMLElements.notificationElement))
        HTMLElements.menuMessages.addEventListener('click', () => layer.changeLayer(HTMLElements.messageElement))
        HTMLElements.menuUser.addEventListener('click', () =>  {
            layer.changeLayer(HTMLElements.userElement)
            wall.loadProfileWall();
        })
        HTMLElements.menuAddPost.addEventListener('click', () => {
            HTMLElements.modalAddPost.classList.add('active')
            HTMLElements.addPost.remove()

            HTMLElements.modalAddPost.appendChild(HTMLElements.addPost)
            window.addEventListener('click', (e) => {
                if (e.target === HTMLElements.modalAddPost) {
                    HTMLElements.modalAddPost.classList.remove('active')
                    HTMLElements.addPost.remove();
                    HTMLElements.containterAddPost.appendChild(HTMLElements.addPost)

                    

                }
            })
        })
        HTMLElements.menuSettings.addEventListener('click', () => {
            HTMLElements.settingsElement.classList.add('active')
                window.addEventListener('click', (e) => {
                    if (e.target === HTMLElements.settingsElement) {
                        HTMLElements.settingsElement.classList.remove('active')
                    }
                })
        })


    }



}

const main = new Main();

window.addEventListener('DOMContentLoaded', () => main.init());
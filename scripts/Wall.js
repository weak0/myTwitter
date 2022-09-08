import {
    people
} from "./People.js";

import {
    db
} from './postDatabase.js'

import {
    HTMLElements
} from '../main.js'
import { user } from "./User.js";



class Wall {





    id = db.length - 1
    sortedByDate = false



    constructor() {

        this.letterLimit = 250;

    }

    init() {


        HTMLElements.textarea.addEventListener('keyup', () => this.letterCounter())
        HTMLElements.tweetButton.addEventListener('click', () => this.newPost())
        HTMLElements.sortElementsBtn.addEventListener('click', () => this.sortElements())
        this.sortElements();


    }



    loadWall( database = db ) {

        HTMLElements.wall.textContent = "";

        database.forEach(obj => {

            const author = people.findPerson(obj.authorID)
            const postDiv = document.createElement('div')
            postDiv.classList.add('post')
            postDiv.id = obj.id
            const postLeft = document.createElement('div')
            postLeft.classList.add('post-left')
            postLeft.innerHTML = `<img src = ${author.img} alt= 'profile-picture-${author.nick}'>`
            const postRight = document.createElement('div')
            postRight.classList.add('post-right')



            postRight.innerHTML =
                `<div class="post-description">${author.nick}
                    <span class= "time"> ${this.timeConfiguration(obj.date)} </span>
                </div>
                <div class="post-text">${obj.text}</div>

                ${obj.media ?  `<div class="post-media"> <img src=${ obj.media} alt=""></div>` : ""}
               
                <div class="post-actions">
                    <div ><i class="fa-solid fa-comment"></i> ${obj.coments}</div>
                    <div ><i class="fa-solid fa-retweet"></i></div>

                    <div data-like><i class="fa-solid fa-heart ${obj.liked ? 'red': ''}"></i> ${obj.hearts}</div>

                    <div ><i class="fa-solid fa-share"></i></div>
                </div>`


            HTMLElements.wall.appendChild(postDiv);
            postDiv.appendChild(postLeft);
            postDiv.appendChild(postRight);
            postDiv.querySelector('[data-like]').addEventListener('click', (e) => this.likePost(e));
        })


    }



    letterCounter() {

        const currentLetter = HTMLElements.textarea.value.length;
        HTMLElements.currentLetter.textContent = currentLetter;


        if (currentLetter >= this.letterLimit) {

            HTMLElements.limitLetter.parentNode.classList.add('red')

        } else {

            HTMLElements.limitLetter.parentNode.classList.remove('red')
        }


    }


    newPost() {

        if (HTMLElements.textarea.value.length > 0 && HTMLElements.textarea.value.length < 250) {


            const date = new Date()
            this.id++
            const id = this.id
            const text = HTMLElements.textarea.value

            const reader = new FileReader()

            if (HTMLElements.inputFile.value !== "") {

                reader.addEventListener(('load'), () => {

                    const media = reader.result;
                    const obj = {

                        id: id,
                        authorID: user.userDb.id,
                        text: text,
                        media: media,
                        date: date.getTime(),
                        coments: 0,
                        hearts: 0,
                        liked: false



                    }

                    db.unshift(obj)
                    this.loadWall()
                })

                reader.readAsDataURL(HTMLElements.inputFile.files[0])
            } else {

                const obj = {

                    id: id,
                    authorID: user.userDb.id,
                    text: text,
                    date: date.getTime(),
                    coments: 0,
                    hearts: 0,
                    liked: false

                }

                db.unshift(obj)
                this.loadWall()

            }
        }
    }

    likePost(e) {

        const postID = e.target.closest('div.post').id * 1;
        const index = db.findIndex(obj => obj.id === postID)

        if (db[index].liked === false) {

            db[index].liked = true
            db[index].hearts++
            e.target.closest('div').innerHTML = `<i class="fa-solid fa-heart red"></i> ${db[index].hearts}`

            user.interestedAdd(db[index].category)

        } else {

            db[index].liked = false
            db[index].hearts--
            e.target.closest('div').innerHTML = `<i class="fa-solid fa-heart"></i> ${db[index].hearts}`
            user.interestedRemove(db[index].category)

        }


    }

    sortElements() {

        if (this.sortedByDate) {

            this.sortedByDate = false;
            db.sort((a, b) => {
                return (b.hearts + b.coments) - (a.hearts + a.coments)
            })

        } else if (!this.sortedByDate) {

            this.sortedByDate = true;
            db.sort((a, b) => {
                return b.date - a.date
            })


        }


        this.loadWall()

    }

    timeConfiguration(date) {

        const newDate = new Date()

        const currentTime = newDate.getTime();

        let convertToSeconds = (currentTime - date) / 1000
        let convertToMinutes = (currentTime - date) / 1000 / 60
        let convertToHours = (currentTime - date) / 1000 / 60 / 60
        let convertToDays = (currentTime - date) / 1000 / 60 / 60 / 24
        let convertToYears = (currentTime - date) / 1000 / 60 / 60 / 365

        if (convertToYears >= 1) {

            convertToYears = "dodano " + Math.floor(convertToYears) + " lat temu"
            return convertToYears

        } else if (convertToDays >= 1) {

            convertToDays = "dodano " + Math.floor(convertToDays) + " dni temu"
            return convertToDays

        } else if (convertToHours >= 1) {

            convertToHours = "dodano " + Math.floor(convertToHours) + " godzin temu"
            return convertToHours

        } else if (convertToMinutes >= 1) {

            convertToMinutes = "dodano " + Math.floor(convertToMinutes) + " minut temu"
            return convertToMinutes

        } else if (convertToSeconds >= 1) {

            convertToSeconds = "dodano " + Math.floor(convertToSeconds) + " sekund temu"
            return convertToSeconds

        } else {

            const now = 'teraz'
            return now

        }
    }

    loadCategory(category) {

        const categoryPosts = []
        
       db.forEach(obj => {

        if(obj.category === category){
            categoryPosts.push(obj)
        }

       })

       console.log(categoryPosts);

       this.loadWall(categoryPosts)

    }


}


export const wall = new Wall()
import {
    people
} from "./People.js";

import {
    db
} from './postDatabase.js'




class Posts {

    HTMLElements = {

        wall: document.querySelector('[data-wall]'),
        tweetButton: document.querySelector('[data-tweet]'),
        textarea: document.querySelector('#text-area'),
        currentLetter: document.querySelector('[data-current-letter]'),
        limitLetter: document.querySelector('[data-limit-letter]'),
        inputFile: document.querySelector('#input-file'),
        like: document.querySelector('[data-like]'),
        sortElementsBtn: document.querySelector('.fa-sort')

    }



    id = db.length - 1
    sortedByDate = false



    constructor() {

        this.letterLimit = 250;
        this.init()

    }

    init() {


        this.HTMLElements.textarea.addEventListener('keyup', () => this.letterCounter())
        this.HTMLElements.tweetButton.addEventListener('click', () => this.newPost())
        this.HTMLElements.sortElementsBtn.addEventListener('click', () => this.sortElements())


    }



    loadWall() {

        this.HTMLElements.wall.textContent = "";

        db.forEach(obj => {

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


            this.HTMLElements.wall.appendChild(postDiv);
            postDiv.appendChild(postLeft);
            postDiv.appendChild(postRight);
            postDiv.querySelector('[data-like]').addEventListener('click', (e) => this.likePost(e));
        })


    }



    letterCounter() {

        const currentLetter = this.HTMLElements.textarea.value.length;
        this.HTMLElements.currentLetter.textContent = currentLetter;


        if (currentLetter >= this.letterLimit) {

            this.HTMLElements.limitLetter.parentNode.classList.add('red')

        } else {

            this.HTMLElements.limitLetter.parentNode.classList.remove('red')
        }


    }


    newPost() {

        if (this.HTMLElements.textarea.value.length > 0 && this.HTMLElements.textarea.value.length < 250) {


            const date = new Date()
            this.id++
            const id = this.id
            const text = this.HTMLElements.textarea.value

            const reader = new FileReader()
            if (this.HTMLElements.inputFile.value !== "") {

                reader.addEventListener(('load'), () => {

                    const media = reader.result;
                    const obj = {

                        id: id,
                        authorID: 99,
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

                reader.readAsDataURL(this.HTMLElements.inputFile.files[0])
            } else {

                const obj = {

                    id: id,
                    authorID: 99,
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

        } else {

            db[index].liked = false
            db[index].hearts--
            e.target.closest('div').innerHTML = `<i class="fa-solid fa-heart"></i> ${db[index].hearts}`

        }


    }

    sortElements() {

        if (this.sortedByDate) {

            this.sortedByDate = true;

        db.sort((a, b) => {

            return (b.hearts + b.coments) - (a.hearts + a.coments)
        })

    } else if(!this.sortedByDate) {


        this.sortedByDate = false;


        db.sort((a, b) => {

         return   b.date - a.date
            
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

        if (convertToYears > 1) {

            convertToYears = "dodano " + Math.floor(convertToYears) + " lat temu"
            return convertToYears

        } else if (convertToDays > 1) {

            convertToDays = "dodano " + Math.floor(convertToDays) + " dni temu"
            return convertToDays

        } else if (convertToHours > 1) {

            convertToHours = "dodano " + Math.floor(convertToHours) + " godzin temu"
            return convertToHours

        } else if (convertToMinutes > 1) {

            convertToMinutes = "dodano " + Math.floor(convertToMinutes) + " minut temu"
            return convertToMinutes

        } else if (convertToSeconds > 1) {

            convertToSeconds = "dodano " + Math.floor(convertToSeconds) + " sekund temu"
            return convertToSeconds

        }   else {

            const now = 'teraz'
            return now

        }




    }


}


export const posts = new Posts()
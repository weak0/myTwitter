import {
    people
} from "./People.js";




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

    allPosts = [{
            id: 2,
            authorID: 99,
            text: 'Alina Lempa halemba',
            date: 1662542267522,
            coments: 1,
            retwets: 10,
            hearts: 29,
            shares: 5,
            liked: false,


        },
        {

            id: 1,
            authorID: 3,
            text: 'Alina Lempa prezes Organizacji Firm Badania Opinii i Rynku. Nowymi członkami zarządu OFBOR zostali także: Agnieszka Gosiewska (Nielsen), Szymon Mordasiewicz (GfK), Łukasz Mazurkiewicz (ARC Rynek i Opinia), Michał Prządka (Kantar Polska) oraz Tomasz Woźniczka (PBS)',
            media: 'https://pbs.twimg.com/media/Fb5EaUDWYAEUlec?format=jpg&name=medium',
            date: 1662362267522,
            coments: 12,
            retwets: 10,
            hearts: 294,
            shares: 15,
            liked: false,

        },

        {

            id: 0,
            authorID: 3,
            text: 'Alina Lempa prezes Organizacji Firm Badania Opinii i Rynku. Nowymi członkami zarządu OFBOR zostali także: Agnieszka Gosiewska (Nielsen), Szymon Mordasiewicz (GfK), Łukasz Mazurkiewicz (ARC Rynek i Opinia), Michał Prządka (Kantar Polska) oraz Tomasz Woźniczka (PBS)',
            date: 1652562237522,
            coments: 12,
            retwets: 10,
            hearts: 24,
            shares: 15,
            liked: false,

        },

    ]

    id = this.allPosts.length - 1
    sortedByActiviti = false



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

        this.allPosts.forEach(obj => {

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
                    <div ><i class="fa-solid fa-retweet"></i> ${obj.retwets}</div>

                    <div data-like><i class="fa-solid fa-heart ${obj.liked ? 'red': ''}"></i> ${obj.hearts}</div>

                    <div ><i class="fa-solid fa-share"></i> ${obj.shares}</div>
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
                        retwets: 0,
                        hearts: 0,
                        shares: 0,
                        liked: false



                    }

                    this.allPosts.unshift(obj)
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
                    retwets: 0,
                    hearts: 0,
                    shares: 0,
                    liked: false

                }

                this.allPosts.unshift(obj)
                this.loadWall()

            }
        }
    }

    likePost(e) {

        const postID = e.target.closest('div.post').id * 1;
        const index = this.allPosts.findIndex(obj => obj.id === postID)

        if (this.allPosts[index].liked === false) {

            this.allPosts[index].liked = true
            this.allPosts[index].hearts++
            e.target.closest('div').innerHTML = `<i class="fa-solid fa-heart red"></i> ${this.allPosts[index].hearts}`

        } else {

            this.allPosts[index].liked = false
            this.allPosts[index].hearts--
            e.target.closest('div').innerHTML = `<i class="fa-solid fa-heart"></i> ${this.allPosts[index].hearts}`

        }


    }

    sortElements() {

        if (!this.sortedByActiviti) {

            this.sortedByActiviti = true;

        this.allPosts.sort((a, b) => {

            return (b.hearts + b.coments + b.retwets + b.shares) - (a.hearts + a.coments + a.retwets + a.shares)
        })

    } else if(this.sortedByActiviti) {


        this.sortedByActiviti = false;


        this.allPosts.sort((a, b) => {

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
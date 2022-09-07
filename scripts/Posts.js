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
        inputFile: document.querySelector('#input-file')

    }

    allPosts = [{

            id: 0,
            authorID: 3,
            text: 'Alina Lempa prezes Organizacji Firm Badania Opinii i Rynku. Nowymi członkami zarządu OFBOR zostali także: Agnieszka Gosiewska (Nielsen), Szymon Mordasiewicz (GfK), Łukasz Mazurkiewicz (ARC Rynek i Opinia), Michał Prządka (Kantar Polska) oraz Tomasz Woźniczka (PBS)',
            media: 'https://pbs.twimg.com/media/Fb5EaUDWYAEUlec?format=jpg&name=medium',
            coments: 12,
            retwets: 10,
            hearts: 294,
            shares: 15,

        },
        {
            id: 0,
            authorID: 99,
            text: 'Alina Lempa halemba',
            coments: 12,
            retwets: 10,
            hearts: 294,
            shares: 15,

        },
    ]

id = this.allPosts.length - 1


constructor() {

    this.letterLimit = 250;
    this.init()

}

init() {


    this.HTMLElements.textarea.addEventListener('keyup', () => this.letterCounter())
    this.HTMLElements.tweetButton.addEventListener('click', () => this.newPost())

}



loadWall() {

    this.HTMLElements.wall.textContent = "";

    this.allPosts.forEach(obj => {

        const author = people.findPerson(obj.authorID)
        console.log(author)
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.id = obj.id
        const postLeft = document.createElement('div')
        postLeft.classList.add('post-left')
        postLeft.innerHTML = `<img src = ${author.img} alt= 'profile-picture-${author.nick}'>`
        const postRight = document.createElement('div')
        postRight.classList.add('post-right')



        postRight.innerHTML =
            `<div class="post-description">${author.nick}</div>
                <div class="post-text">${obj.text}</div>

                ${obj.media ?  `<div class="post-media"> <img src=${ obj.media} alt=""></div>` : ""}
               
                <div class="post-actions">
                    <div ><i class="fa-solid fa-comment"></i> ${obj.coments}</div>
                    <div ><i class="fa-solid fa-retweet"></i> ${obj.retwets}</div>
                    <div data-like><i class="fa-solid fa-heart"></i> ${obj.hearts}</div>
                    <div ><i class="fa-solid fa-share"></i> ${obj.shares}</div>
                </div>`

        
        this.HTMLElements.wall.appendChild(postDiv);
        postDiv.appendChild(postLeft);
        postDiv.appendChild(postRight);
        postDiv.querySelector('[data-like]').addEventListener('click', this.likePost);
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
                    coments: 0,
                    retwets: 0,
                    hearts: 0,
                    shares: 0,


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
                coments: 0,
                retwets: 0,
                hearts: 0,
                shares: 0,

            }

            this.allPosts.unshift(obj)
            this.loadWall()

        }
    }
}

likePost() {

    console.log('dziala')

}


}


export const posts = new Posts()
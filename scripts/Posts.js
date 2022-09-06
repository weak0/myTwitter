import { people } from "./People.js";

class Posts {

    wall = document.querySelector('[data-wall]')

    allPosts = [{
        id: 0,
        authorID: 3,
        text: 'Alina Lempa prezes Organizacji Firm Badania Opinii i Rynku. Nowymi członkami zarządu OFBOR zostali także: Agnieszka Gosiewska (Nielsen), Szymon Mordasiewicz (GfK), Łukasz Mazurkiewicz (ARC Rynek i Opinia), Michał Prządka (Kantar Polska) oraz Tomasz Woźniczka (PBS)',
        mediaType: 'img',
        media: 'https://pbs.twimg.com/media/Fb5EaUDWYAEUlec?format=jpg&name=medium',
        coments: 12,
        retwets: 10,
        hearts: 294,
        shares: 15,

    },

 ]


    loadWall() {


        


        this.wall.textContent = "";

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
                `<div class="post-description">${author.nick}</div>
                <div class="post-text">${obj.text}</div>
                <div class="post-media"> <img src=${obj.media} alt=""></div>
                <div class="post-actions">
                    <div><i class="fa-solid fa-comment"></i> ${obj.coments}</div>
                    <div><i class="fa-solid fa-retweet"></i> ${obj.retwets}</div>
                    <div><i class="fa-solid fa-heart"></i> ${obj.hearts}</div>
                    <div><i class="fa-solid fa-share"></i> ${obj.shares}</div>
                </div>`

            this.wall.appendChild(postDiv);
            postDiv.appendChild(postLeft);
            postDiv.appendChild(postRight);



        })


    }


}


export const posts = new Posts()
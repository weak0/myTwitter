import { user } from './User.js'


class People {

    peopleArr = [{
            id: 10,
            name: 'MrktngPrzyKawie',
            nick: 'MarketingPrzyKawie',
            img: 'https://pbs.twimg.com/profile_images/887703492554625025/6jgYHqT8_400x400.jpg',
            interested: ['marketing']
            
        },
        {
            id: 9,
            name: 'chesscom',
            nick: 'Chess.com',
            img: 'https://pbs.twimg.com/profile_images/1486725222237556746/p2dXxvP2_400x400.png',
            interested: ['chess']
        },
        {
            id: 8,
            name: 'nieANTYfan',
            nick: 'nieantyfan',
            img: 'https://pbs.twimg.com/profile_images/1518659050946314242/ATkgmEX3_400x400.jpg',
            interested: ['influencer' , 'technology']
        },
        {
            id: 7,
            name: 'Gucio_lol',
            nick: 'Witold',
            img: 'https://pbs.twimg.com/profile_images/1259566852780560384/Yk_WRvV7_400x400.jpg',
            interested: ['influencer']
        },
        {
            id: 6,
            name: 'bytompogrzeby',
            nick: 'Zakład Pogrzebowy A.S. Bytom',
            img: 'https://pbs.twimg.com/profile_images/967336244928811008/MQErnNBO_400x400.jpg',
            interested: ['comedy']
        },
        {
            id: 5,
            name: 'jaskol95',
            nick: 'Tomek Jaskółka💙💛',
            img: 'https://pbs.twimg.com/profile_images/1389314863843971076/vu1TCRV6_400x400.jpg',
            interested: ['chess']
        },
        {
            id: 4,
            name: 'github',
            nick: 'GitHub',
            img: 'https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg',
            interested: ['technology']
        },
        {
            id: 2,
            name: 'Apple',
            nick: 'Apple',
            img: 'https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ_400x400.jpg',
            interested: ['technology']
        },
        {
            id: 1,
            name: 'G a b r i e l - I g l e s i a s',
            nick: 'fluffyguy',
            img: 'https://pbs.twimg.com/profile_images/1486500495023767552/3bgK0AIh_400x400.jpg',
            interested: ['comedy']
        },
        {
            id: 3,
            name: 'MarcinNajman',
            nick: 'Marcin Najman',
            img: 'https://pbs.twimg.com/profile_images/1532384766405877761/SbD9Zzy3_400x400.jpg',
            interested: ['influencer']
        },

        user.userDb

    ]

    unfolowedPeople = [

        {
            id: 11,
            name: 'Krzysztof Stanowki',
            nick: 'Krzysztof Stanowski',
            img: 'https://pbs.twimg.com/profile_images/1508934566823747586/FF6nNpTK_400x400.jpg',
            interested: ['influencer'],
            posts: {
                id: 11,
                authorID: 11,
                text: "No to czekamy na meczyk. Co z Robertem Lewandowskim dzisiaj?Jeśli nie trafisz pierwszego kuponu, połowa postawionych pieniędzy wraca i można z nimi zrobić cokolwiek.",
                date: 1662532267822,
                coments: 37,
                hearts: 553,
                liked: false,
                language: 'Polish',
                category: 'sport'
            },
        },
        {
            id: 12,
            name: 'Daniel_Sloss',
            nick: 'Daniel Sloss',
            img: 'https://pbs.twimg.com/profile_images/915575197822005250/Km_SoXwO_400x400.jpg',
            interested: ['comedy'],
            posts: {
                id: 12,
                authorID: 12,
                text: "New York! The 2 week run of my brand new show CAN'T starts on 13th September off-Broadway at SoHo Playhouse. If you fancy coming along, some shows are nearly sold out so please book soon. Hope to see you there!",
                date: 1662531167822,
                coments: 4,
                hearts: 158,
                liked: false,
                language: 'English',
                category: 'comedy'
            },
        },
        {
            id: 13,
            name: 'Windows',
            nick: 'Windows',
            img: 'https://pbs.twimg.com/profile_images/1408089447455891461/hwvI8tM1_400x400.jpg',
            interested: ['technology'],
            posts: {
                id: 13,
                authorID: 13,
                text: "What should we change our email sign-off to? xoxo, Windows",
                date: 1662432267822,
                coments: 141,
                hearts: 762,
                liked: false,
                language: 'English',
                category: 'technology'
            },
        },
        {
            id: 14,
            name: 'Magnus Carlsen',
            nick: 'Magnus Carlsen',
            img: 'https://pbs.twimg.com/profile_images/1384791850259783681/y9O88Dj8_400x400.jpg',
            interested: ['chess'],
            posts: {
                id: 14,
                authorID: 14,
                text: "How people in my Twitter feed would look like after one game♟",
                date: 1662432226822,
                coments: 39,
                hearts: 3282,
                liked: false,
                language: 'English',
                category: 'chess'
            },
        },
        {
            id: 15,
            name: 'Paweł Tkaczyk',
            nick: 'Paweł Tkaczyk',
            img: 'https://pbs.twimg.com/profile_images/1358521720177590282/PYRsSCN__400x400.jpg',
            interested: ['marketing'],
            posts: {
                id: 15,
                authorID: 15,
                text: "Piątek, piąteczek, piątunio. Do tego wakacyjny piątek, piąteczek, piątunio. A ja Was dawno nie pytałem – co Wam się udało zrobić w tym tygodniu?",
                date: 1661432237822,
                media:'https://pbs.twimg.com/media/FXs47dLUIAE03lm?format=jpg&name=medium',
                coments: 6,
                hearts: 10,
                liked: false,
                language: 'English',
                category: 'chess'
            },
        },
        




    ]



    findPerson(id) {

        const person = this.peopleArr.find(obj => obj.id === id)

        return person

    }

    addToDb(id) {


        console.log(id);

    }

}

export const people = new People()
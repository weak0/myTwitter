import { user } from './User.js'


class People {

    peopleArr = [{
            id: 10,
            name: 'MrktngPrzyKawie',
            nick: 'MarketingPrzyKawie',
            img: 'https://pbs.twimg.com/profile_images/887703492554625025/6jgYHqT8_400x400.jpg'
        },
        {
            id: 9,
            name: 'chesscom',
            nick: 'Chess.com',
            img: 'https://pbs.twimg.com/profile_images/1486725222237556746/p2dXxvP2_400x400.png'
        },
        {
            id: 8,
            name: 'nieANTYfan',
            nick: 'nieantyfan',
            img: 'https://pbs.twimg.com/profile_images/1518659050946314242/ATkgmEX3_400x400.jpg'
        },
        {
            id: 7,
            name: 'Gucio_lol',
            nick: 'Witold',
            img: 'https://pbs.twimg.com/profile_images/1259566852780560384/Yk_WRvV7_400x400.jpg'
        },
        {
            id: 6,
            name: 'bytompogrzeby',
            nick: 'Zakład Pogrzebowy A.S. Bytom',
            img: 'https://pbs.twimg.com/profile_images/967336244928811008/MQErnNBO_400x400.jpg'
        },
        {
            id: 5,
            name: 'jaskol95',
            nick: 'Tomek Jaskółka💙💛',
            img: 'https://pbs.twimg.com/profile_images/1389314863843971076/vu1TCRV6_400x400.jpg'
        },
        {
            id: 4,
            name: 'github',
            nick: 'GitHub',
            img: 'https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg'
        },
        {
            id: 2,
            name: 'Apple',
            nick: 'Apple',
            img: 'https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ_400x400.jpg'
        },
        {
            id: 1,
            name: 'G a b r i e l - I g l e s i a s',
            nick: 'fluffyguy',
            img: 'https://pbs.twimg.com/profile_images/1486500495023767552/3bgK0AIh_400x400.jpg'
        },
        {
            id: 0,
            name: 'kaja234',
            nick: 'Kaja Babis ',
            img: 'https://pbs.twimg.com/profile_images/1534609219701317632/ivQvOopg_400x400.png'
        },

        {
            id: 3,
            name: 'MarcinNajman',
            nick: 'Marcin Najman',
            img: 'https://pbs.twimg.com/profile_images/1532384766405877761/SbD9Zzy3_400x400.jpg'
        },

        user.userDb

    ]



    findPerson(id) {

        const person = this.peopleArr.find(obj => obj.id === id)

        return person

    }

}

export const people = new People()
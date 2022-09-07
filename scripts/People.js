class People {

    peopleArr = [{
        id: 3,
        name: 'Kaja Babis',
        nick: 'kaja234',
        img: 'https://pbs.twimg.com/profile_images/1534609219701317632/ivQvOopg_400x400.png'
    },
    {
        id:99,
        name: 'Maciek Gorzela',
        nick: 'Still Weeak',
        img:'https://pbs.twimg.com/profile_images/1418904441449848832/j2AfREvZ_400x400.jpg',

    }

]



    findPerson(id) {

        const person = this.peopleArr.find(obj => obj.id === id)

        return person

    }

}

export const people = new People()
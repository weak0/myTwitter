class People {

    peopleArr = [{
        id: 3,
        name: 'Kaja Babis',
        nick: 'kaja234',
        img: 'https://pbs.twimg.com/profile_images/1534609219701317632/ivQvOopg_400x400.png'
    }]



    findPerson(id) {

        const person = this.peopleArr.find(obj => obj.id = id)

        return person

    }

}

export const people = new People()
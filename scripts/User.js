import { people } from "./People.js"

class User {

userDb = {
        id: 99,
        name: 'Maciek Gorzela',
        nick: 'Still Weeak',
        img: 'https://pbs.twimg.com/profile_images/1418904441449848832/j2AfREvZ_400x400.jpg',
        interested: ['chess']

}


interestedAdd (category) {

this.userDb.interested.push(category)

}


interestedRemove (category) {

const index  = this.userDb.interested.findIndex(prop =>  prop === category )
this.userDb.interested.splice(index , 1)

}

getWhoToFollow() {

    this.userDb.interested.forEach(prop => {

      console.log(people.unfolowedPeople.interested)

    })

}




}


export const user = new User()
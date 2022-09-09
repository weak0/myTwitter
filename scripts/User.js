import {
  HTMLElements
} from "../main.js"
import {
  people
} from "./People.js"

class User {

  recomedation = []

  userDb = {
    id: 99,
    name: 'Maciek Gorzela',
    nick: 'Still Weeak',
    img: 'https://pbs.twimg.com/profile_images/1418904441449848832/j2AfREvZ_400x400.jpg',
    interested: ['chess', 'comedy']

  }


  interestedAdd(category) {

    this.userDb.interested.push(category)

  }


  interestedRemove(category) {

    const index = this.userDb.interested.findIndex(prop => prop === category)
    this.userDb.interested.splice(index, 1)

  }

  getWhoToFollow() {

    let index = -1

    this.userDb.interested.forEach(prop => {
      index = people.unfolowedPeople.findIndex(obj => {
        if (obj.interested.includes(prop)) {
          return obj
        }
      })

      if (!this.recomedation.includes(index)) {
        this.recomedation.push(index)
      }

    })

    this.generateWhoToFollow()


  }

  generateWhoToFollow() {

    HTMLElements.ulFollowrecomendation.textContent = ""

    this.recomedation.forEach(index => {

      const li = document.createElement('li')
      const div = document.createElement('div')
      div.innerHTML = `<img src = ${people.unfolowedPeople[index].img} alt= 'profile-picture-${people.unfolowedPeople[index].nick}'>`
      const p = document.createElement('p')
      p.textContent = people.unfolowedPeople[index].nick
      const button = document.createElement('button')
      button.textContent = "Follow"
      HTMLElements.ulFollowrecomendation.appendChild(li)
      li.appendChild(div)
      div.appendChild(p)
      li.appendChild(button)
      button.addEventListener('click' ,() => people.addToDb(people.unfolowedPeople[index].id))

    })
  }

  moreRecomedation() {


    let random = this.random()
    let flag = true


    this.recomedation.forEach(prop => {
      if (prop === random) {

        flag = false

      }
    })

    if(!flag) {

      this.moreRecomedation()

    }else {

      this.recomedation.push(random)
      this.generateWhoToFollow()
    } }



  random() {

    const random = Math.floor(Math.random() * people.unfolowedPeople.length)

    return random



  }




}


export const user = new User()
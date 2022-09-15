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
    nick: 'Still Weak',
    img: 'https://pbs.twimg.com/profile_images/1418904441449848832/j2AfREvZ_400x400.jpg',
    interested: ['chess', 'comedy']

  }


  init() {

    HTMLElements.menuSettings.addEventListener('click', () => this.setProfileSettings())
    HTMLElements.settingsImageBtn.addEventListener('click', () => this.changeImage())
    HTMLElements.settingsNickBtn.addEventListener('click', () => this.changeNick())


  }


  interestedAdd(category) {

    this.userDb.interested.push(category)
    console.log(this.userDb.interested)

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

      if (!this.recomedation.includes(index) && index !== -1) {
        this.recomedation.push(index)
      }

    })

    if (index !== -1) {
      this.generateWhoToFollow()
    }


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
      button.addEventListener('click', (e) => people.addToDb(e, people.unfolowedPeople[index].id))

    })
  }

  moreRecomedation() {

    let random = this.random()
    let flag = true

    this.recomedation.forEach(prop => {
      if (prop === random) {
        flag = !flag
      }
    })

    if (this.recomedation.length === people.unfolowedPeople.length) {

      alert('no-data')

    } else {

      if (!flag) {

        this.moreRecomedation()

      } else {

        this.recomedation.push(random)
        this.generateWhoToFollow()


      }

    }
  }


  setProfileSettings() {

    HTMLElements.settingsProfilePicture.innerHTML = `<img src=${this.userDb.img} alt=profile-picture-${this.userDb.name}>`
    HTMLElements.profileProfileImage.setAttribute('src', this.userDb.img)
    HTMLElements.profileSettingsIcon.setAttribute('src', this.userDb.img)
    HTMLElements.addPostProfile.setAttribute('src', this.userDb.img)
    HTMLElements.settingsProfileNick.textContent = this.userDb.nick
    HTMLElements.nickProfileText.textContent = this.userDb.nick

  }

  changeImage() {



    if (HTMLElements.setiingsInputFile.value !== "") {

      console.log('object');
      const reader = new FileReader()


      reader.addEventListener(('load'), () => {
        this.userDb.img = reader.result
        this.setProfileSettings();
      })

      reader.readAsDataURL(HTMLElements.setiingsInputFile.files[0])
      

    }}

  changeNick() {

    if (HTMLElements.settingsInputText !== "") {

      this.userDb.nick = HTMLElements.settingsInputText.value
      this.setProfileSettings()

    }

  }





  random() {

    const random = Math.floor(Math.random() * (people.unfolowedPeople.length))

    return random



  }




}


export const user = new User()
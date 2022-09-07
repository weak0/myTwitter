export class EmojiPicker {

emojiTab = ['😀','😆','🤣','😉','😛','🤑','😪']
emojisBtns = null


constructor(btn, input) {

    this.btn = document.querySelector(btn)
    this.input = document.querySelector(input)
    this.init()
    

}


  init() {





    this.btn.addEventListener( 'click', () => this.openPicker())
    document.addEventListener('click' , (e) => this.closePicker(e))
    


  }  


  closePicker(e) {

    const picker = document.querySelector('#emotePicker')
  
    if(picker !== null && !e.target.classList.contains('emoji') && e.target !== this.btn  ) {

        picker.remove()
        
    }


  }

  addListeners() {

    
    this.emojisBtns.forEach(btn => {
        btn.addEventListener('click', (e) => this.addEmote(e))
    })

 

    


  }


  openPicker() {


    const picker = document.querySelector('#emotePicker')

    if(  picker === null) {

    const div = document.createElement('div')
    div.id = 'emotePicker'
    this.stylePicker(div);
    this.generateEmoji(div);


    const parentNode = this.btn.parentElement
    parentNode.appendChild(div)
    this.emojisBtns = document.querySelectorAll('.emoji')
    this.addListeners()

    }else {

        picker.remove()
        

    }

  }



  stylePicker(div) {


    const Y = this.btn.offsetTop + this.btn.offsetHeight
    const X = this.btn.offsetLeft + this.btn.offsetWidth

    div.style.position = 'fixed'
    div.style.top = `${Y}px `
    div.style.left = `${X}px`
    div.style.width = '170px'
    div.style.border ='2px solid'
    div.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color')
    div.style.borderRadius = '20px'
    div.style.display = 'flex'
    div.style.flexWrap = 'wrap'
    div.style.backgroundColor = 'black'




  }

generateEmoji(div) {


   this.emojiTab.forEach( emote => {

    const emoteDiv = document.createElement('div')
    emoteDiv.setAttribute('class', 'emoji')
    emoteDiv.textContent = emote
    emoteDiv.style.margin = '10px'
    emoteDiv.style.cursor = 'pointer'
    div.appendChild(emoteDiv)


   })

}


addEmote = (e) => {

const emote = e.target.textContent;
this.input.value += emote


}}



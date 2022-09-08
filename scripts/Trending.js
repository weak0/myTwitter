import {
    db
} from './postDatabase.js'
import {
    HTMLElements
} from '../main.js'

class Trending {

    countries = ['Poland', 'English']
    trandings = []

    constructor() {

        this.howManyTrends = 2

    }


    init() {

        this.countries.forEach(country => this.trendingCountry(country));
        this.generateTrendings();
        HTMLElements.showMoreTrendsBtn.addEventListener('click', () => this.showMoreTrends())

    }


    trendingCountry(country) {

        const dbCountry = []

        db.forEach(obj => {

            if (obj.language === country) {
                dbCountry.push(obj)
            }

        })

        dbCountry.sort((a, b) => {

            return (b.coments + b.hearts) - (a.coments + a.hearts)

        })

        dbCountry.splice(this.howManyTrends, dbCountry.length)


        dbCountry.forEach(obj => {

            const category = obj.category
            const origin = `Trending in ${country}`

            const newObj = {
                category,
                origin,
            }
            this.trandings.push(newObj)


        })
    }

    generateTrendings() {

        const tempArr =  this.trandings

        this.trandings.forEach((value, index, arr) => {

            tempArr.forEach((value2, index2 , arr2) => {

                if (index !== index2) {

                    if (value.category === value2.category) {
                        arr.splice(index2, 1)
                        arr2.splice(index2, 1)
                    }
                }

            })

        })

        console.log();

        tempArr.forEach(obj => {

            const li = document.createElement('li')
            const span = document.createElement('span')
            const p = document.createElement('p')
            span.textContent = obj.origin;
            p.textContent = obj.category;
            HTMLElements.trendsSection.appendChild(li)
            li.innerHTML = '<i class="fa-solid fa-ellipsis"></i>'
            li.appendChild(span)
            li.appendChild(p)

        })


    }

    showMoreTrends() {

        this.trandings = []
        this.howManyTrends++
        this.countries.forEach(country => this.trendingCountry(country));
        HTMLElements.trendsSection.textContent = ''
        this.generateTrendings();

    }



}

export const trending = new Trending()
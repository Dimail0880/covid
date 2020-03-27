import './styles.css';

class Covid {
    constructor() {
        this.URL = "https://coronavirus-19-api.herokuapp.com/countries"
        this.list = document.querySelector('#list')
        this.root = document.querySelector("#root")


    }
    renderList = () => {

        this.getStats().then(data => {
            data.map(el => {

                const li = document.createElement('li')
                li.insertAdjacentHTML("beforeend", this.markupItem(el))
                this.list.append(li)
            })
        })
    }







    markupItem(el) {
        return `<span> ${el.country} </span>
        <span>cases: ${el.cases} </span>
        <span>today cases: ${el.todayCases} </span>
        <span>:deaths: ${el.deaths} </span>
        `
    }
    markup() {
        this.root.insertAdjacentHTML("beforeend", this.renderList())
    }
    getStats() {
        const URL = "https://coronavirus-19-api.herokuapp.com/countries"
        return fetch(URL).then(res => res.json())
            // .then(data => { return data }).catch(err => console.log(err));
    }




    // let query = input.value
    // let queryResult = fetch(URL + "/" + query).then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

    start() {
        this.markup()
    }
}


const covid = new Covid()
covid.start()


const URL = "https://coronavirus-19-api.herokuapp.com/countries"
fetch(URL).then(res => res.json())
    .then(data => console.log(data)).catch(err => console.log(err));
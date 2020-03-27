import './styles.css';

class Covid {
    constructor() {
        this.URL = "https://coronavirus-19-api.herokuapp.com/countries"
        this.list = document.querySelector('#list')
        this.root = document.querySelector("#root")
    }
    renderTitle() {
        return `<td> СТРАНА </td>
        <td> всего случаев </td>
        <td> сегодня случаев </td>
        <td> всего смертей </td>
        <td> сегодня смертей</td>
        <td> выздоровели</td>
        <td> активные заражения</td>
        <td> в критическом состоянии</td>
        <td> случаев на 1 млн</td>
        <td>  смертей на млн </td>`
    }
    renderList = () => {
        list.insertAdjacentHTML("beforeend", this.renderTitle())
        this.getStats().then(data => {
            data.map(el => {
                const li = document.createElement('tr')
                li.classList.add("list-item")
                li.insertAdjacentHTML("beforeend", this.markupItem(el))
                this.list.append(li)

            })
        })
    }
    markupItem(el) {
        // const keys = Object.keys(el);
        // const values = Object.values(el);
        // const td = document.createElement('td')
        // return td.insertAdjacentHTML('beforeend', () => {
        //         values.map((el) => this.markupTd(el))
        //     })
        //     // td.value = [...values]
        //     // return td
        //     // td.append(...values)


        // // return `<td>${[...values]}</td>`

        return `<td> ${el.country} </td>
            <td> ${el.cases} </td>
            <td> ${el.todayCases} </td>
            <td> ${el.deaths} </td>
            <td> ${el.todayDeaths}</td>
            <td> ${el.recovered}</td>
            <td> ${el.active}</td>
            <td> ${el.critical}</td>
            <td> ${el.casesPerOneMillion}</td>
            <td>  ${el.deathsPerOneMillion}</td>
            `

    }
    markupTd(el) {
        return `<td>${el}</td>`
    }
    getStats() {
        const URL = "https://coronavirus-19-api.herokuapp.com/countries"
        return fetch(URL).then(res => res.json())
    }




    // let query = input.value
    // let queryResult = fetch(URL + "/" + query).then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

    start() {
        this.renderList()
    }
}


const covid = new Covid()
covid.start()


const URL = "https://coronavirus-19-api.herokuapp.com/countries"
fetch(URL).then(res => res.json())
    .then(data => console.log(data)).catch(err => console.log(err));
let listItem = $( '#select-me' );

let listEls = $( '#employee-list > .list-group-item' );
console.log( listEls );

let dataToSend =  {
    body: 'This is a post from JavaScript',
    user_id: 1
}

// SUCCESSFUL GET REQUESTS
fetch( 'https://ergast.com/api/f1/2020/1/driverStandings.json' )
    .then( res => res.json() )
    .then( data => console.log(data) )

fetch( './static/person-data.json' )
    .then( res => res.json() )
    .then( data => getData( data ) )

axios.get( './static/person-data.json' )
    .then( res => console.log(res.data ) )
     
// SUCCESSFUL POST REQUESTS
axios( {
    method: 'POST',
    mode: 'no-cors',
    url: 'http://127.0.0.1:5000/api/posts',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*'
    },
    data: dataToSend
} ).then( res => console.log( res.data ) );

fetch('https://ergast.com/api/f1/2020/1/driverStandings.json', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
})
    .then(res => res.json())
    .then(data => console.log('it works'))

// Grabbing Form Data From a Submit Event
const form = document.querySelector('#testDataForm')
console.log(form)

// Add Event Listener for submit event(s)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name').value
    let query_last = document.querySelector('#last-name').value

    // Another way of getting access to the form data
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;

    console.log(event)
    console.log(query_first, query_last)
    console.log(first_name, last_name)
})

const racer_data = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response)

    let url = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`

    console.log(`This is the given name from f1 racer ${response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName}`)
}
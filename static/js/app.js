// DOCUMENT OBJECT MODEL
// let listItem = document.getElementById( 'select-me' );

// console.log(listItem.innerText);

// let employeeName = document.getElementById( 'employee-name' );

// console.log( employeeName.innerText );

// let employeeSkills = document.getElementsByClassName( 'list-group-item' );

// console.log( employeeSkills );

// let employeeSkills = document.querySelectorAll( '.card .list-group-item' );

// console.log( employeeSkills );

// Employee List
let employeeList = document.querySelector( '#employee-list' );
// employeeList.innerHTML = '<li id="select-me" class="list-group-item">Item</li>';

// Create the element
// let li = document.createElement( 'li' );
// Then set its inner text
// li.innerText = "Item";
// Then set the class attribute
// li.setAttribute( 'class', 'list-group-item' );
// '<li id="select-me" class="list-group-item">Item</li>'

// let li2 = document.createElement( 'li' );
// li2.innerText = "Item";
// li2.setAttribute( 'class', 'list-group-item' );

// employeeList.appendChild( li );
// employeeList.appendChild( li2 );
// employeeList.innerHTML = '<li id="select-me" class="list-group-item">Item</li>';
// console.log(employeeList);

// ---------------------------------------------------------------- //
// let employeeEl = document.querySelector( '#employee-name' );
// let populateEl = document.querySelector('#populate' );

// employeeEl.addEventListener( 'mouseover', function() {
//     populateEl.innerText = 'It works';
// } );
// console.log(employeeEl);

let employeeName = document.getElementById('employee-name');
let employeeOccupation = document.getElementById('employee-occupation');
let employeeSkills = document.querySelector( '#employee-skills' );
let employeeStatusContainer = document.querySelector( '.employee-status-container' );

// let employeesInfoOther = [
//     {
//         firstName: 'Derek',
//         lastName: 'Hawkins'
//     },
//     {
//         firstName: 'Ripal',
//         lastName: 'Patel'
//     },
// ]

function getData( aList ) {
    for (const person of aList)
    {

        let li = document.createElement('li');
        li.innerText = `${ person.firstName } ${ person.lastName }`;
        li.setAttribute('class', 'list-group-item');
        employeeList.appendChild(li);

        // Mouse Over/Out Event Listeners
        li.addEventListener( 'mouseenter', function() {
            li.classList.add( 'active' );
        } );
        li.addEventListener( 'mouseleave', function() {
            li.classList.remove( 'active' );
        } );
        
        
        // Mouse Click Event Listeners
        li.addEventListener( 'click', function() {
            
            // set element with id of employee-name
            employeeName.innerText = `${ person.firstName } ${ person.lastName }`;
            // set element with id of employee-occupation
            employeeOccupation.innerText = person.occupation;

            // clear the employeeSkills ul to make way for new employee data
            employeeSkills.innerHTML = '';
            
            // set element with id of employee-occupation
            for ( const s of person.skills ) {
                // create list element for every skill
                let listEl = document.createElement( 'li' );

                // set the class attribute
                listEl.setAttribute( 'class', 'list-group-item' );

                // inject dynamic text/html into the list element
                listEl.innerHTML = `${ s.name } <span class="float-right"> ${ s.level } </span>`;

                // append the list element into the employeeSkills element
                employeeSkills.appendChild( listEl );
            }

            // show the employee status button
            // create employee status button
            let employeeStatusBtn = document.createElement( 'button' );
            employeeStatusBtn.setAttribute( 'class', 'btn btn-danger btn-block' );
            employeeStatusBtn.innerText = 'Offline';

            // put button into the status container element
            employeeStatusContainer.innerHTML = '';

            employeeStatusContainer.appendChild( employeeStatusBtn );
            
            employeeStatusBtn.addEventListener( 'click', function() {
                this.setAttribute( 'class', 'btn btn-success btn-block' );
                this.innerText = 'Online';
            } );

            employeeStatusContainer.style.display = 'block';
        } );

    }
}

let employeesInfo = [];

// Use AJAX to load data into document AFTER page is already loaded
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if( this.readyState === 4 && this.status === 200 ) {
        employeesInfo = JSON.parse( this.responseText );
        getData( employeesInfo );
        // getData( employeesInfoOther );
    }
}

// if pulling in relative data into an application, 
// you have to import the file as if you were in the index.html file
xhr.open( 'GET', './static/person-data.json' ); 
xhr.send();

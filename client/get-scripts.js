/* *************************
 *** DISPLAY BY USER ***
************************** */
function displayMine() {
     console.log('displayMine Function Called')
    const accessToken = localStorage.getItem('sessionToken');

    fetch(`http://localhost:3000/journal/mine`, {
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let display = document.getElementById('journals');
        for (i = 0; i = dispaly.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (data.length === 0) {
            let display = document.getElementById('journals');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = "You haven't made any posts yet!";
            header.setAttribute("class", "noPosts")
        } else {
        for(i = 0; i < data.length; i++){
            let dispaly = document.getElementById('journals');
            let card = document.getElementById('div');
            let body = document.getElementById('div');
            let header = document.getElementById('h5');
            let subtitle = document.getElementById('h6');
            let para = document.getElementById('p');
            let editBtn = document.getElementById('button');
            let deleteBtn = document.getElementById('button');
            
            let current = data[i];
            let title = current.title;
            let date = current.date;
            let entry = current.entry;

            header.textContent = title;
            subtitle.textConent = date;
            para.textContent = entry;
            editBtn.textContent = "Edit";
            deleteBtn.textContent = "Delete";

            dispaly.appendChild(card);
            card.appendChild(body);
            body.appendChild(header);
            body.appendChild(subtitle);
            body.appendChild(para);
            body.appendChild(editBtn);
            body.appendChild(deleteBtn);

            card.setAttribute('id', current.id);
            card.setAttribute('class', "card");
            body.setAttribute('class', 'card-body');
            header.setAttribute('class', 'card-title');
            subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
            para.setAttribute('class', 'card-text');

            editBtn.setAttribute('class', 'btn btn-dark editBtn');
            editBtn.setAttribute('type', 'button');
            editBtn.setAttribute('onclick', `editJournal(${current.id})`);

            deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
            deleteBtn.setAttribute('type', 'button');
            deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`);
        }
        }
    })
    .catch(err => {
        console.error(err)
    })
}

    /* *************************
     *** DISPLAY ALL ***
    ************************** */
    function displayAll() {
    console.log('displayAll Function Called')

    fetch(`http://localhost:3000/journal`, {
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let display = document.getElementById('journals');
        for (i = 0; i = dispaly.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (data.length === 0) {
            let display = document.getElementById('journals');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = "You haven't made any posts yet!";
            header.setAttribute("class", "noPosts")
        } else {
        for(i = 0; i < data.length; i++){
            let dispaly = document.getElementById('journals');
            let card = document.getElementById('div');
            let body = document.getElementById('div');
            let header = document.getElementById('h5');
            let subtitle = document.getElementById('h6');
            let para = document.getElementById('p');
            
            let current = data[i];
            let title = current.title;
            let date = current.date;
            let entry = current.entry;

            header.textContent = title;
            subtitle.textConent = date;
            para.textContent = entry;

            dispaly.appendChild(card);
            card.appendChild(body);
            body.appendChild(header);
            body.appendChild(subtitle);
            body.appendChild(para);

            card.setAttribute('id', current.id);
            card.setAttribute('class', "card");
            body.setAttribute('class', 'card-body');
            header.setAttribute('class', 'card-title');
            subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
            para.setAttribute('class', 'card-text');


        }
        }
    })
    .catch(err => {
        console.error(err)
    })
}
    
    
    /* *************************
     *** DISPLAY BY TITLE ***
    ************************** */
    function displayByTitle() {
     console.log('displayByTitle Function Called')

    let journalTitle = document.getElementById('searchBar').value;
    console.log('journalTitle');
    
        fetch(`http://localhost:3000/journal/${journalTitle}`, {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            let display = document.getElementById('journals');
            for (i = 0; i = dispaly.childNodes.length; i++) {
                display.removeChild(display.firstChild)
            }
    
            if (data.length === 0) {
                let display = document.getElementById('journals');
                let header = document.createElement('h5');
    
                display.appendChild(header);
                header.textContent = "You haven't made any posts yet!";
                header.setAttribute("class", "noPosts")
            } else {
            for(i = 0; i < data.length; i++){
                let dispaly = document.getElementById('journals');
                let card = document.getElementById('div');
                let body = document.getElementById('div');
                let header = document.getElementById('h5');
                let subtitle = document.getElementById('h6');
                let para = document.getElementById('p');
                
                let current = data[i];
                let title = current.title;
                let date = current.date;
                let entry = current.entry;
    
                header.textContent = title;
                subtitle.textConent = date;
                para.textContent = entry;
    
                dispaly.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para);
    
                card.setAttribute('id', current.id);
                card.setAttribute('class', "card");
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para.setAttribute('class', 'card-text');

            }
        }
    })
    .catch(err => {
        console.error(err)
    })
}
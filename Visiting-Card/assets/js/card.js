// function initializations----------------------------->
function selectNode(ele) {
    return document.getElementById(ele);
}
function selectElement(elem) {
    return document.getElementsByClassName(elem);
}
function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}

//fetching api-------------------------------------------->
var url = 'https://randomuser.me/api/?results=4&inc=name,email,dob,location,phone,login,picture,nat&noinfo'
fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return Promise.reject('something went wrong!')
        }
    })
    .then(data => {
        const mydata = data.results;
        console.log('data is', mydata)
        for (i = 0; i < 4; i++) {

            // card wrapper section----------------------->
            const mydiv = selectNode("card-section");
            let card = createNode('div');
            append(mydiv, card);
            card.classList.add("card-wrapper");
            card.setAttribute("id", "card-details"+i+"");
            
            //Inner html---------------------------------->
            const innerdata = mydata[i];
           selectNode("card-details"+i+"").innerHTML = `
            <div><img src="${innerdata.picture.large}" alt="profile picture"></div>
                <ul>
                <li>Name : ${innerdata.name.first} ${innerdata.name.last}</li>
                <li>Email : ${innerdata.email}</li>
                <li>DOB : ${innerdata.dob.date}</li>
                <li>Address : ${innerdata.location.street.number} ${innerdata.location.city} <br>
                            <span>${innerdata.location.state} ${innerdata.location.country}</span></li>
                <li>Phone : ${innerdata.phone}</li>
                <li>Password : ${innerdata.login.password}</li>
                </ul>
                `

        }


    })
    .catch(error => console.log('error is', error));














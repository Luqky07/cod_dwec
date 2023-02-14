recibeData();
function recibeData() {
    fetch("https://randomuser.me/api?results=10")
        .then(async (res) => {
            musers = await res.json();
            appendMuser(musers.results);
        })
        .catch(error => console.log(error));
}
function appendMuser(musers) {
    for (m of musers) {
        let tr = document.createElement("tr");
        let tdImg = document.createElement("td");
        let img = document.createElement("img");
        img.src = m.picture.large;
        tdImg.appendChild(img);
        tr.appendChild(tdImg);

        let tdName = document.createElement("td");
        let nameInfo = document.createTextNode(m.name.first + " " + m.name.last)
        tdName.appendChild(nameInfo);
        tr.appendChild(tdName);

        let tdGender = document.createElement("td");
        let genderInfo = document.createTextNode(m.gender);
        tdGender.appendChild(genderInfo);
        tr.appendChild(tdGender);

        let tdEmail = document.createElement("td");
        let emailInfo = document.createTextNode(m.email);
        tdEmail.appendChild(emailInfo);
        tr.appendChild(tdEmail);

        let tdLocation = document.createElement("td");
        let locationInfo = document.createTextNode(m.location.street.name + ", Nº" + m.location.street.number + ", "
            + m.location.city + ", " + m.location.state + ", " + m.location.postcode + ", "
            + m.location.country);
        tdLocation.appendChild(locationInfo);
        tr.appendChild(tdLocation);

        let tdPhone = document.createElement("td");
        let phoneInfo = document.createTextNode(m.phone);
        tdPhone.appendChild(phoneInfo);
        tr.appendChild(tdPhone);

        let tdCell = document.createElement("td");
        let cellInfo = document.createTextNode(m.cell);
        tdCell.appendChild(cellInfo);
        tr.appendChild(tdCell);

        document.getElementById("musers").appendChild(tr);
    }
}
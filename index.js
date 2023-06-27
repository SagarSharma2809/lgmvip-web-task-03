//we need to store the input values

function myFunc() {
    let userName = document.getElementById('username').value;    //we got the username
    let userGender = '';

    const ele = document.getElementsByName('gender');
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            userGender = ele[i].value;                          //we got the user gender
        }
    }

    let userEmail = document.getElementById('email').value;      //we got the email

    let userWebsite = document.getElementById('website').value;  //we got the website link

    const userSkills = [''];

    const skills = document.getElementsByName('skill');
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            userSkills.push(skills[i].value);               //We got the skills array 
        }
    }


    let userImage = document.getElementById('image').value;    //we got the image link


    // Accessing our table
    let table = document.getElementById('myTable');

    let row = table.insertRow(-1);     //creating a new row using insertRow() method and adding the new row at the end so -1 is passed

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);      //created two new data cells for the new row

    let newDiv = document.createElement("div");

    let nameText = document.createTextNode(userName);
    let genderText = document.createTextNode(userGender);
    let emailText = document.createTextNode(userEmail);
    let websiteLink = document.createTextNode(userWebsite);
    let skillsText = document.createTextNode(userSkills.toString());


    let nameDiv = document.createElement("div");
    nameDiv.appendChild(nameText);
    nameDiv.classList.add("bold");

    newDiv.appendChild(nameDiv);
    newDiv.appendChild(document.createElement("br"));

    newDiv.appendChild(genderText);
    newDiv.appendChild(document.createElement("br"));

    newDiv.appendChild(emailText);
    newDiv.appendChild(document.createElement("br"));

    let a = document.createElement("a");
    a.appendChild(websiteLink);
    a.title = websiteLink;
    a.href = websiteLink;

    newDiv.appendChild(a);
    newDiv.appendChild(document.createElement("br"));

    newDiv.appendChild(skillsText);


    c1.appendChild(newDiv);


    let imageLink = document.getElementById('image').value;     //we got the image link
    let image = document.createElement("img");
    image.src = imageLink;
    image.classList.add("img");

    c2.appendChild(image);







}


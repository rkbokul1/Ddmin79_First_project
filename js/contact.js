
const sendMail = (event) => {
    const fName = document.getElementById("fname").value;
    const lName = document.getElementById("lname").value;
    const mail = document.getElementById("mail").value;
    const phone = document.getElementById("phone").value;
    const msg = document.getElementById("msg").value;

    console.log({ fName, lName, mail, phone, msg });

    event.preventDefault();

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rkbokul@gmail.com",
        Password: "C34045DD50C43CDF6187EDDDE382C9D8D9F0",
        To: mail,
        From: 'rkbokul@gmail.com',
        Subject: "New contact Form",
        Body: `
            Name: ${fName} ${lName}; <br>
            Email: ${mail}; <br>
            Phone: ${phone};<br>

            Message: ${msg}<br>
        `

    }).then(
        message => alert(message)
    );

    reset();

}


// ({
//     Username: "rkbokul@gmail.com",
//     Password: "C34045DD50C43CDF6187EDDDE382C9D8D9F0",
//     token: "e961ce25-29f9-4f10-96ed-1308e561a649",
//     port: "2525",
// })
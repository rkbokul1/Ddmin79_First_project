

const sendMail = async (event) => {
    event.preventDefault();

    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("msg").value;

    // console.log({ fName, lName, mail, phone, msg });

    try {
        Email.send({
            SecureToken: "de8683f7-f063-4201-a484-ada522e0d109",
            To: 'consult@pvp-cambodia.com',
            From: 'consult@pvp-cambodia.com',
            Subject: "New Contact e-Mail",
            Body: `name: ${fName} ${lName} <br>
            email: ${mail} <br>
            phone: ${phone} <br>
            message: ${msg}`
        }).then(
            message => alert('Email sent successfully')
        );
    } catch (error) {
        alert(error)
    }
}

const form = document.querySelector('form');

function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "codegrind0101@gmail.com",
    Password: "74709922FE7183F87C9A83A2BC19A22E8665",
    To: 'codegrind0101@gmail.com',
    From: "codegrind0101@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

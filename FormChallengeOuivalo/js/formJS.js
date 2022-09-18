window.onload = function(){
document.querySelector("form").addEventListener("submit", function (e) {
    console.log("ENTREE");
    e.preventDefault();

    const cle = "CLE-TEST-IOT";
    const id = document.querySelector('input[name="id"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const urlRelais = document.querySelector('input[name="urlRelais"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const dataToSend = {
        cle: cle,
        id: id,
        date: date,
        urlRelais: urlRelais,
        message:message
    };
    console.log(dataToSend);

    var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var myInit = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(dataToSend),
          };

          fetch("https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec", myInit).then(function (response) {
            console.log(response);
          });
})
}  
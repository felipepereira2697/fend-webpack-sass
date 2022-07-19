function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    // Since our code is now exported to the Client folder, we need to add before we call our method from the class
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}

export { handleSubmit }

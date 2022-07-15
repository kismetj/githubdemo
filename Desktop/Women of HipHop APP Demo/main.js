document.querySelector('#getButton').addEventListener('click',apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://women-of-hiphop-api.herokuapp.com/api/${rapperName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('rapperName').innerText = data.stageName
        document.getElementById('rapperBirthname').innerText = data.birthName
        document.getElementById('rapperBirthdate').innerText = data.birthDate
        document.getElementById('homeCity').innerText = data.homeCity
        document.getElementById('debutAlbum').innerText = data.debutAlbum
        document.getElementById('releaseYear').innerText = data.releaseYear
        document.getElementById('playList').innerText = data.playlist
        document.getElementById('label').innerText = data.Label

        document.getElementById('image').src = data.image

    } catch(error) {
        console.log(error)
    }

}
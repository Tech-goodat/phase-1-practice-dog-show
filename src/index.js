document.addEventListener('DOMContentLoaded', () => {
fetch ('http://localhost:3000/dogs')
.then(res => res.json())

.then(dogs => {
    dogs.forEach(dog => {
        renderDog(dog)
    })


})

function renderDog(dog){

    dogTable = document.querySelector('#table-body')
    dogRow = document.createElement('tr')
    dogRow.innerHTML = `
    <td>${dog.name}</td>
    <td>${dog.breed}</td>`
}
})



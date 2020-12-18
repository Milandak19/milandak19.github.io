var available = [];
var borrowed = [];
var broken = [];

function renderAvailable() {
   let available_list = document.getElementById('available-list')
  let input = ``;
  for (let i = 0; i < available.length; i++) {
    input = `
    <div class="container" id="container-available">
        <div class="list available">
            ${available[i][1]}
        </div>
        <button type="submit" class="btn-available" onclick="sendDataBorrowedAvailable(${available[i][0]})">Borrowed</button>
        <button type="submit" class="btn-broken" onclick="sendDataBrokenAvailable(${available[i][0]})">Broken</button>
    </div>`
    available_list.innerHTML += input;
   }
}

function addData(event) {
  event.preventDefault()
  let book = document.getElementById('book').value;
  let index = available.length;
  let temp = []
  temp.push(index,book)
  available.push(temp)
  renderAvailable()
//   console.log(available[0][0]);
}

function sendDataBorrowedAvailable(num) {
   let borrowed_list = document.getElementById('borrowed-list')
   for (let i = 0; i < available.length; i++) {
      if (i === num) {
         
      }
   }
}
// function sendDataBorrowedAvailable() {
//    let data = document.getElementsByClassName('available');
//    let list = document.getElementById('borrowed-list');
//    let container = document.getElementById('available-list');
//    let input = `<div class="container" id="container-borrowed">
//    <div class="list borrowed">
//        ${data[0]['innerHTML']}
//    </div>
//    <button type="submit" class="btn-available" onclick="sendDataAvailableBorrowed()">Available</button>
//    <button type="submit" class="btn-broken" onclick="sendDataBrokenBorrowed()">Broken</button>
//    </div>`
//    list.innerHTML += input
//    container.innerHTML = ''
// }
// function sendDataBrokenAvailable() {
//    let data = document.getElementsByClassName('available');
//    let list = document.getElementById('broken-list');
//    let container = document.getElementById('available-list')
//    let input = `<div class="container" id="container-broken">
//    <div class="list broken">
//        ${data[0]['innerHTML']}
//    </div>
//    <button type="submit" class="btn-available" onclick="sendDataAvailableBroken()">Available</button>
//    <button type="submit" class="btn-delete" onclick="deleteData()">Delete</button>
//    </div>`
//    list.innerHTML += input
//    container.innerHTML = ''
// }
// function sendDataAvailableBorrowed() {
//    let data = document.getElementsByClassName('borrowed');
//    let list = document.getElementById('available-list');
//    let container = document.getElementById('borrowed-list')
//    let input = `<div class="container" id="container-available">
//    <div class="list available">
//        ${data[0]['innerHTML']}
//    </div>
//    <button type="submit" class="btn-borrowed" onclick="sendDataBorrowedAvailable()">Borrowed</button>
//    <button type="submit" class="btn-broken" onclick="sendDataBrokenAvailable()">Broken</button>
//    </div>`
//    list.innerHTML += input
//    container.innerHTML = ''
// }
// function sendDataBrokenBorrowed() {
//    let data = document.getElementsByClassName('borrowed');
//    let list = document.getElementById('broken-list');
//    let container = document.getElementById('borrowed-list')
//    let input = `<div class="container-list" id="container-broken">
//    <div class="list broken">
//        ${data[0]['innerHTML']}
//    </div>
//    <button type="submit" class="btn-available" onclick="sendDataAvailableBroken()">Available</button>
//    <button type="submit" class="btn-delete" onclick="deleteData()">Delete</button>
//    </div>`
//    list.innerHTML += input
//    container.innerHTML = ''
// }
// function sendDataAvailableBroken() {
//    let data = document.getElementsByClassName('broken');
//    let list = document.getElementById('available-list');
//    let container = document.getElementById('broken-list')
//    let input = `<div class="container-list" id="container-available">
//    <div class="list available">
//        ${data[0]['innerHTML']}
//    </div>
//    <button type="submit" class="btn-borrowed" onclick="sendDataBorrowedAvailable()">Borrowed</button>
//    <button type="submit" class="btn-broken" onclick="sendDataBrokenAvailable()">Broken</button>
//    </div>`
//    list.innerHTML += input
//    container.innerHTML = ''
// }
// function deleteData() {
//    let container = document.getElementById('broken-list')
//    container.innerHTML = ''
// }
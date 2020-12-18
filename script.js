let available = [];
let borrowed = [];
let broken = [];

function renderAvailable() {
   let available_list = document.getElementById('available-list')
   let input = ``;
   for (let i = 0; i < available.length; i++) {
      input = `
      <div class="container" id="container-available${available[i][0]}">
         <div class="list available">
            ${available[i][1]}
         </div>
         <button type="submit" class="btn-borrowed" onclick="sendDataBorrowedAvailable(${available[i][0]})">Borrowed</button>
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
}

function sendDataBorrowedAvailable(num) {
   let borrowed_list = document.getElementById('borrowed-list')
   let available_list = document.getElementById(`container-available${num}`)
   for (let i = 0; i < available.length; i++) {
      if (available[i][0] === num) {
         let input = `<div class="container" id="container-borrowed${available[i][0]}">
         <div class="list borrowed">
             ${available[i][1]}
         </div>
         <button type="submit" class="btn-available"
             onclick="sendDataAvailableBorrowed(${available[i][0]})">Available</button>
         <button type="submit" class="btn-broken" onclick="sendDataBrokenBorrowed(${available[i][0]})">Broken</button>
     </div>`
     borrowed_list.innerHTML += input
     borrowed.push(available[i])
      }
   }
   available_list.remove()
   available.splice(num)
}

function sendDataBrokenAvailable(num) {
   let broken_list = document.getElementById('broken-list')
   let available_list = document.getElementById(`container-available${num}`)
   for (let i = 0; i < available.length; i++) {
      if (i === num) {
         let input = `<div class="container" id="container-broken${available[i][0]}">
         <div class="list broken">
             ${available[i][1]}
         </div>
         <button type="submit" class="btn-available"
             onclick="sendDataAvailableBroken(${available[i][0]})">Available</button>
         <button type="submit" class="btn-delete" onclick="deleteData(${available[i][0]})">Delete</button>
     </div>`
     broken_list.innerHTML += input
     broken.push(available[i])
      }
   }
   available_list.remove()
   available.splice(num)
}

function sendDataAvailableBorrowed(num) {
   let available_list = document.getElementById('available-list')
   let borrowed_list = document.getElementById(`container-borrowed${num}`)
   for (let i = 0; i < borrowed.length; i++) {
      if (i === num) {
         let input = `<div class="container" id="container-available${borrowed[i][0]}">
         <div class="list available">
             ${borrowed[i][1]}
         </div>
         <button type="submit" class="btn-borrowed"
             onclick="sendDataBorrowedAvailable(${borrowed[i][0]})">Borrowed</button>
         <button type="submit" class="btn-broken" onclick="sendDataBrokenAvailable(${borrowed[i][0]})">Broken</button>
     </div>`
     available_list.innerHTML += input
     available.push(borrowed[i])
      }
   }
   borrowed_list.remove()
   borrowed.splice(num)
}

function sendDataBrokenBorrowed(num) {
   let broken_list = document.getElementById('broken-list')
   let borrowed_list = document.getElementById(`container-borrowed${num}`)
   for (let i = 0; i < borrowed.length; i++) {
      if (i === num) {
         let input = `<div class="container" id="container-broken${borrowed[i][0]}">
         <div class="list broken">
             ${borrowed[i][1]}
         </div>
         <button type="submit" class="btn-available"
             onclick="sendDataAvailableBroken(${borrowed[i][0]})">Available</button>
         <button type="submit" class="btn-delete" onclick="deleteData(${borrowed[i][0]})">Delete</button>
     </div>`
     broken_list.innerHTML += input
     broken.push(borrowed[i])
      }
   }
   borrowed_list.remove()
   borrowed.splice(num)
}

function sendDataAvailableBroken(num) {
   let available_list = document.getElementById('available-list')
   let broken_list = document.getElementById(`container-broken${num}`)
   for (let i = 0; i < broken.length; i++) {
      if (i === num) {
         let input = `<div class="container" id="container-available${broken[i][0]}">
         <div class="list available">
             ${broken[i][1]}
         </div>
         <button type="submit" class="btn-borrowed"
             onclick="sendDataBorrowedAvailable(${broken[i][0]})">Borrowed</button>
         <button type="submit" class="btn-broken" onclick="sendDataBrokenAvailable(${broken[i][0]})">Broken</button>
     </div>`
     available_list.innerHTML += input
     available.push(broken[i])
      }
   }
   broken_list.remove()
   broken.splice(num)
}

function deleteData(num) {
   let broken_list = document.getElementById(`container-broken${num}`)

   broken_list.remove()
   broken.splice(num)
}
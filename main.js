//console.log("hello world")
//alert("notifikasi")
//prompt("Fany Sayang Azka")

//var Promnet = "Coding is easy"
//console.log(Promnet)   
//var Promnet = "Coding not easy"
//console.log(Promnet)

//let Promnet = "Coding is easy"
//console.log(Promnet)
//Promnet = "Coding not easy"
//console.log(Promnet)

//const Promnet = "Coding is easy"
//console.log(Promnet)
//Promnet = "Coding not easy"
//console.log(Promnet) 

//let totalPoin = prompt(" Masukan Poin Anda")
    //if(totalPoin > 100){
        //document.write("Congratulation");
   // }
   // else{
       // document.write("<h1>Thank you</h1>");
    // }

    // let x = 6;
// let y = 3;

// console.log(x<10 && y>1)
// console.log(x<10 && y < 1)
// console.log(x==5||y==5)
// console.log(x==6||y==5)
// console.log(!(x==y))

//let p = document.querySelector("p")
//let button = document.querySelector("button")
//let input = document.querySelector("input")

//button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerText = isi
// })

// Fungsi untuk menambahkan tugas ke daftar
function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;
    if (taskText.trim() === "") {
      alert("Masukkan tugas terlebih dahulu!");
      return;
    }
    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.innerHTML = '<input type="checkbox" onclick="completeTask(this)"> ' + taskText;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
  
  // Fungsi untuk menandai tugas sebagai selesai
  function completeTask(checkbox) {
    var taskText = checkbox.nextSibling;
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  }
  
  // Menambahkan event listener ke tombol "Tambah"
  var addButton = document.getElementById("addButton");
  addButton.addEventListener("click", addTask);
  
const semuaTombol = document.querySelectorAll(".btn-tambah");

semuaTombol.forEach (function (tombol) {
    tombol.addEventListener("click", function () {
        tombol.textContent= "✅ ditambahkan"
        setTimeout(function() {
            tombol.textContent = "+ Tambah";
        }, 1500);
    }); 
})


//fitur kirim pesan sukses
const formKontak = document.getElementById("form-kontak");
const pesanSukses = document.getElementById("pesan-sukses");

formKontak.addEventListener("submit", function (event) {
    event.preventDefault();
    pesanSukses.style.display = "block";
    formKontak.reset();
    setTimeout(function() {
        pesanSukses.style.display = "none";
    }, 2000);
});
// const ketuaKelas = document.getElementById("ketua-kelas")

// function hello(){
//     console.logg("hello world")
// }

// ketuaKelas.addEventListener("mouseover", hello);

document.addEventListener("DOMContentLoaded", function () {
    const ketuaKelas = document.getElementById("ketua-kelas");
    const imageContainer = document.getElementById("imageContainer");

    function showImage() {

        // Membuat elemen gambar
        const img = document.createElement('img');
        img.src = 'assets/IMG-20240910-WA0033.jpg'; // Ganti dengan URL gambar yang diinginkan
        img.alt = 'Gambar ketika mouseover';
        img.style.width = '200px'; // Atur lebar gambar (opsional)
        img.style.height = 'auto'; // Atur tinggi gambar (opsional)

        // Menambahkan gambar ke kontainer
        imageContainer.appendChild(img);
    }
    function hideImage() {
        // Menghapus gambar ketika mouse keluar
        imageContainer.innerHTML = '';
    }

    ketuaKelas.addEventListener("mouseover", showImage);
    ketuaKelas.addEventListener("mouseout", hideImage);
});
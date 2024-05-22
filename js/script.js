// Function dan Ambil ID dari Form
function tampilForm(type) {
  const formLuas = document.getElementById("form-luas");
  const formKeliling = document.getElementById("form-keliling");

  // Jika Tombol di Klik Tampilkan Form
  if (type === "luas") {
    formLuas.classList.remove("hidden");
    formKeliling.classList.add("hidden");
  } else {
    formKeliling.classList.remove("hidden");
    formLuas.classList.add("hidden");
  }
}

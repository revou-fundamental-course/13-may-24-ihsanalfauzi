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

// Menghitung Luas
function hitungLuas() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;
  const result = 0.5 * alas * tinggi;
  document.getElementById("hasil-luas").innerText = `
  Luas = 1/2 x alas x tinggi
  Luas = 1/2 x ${alas} x ${tinggi}
  Luas = ${result} 
  `;
}

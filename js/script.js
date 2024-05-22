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

// Menghitung Keliling
function hitungKeliling() {
  const sisi1 = document.getElementById("sisi1").value;
  const sisi2 = document.getElementById("sisi2").value;
  const sisi3 = document.getElementById("sisi3").value;
  const result = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
  document.getElementById("hasil-keliling").innerText = `
  Keliling = Sisi 1 + Sisi 2 + Sisi 3
  Keliling = ${sisi1} + ${sisi2} + ${sisi3}
  Keliling = ${result}
  `;
}

// Reset Nilai dan Inputan
function resetForm(type) {
  if (type === "resetLuas") {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil-luas").innerHTML = "";
  } else if (type === "resetKeliling") {
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("hasil-keliling").innerHTML = "";
  } else {
  }
}

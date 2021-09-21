// mendapatkan elemen form
const form = document.getElementById('form');

// ambil data output yang akan diubah
const name = document.getElementById('data-name');
const summary = document.getElementById('data-summary');
const gender = document.getElementById('data-gender');
const phone = document.getElementById('data-phone');
const email = document.getElementById('data-email');
const address = document.getElementById('data-address');

// ambil salah satu element input gender
const isMale = document.getElementById('isMale');

// fungsi untuk memasukan nilai submit ke dalam data output
function submitData() {
  name.innerText = document.getElementById('name-input').value;
  summary.innerText = document.getElementById('summary-input').value;
  phone.innerText = document.getElementById('phone-input').value;
  email.innerText = document.getElementById('email-input').value;
  address.innerText = document.getElementById('address-input').value;

  //   pengecekan untuk menentukan gender yg akan ditampilkan di output
  isMale.checked ? (gender.innerText = 'Male') : (gender.innerText = 'Female');
}

form.addEventListener('submit', function (e) {
  e.preventDefault(); //untuk mencegah sifat asli browser (reload)
  submitData();
  form.reset();
});

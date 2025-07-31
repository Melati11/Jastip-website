document.getElementById('registForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('regEmail').value;
  const username = document.getElementById('regUser').value;
  const password = document.getElementById('regPassword').value;

  const user = { email, username, password };

  // Simpan ke localStorage
  localStorage.setItem('registeredUser', JSON.stringify(user));

  alert('Pendaftaran berhasil! Silakan login.');
  window.location.href = 'login.html';
});
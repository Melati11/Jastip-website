document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const errorBox = document.getElementById('errorMessage');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('user').value.trim();
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!storedUser) {
      showError('Belum ada akun terdaftar.');
      return;
    }

    if (username !== storedUser.username || password !== storedUser.password) {
      showError('Username atau password salah!');
      return;
    }

    // Jika login berhasil
    errorBox.textContent = ''; // Hapus pesan error jika ada
    localStorage.setItem('isLoggedIn', 'true');

    const params = new URLSearchParams(window.location.search);
    const redirectURL = params.get(`redirect`) || `index.html`;

    window.location.href = redirectURL;
  });

  function showError(message) {
    errorBox.textContent = message;
  }
});


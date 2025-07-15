document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const username = document.getElementById('user').value;
      const password = document.getElementById('password').value;
  
      const userData = {
        email: email,
        username: username,
        password: password
      };
  
      // Kirim data ke server (Anda perlu mengganti URL dengan endpoint server Anda)
      fetch('URL_SERVER_ANDA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        // Tangani respons dari server di sini
        console.log('Respon dari server:', data);
      })
      .catch(error => {
        console.error('Terjadi kesalahan:', error);
      });
    });
  });
  
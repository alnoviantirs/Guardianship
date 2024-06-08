# 🎓 Guardianship - Aplikasi Perwalian di Kampus 🎓

Selamat datang di **Guardianship**! Aplikasi ini dirancang untuk memudahkan proses perwalian di kampus, memfasilitasi komunikasi antara dosen wali dan mahasiswa. Proyek ini dibangun berdasarkan arsitektur layanan web dengan backend yang menggunakan Golang dan Fiber, serta database MongoDB yang di-hosting di Heroku. Frontend aplikasi ini menggunakan vanilla JavaScript untuk berkomunikasi dengan API dan menampilkan informasi di situs web menggunakan HTML.

## ✨ Fitur Utama

- **Manajemen Perwalian**: Dosen wali dapat mengelola daftar mahasiswa wali mereka.
- **Komunikasi**: Memfasilitasi komunikasi antara dosen wali dan mahasiswa.
- **Penjadwalan Pertemuan**: Dosen dan mahasiswa dapat menjadwalkan pertemuan untuk membahas perkembangan akademik.
- **Pelaporan**: Menyediakan laporan tentang aktivitas perwalian dan kemajuan mahasiswa.

## 🛠️ Teknologi yang Digunakan

- **Backend**: Golang dengan Fiber
- **Database**: MongoDB
- **Hosting**: Heroku
- **Frontend**: HTML, CSS, JavaScript

## 🚀 Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan aplikasi Guardianship di lokal Anda:

### Backend

1. **Clone Repository**

   ```bash
   git clone https://github.com/username/guardianship.git
   ```

2. **Masuk ke Direktori Proyek**
   git clone folder backend 'https://github.com/alnoviantirs/perwalian.git'

   ```bash
   cd guardianship/backend
   ```

3. **Instalasi Dependensi**

   ```bash
   go mod download
   ```

4. **Konfigurasi Lingkungan**

   - Buat file `.env` dan sesuaikan konfigurasi yang diperlukan

   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/guardianship
   PORT=8080
   ```

5. **Menjalankan Server**
   ```bash
   go run main.go
   ```

### Frontend

1. **Masuk ke Direktori Frontend**

   ```bash
   cd ../frontend
   ```

2. **Buka file `index.html` di browser Anda**

## 🌐 Cara Menggunakan

1. **Beranda**: Pada halaman beranda, Anda akan melihat daftar mahasiswa yang berada di bawah perwalian dosen.
2. **Manajemen Perwalian**: Dosen dapat menambah, mengedit, atau menghapus informasi mahasiswa wali.
3. **Penjadwalan Pertemuan**: Dosen dan mahasiswa dapat menjadwalkan pertemuan melalui aplikasi.
4. **Komunikasi**: Gunakan fitur pesan untuk berkomunikasi antara dosen dan mahasiswa.

## 🎉 Terima Kasih!

Terima kasih telah menggunakan Guardianship! Kami berharap aplikasi ini dapat membantu mempermudah proses perwalian di kampus Anda.

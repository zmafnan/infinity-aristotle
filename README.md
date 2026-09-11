# Infinity-X Xiaomi 13T (aristotle) Documentation Site

Website dokumentasi dan panduan instalasi custom ROM Infinity-X untuk Xiaomi 13T (*aristotle*), siap dideploy ke **GitHub Pages** (`.github.io`).

## ✨ Fitur
- **Bilingual (2 Bahasa)**: Beralih instan antara **Bahasa Indonesia** dan **English** (tersimpan di `localStorage`).
- **Desain Minimalis & Modern**: Tema gelap (*obsidian dark theme*), tipografi tajam (*Plus Jakarta Sans* & *JetBrains Mono*), aksen glow, dan tampilan responsif (Desktop, Tablet, Mobile).
- **Interaktif**: Tombol *Salin / Copy* satu-klik pada setiap baris perintah shell (*Fastboot*, *ADB Sideload*, *Logcat*).
- **Zero Dependencies**: Murni HTML, CSS, dan Vanilla JavaScript. Tanpa framework berat, langsung aktif di GitHub Pages tanpa proses build.

---

## 🚀 Cara Publish ke GitHub Pages

### Opsi 1: Menggunakan Repository Baru (misal `infinity-aristotle`)
1. Buka folder ini di terminal:
   ```bash
   cd /home/zmafnan/Project/infinity-aristotle-io
   ```
2. Inisialisasi git dan commit:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for infinity-aristotle documentation website"
   ```
3. Buat repositori baru di GitHub Anda (misalnya `infinity-aristotle` atau `aristotle-docs`), lalu sambungkan:
   ```bash
   git branch -M main
   git remote add origin git@github.com:zmafnan/<nama-repo>.git
   git push -u origin main
   ```
4. Buka **Settings** di repo GitHub tersebut -> **Pages** -> Pada **Build and deployment**, pilih branch `main` dan folder `/ (root)` -> Klik **Save**.
5. Website akan otomatis live di: `https://zmafnan.github.io/<nama-repo>/`

---

### Opsi 2: Menggunakan Repository Utama (`zmafnan.github.io`)
Jika Anda memasukkan isi folder ini ke root repository `zmafnan.github.io`, maka website akan langsung live di alamat utama Anda:
`https://zmafnan.github.io/`

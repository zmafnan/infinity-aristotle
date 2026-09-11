# Project Infinity-X for Xiaomi 13T (aristotle)

<p align="center">
  <a href="https://zmafnan.github.io/infinity-aristotle/"><img src="https://img.shields.io/badge/Live%20Website-Installation%20Guide-06b6d4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Guide"></a>
  <img src="https://img.shields.io/badge/Device-Xiaomi%2013T%20(aristotle)-3b82f6?style=for-the-badge&logo=xiaomi&logoColor=white" alt="Device">
  <img src="https://img.shields.io/badge/Android-15%20(AOSP)-10b981?style=for-the-badge&logo=android&logoColor=white" alt="Android">
  <img src="https://img.shields.io/badge/Firmware%20Base-HyperOS%202.0%20(OS2.0.214.0.VMFMIXM)-8b5cf6?style=for-the-badge" alt="Base">
</p>

---

## 🌐 Situs Dokumentasi & Panduan Resmi (Bilingual)
Untuk membaca panduan lengkap yang interaktif, salin perintah shell dengan satu klik, dan berganti bahasa (**ID ⇄ EN**), silakan buka:

👉 **[https://zmafnan.github.io/infinity-aristotle/](https://zmafnan.github.io/infinity-aristotle/)**

---

## 📥 Berkas Unduhan (Google Drive)
Seluruh berkas resmi yang dibutuhkan (paket ZIP ROM, recovery kernel `vendor_boot.img`, dan kelengkapan terkait) tersedia pada folder Google Drive berikut:

📁 **[Google Drive — Infinity-X Aristotle Release Files](https://drive.google.com/drive/folders/1RnJlZwnyjewAkAO2lLtFFk0Xj7NHnkwN?usp=drive_link)**

---

## ⚠️ Catatan & Ketentuan
1. **Proyek Mandiri**: ROM ini saya kembangkan secara mandiri. Jika Anda memprioritaskan kestabilan 100% tanpa kompromi untuk penggunaan harian, saya sarankan untuk **tetap berada di HyperOS resmi**.
2. **Risiko Platform MediaTek**: Modifikasi pada chipset MediaTek Dimensity 8200 Ultra memerlukan kehati-hatian ekstra. Segala risiko adalah tanggung jawab pengguna masing-masing (*Do With Your Own Risk - DWYOR*).
3. **Laporan Kendala**: Jika menemukan bug atau kendala teknis, mohon sertakan **logcat** (`adb logcat -d > logcat.txt`) dan penjelasan langkah terjadinya masalah secara objektif agar dapat ditelusuri.

---

## 🛡️ Pengamanan Anti-Brick (Wajib)
Sebelum menyentuh partisi sistem, pelajari panduan unbrick dan pasang `engpreloader` sebagai jaring pengaman:  
👉 **[TheFormidable/Unbrick (MediaTek Unbrick Guide)](https://github.com/TheFormidable/Unbrick)**

**Cara Pasang ENG Preloader via Fastboot:**
```bash
fastboot flash preloader1 preloader_aristotle.bin
fastboot flash preloader2 preloader_aristotle.bin
```
*(Berkas `preloader_aristotle.bin` tersedia di folder Google Drive di atas).*

---

## 🛠️ Ringkasan Langkah Instalasi (Clean Flash)

1. **Masuk ke Mode Fastboot**  
   Matikan perangkat, tahan tombol `Volume Bawah (-) + Power` hingga logo Fastboot muncul.
2. **Pasang Recovery (`vendor_boot`)**
   ```bash
   fastboot flash vendor_boot vendor_boot.img
   ```
3. **Nyalakan Ulang ke Recovery**
   ```bash
   fastboot reboot recovery
   ```
4. **Format Data**  
   Pilih menu `Factory Reset` -> `Format data / factory reset` -> konfirmasi `Format data`.
5. **Pasang ROM via ADB Sideload**  
   Pilih `Apply update` -> `Apply from ADB`, lalu jalankan:
   ```bash
   adb sideload <nama_file_rom>.zip
   ```
   *(Tunggu hingga proses selesai / muncul `Install completed with status 0` di layar).*
6. **Konfirmasi Paket Tambahan & Reboot**  
   - Pada layar Recovery akan muncul konfirmasi: **`Install additional packages?`** -> **Pilih YES**.
   - Perangkat akan reboot otomatis kembali ke mode **Recovery**.
   - Setelah masuk kembali ke menu Recovery, baru pilih **`Reboot system now`**.
   - Tunggu proses booting pertama kali sekitar 3–5 menit.

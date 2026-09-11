/**
 * Infinity-X Aristotle Documentation Script
 * Features:
 * - Bilingual Language Switcher (ID <-> EN) with LocalStorage persistence
 * - Interactive One-Click Code Copy with status feedback
 */

const translations = {
  id: {
    "tag-device": "Xiaomi 13T (aristotle)",
    "hero-subtitle": "Panduan Instalasi & Dokumentasi",
    "hero-desc": "Panduan instalasi resmi dan dokumentasi teknis custom ROM Infinity-X untuk Xiaomi 13T, berbasis firmware HyperOS 2.0.",
    "badge-base-label": "Basis Firmware",
    "badge-soc-label": "Chipset",
    "badge-android-label": "Versi Android",
    "badge-dev-label": "Pengembangan",
    "badge-dev-value": "Mandiri / Solo Maintainer",

    "notice-title": "Catatan Penting & Ketentuan",
    "notice-1-strong": "Status Proyek Mandiri",
    "notice-1-desc": "ROM ini saya kembangkan secara mandiri di sela waktu luang. Jika prioritas utama Anda adalah kestabilan 100% untuk penggunaan harian tanpa kompromi, saya sangat menyarankan Anda untuk <strong>tetap menggunakan HyperOS resmi bawaan pabrik</strong>.",
    "notice-2-strong": "Pemahaman Risiko Platform MediaTek",
    "notice-2-desc": "Modifikasi sistem pada perangkat MediaTek (Dimensity 8200 Ultra) memerlukan kehati-hatian ekstra. Pastikan Anda sudah memahami segala konsekuensinya dan bersedia bertanggung jawab penuh atas perangkat Anda masing-masing (<em>Do With Your Own Risk - DWYOR</em>).",
    "notice-3-strong": "Penyampaian Kendala & Laporan Bug",
    "notice-3-desc": "Jika Anda menemukan kendala atau bug pada ROM ini, mohon untuk tidak sekadar menyampaikan keluhan tanpa data teknis. Sertakan <strong>logcat</strong> dan penjelasan langkah terjadinya masalah secara objektif agar kendala tersebut dapat saya telusuri.",

    "safety-pill": "WAJIB DILAKUKAN",
    "safety-title": "Langkah Pengamanan (Anti-Brick)",
    "safety-desc": "Sebelum menyentuh partisi sistem atau melakukan proses flashing apa pun, Anda <strong>wajib</strong> membaca panduan unbrick dan memasang <code>engpreloader</code> sebagai jaring pengaman utama:",
    "safety-repo-desc": "Dokumentasi komprehensif unbrick dan panduan pasang engpreloader untuk Xiaomi MediaTek.",
    "btn-open-guide": "Buka Panduan Unbrick",
    "safety-callout": "<strong>Mengapa engpreloader krusial?</strong> <code>engpreloader</code> memungkinkan perangkat Anda tetap dapat diakses via BROM mode untuk unbrick melalui SP Flash Tool / MTKClient tanpa memerlukan Authorized Mi Account jika terjadi kondisi darurat.",

    "prereq-title": "Prasyarat Instalasi",
    "prereq-1-title": "Bootloader Terbuka (UBL)",
    "prereq-1-desc": "Perangkat Xiaomi 13T sudah dalam status resmi Unlocked Bootloader.",
    "prereq-2-title": "Wajib Firmware HyperOS 2.0 Global",
    "prereq-2-desc": "Perangkat harus sudah terpasang firmware <code>OS2.0.214.0.VMFMIXM</code> Global (atau sesama HyperOS 2 Global) sebelum flashing, karena vendor tree yang saya gunakan diekstrak dari versi ini.",
    "prereq-3-title": "Daya Baterai & Alat",
    "prereq-3-desc": "Baterai minimal 50%–60%, kabel USB berkualitas, dan PC dengan driver ADB & Fastboot terpasang.",
    "prereq-4-title": "Pencadangan Data Penuh (Backup)",
    "prereq-4-desc": "Seluruh data internal akan terhapus total (Format Data wajib dilakukan saat clean flash).",

    "steps-title": "Tata Cara Instalasi (Clean Flash)",
    "step-1-title": "Masuk ke Mode Fastboot",
    "step-1-desc": "Matikan perangkat secara menyeluruh. Tekan dan tahan tombol <strong>Volume Bawah (-) + Tombol Daya (Power)</strong> secara bersamaan hingga muncul tampilan logo Fastboot di layar, lalu hubungkan perangkat ke komputer menggunakan kabel USB.",
    "step-2-title": "Flash Recovery (vendor_boot)",
    "step-2-desc": "Pasang berkas recovery kernel bawaan ROM (<code>vendor_boot.img</code>) ke partisi vendor_boot perangkat:",
    "step-2-note": "Pastikan eksekusi perintah menghasilkan keterangan <code>OKAY</code>.",
    "step-3-title": "Masuk ke Mode Recovery",
    "step-3-desc": "Nyalakan ulang perangkat langsung ke mode recovery yang baru saja dipasang:",
    "step-4-title": "Format Data (Wajib Clean Flash)",
    "step-4-desc": "Setelah berada di layar Recovery:<br />1. Navigasikan menggunakan tombol volume dan gunakan tombol daya untuk memilih menu <strong>Factory Reset</strong>.<br />2. Pilih <strong>Format data / factory reset</strong>, lalu konfirmasi dengan memilih <strong>Format data</strong>.<br />3. Tunggu hingga proses penghapusan data internal selesai (<em>Data wipe complete</em>).",
    "step-5-title": "Pemasangan ROM via ADB Sideload",
    "step-5-desc": "1. Kembali ke menu utama Recovery.<br />2. Pilih <strong>Apply update</strong> lalu pilih <strong>Apply from ADB</strong>.<br />3. Di komputer, jalankan perintah berikut:",
    "step-5-note": "<strong>Catatan Indikator:</strong> Di terminal komputer proses umumnya berhenti di sekitar <strong>47%</strong> atau <code>Total xfer: 1.00x</code>, dan pada layar ponsel akan muncul pesan <code>Install completed with status 0</code>. Hal ini menandakan proses transfer berkas ROM telah berhasil.",
    "step-6-title": "Konfirmasi Paket Tambahan & Menyalakan Ulang Perangkat",
    "step-6-desc": "Perhatikan langkah transisi berikut dengan seksama:<br />1. Setelah sideload selesai, pada layar Recovery akan muncul dialog konfirmasi:<br />&nbsp;&nbsp;&nbsp;&nbsp;<strong>\"Install additional packages?\"</strong> (atau pertanyaan pembaruan serupa).<br />2. <strong>Pilih opsi YES</strong>.<br />3. Perangkat akan melakukan restart otomatis dan masuk kembali ke menu <strong>Recovery</strong>.<br />4. Setelah berada kembali di menu Recovery, barulah Anda memilih opsi <strong>Reboot system now</strong>.<br />5. Tunggu proses booting pertama kali yang memakan waktu sekitar <strong>3 hingga 5 menit</strong> hingga masuk ke layar penyiapan awal sistem.",

    "logcat-title": "Cara Mengambil Logcat untuk Laporan Bug",
    "logcat-desc": "Jika Anda menemukan isu teknis, ambil logcat segera setelah kendala terjadi dan lampirkan saat melaporkan:",
    "btn-copy": "Salin",
    "btn-copied": "Tersalin!",
    "footer-text": "Project Infinity-X untuk Xiaomi 13T (aristotle) — Dikembangkan secara mandiri."
  },

  en: {
    "tag-device": "Xiaomi 13T (aristotle)",
    "hero-subtitle": "Installation Guide & Documentation",
    "hero-desc": "Official installation guide and technical documentation for Project Infinity-X custom ROM on Xiaomi 13T, built upon HyperOS 2.0 firmware.",
    "badge-base-label": "Firmware Base",
    "badge-soc-label": "Chipset",
    "badge-android-label": "Android Version",
    "badge-dev-label": "Development",
    "badge-dev-value": "Independent / Solo Maintainer",

    "notice-title": "Important Notes & Disclaimer",
    "notice-1-strong": "Solo / Independent Project",
    "notice-1-desc": "This custom ROM is developed independently in my spare time. If your top priority is 100% factory stability for daily use without compromises, I strongly recommend that you <strong>stay on the official stock HyperOS</strong>.",
    "notice-2-strong": "Understanding MediaTek Platform Risks",
    "notice-2-desc": "Modifying system partitions on MediaTek devices (Dimensity 8200 Ultra) requires extra caution. Ensure you understand all the implications and are willing to take full responsibility for your own device (<em>Do With Your Own Risk - DWYOR</em>).",
    "notice-3-strong": "Bug Reporting & Feedback Etiquette",
    "notice-3-desc": "If you encounter any issues or bugs on this ROM, please avoid posting baseless complaints. Provide a clear <strong>logcat</strong> and explain the steps to reproduce the issue objectively so I can inspect and address it.",

    "safety-pill": "MANDATORY STEP",
    "safety-title": "Safety Measure (Anti-Brick Protection)",
    "safety-desc": "Before touching system partitions or executing any flashing commands, you are <strong>strictly required</strong> to read the unbrick guide and install <code>engpreloader</code> as your safety net:",
    "safety-repo-desc": "Comprehensive unbrick documentation and engpreloader installation guide for Xiaomi MediaTek devices.",
    "btn-open-guide": "Open Unbrick Guide",
    "safety-callout": "<strong>Why is engpreloader critical?</strong> <code>engpreloader</code> ensures your device remains accessible via BROM mode for unbricking using SP Flash Tool / MTKClient without requiring an Authorized Mi Account in emergencies.",

    "prereq-title": "Installation Prerequisites",
    "prereq-1-title": "Unlocked Bootloader (UBL)",
    "prereq-1-desc": "Your Xiaomi 13T must be officially unlocked.",
    "prereq-2-title": "Mandatory HyperOS 2.0 Global Firmware",
    "prereq-2-desc": "Your device must already run on <code>OS2.0.214.0.VMFMIXM</code> Global (or equivalent HyperOS 2 Global) before flashing, as the vendor tree used here was extracted from this build.",
    "prereq-3-title": "Battery Level & Equipment",
    "prereq-3-desc": "At least 50%–60% battery, a reliable USB cable, and a PC with properly installed ADB & Fastboot drivers.",
    "prereq-4-title": "Full Data Backup",
    "prereq-4-desc": "All internal storage data will be completely wiped (Format Data is mandatory for a clean flash).",

    "steps-title": "Flashing Procedure (Clean Flash)",
    "step-1-title": "Boot into Fastboot Mode",
    "step-1-desc": "Power off the device completely. Press and hold <strong>Volume Down (-) + Power Button</strong> simultaneously until the Fastboot screen appears, then connect the phone to your PC via USB.",
    "step-2-title": "Flash Recovery (vendor_boot)",
    "step-2-desc": "Flash the bundled ROM recovery kernel (<code>vendor_boot.img</code>) to the vendor_boot partition:",
    "step-2-note": "Ensure the command finishes with an <code>OKAY</code> status.",
    "step-3-title": "Reboot into Recovery Mode",
    "step-3-desc": "Reboot the device directly into the newly installed recovery:",
    "step-4-title": "Format Data (Mandatory Clean Flash)",
    "step-4-desc": "Once in Recovery mode:<br />1. Navigate using the volume keys and select <strong>Factory Reset</strong> with the power button.<br />2. Select <strong>Format data / factory reset</strong>, then confirm by selecting <strong>Format data</strong>.<br />3. Wait until the wiping process finishes (<em>Data wipe complete</em>).",
    "step-5-title": "Install ROM via ADB Sideload",
    "step-5-desc": "1. Return to the main Recovery menu.<br />2. Select <strong>Apply update</strong>, then choose <strong>Apply from ADB</strong>.<br />3. On your PC terminal, execute the following command:",
    "step-5-note": "<strong>Progress Indicator Note:</strong> On the PC terminal, the process typically halts around <strong>47%</strong> or reports <code>Total xfer: 1.00x</code>, while the phone screen displays <code>Install completed with status 0</code>. This confirms the package was flashed successfully.",
    "step-6-title": "Additional Package Confirmation & System Reboot",
    "step-6-desc": "Pay close attention to this transition step:<br />1. Once sideload completes, a confirmation prompt will appear on the recovery screen:<br />&nbsp;&nbsp;&nbsp;&nbsp;<strong>\"Install additional packages?\"</strong> (or a similar update query).<br />2. <strong>Select YES</strong>.<br />3. The phone will automatically reboot back into <strong>Recovery</strong> mode.<br />4. Once you are back in the Recovery menu, now choose <strong>Reboot system now</strong>.<br />5. The first boot takes around <strong>3 to 5 minutes</strong>. Please be patient until the system setup wizard appears.",

    "logcat-title": "How to Capture Logcat for Bug Reports",
    "logcat-desc": "If you encounter any technical issues, capture the logcat right after the bug occurs and attach it when reporting:",
    "btn-copy": "Copy",
    "btn-copied": "Copied!",
    "footer-text": "Project Infinity-X for Xiaomi 13T (aristotle) — Independently Developed."
  }
};

let currentLang = localStorage.getItem("aristotle_docs_lang") || "id";

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("aristotle_docs_lang", lang);
  document.documentElement.lang = lang;

  // Update active state on buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Replace text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// Language button event listeners
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Copy to clipboard functionality
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-clipboard");
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const copySpan = btn.querySelector(".copy-text");
        const originalText = copySpan ? copySpan.textContent : btn.textContent;
        const successText = translations[currentLang]["btn-copied"] || "Copied!";

        btn.classList.add("copied");
        if (copySpan) copySpan.textContent = successText;

        setTimeout(() => {
          btn.classList.remove("copied");
          if (copySpan) copySpan.textContent = translations[currentLang]["btn-copy"] || "Salin";
        }, 2000);
      } catch (err) {
        console.error("Clipboard copy failed:", err);
      }
    });
  });
});

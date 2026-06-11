# PANDUAN SETUP – Week 11 VR A-Frame
# Tema 1: Kuil Jepang

## STRUKTUR FOLDER FINAL
week11_NIM_NAMA/
├── index.html            ← Scene 1 (sudah jadi)
├── scene2.html           ← Scene 2 Panorama (sudah jadi)
├── scene3-model.html     ← Scene 3 Model GLB (sudah jadi)
├── js/
│   ├── aframe.min.js              ← KAMU DOWNLOAD SENDIRI
│   ├── aframe-environment-component.min.js  ← KAMU DOWNLOAD SENDIRI
│   └── components.js              ← sudah jadi
├── assets/
│   ├── panorama.jpg      ← KAMU CARI SENDIRI
│   ├── model.glb         ← KAMU CARI SENDIRI
│   └── fonts/
│       ├── Roboto-msdf.json   ← KAMU DOWNLOAD SENDIRI
│       └── Roboto-msdf.png    ← KAMU DOWNLOAD SENDIRI
└── laporan.pdf

---

## STEP 1: Download Library A-Frame (WAJIB LOKAL)

1. aframe.min.js
   → https://aframe.io/releases/1.5.0/aframe.min.js
   → Klik kanan → Save As → simpan ke folder js/

2. aframe-environment-component.min.js
   → https://unpkg.com/aframe-environment-component@1.3.2/dist/aframe-environment-component.min.js
   → Klik kanan → Save As → simpan ke folder js/

3. Font Roboto MSDF
   → https://cdn.aframe.io/fonts/Roboto-msdf.json  (save ke assets/fonts/)
   → https://cdn.aframe.io/fonts/Roboto-msdf.png   (save ke assets/fonts/)

---

## STEP 2: Cari Panorama 360°

- Buka: https://www.flickr.com atau https://pixexid.com
- Search: "japanese shrine equirectangular" atau "japanese temple 360"
- Pastikan rasio gambar 2:1 (contoh: 8000x4000 px)
- Download → rename jadi panorama.jpg → taruh di assets/

---

## STEP 3: Cari Model GLB

- Buka: https://sketchfab.com
- Filter: Free + Downloadable
- Search: "torii gate" atau "japanese lantern" atau "pagoda"
- Download format GLTF/GLB
- Rename file .glb-nya jadi model.glb → taruh di assets/

PENTING: Setelah taruh model, buka scene3-model.html
dan sesuaikan nilai scale. Target tinggi ~1.5–2m.
Misal model terlalu besar → ubah scale="0.3 0.3 0.3"

---

## STEP 4: Jalankan via HTTP Server

JANGAN double-click file HTML langsung!

Cara 1 – Python (paling mudah):
  buka terminal di folder week11_NIM_NAMA/
  ketik: python3 -m http.server 8000
  buka browser: http://localhost:8000

Cara 2 – VS Code Live Server:
  install extension Live Server
  klik kanan index.html → Open with Live Server

---

## CHECKLIST SEBELUM SUBMIT

[ ] Scene 1 jalan: box merah berputar, sphere naik-turun,
    silinder berkedip, cone merah berputar dan ganti warna saat diklik
[ ] Scene 2 jalan: panorama muncul, 4 hotspot ada (A/B/C/D),
    klik hotspot muncul panel info
[ ] Scene 3 jalan: model GLB tampil, klik → berputar
[ ] Semua portal navigasi antar scene berfungsi
[ ] components.js terdaftar dan blink berjalan
[ ] Folder structure benar
[ ] Nama ZIP: week11_NIM_NAMA.zip

# Dashboard IoT berbasis Human-Computer Interaction (HCI)

Repositori ini berisi rancangan sistem *dashboard* Internet of Things (IoT) sederhana yang mengimplementasikan prinsip-prinsip UI/UX dan visualisasi data, merujuk pada resume materi "Human-Computer Interaction & Data Visualization". 

Sistem ini memvisualisasikan data tiruan dari node sensor yang menggunakan SHT31 (Suhu) dan LDR (Cahaya).

## Studi Kasus & Penerapan Teori dari Resume

Sistem ini dirancang untuk menyelesaikan masalah pembacaan tabel data sensor yang membebani memori kognitif:

1. **Prinsip Shneiderman's Mantra** 
   - **Overview first:** Menyajikan kartu indikator status sistem secara umum (Suhu Normal, Cahaya Redup) menggunakan *Preattentive Visual Attributes* berupa teks dengan kontras warna.
   - **Zoom and filter:** Menyediakan fitur dropdown *select* untuk menyaring (*filter*) apakah pengguna ingin melihat grafik suhu saja, cahaya saja, atau keduanya.
   - **Details-on-demand:** Menyajikan data angka yang sangat spesifik (detail) hanya saat pengguna mengarahkan kursor (*hover*) pada grafik (*tooltip*).

2. **Tanpa Chartjunk (Edward Tufte)** 
   - Visualisasi line chart sengaja dibuat bersih (elegan) tanpa elemen dekoratif seperti bayangan (shadows), efek 3D, atau grid yang tebal. Hal ini difokuskan penuh pada tren metrik data IoT tersebut.
   
3. **Mengurangi Beban Kognitif (Cognitive Load)**
   - Semua elemen diakses pada satu halaman (Single Page) untuk mengurangi *Extraneous Load*, sehingga pengguna tidak dipaksa untuk menghafal instruksi saat bernavigasi karena kapasitas *working memory* manusia sangat terbatas ($7 \pm 2$ item).

## Cara Penggunaan
1. Ekstrak file zip ke direktori lokal Anda.
2. Buka file `index.html` menggunakan web browser pilihan Anda (Google Chrome, Firefox, dll).
3. Repositori ini sepenuhnya menggunakan HTML, CSS, JavaScript dasar (Vanilla), serta *library* Chart.js yang dipanggil melalui CDN, sehingga siap untuk langsung di-*push* dan di-*host* melalui GitHub Pages.

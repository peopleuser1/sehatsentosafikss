// Tambahkan interaktivitas jika diperlukan
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
// Menambahkan efek bouncing saat tombol diklik
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        // Tambahkan kelas animasi
        this.classList.add('bounce');

        // Hapus kelas setelah animasi selesai (durasi 300ms)
        setTimeout(() => {
            this.classList.remove('bounce');
        }, 300);
    });
});

    });

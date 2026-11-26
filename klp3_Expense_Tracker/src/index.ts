
import * as readlineSync from "readline-sync";

// STRUKTUR DATA
interface Pengeluaran {
    ID: number;
    Nama: string;
    Jenis: string;
    Jml: number;
}

// ARRAY PENYIMPANAN
let daftarPengeluaran: Pengeluaran[] = [];

// MENU UTAMA
function main(): void {
    while (true) {
        console.log("\n========== EXPENSE TRACKER ==========");
        console.log("1. Tambah pengeluaran");
        console.log("2. Lihat pengeluaran");
        console.log("3. Ubah pengeluaran");
        console.log("4. Hapus pengeluaran");
        console.log("5. Total pengeluaran");
        console.log("6. Filter kategori");
        console.log("7. Ringkasan pengeluaran");
        console.log("8. Keluar");
        console.log("=====================================");

        const pilihan = readlineSync.question("Masukkan pilihan (1-8): ");

        if (!/^[1-8]$/.test(pilihan)) {
            console.log("Pilihan harus berupa angka 1-8!");
            continue;
        }

        switch (Number(pilihan)) {
            case 1:
                console.log("Tambah Pengeluaran")
                break;
            case 2:
                console.log("Lihat Pengeluaran")                   
                break;
            case 3:
                console.log("Ubah Pengeluaran")                                 
                break;
            case 4:               
                console.log("Hapus Pengeluaran")                                 
                break;
            case 5:
                console.log("Total Pengeluaran")                                     
                break;
            case 6:
                console.log("Filter Pengeluaran")                                     
                break;
            case 7:
                console.log("Ringkasan Pengeluaran")                                     
                break;
            case 8:
                console.log("Terima kasih telah menggunakan Expense Tracker!");
                return;
        }
    }
}
let nama = "Sukirman"
let umur = "20"
let status_menikah = false

const url = "https://smktelkom-mlg.sch.id"

let siswa1 = {
    nis: "101",
    nama: "Suneo",
    jurusan: "RPL"
}

let siswa2 = {
    nis: "102",
    nama: "Juko",
    jurusan: "TKJ"
}

console.log("Nama Siswa 1 = "+ siswa1.nama)
console.log("Nama Siswa 2 = "+ siswa2.nama)

let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]

let tingkatan_kelas = [10,11,12]

let siswa = [
    {
        nama: "Yaya", jurusan: "RPL"
    },
    {
        nama: "Ying", jurusan: "TKJ"
    },
    {
        nama: "Yang", jurusan: "RPL"
    },
]

console.log("----------- tambah data pada array object -----------");

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);

console.log("----------- tambah data pada array object -----------");

let kota = ["Malang","Surabaya","Tulungagung"]

console.log("Isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);
console.log("----------------------------------");

kota.push("Banyuwangi")

console.log("isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

let barang = [
    { nama : "Rinso", harga: 5000},
    { nama : "Sukro", harga: 4000}
]

console.log("isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);
console.log("----------------------------------");

barang.push(
    {nama : "Indomie Goreng", harga: 2500}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);

console.log("----------- hapus data pada array object -----------");

// data array
let namanama = [ 'Ana', 'Sulaiman', 'Hakim', 'Pradana', 'Adit', 'Joko', 'Slamet', 'Adi']
console.log(namanama);
console.log("jumlah nama = " + namanama.length);
console.log("----------------------------------");
console.log("menghapus nama");
namanama.splice(2,1);
console.log("nama saat ini : ");
console.log(namanama);
console.log("jumlah nama = " + namanama.length);

console.log("----------- data pada array object -----------");

let siswamap = [
    { nama_depan: "Jack", nama_belakang: "Ma" },
    { nama_depan: "Cah", nama_belakang: "Yadi" },
    { nama_depan: "Soe", nama_belakang: "Gondo" }
]

siswamap.map(
    (sis,index) =>{
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)

console.log("----------- opertor aritmatika -----------");

let a = 2, b =5, c = "10"
console.log("a + b = " + (a+b))
console.log("a + c = " + (a+c))
console.log("a - b = " + (a-b))
console.log("a * b = " + (a*b))
console.log("b / a = " + (b/a))
console.log("b % a = " + (b%a))
console.log("b ** a = " + (b**a))

console.log("----------- opertor perbandingan -----------");

let a2 = 5, b2 = 10, c2 = "5"
console.log("a2 == c2 -> " + (a2 == c2))
console.log("a2 === c2 -> " + (a2 === c2))
console.log("a2 != c2 -> " + (a2 != c2))
console.log("a2 !== c2 -> " + (a2 !== c2))
console.log("a2 < b2 -> " + (a2 < b2))
console.log("a2 >= b2 -> " + (a2 >= b2))
console.log("a2 < b2 -> " + (a2 < b2))
console.log("a2 <= b2 -> " + (a2 <= b2))

console.log("----------- percabangan -----------");
let tahun = 2020
if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
}

let tahun2 = 2022
if (tahun % 4 == 0) {
    console.log(tahun2 + " adalah tahun kabisat");
} else {
    console.log(tahun2 + " bukan tahun kabisat");
}

let nilai = 80
if (nilai > 80){
    console.log("Excellent")
} else if (nilai <= 80 && nilai > 70){
    console.log("Good")
} else if (nilai <= 70 && nilai > 60){
    console.log("Not Bad")
} else {
    console.log("So Bad")
}

console.log("----------- perulangan -----------");

for (let index = 1; index <= 10; index++){
    console.log("Perulagan ke-" + index)
}

let siswaper = {
    nama: "Kusuma Seta",
    gender: "Wanita",
    jurusan: "RPL",
    usia: "90",
    alamat: "Rumah"
}

for (key in siswaper){
    console.log(key);
}

let presiden = ["Soekarno","Soeharto","Habibie","Gus Dur","Megawati","SBY","Jokowi"]
for (pres of presiden) {
    console.log(pres)
}

let laptop = ["Lenovo","HP","Acer","Asus"]
let i = 0
while(laptop[i]){
    console.log(laptop[i])
    i++
}

let gadget = ["Xiaomi","Samsung","Motorola","Sony Ericson"]
let i2 = 0
do {
    console.log(gadget[i2])
    i2++
}while(gadget[i2])

console.log("----------- fungsi -----------");
luasLingkaran = (r) => {
    return 3.14 * (r ** 2)
}

console.log("Luas Lingkaran dengan r = 10 adalah " + luasLingkaran(10))
console.log("----------- class -----------");
class PersegiPanjang{
    constructor(p , l){
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

class Balok extends PersegiPanjang {
    constructor(p,l,t) {
        super(p,l)
        this.tinggi = t
    }

    luas = () => {
        return (2 * this.panjang * this.lebar) + (2 * this.panjang * this.tinggi) + (2 * this.tinggi * this.lebar)
    }

    volume = () => {
        return this. panjang * this.lebar * this.tinggi
    }
}

let tanah = new PersegiPanjang(10,50)
console.log("Luas Tanah = " + tanah.luas());
console.log("Keleling Tanah = " + tanah.keliling());

let lemari = new Balok(10,5,2)
console.log("Luas Lemari = " + lemari.luas());
console.log("Volume Lemari = " + lemari.volume());


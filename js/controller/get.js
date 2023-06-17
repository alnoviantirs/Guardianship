import { addInner } from "https://bukulapak.github.io/element/process.js";
import {
  getRandomColor,
  getRandomColorName,
} from "https://bukulapak.github.io/image/process.js";
import {
  isiTabel,
  isiTabelMahasiswa,
  isiTabelDosen,
  isiTabelLocation,
  isiTabelWaktu,
  isiTabelRuangan,
} from "../temp/table.js";
export function isiTablePresensi(results) {
  results.forEach(isiRow);
}
export function isiTable_Mahasiswa(results) {
  results.forEach(isiRowMahasiswa);
}
export function isiTabel_Dosen(results) {
  results.forEach(isiRowDosen);
}
export function isiTabel_Location(results) {
  results.forEach(isiRowLocation);
}
export function isiTabel_Waktu(results) {
  results.forEach(isiRowWaktu);
}
export function isiTabel_Ruangan(results) {
  results.forEach(isiRowRuangan);
}

var MyvarPerwalian = {};
export function isiTablePresensi(results3) {
  results3.reverse();
  MyvarPerwalian.length = results3.length;
  results3.forEach(isiRow);
  console.log(results3);
}

function isiRow(value) {
  document.getElementById("jmlperwalian").innerHTML =
    "" + MyvarPerwalian.length + " Data";
  let content = isiTabel
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#JURUSAN#", value.biodata.jurusan)
    .replace("#NAMAWALDOS#", value.walidosen.nama)
    .replace("#JABATAN#", value.walidosen.jabatan)
    .replace("#TANGGAL#", value.time.tanggal)
    .replace("#HARI#", value.time.hari)
    .replace("#JAM#", value.time.jam)
    .replace("#LOKASI#", value.lokasi)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
function isiRowMahasiswa(value) {
  let content = isiTabelMahasiswa
    .replace("#NAMA#", value.nama)
    .replace("#NOHP#", value.phone_number)
    .replace("#JURUSAN#", value.jurusan)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelMahasiswa", content);
}
function isiRowDosen(value) {
  let content = isiTabelDosen
    .replace("#NAMA#", value.nama)
    .replace("#JABATAN#", value.jabatan)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelDosen", content);
}
function isiRowLocation(value) {
  let content = isiTabelLocation
    .replace("#NAMALOKASI#", value.nama_lokasi)
    .replace("#ALAMAT#", value.alamat)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelLocation", content);
}
function isiRowWaktu(value) {
  let content = isiTabelWaktu
    .replace("#JAM#", value.jam)
    .replace("#HARI#", value.hari)
    .replace("#TANGGAL#", value.tanggal)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelWaktu", content);
}
function isiRowRuangan(value) {
  let content = isiTabelRuangan
    .replace("#LOKASIRUANGAN#", value.lokasi_ruangan)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabelRuangan", content);
}

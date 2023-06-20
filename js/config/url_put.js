const urlParams = new URLSearchParams(window.location.search);
const perwalianId = urlParams.get("perwalianId");
const dosenId = urlParams.get("dosenId");
const mahasiswaId = urlParams.get("mahasiswaId");
const ruanganId = urlParams.get("ruanganId");

export let urlPUT = "https://alnovianti.herokuapp.com/update/" + perwalianId;
export let urlPUTDosen = "https://alnovianti.herokuapp.com/upddosen/" + dosenId;
export let urlPUTMahasiswa =
  "https://alnovianti.herokuapp.com/updmahasiswa/" + mahasiswaId;
export let urlPUTRuangan =
  "https://alnovianti.herokuapp.com/updruangan/" + ruanganId;

export function AmbilResponse(result) {
  console.log(result); //menampilkan respond API pada console
  alert(result.message); //menampilkan respond API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}

const urlParams = new URLSearchParams(window.location.search);
const perwalianId = urlParams.get("perwalianId");
const dosenId = urlParams.get("dosenId");
const mahasiswaId = urlParams.get("mahasiswaId");
const ruanganId = urlParams.get("ruanganId");

export let urlFetch =
  "https://alnovianti.herokuapp.com/perwalian/" + perwalianId;
"https://alnovianti.herokuapp.com/dosen/" + dosenId;
"https://alnovianti.herokuapp.com/mahasiswa/" + mahasiswaId;
"https://alnovianti.herokuapp.com/ruangan/" + ruanganId;

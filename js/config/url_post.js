export let urlPOST = "https://alnovianti.herokuapp.com/insperwalian";
export let urlPOSTDosen = "https://alnovianti.herokuapp.com/insdosen";
export let urlPOSTMahasiswa = "https://alnovianti.herokuapp.com/insmahasiswa";
export let urlPOSTRuangan = "https://alnovianti.herokuapp.com/insruangan";

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}

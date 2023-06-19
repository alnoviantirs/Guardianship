export let urlPOST = "https://alnovianti.herokuapp.com/insruangan";

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.href = "ruangan.html"; //reload halaman setelah klik ok pada alert
}

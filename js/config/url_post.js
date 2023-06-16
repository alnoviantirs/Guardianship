export let urlPOST = "https://alnovianti.herokuapp.com/insperwalian";

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.reload("index.html"); //reload halaman setelah klik ok pada alert
}

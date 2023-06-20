const urlParams = new URLSearchParams(window.location.search);
const dosenId = urlParams.get("dosenId");

export let urlPUTDosen = "https://alnovianti.herokuapp.com/upddosen/" + dosenId;


export function AmbilResponse(result) {
  console.log(result); //menampilkan respond API pada console
  alert(result.message); //menampilkan respond API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}

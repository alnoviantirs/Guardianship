import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
  console.log(document.getElementById("jam").value);
  console.log(document.getElementById("hari").value);
  let data = {
    time: {
      jam: document.getElementById("jam").value,
      hari: document.getElementById("hari").value,
      tanggal: document.getElementById("tanggal").value,
    },
    lokasi: document.getElementById("lokasi").value,
    wali_dosen: {
      nama: document.getElementById("namadosen").value,
      jabatan: document.getElementById("jabatan").value,
    },
    biodata: {
      nama: document.getElementById("nama").value,
      phone_number: document.getElementById("phone_number").value,
      jurusan: document.getElementById("jurusan").value,
    },
  };

  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);

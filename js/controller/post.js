import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
  var biodata = getValue("biodata");

  let data = {
    time: {
      jam: getValue("jam"),
      hari: getValue("hari"),
      tanggal: getValue("tanggal"),
    },
    lokasi: getValue("lokasi"),
    wali_dosen: {
      nama: getValue("nama"),
      jabatan: getValue("jabatan"),
    },
    biodata: {
      nama: getValue("nama"),
      phone_number: getValue("phone_number"),
      jurusan: getValue("jurusan"),
    },
  };

  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);

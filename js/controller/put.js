import { putData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";

function pushData() {
  let data = {
    time: {
      jam: getValue("jam"),
      hari: getValue("hari"),
      tanggal: getValue("tanggal"),
    },
    lokasi: getValue("lokasi"),
    walidosen: {
      nama: getValue("nama"),
      jabatan: getValue("jabatan"),
    },
    biodata: {
      nama: getValue("nama"),
      phone_number: getValue("phone_number"),
      jurusan: getValue("jurusan"),
    },
  };
  putData(urlPUT, data, AmbilResponse);
}

onClick("button", pushData);

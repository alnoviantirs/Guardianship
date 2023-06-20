import { putData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPUTMahasiswa, AmbilResponse } from "../config/url_put.js";

function pushData() {
  let data = {
    nama: getValue("nama"),
    phone_number: getValue("phone_number"),
    jurusan: getValue("jurusan"),
  };
  putData(urlPUTMahasiswa, data, AmbilResponse);
}

onClick("button", pushData);

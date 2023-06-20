import { putData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPUTDosen, AmbilResponseDosen } from "../config/url_put _dosen.js";

function pushData() {
  let data = {
    nama: getValue("namadosen"),
    jabatan: getValue("jabatan"),
  };
  putData(urlPUTDosen, data, AmbilResponseDosen);
}

onClick("button", pushData);

import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTDosen, AmbilResponse } from "../config/url_post.js";

function pushData() {
  let data = {
    nama: getValue("nama"),
    jabatan: getValue("jabatan"),
  };
  postData(urlPOSTDosen, data, AmbilResponse);
}

onClick("btn_dosen", pushData);

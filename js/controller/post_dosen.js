import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTDosen, AmbilResponse } from "../config/url_post.js";

function pushData() {
  let data = {
    nama: getValue("namadosen"),
    jabatan: getValue("jabatan"),
  };
  postData(urlPOSTDosen, data, AmbilResponse);
}

onClick("button", pushData);

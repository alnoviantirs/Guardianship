import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTDosen, AmbilResponseDosen } from "../config/url_post.js";

function pushData() {
  let data = {
    nama: getValue("namadosen"),
    jabatan: getValue("jabatan"),
  };
  postData(urlPOSTDosen, data, AmbilResponseDosen);
}

onClick("button", pushData);

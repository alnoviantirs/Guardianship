import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTMahasiswa, AmbilResponse } from "../config/url_post.js";

function pushData() {
  let data = {
    nama: getValue("nama"),
    phone_number: getValue("phone_number"),
    jurusan: getValue("jurusan"),
  };
  postData(urlPOSTMahasiswa, data, AmbilResponse);
}

onClick("button", pushData);

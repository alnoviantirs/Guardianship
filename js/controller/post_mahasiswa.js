import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTMahasiswa, AmbilResponse } from "../config/url_post.js";

function pushData() {
  let data = {
    nama: getValueMahasiswa("nama"),
    phone_number: getValueMahasiswa("phone_number"),
    jurusan: getValueMahasiswa("jurusan"),
  };
  postData(urlPOSTMahasiswa, data, AmbilResponse);
}

onClick("button", pushDatamahasiswa);

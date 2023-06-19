import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
  getValueDosen,
  getValueMahasiswa,
  getValueRuangan,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTRuangan, AmbilResponse } from "../config/url_post.js";

function pushData() {
  let data = {
    lokasi_ruangan: getValueRuangan("lokasi_ruangan"),
  };
  postData(urlPOSTRuangan, dataruangan, AmbilResponse);
}

onClick("button", pushData);

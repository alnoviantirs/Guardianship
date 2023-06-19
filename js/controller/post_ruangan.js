import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOSTRuangan, AmbilResponse } from "../config/url_post.js";

function pushData() {
  let data = {
    lokasi_ruangan: getValue("lokasi_ruangan"),
  };
  postData(urlPOSTRuangan, data, AmbilResponse);
}

onClick("btn_ruangan", pushData);
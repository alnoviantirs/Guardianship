import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post_ruangan.js";

function pushData() {
  let data = {
    lokasi_ruangan: getValue("lokasi_ruangan"),
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);

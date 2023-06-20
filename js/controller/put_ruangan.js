import { putData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPUTRuangan, AmbilResponse } from "../config/url_put_ruangan.js";

function pushData() {
  let data = {
    lokasi_ruangan: getValue("ruangan"),
  };
  putData(urlPUTRuangan, data, AmbilResponse);
}

onClick("button", pushData);

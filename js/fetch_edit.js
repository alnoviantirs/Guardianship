import { get } from "https://bukulapak.github.io/api/process.js";
import {
  isiData,
  isiDataDosen,
  isiDataMahasiswa,
  isiDataRuangan,
} from "./controller/edit.js";
import { urlFetch } from "./config/url_get_detail.js";

get(urlFetch, isiData, isiDataDosen, isiDataMahasiswa, isiDataRuangan);

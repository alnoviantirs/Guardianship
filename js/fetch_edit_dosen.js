import { get } from "https://bukulapak.github.io/api/process.js";
import { isiDataDosen } from "./controller/edit_dosen.js";
import { urlFetch } from "./config/url_get_detail.js";

get(urlFetch, isiDataDosen);

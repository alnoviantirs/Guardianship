import { get } from "https://bukulapak.github.io/api/process.js";
import { isiDataRuangan } from "./controller/edit_ruangan.js";
import { urlFetch } from "./config/url_get_detail.js";

get(urlFetch, isiDataRuangan);

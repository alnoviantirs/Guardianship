import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit.js";
import { isiDataDosen } from "./controller/edit_dosen.js";
import { isiDataMahasiswa } from "./controller/edit_mahasiswa.js";
import { isiDataRuangan } from "./controller/edit_ruangan.js";
import { urlFetch } from "./config/url_get_detail.js";

get(urlFetch, isiData, isiDataDosen, isiDataMahasiswa, isiDataRuangan);

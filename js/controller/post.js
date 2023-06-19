import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import {
  urlPOST,
  urlPOSTDosen,
  urlPOSTMahasiswa,
  urlPOSTRuangan,
  AmbilResponse,
} from "../config/url_post.js";

function pushData() {
  let data = {
    time: {
      jam: getValue("jam"),
      hari: getValue("hari"),
      tanggal: getValue("tanggal"),
    },
    lokasi: getValue("lokasi"),
    walidosen: {
      nama: getValue("nama"),
      jabatan: getValue("jabatan"),
    },
    biodata: {
      nama: getValue("nama"),
      phone_number: getValue("phone_number"),
      jurusan: getValue("jurusan"),
    },
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);

function pushDataDosen() {
  let data = {
    nama: getValue("nama"),
    jabatan: getValue("jabatan"),
  };
  postData(urlPOSTDosen, data, AmbilResponse);
}

onClick("btn_dosen", pushDataDosen);

function pushDataMahasiswa() {
  let data = {
    nama: getValue("nama"),
    phone_number: getValue("phone_number"),
    jurusan: getValue("jurusan"),
  };
  postData(urlPOSTMahasiswa, data, AmbilResponse);
}

onClick("btn_mahasiswa", pushDataMahasiswa);

function pushDataRuangan() {
  let data = {
    lokasi_ruangan: getValue("lokasi_ruangan"),
  };
  postData(urlPOSTRuangan, data, AmbilResponse);
}

onClick("btn_ruangan", pushDataRuangan);

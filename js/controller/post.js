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

function pushDatadosen() {
  let datadosen = {
    nama: getValue("nama"),
    jabatan: getValue("jabatan"),
  };
  postData(urlPOSTDosen, datadosen, AmbilResponse);
}

onClick("button", pushDatadosen);

function pushDatamahasiswa() {
  let datamahasiswa = {
    nama: getValue("nama"),
    phone_number: getValue("phone_number"),
    jurusan: getValue("jurusan"),
  };
  postData(urlPOSTMahasiswa, datamahasiswa, AmbilResponse);
}

onClick("button", pushDatamahasiswa);

function pushDataruangan() {
  let dataruangan = {
    lokasi_ruangan: getValue("lokasi_ruangan"),
  };
  postData(urlPOSTRuangan, dataruangan, AmbilResponse);
}

onClick("button", pushDataruangan);

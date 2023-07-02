import { postData } from "https://bukulapak.github.io/api/process.js";
import {
  onClick,
  getValue,
} from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

async function getDataMahasiswa(mahasiswaId) {
  // Fetch major data based on the ID (replace with your API endpoint)
  const response = await fetch(
    `https://alnovianti.herokuapp.com/mahasiswa/${mahasiswaId}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch major data.");
  }
}

async function getDataDosen(dosenId) {
  // Fetch major data based on the ID (replace with your API endpoint)
  const response = await fetch(
    `https://alnovianti.herokuapp.com/dosen/${dosenId}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch major data.");
  }
}

async function getDataRuangan(ruanganId) {
  // Fetch major data based on the ID (replace with your API endpoint)
  const response = await fetch(
    `https://alnovianti.herokuapp.com/ruangan/${ruanganId}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch major data.");
  }
}

function pushData() {
  let mahasiswaId = getValue("nama");
  let dosenId = getValue("namadosen");
  let ruanganId = getValue("lokasi_ruangan");
  Promise.all([
    getDataMahasiswa(mahasiswaId),
    getDataDosen(dosenId),
    getDataRuangan(ruanganId),
  ]).then(([mahasiswaData, dosenData, ruanganData]) => {
    let data = {
      time: {
        jam: getValue("jam"),
        hari: getValue("hari"),
        tanggal: getValue("tanggal"),
      },
      walidosen: {
        _id: dosenId,
        nama: dosenData.nama,
        jabatan: dosenData.jabatan,
      },
      biodata: {
        _id: mahasiswaId,
        nama: mahasiswaData.nama,
        phone_number: mahasiswaData.phone_number,
        jurusan: mahasiswaData.jurusan,
      },
      ruangan: {
        _id: ruanganId,
        lokasi_ruangan: ruanganData.lokasi_ruangan,
      },
    };
    postData(urlPOST, data, AmbilResponse);
  });
}

onClick("button", pushData);

// function pushDataDosen() {
//   let data = {
//     nama: getValue("nama"),
//     jabatan: getValue("jabatan"),
//   };
//   postData(urlPOSTDosen, data, AmbilResponse);
// }

// onClick("btn_dosen", pushDataDosen);

// function pushDataMahasiswa() {
//   let data = {
//     nama: getValue("nama"),
//     phone_number: getValue("phone_number"),
//     jurusan: getValue("jurusan"),
//   };
//   postData(urlPOSTMahasiswa, data, AmbilResponse);
// }

// onClick("btn_mahasiswa", pushDataMahasiswa);

// function pushDataRuangan() {
//   let data = {
//     lokasi_ruangan: getValue("lokasi_ruangan"),
//   };
//   postData(urlPOSTRuangan, data, AmbilResponse);
// }

// onClick("btn_ruangan", pushDataRuangan);

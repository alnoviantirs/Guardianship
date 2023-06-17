export function isiData(results) {
  const inputMapping = [
    { id: "nama", path: "biodata.nama" },
    { id: "phone_number", path: "biodata.phone_number" },
    { id: "jurusan", path: "biodata.jurusan" },
    { id: "nama", path: "walidosen.nama" },
    { id: "jabatan", path: "walidosen.jabatan" },
    { id: "tanggal", path: "time.tanggal" },
    { id: "hari", path: "time.hari" },
    { id: "jam", path: "time.jam" },
    { id: "lokasi", path: "lokasi" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
}

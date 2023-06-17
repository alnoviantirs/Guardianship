export let isiTabel = `
<tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
        <div class="flex items-center -m-2">
            <div class="w-auto p-2">
                <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
                <p class="text-xs font-medium text-coolGray-500">#NOHP#</p>
            </div>
        </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#JURUSAN#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">#NAMAWALDOS#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-500 text-left">#TANGGAL#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-#col#-500 text-center">#HARI#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-#col#-500 text-center">#JAM#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-#col#-500 text-center">#LOKASI#</th>
    <th class="whitespace-nowrap pr-1 bg-white text-sm font-medium text-coolGray-500">
<button type="button" href="edit.html?perwalianId=#IDEDIT#">edit
</button>
|
<button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
</button>
</th>
</tr>
`;
// export let isiTabelMahasiswa = `
// <tr class="h-18 border-b border-coolGray-100">
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//         <div class="flex items-center -m-2">
//             <div class="w-auto p-2">
//                 <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
//             </div>
//         </div>
//     </th>
//     <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#NOHP#</th>
//     <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">#JURUSAN#</th>
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//     </th>
// </tr>
// `;
// export let isiTabelDosen = `
// <tr class="h-18 border-b border-coolGray-100">
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//         <div class="flex items-center -m-2">
//             <div class="w-auto p-2">
//                 <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
//             </div>
//         </div>
//     </th>
//     <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-#col#-500 text-left">#JABATAN#</th>
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//     </th>
// </tr>
// `;
// export let isiTabelLocation = `
// <tr class="h-18 border-b border-coolGray-100">
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//         <div class="flex items-center -m-2">
//             <div class="w-auto p-2">
//                 <p class="text-xs font-semibold text-coolGray-800">#NAMALOKASI#</p>
//             </div>
//         </div>
//     </th>
//     <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#ALAMAT#</th>
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//     </th>
// </tr>
// `;
// export let isiTabelWaktu = `
// <tr class="h-18 border-b border-coolGray-100">
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//         <div class="flex items-center -m-2">
//             <div class="w-auto p-2">
//                 <p class="text-xs font-semibold text-coolGray-800">#JAM#</p>
//             </div>
//         </div>
//     </th>
//     <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#HARI#</th>
//     <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">#TANGGAL#</th>
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//     </th>
// </tr>
// `;
// export let isiTabelRuangan = `
// <tr class="h-18 border-b border-coolGray-100">
//     <th class="whitespace-nowrap px-4 bg-white text-left">
//         <div class="text-center flex items-center -m-2">
//             <div class="text-center w-auto p-2">
//                 <p class="text-center text-xs font-semibold text-coolGray-800">#LOKASIRUANGAN#</p>
//             </div>
//         </div>
//     </th>
// </tr>
// `;

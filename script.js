function tampilkanNama(){
    document.getElementById("namaAnggota").innerHTML=
    ` 
    <ol 
        style="list-style-type: decimal; 
        padding-left:5%;">
            <li>Galih (Galih@gmail.com)</li>
            <li>Fauzi (Fauzi@gmail.com)</li>
    </ol>

        <button onclick="location.reload()">
            Tutup Kembali
        </button>
    `;
}

function validasiForm(){
    var tglMulai = document.getElementById('tgl_mulai').value;
    var tglSelesai = document.getElementById('tgl_selesai').value;

    if(new Date(tglSelesai) < new Date(tglMulai)){
        alert('Tanggal Selesai Tidak Boleh Lebih Awal dari Tanggal Mulai!');
    }
    return true;
}
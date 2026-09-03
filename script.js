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
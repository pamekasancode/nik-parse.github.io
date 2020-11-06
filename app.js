// Preloader Jquery
$(document).ready(function() {
  setTimeout(function() {
    $(".preloader").fadeOut();
  }, 1000);
})


// Parsing 
var nik = document.getElementById("nik");

const submit = document.getElementById("parse");
submit.addEventListener("click", parsing);
function parsing() {
	nikParse(nik.value, function(result) {
		var check = result.pesan;
		if (check == "NIK valid") {
			var data = result.data
			console.log(data)
			var row = `<tr>
							<td>Jenis-kelamin</td>
							<td>${data.kelamin}</td>
						</tr>
						<tr>
							<td>Tanggal-lahir</td>
							<td>${data.lahir}</td>
						</tr>
						<tr>
							<td>Usia</td>
							<td>${data.tambahan.usia}</td>
						</tr>
						<tr>
							<td>Pasaran</td>
							<td>${data.tambahan.pasaran}</td>
						</tr>
						<tr>
							<td>Provinsi</td>
							<td>${data.provinsi}</td>
						</tr>
						<tr>
							<td>Kabupaten/Kota</td>
							<td>${data.kotakab}</td>
						</tr>
						<tr>
							<td>Kecamatan</td>
							<td>${data.kecamatan}</td>
						</tr>
						<tr>
							<td>Kode Pos</td>
							<td>${data.tambahan.kodepos}</td>
						</tr>`;
			document.getElementById("data").innerHTML = row;
		} else {
			var deskripsi_eror = "<p align='center'>Masukkan NIK KTP yang valid!</p>";
			document.getElementById("data").innerHTML = deskripsi_eror;
		}

	});	
}
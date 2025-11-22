document
  .getElementById("tournamentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let admin = "6282210931713"; // GANTI NOMOR ADMIN

    let namaTim = document.getElementById("namatim").value;
    let kapten = document.getElementById("kapten").value;
    let idml = document.getElementById("idml").value;
    let email = document.getElementById("email").value;
    let wa = document.getElementById("wa").value;
    let tier = document.getElementById("tier").value;

    let pesan = `PENDAFTARAN TURNAMEN ML

Nama Tim: ${namaTim}
Nama Kapten: ${kapten}
ID ML: ${idml}
Email: ${email}
WA: ${wa}
Tier: ${tier}`;

    let url = "https://wa.me/" + admin + "?text=" + encodeURIComponent(pesan);
    window.location.href = url;
  });

function enviarLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let link = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
        alert('Compartilhe este link: ' + link);
      },
      (err) => {
        alert('Não foi possível obter sua localização.');
      }
    );
  } else {
    alert('Geolocalização não suportada no seu dispositivo.');
  }
}

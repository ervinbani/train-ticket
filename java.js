var totkm = prompt("Numero di km?");

var eta =  prompt("Età passeggero?");

var prezzo = (totkm * 0.21);

var scontoMinoreni = ((prezzo / 100) * 20);

var scontoOver = ((prezzo / 100) * 40);


if (eta < 18) {
  document.write((prezzo - scontoMinoreni) + 'euro');
}

if (eta > 65) {
  document.write((prezzo - scontoOver) + 'euro' );

}

else {
  document.write((prezzo) + 'euro' );

}

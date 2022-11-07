function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("app-include-dom");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("app-include-dom");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  includeHTML();

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const GetSource = () => {
  let source = `https://s.tradingview.com/embed-widget/ticker-tape/?ver=${Date()}&locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22BTC%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3ABTCUSDT%22%7D%2C%7B%22description%22%3A%22ETH%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3AETHUSDT%22%7D%2C%7B%22description%22%3A%22XRP%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3AXRPUSDT%22%7D%2C%7B%22description%22%3A%22BCH%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3ABCHUSDT%22%7D%2C%7B%22description%22%3A%22ETC%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3AETCUSDT%22%7D%2C%7B%22description%22%3A%22EOS%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3AEOSUSDT%22%7D%2C%7B%22description%22%3A%22DOGE%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3ADOGEUSDT%22%7D%2C%7B%22description%22%3A%22ADA%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3AADAUSDT%22%7D%2C%7B%22description%22%3A%22TRX%2FUSDT%22%2C%22proName%22%3A%22BINANCE%3ATRXUSDT%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22onebtc-world.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D`;
  document.getElementById('frame').src = source;
}
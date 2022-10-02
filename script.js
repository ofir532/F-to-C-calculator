(function() {
  const fahrenheit = document.getElementById('fahrenheit-input');
  const celsius = document.getElementById('celsius-input');

  celsius.addEventListener('input', function(e) {
      let num = Number.parseFloat(e.target.value);
      if(!Number.isNaN(num)) {
          fahrenheit.value = (num * 9/5 + 32).toFixed(1);
      }
      else {
          fahrenheit.value = null;
      }
  });

  fahrenheit.addEventListener('input', function(e) {
      let num = Number.parseFloat(e.target.value);
      if(!Number.isNaN(num)) {
          celsius.value = ((num - 32) * 5/9).toFixed(1);
      }
      else {
          celsius.value = null;
      }
  });

})();

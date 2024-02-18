const btn = document.getElementById('btn');
const velocidade = document.getElementById('velocidade');
const respVerificada = document.getElementById('respVerificada');

btn.addEventListener('click', function() {
  if(velocidade ===0 || isNaN(velocidade)) {
    alert(`Digite novamente`)
  };
  if(velocidade <= 60) {
    document.getElementById('respVerificada').innerHTML = `Verde`
} else (velocidade > 60) {
 document.getElementById('respVerificada').innerHTML = `Vermelho`
};
});

 document.getElementById('respVerificada').innerHTML = `valor`
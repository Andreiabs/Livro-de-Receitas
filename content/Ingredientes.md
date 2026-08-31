<div style="text-align: center; margin-top: 24px; margin-bottom: 4px;"> <span style="font-size: 26px;"><b>DESPENSA DE INGREDIENTES</b></span> </div>

─── ❖ ───

<div style="margin: 20px 0; text-align: center;">
  <input 
    type="text" 
    id="filtro-ingredientes" 
    onkeyup="filtrarIngredientes()" 
    placeholder="🔍 Procurar ingrediente..." 
    style="width: 100%; max-width: 400px; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--lightgray); background: var(--light); color: var(--dark); font-size: 15px; outline: none;"
  >
</div>

<div id="lista-ingredientes">

### 🥩 Carnes, Peixes e Ovos
* [Frango](/tags/i/galinha)
* [Carne de Vaca](/tags/i/bovino)
* [Carne de Porco](/tags/i/porco)
* [Atum / Salmão](/tags/i/peixe)
* [Ovos](/tags/i/ovo)

---

### 🧅 Legumes e Vegetais
* [Alho](/tags/i/alho)
* [Cebola](/tags/i/cebola)
* [Tomate](/tags/i/tomate)
* [Batata](/tags/i/batata)
* [Cenoura](/tags/i/cenoura)
* [Gengibre](/tags/i/gengibre)

---

### 🧀 Laticínios e Básicos
* [Manteiga](/tags/i/manteiga)
* [Leite / Natas](/tags/i/leite)
* [Queijo](/tags/i/queijo)
* [Farinha](/tags/i/farinha)
* [Azeite](/tags/i/azeite)

---

### 🧂 Especiarias, Ervas e Molhos Base
* [Sal / Pimenta](/tags/i/sal)
* [Paprika / Pimentão Doce](/tags/i/paprikafumada)
* [Cominhos](/tags/i/cominhos)
* [Molho de Soja](/tags/i/molhosoja)
* [Mostarda](/tags/i/mostarda)
* [Ketchup](/tags/i/ketchup)
* [Vinagre Balsâmico](/tags/i/vinagrebalsamico)

</div>

<script>
function filtrarIngredientes() {
  const input = document.getElementById('filtro-ingredientes');
  const filtro = input.value.toLowerCase();
  const container = document.getElementById('lista-ingredientes');
  const itens = container.getElementsByTagName('li');

  for (let i = 0; i < itens.length; i++) {
    const texto = itens[i].textContent || itens[i].innerText;
    if (texto.toLowerCase().indexOf(filtro) > -1) {
      itens[i].style.display = "";
    } else {
      itens[i].style.display = "none";
    }
  }
}
</script>

─── ❖ ───
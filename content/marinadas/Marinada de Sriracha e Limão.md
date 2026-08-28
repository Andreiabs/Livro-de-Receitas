---
tags:
  - receita
  - marinada
  - testado
  - i/gengibre
  - i/limão
  - i/molhosoja
  - i/mel
  - i/sriracha
  - i/azeite
  - i/alho
  - i/sal
  - i/coentros
categoria: marinada
---
<div style="text-align: center; margin-top: 24px; margin-bottom: 4px;"> <span style="font-size: 26px;"><b>Marinada de Sriracha e Limão</b></span> </div>

<span class="text-align: center; margin-top: 0; margin-bottom: 24px;"> <center> [Eat the Bite](https://eatthebite.com/grilled-sriracha-lime-chicken/) </center></span>

<div style="text-align: center; margin: 30px 0; color: var(--gray); font-size: 0.9rem; letter-spacing: 0.4em;">   ─── ❖ ─── </div>

- [ ] 1 tbsp gengibre *ralado*
- [ ] 1 tbsp raspa de limão
- [ ] 1/2 cup sumo de limão
- [ ] 1/2 cup molho soja
- [ ] 3/4 cup de mel
- [ ] 1/4 cup de sriracha
- [ ] 3 tbsp azeite
- [ ] 5 dentes de alho, *descascados*
- [ ] 1 tbsp sal 
- [ ] 1 cup coentros frescos

<div style="text-align: center; margin: 30px 0; color: var(--gray); font-size: 0.9rem; letter-spacing: 0.4em;">   ─── ❖ ─── </div>

- [ ] Coloque os ingredientes num processador de alimentos ou liquidificador. Misture até que tudo esteja bem combinado.
- [ ] Reserve um pouco da marinada para pincelar o frango depois de cozido.
- [ ] Coloque o frango numa tigela grande e massage a restante marinada.
- [ ] Cubra o frango com uma tampa ou película aderente. Deixe marinar durante 3 horas durante a noite.

<div style="text-align: center; margin: 30px 0; color: var(--gray); font-size: 0.9rem; letter-spacing: 0.4em;">   ─── ❖ ─── </div>


<div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin: 20px 0;"><button id="wakeLockBtn" onclick="toggleWakeLock()" style="background: var(--lightgray); color: var(--darkgray); border: 1px solid var(--gray); padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">📱 Manter Ecrã Ligado</button><button onclick="document.querySelectorAll('input[type=checkbox]').forEach(c => c.checked = false)" style="background: var(--lightgray); color: var(--darkgray); border: 1px solid var(--gray); padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">🔄 Reiniciar Receita</button><button onclick="window.print()" style="background: var(--lightgray); color: var(--darkgray); border: 1px solid var(--gray); padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">🖨️ Imprimir</button></div>
<script>
let wakeLock = null;
async function toggleWakeLock() {
  const btn = document.getElementById('wakeLockBtn');
  if ('wakeLock' in navigator) {
    if (!wakeLock) {
      wakeLock = await navigator.wakeLock.request('screen');
      btn.textContent = '🔒 Ecrã Bloqueado';
    } else {
      await wakeLock.release();
      wakeLock = null;
      btn.textContent = '📱 Manter Ecrã Ligado';
    }
  }
}
</script>
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const RecipeControls: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  // Não renderizar na página inicial
  if (fileData.slug === "index") {
    return null
  }

  return (
    <div class="recipe-controls">
      <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin: 25px 0;">
        <button id="wakeLockBtn" onclick="toggleWakeLock()" style="background: var(--lightgray); color: var(--darkgray); border: 1px solid var(--gray); padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
          📱 Manter Ecrã Ligado
        </button>
        <button onclick="document.querySelectorAll('input[type=checkbox]').forEach(c => c.checked = false)" style="background: var(--lightgray); color: var(--darkgray); border: 1px solid var(--gray); padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
          🔄 Reiniciar Receita
        </button>
        <button onclick="window.print()" style="background: var(--lightgray); color: var(--darkgray); border: 1px solid var(--gray); padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">
          🖨️ Imprimir
        </button>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
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
      `}} />
    </div>
  )
}

export default (() => RecipeControls) satisfies QuartzComponentConstructor
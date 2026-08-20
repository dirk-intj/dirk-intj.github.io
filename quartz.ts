import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
// 1. Импортируем фабрику встроенных компонентов Кварца
import * as Component from "./quartz/components"

const config = await loadQuartzConfig()
export default config

// 2. Загружаем стандартный макет
const layoutConfig = await loadQuartzLayout()

// 3. Магия: принудительно заталкиваем наш HTML-блок в массив afterBody для контентных страниц
layoutConfig.byPageType.content.afterBody.push(
  Component.Html(`
    <div class="legal-disclaimer" style="margin-top: 40px; padding-top: 20px; border-top: 1px dashed gray; font-family: sans-serif;">
      <p style="font-size: 11px; color: gray; text-align: center; line-height: 1.4; margin-bottom: 10px;">
        <b>Возрастная категория: 18+</b> (Запрещено для детей в соответствии с Федеральным законом № 436-ФЗ). <br />
        Все материалы данного ресурса являются некоммерческим литературным творчеством и художественным вымыслом автора и предназначены исключительно для совершеннолетней аудитории.
      </p>
      <p style="font-size: 11px; color: gray; text-align: center; margin: 0;">
        © HiddenHade | Цитадель Созидателя | 2026–${new Date().getFullYear()}. Все права защищены.
      </p>
    </div>
  `)
)

export const layout = layoutConfig

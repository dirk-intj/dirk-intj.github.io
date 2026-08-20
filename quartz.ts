import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config

const layoutConfig = await loadQuartzLayout()

// 1. Создаем наш чистый HTML-текст в виде строки
const legalHtml = `
  <div class="legal-disclaimer" style="margin-top: 40px; padding-top: 20px; border-top: 1px dashed gray; font-family: sans-serif;">
    <p style="font-size: 11px; color: gray; text-align: center; line-height: 1.4; margin-bottom: 10px;">
      <b>Возрастная категория: 18+</b> (Запрещено для детей в соответствии с Федеральным законом № 436-ФЗ). <br />
      Все материалы данного ресурса являются некоммерческим литературным творчеством и художественным вымыслом автора и предназначены исключительно для совершеннолетней аудитории.
    </p>
    <p style="font-size: 11px; color: gray; text-align: center; margin: 0;">
      © HiddenHade | Цитадель Созидателя | 2026. Все права защищены.
    </p>
  </div>
`

// 2. Магия: перехватываем функцию рендеринга всего макета и делаем инъекцию строки перед закрытием тела
const originalPageBody = layoutConfig.byPageType.content.pageBody

if (originalPageBody) {
  const originalRender = originalPageBody.component
  originalPageBody.component = (props) => {
    const html = originalRender(props)
    // Вшиваем наш дисклеймер прямо в физический HTML-код контента страницы
    return html + legalHtml
  }
}

export const layout = layoutConfig

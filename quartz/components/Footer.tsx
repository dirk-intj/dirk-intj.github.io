return (
  <footer className={`${displayClass}`}>
    {/* 1. Этот HTML-текст теперь физически вшит в каждую страницу сайта */}
    <p style={{ fontSize: "11px", color: "gray", textAlign: "center", lineHeight: "1.4", margin: "10px 0" }}>
      <b>Возрастная категория: 18+</b> (Запрещено для детей в соответствии с Федеральным законом № 436-ФЗ). <br />
      Все материалы данного ресурса являются некоммерческим литературным творчеством и художественным вымыслом автора и предназначены исключительно для совершеннолетней аудитории.
    </p>

    <p style={{ fontSize: "11px", color: "gray", textAlign: "center", margin: "10px 0" }}>
      © HiddenHade | Цитадель Созидателя | 2026–{year}. Все права защищены.
    </p>

    {/* 2. Оригинальная строчка Кварца и ссылки, которые послушно встанут в самый низ */}
    <p style={{ fontSize: "10px", color: "darkgray", textAlign: "center", marginTop: "15px" }}>
      {i18n(cfg.locale).components.footer.createdWith}{" "}
      <a href="https://jzhao.xyz">Quartz v{version}</a> © {year}
    </p>

    <ul>
      {Object.entries(links).map(([text, link]) => (
        <li>
          <a href={link}>{text}</a>
        </li>
      ))}
    </ul>
  </footer>
)

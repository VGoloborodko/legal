import { useState, useCallback } from "react";
import "../../styles/style.scss";
import styles from "./Stylekit.module.scss";

function Stylekit() {
  // TypeScript типы
  const [copiedClass, setCopiedClass] = useState<string | null>(null);

  // useCallback + типы
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedClass(text);
      setTimeout(() => {
        setCopiedClass(null);
      }, 2000);
    } catch (err) {
      console.error("Ошибка копирования через API:", err);
    }
  }, []);

  // Типизированная функция
  const getButtonText = (text: string): string => {
    return copiedClass === text ? "Copied!" : text;
  };

  return (
    <>
      {/* <div className={`${styles["all-buttons"]} sp-t-pink`}>
      <div className="container">
        <div className="col">
          <h2 className="font-h2 sp-b-yellow">Buttons</h2>
          <div className={styles["all-buttons__block"]}>
            <Button href="#" text="Кнопка" src={iconAdd} />
          </div>
        </div>
      </div>
    </div> */}

      {/* Шрифты */}
      <div className={`${styles["all-fonts"]} sp-t-pink`}>
        <div className="container">
          <div className="col">
            <h2 className="font-h2 sp-b-purple">Fonts</h2>
            <div className={styles["all-fonts__wrapper"]}>
              <div className={styles["all-fonts__font"]}>
                <h1 className="font-h1">Title H1</h1>
                <div
                  className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "font-h1" ? styles.copied : ""}`}
                  onClick={() => copyToClipboard("font-h1")}
                >
                  {getButtonText("font-h1")}
                </div>
              </div>

              <div className={styles["all-fonts__font"]}>
                <h2 className="font-h2">Title Н2</h2>
                <div
                  className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "font-h2" ? styles.copied : ""}`}
                  onClick={() => copyToClipboard("font-h2")}
                >
                  {getButtonText("font-h2")}
                </div>
              </div>

              <div className={styles["all-fonts__font"]}>
                <p className="font-s-l">Subtitle large</p>
                <div
                  className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "font-s-l" ? styles.copied : ""}`}
                  onClick={() => copyToClipboard("font-s-l")}
                >
                  {getButtonText("font-s-l")}
                </div>
              </div>

              <div className={styles["all-fonts__font"]}>
                <p className="font-s-m">Subtitle medium</p>
                <div
                  className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "font-s-m" ? styles.copied : ""}`}
                  onClick={() => copyToClipboard("font-s-m")}
                >
                  {getButtonText("font-s-m")}
                </div>
              </div>

              <div className={styles["all-fonts__font"]}>
                <p className="font-s-s">Subtitle small</p>
                <div
                  className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "font-s-s" ? styles.copied : ""}`}
                  onClick={() => copyToClipboard("font-s-s")}
                >
                  {getButtonText("font-s-s")}
                </div>
              </div>

              <div className={styles["all-fonts__font"]}>
                <p className="font-t-l">Text large</p>
                <div
                  className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "font-t-l" ? styles.copied : ""}`}
                  onClick={() => copyToClipboard("font-t-l")}
                >
                  {getButtonText("font-t-l")}
                </div>
              </div>

              <div className={styles["all-fonts__font"]}>
                <p className="font-t-m">Text medium</p>
                <div
                  className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "font-t-m" ? styles.copied : ""}`}
                  onClick={() => copyToClipboard("font-t-m")}
                >
                  {getButtonText("font-t-m")}
                </div>
              </div>

              <div className={styles["all-fonts__font"]}>
                <p className="font-t-s">Text small</p>
                <div
                  className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "font-t-s" ? styles.copied : ""}`}
                  onClick={() => copyToClipboard("font-t-s")}
                >
                  {getButtonText("font-t-s")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Отступы */}
      <div className={`${styles["indentation-system"]} sp-v-pink`}>
        <div className="container">
          <div className="col">
            <h2 className="font-h2 sp-b-purple">Indentation system</h2>
            <div className={styles["indentation-system__wrapper"]}>
              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div className={styles["indentation-system__box-grey"]}></div>
                  <div className="font-b-l">4px/4px/4px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    grey
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-grey" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-grey")}
                  >
                    {getButtonText("sp-t-grey")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-grey" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-grey")}
                  >
                    {getButtonText("sp-b-grey")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-grey" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-grey")}
                  >
                    {getButtonText("sp-v-grey")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-darkpurple"]}
                  ></div>
                  <div className="font-b-l">8px/8px/8px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    darkpurple
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-darkpurple" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-darkpurple")}
                  >
                    {getButtonText("sp-t-darkpurple")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-darkpurple" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-darkpurple")}
                  >
                    {getButtonText("sp-b-darkpurple")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-darkpurple" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-darkpurple")}
                  >
                    {getButtonText("sp-v-darkpurple")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div className={styles["indentation-system__box-blue"]}></div>
                  <div className="font-b-l">12px/12px/8px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    blue
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-blue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-blue")}
                  >
                    {getButtonText("sp-t-blue")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-blue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-blue")}
                  >
                    {getButtonText("sp-b-blue")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-blue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-blue")}
                  >
                    {getButtonText("sp-v-blue")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-lightblue"]}
                  ></div>
                  <div className="font-b-l">16px/16px/12px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    lightblue
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-lightblue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-lightblue")}
                  >
                    {getButtonText("sp-t-lightblue")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-lightblue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-lightblue")}
                  >
                    {getButtonText("sp-b-lightblue")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-lightblue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-lightblue")}
                  >
                    {getButtonText("sp-v-lightblue")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-yellow"]}
                  ></div>
                  <div className="font-b-l">20px/20px/20px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    yellow
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-yellow" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-yellow")}
                  >
                    {getButtonText("sp-t-yellow")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-yellow" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-yellow")}
                  >
                    {getButtonText("sp-b-yellow")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-yellow" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-yellow")}
                  >
                    {getButtonText("sp-v-yellow")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-darkorange"]}
                  ></div>
                  <div className="font-b-l">20px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    darkorange
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-darkorange" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-darkorange")}
                  >
                    {getButtonText("sp-t-dark-orange")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-darkorange" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-darkorange")}
                  >
                    {getButtonText("sp-b-dark-orange")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-darkorange" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-darkorange")}
                  >
                    {getButtonText("sp-v-darkorange")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-burgundy"]}
                  ></div>
                  <div className="font-b-l">24px/24px/20px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    burgundy
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-burgundy" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-burgundy")}
                  >
                    {getButtonText("sp-t-burgundy")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-burgundy" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-burgundy")}
                  >
                    {getButtonText("sp-b-burgundy")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-burgundy" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-burgundy")}
                  >
                    {getButtonText("sp-v-burgundy")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div className={styles["indentation-system__box-red"]}></div>
                  <div className="font-b-l">28px/28px/24px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    red
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-red" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-red")}
                  >
                    {getButtonText("sp-t-red")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-red" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-red")}
                  >
                    {getButtonText("sp-b-red")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-red" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-red")}
                  >
                    {getButtonText("sp-v-red")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div className={styles["indentation-system__box-mint"]}></div>
                  <div className="font-b-l">32px/32px/28px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    mint
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-mint" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-mint")}
                  >
                    {getButtonText("sp-t-mint")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-mint" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-mint")}
                  >
                    {getButtonText("sp-b-mint")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-mint" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-mint")}
                  >
                    {getButtonText("sp-v-mint")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-purple"]}
                  ></div>
                  <div className="font-b-l">40px/40px/32px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    purple
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-purple" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-purple")}
                  >
                    {getButtonText("sp-t-purple")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-purple" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-purple")}
                  >
                    {getButtonText("sp-b-purple")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-purple" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-purple")}
                  >
                    {getButtonText("sp-v-purple")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-darkblue"]}
                  ></div>
                  <div className="font-b-l">48px/40px/32px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    darkblue
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-darkblue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-darkblue")}
                  >
                    {getButtonText("sp-t-darkblue")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-darkblue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-darkblue")}
                  >
                    {getButtonText("sp-b-darkblue")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-darkblue" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-darkblue")}
                  >
                    {getButtonText("sp-v-darkblue")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-green"]}
                  ></div>
                  <div className="font-b-l">64px/48px/40px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    green
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-green" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-green")}
                  >
                    {getButtonText("sp-t-green")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-green" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-green")}
                  >
                    {getButtonText("sp-b-green")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-green" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-green")}
                  >
                    {getButtonText("sp-v-green")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div
                    className={styles["indentation-system__box-orange"]}
                  ></div>
                  <div className="font-b-l">80px/64px/40px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    orange
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-orange" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-orange")}
                  >
                    {getButtonText("sp-t-orange")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-orange" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-orange")}
                  >
                    {getButtonText("sp-b-orange")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-orange" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-orange")}
                  >
                    {getButtonText("sp-v-orange")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div className={styles["indentation-system__box-pink"]}></div>
                  <div className="font-b-l">100px/80px/64px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    pink
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-pink" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-pink")}
                  >
                    {getButtonText("sp-t-pink")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-pink" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-pink")}
                  >
                    {getButtonText("sp-b-pink")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-pink" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-pink")}
                  >
                    {getButtonText("sp-v-pink")}
                  </div>
                </div>
              </div>

              <div className={styles["indentation-system__padding-colors"]}>
                <div className={styles["indentation-system__color-block"]}>
                  <div className={styles["indentation-system__box-wine"]}></div>
                  <div className="font-b-l">120px/100px/80px</div>
                  <div
                    className={`font-b-l ${styles["indentation-system__name"]}`}
                  >
                    wine
                  </div>
                </div>
                <div className={styles["indentation-system__button-block"]}>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-t-wine" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-t-wine")}
                  >
                    {getButtonText("sp-t-wine")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-b-wine" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-b-wine")}
                  >
                    {getButtonText("sp-b-wine")}
                  </div>
                  <div
                    className={`font-b-l ${styles["indentation-system__class"]} ${copiedClass === "sp-v-wine" ? styles.copied : ""}`}
                    onClick={() => copyToClipboard("sp-v-wine")}
                  >
                    {getButtonText("sp-v-wine")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stylekit;

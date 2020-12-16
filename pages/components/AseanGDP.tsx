import styles from './styles/AseanGDP.module.scss'

export default function AseanGDP() {
  return (
    <div>
      <svg className="desktop" viewBox="0 0 100 25">
        <defs>
          <linearGradient id="asean-gdp-gradient" x1="23.5" y1="23.5" x2="1.5" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1ba7ec"/>
            <stop offset="0.18" stopColor="#24a3ed"/>
            <stop offset="0.47" stopColor="#3e98f0"/>
            <stop offset="0.85" stopColor="#6786f4"/>
            <stop offset="0.99" stopColor="#797ef6"/>
          </linearGradient>
          <linearGradient id="asean-gdp-gradient-2" x1="12.5" x2="100" xlinkHref="#asean-gdp-gradient" />
        </defs>
        <g className={styles.isolate}>
          <circle className={styles.circle} transform="rotate(90 12.5 12.5)" cx="12.5" cy="12.5" r="11" />
          <line className={styles.line} x1="12.5" y1="23.5" x2="99" y2="23.5"/>
          <image className={styles.dot} x="91" y="16" width="15" height="15" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAYAAADHLIObAAAACXBIWXMAAAsSAAALEgHS3X78AAADCklEQVR4Xu3awYoTWRSA4f/UrSQqrQlE6QE3EQSVgCi9nI0v4fNYeZ2eF3ExIgiRbhU6C1GjRpJume5U6t7johzpXc/gwb7q+aBWuQnFX7fqVooSVcV9v+KsAe6/8ZBGPKQRD2nEQxrxkEY8pBEPacRDGvGQRjykEQ9pxEMa8ZBGPKQRD2nEQxrxkEY8pBEPacRDGvGQRjykEQ9pxEMa8ZBGPKQRD2nEQxrxkEY8pBEPaaQ8a8B5EUGqCplOEYDxGK0qVJUs34yVDN/YlcmEsFrR0f6yNyCUAEtiI6vBut9n8+gREfIKmlXIyYQCZt0jhlsXm+5QS91OpCsABcWhNDKPcfPp5GTr8+vXf9W7uw/jWb/5o2QTsj2VZ71/2L5aIDdDlNupSLdQudYO0A+a9CUhvCgbDsqyN59OOd7dJYuY2VwjH1SEI4ZbnUZuFmV6kJAdVG6A9gFQPRThjqb0PAmPT1j/PR733oiQcrhuZrFqiyD3V3RC0x0icltVdhDugo6A7XYrRiD3BP7Ugh2Jen3J8kJVtYvRectiRlYVsmTZC7H8gyLcamciQ9CLfD3YqlqKUArUKnI9pTQIIZT/rurnLYsZOZ0igVCixWWEa+3prF1O7Z8IAgRVuqj2BCkFyWL/IZOQ/0MSoQHqELRRNJ31hR8li5DjMRqJDZKOUD6ArEBq4HSoBFIrsgTeJ02HkdiMx+e/0EAmIasKldVgHbXzTlOxj+gB6AI4BjZft2PQBaIHmor9qJ13shqsq8pDfqOKPu2ziWW9QHVPRJ+gPAOZAfN2kxnKs/Yz3YtlvXjaZ5PDrQ/8ZDfkRSr2Y9C9hL66xPxjVY3WuYTM4vYH2lk5mYzqS8w+HjE8KbX7thB5nuTUX0RlvmGzuMziM4zqXCJCRjPyFH9oYckfo/2msli1fwUe0oiHNOIhjXhIIx7SiIc04iGNeEgjHtKIhzTiIY14SCMe0oiHNOIhjXhIIx7SiIc04iGNeEgjHtKIhzTiIY14SCMe0oiHNOIhjXhIIx7SiIc04iGNfAHTeUOi9cpL6gAAAABJRU5ErkJggg=="/>
          <text x="12.5" y="12" className={styles.h2}>21%</text>
          <text x="12.5" y="15" className={styles.h4}>TO THE REGION'S</text>
          <text x="12.5" y="18" className={styles.h4}>GDP IN 2018</text>
          <text x="28" y="10" className={styles.p}>Home to the sixth largest global economy in 2019 at around US$3 trillion,</text>
          <text x="28" y="13" className={styles.p}>ASEAN is projected to grow at an average of 4.9 percent per annum for the next</text>
          <text x="28" y="16" className={styles.p}>decade. As a core growth driver, manufacturing contributes about US$670</text>
          <text x="28" y="19" className={styles.p}>billion or 21 percent to the regions GDP in 2018.</text>
        </g>
      </svg>
      <svg className="mobile" viewBox="0 0 80 40">
        <defs>
          <linearGradient id="asean-gdp-gradient" x1="51" y1="23.5" x2="29" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1ba7ec"/>
            <stop offset="0.18" stopColor="#24a3ed"/>
            <stop offset="0.47" stopColor="#3e98f0"/>
            <stop offset="0.85" stopColor="#6786f4"/>
            <stop offset="0.99" stopColor="#797ef6"/>
          </linearGradient>
        </defs>
        <g className={styles.isolate}>
          <circle className={styles.circle} transform="rotate(90 40 12.5)" cx="40" cy="12.5" r="11" />
          <text x="40" y="12" className={styles.h2}>21%</text>
          <text x="40" y="15" className={styles.h4}>TO THE REGION'S</text>
          <text x="40" y="18" className={styles.h4}>GDP IN 2018</text>
          <text x="40" y="30" className={styles.p}>Home to the sixth largest global economy in 2019 at around US$3 trillion,</text>
          <text x="40" y="33" className={styles.p}>ASEAN is projected to grow at an average of 4.9 percent per annum for the next</text>
          <text x="40" y="36" className={styles.p}>decade. As a core growth driver, manufacturing contributes about US$670</text>
          <text x="40" y="39" className={styles.p}>billion or 21 percent to the regions GDP in 2018.</text>
        </g>
      </svg>
    </div>
  )
}
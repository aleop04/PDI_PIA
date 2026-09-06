export function renderStatsTable(titulo, headers, rows) {

  return `
    <section class="stadistics-section">

      <h2>${titulo}</h2>

      <div class="stadistics-divider"></div>

      <div class="stadistics-table-wrap">

        <table class="stadistics-table">

          <thead>
            <tr>
              ${headers.map(header => `
                <th>${header}</th>
              `).join("")}
            </tr>
          </thead>

          <tbody>

            ${rows.map(row => `
              <tr>
                ${row.map(value => `
                  <td>${value}</td>
                `).join("")}
              </tr>
            `).join("")}

          </tbody>

        </table>

      </div>

    </section>
  `;
}
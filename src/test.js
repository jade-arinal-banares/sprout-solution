
async function loadIntoTable(url, table){
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);

    const { headers, rows } = await response.json();

    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    for(const headerText of headers){
        const headerElement = document.createElement("th");

        headerElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headerElement);
    

    for(const cellText of rows){
        const rowElement = document.createElement("td");

        HTMLTableCellElement.textContent = cellText;
        rowElement.appendChild(cellElement);
    }

    tableBody.appendChild(rowElement);
    }
}

loadIntoTable("./json/data.json", document.querySelector("data_table"));

    fetch("./json/data.json")

    .then(function(response){
        return response.json();
    })

    .then(function(announcement){
        let sproutTable = document.querySelector("#sprout-data");
        let output = "";

            for(let announce of announcement){
                output += `
                    <tr>
                        <td>${announce.title}</td>
                        <td>${announce.message}</td>
                        <td>${announce.sentby}</td>
                        <td>${announce.sent}</td>
                        <td>${announce.date}</td>
                        <td>${announce.start}</td>
                        <td>${announce.end}</td>
                    </tr>
                `;
            }

        sproutTable.innerHTML = output;
    })

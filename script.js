let fields = [
    null, //1
    null, //2
    null, //3
    'cross', //4
    null, //5
    null, //6
    null, //7
    'circle', //8
    null, //9
];

function init(){
    render();
}

function render() {
    // Get the content div
    const content = document.getElementById('content');

    // Generate the table HTML
    let tableHTML = '<table class="tic-tac-toe">';
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let cellContent = '';

            if (fields[index] === 'circle') {
                cellContent = 'O';
            } else if (fields[index] === 'cross') {
                cellContent = 'X';
            }

            tableHTML += `<td>${cellContent}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    // Render the table in the content div
    content.innerHTML = tableHTML;
}
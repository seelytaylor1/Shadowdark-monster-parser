document.getElementById('convertButton').addEventListener('click', function() {
    var textInput = document.getElementById('textInput').value;
    var jsonOutput = document.getElementById('jsonOutput');
    var jsonData = parseText(textInput);
    jsonOutput.textContent = JSON.stringify(jsonData, null, 4);
});

function parseText(text) {
    let lines = text.split('\n');
    let data = {
        "name": "",
        "description": "",
        "stats": {},
        "abilities": {}
    };

    lines.forEach(line => {
        line = line.trim();
        if (line) {
            // Add your specific text parsing logic here
            // For example, if a line starts with "AC", assign it to data.stats.AC
            // You'll need to tailor this based on how your text is structured
        }
    });

    return data;
}

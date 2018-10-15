function sendData() {
    //Select all records from the coordinates table
    //then, initialize a text string, loop for each record in the records set
    //write data in a json array format

    db.executeSql('SELECT * FROM locations', [], function (rs) {
        //parseRecords(rs);//+ rs.rows.item(0).mycount);
        testData();
    }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
    });


}


/*function parseRecords(rs) {
    var http = new XMLHttpRequest();
    var text = "[";
    var pdata = 'data=' + text;
    var url = 'http://localhost/savedata.php';
    http.open('POST', url, true);

    for (i = 0; i < rs.count; i++) {
        text += '{"loc":"' + rows.item(i).loc + '","lat":"' + rows.item(i).lat + '","lon":"' + rows.item(i).lon + "}";
    }
    text += "]";

    http.onreadystatechange = function () {//Call a function when the state changes
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(pdata);
}*/

/*function testData() {
    var http = new XMLHttpRequest();
    var pdata = 'data=';
    var url = 'http://localhost/savedata.php';
    http.open('POST', url, true);
    var string = '[{"loc":"mess hall","lat":"32.4555","lon":"-114.81659"},' +
        '{"loc":"storehouse","lat":"32.5444","lon":"-114.4555"}]'
    pdata += string;

    http.onreadystatechange = function () {//Call a function when the state changes
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(pdata);

}*/

function testData() {
    var string = '[{"loc":"mess hall","lat":"32.4555","lon":"-114.81659"},' +
        '{"loc":"storehouse","lat":"32.5444","lon":"-114.4555"}]';
    $.post("http://192.168.2.30/stedydata/saveData.php", string,
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    console.log("returned");
}
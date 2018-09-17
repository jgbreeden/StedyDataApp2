var db;﻿

function createDB() {
    db = window.sqlitePlugin.openDatabase({
        name: 'stedy.db',
        location: 'default',
        androidDatabaseImplementation: 2
    });
    console.log("db created");
}

function createTable() {
    db.transaction(function (transaction) {
        console.log("create table");
        var executeQuery = "CREATE TABLE IF NOT EXISTS locations (loc, lat, lon)";
        transaction.executeSql(executeQuery, [],
            function (tx, result) {
                alert("Table Created Successfully");
            },
            function (error) {
                alert("An Error has Occurred");
            });
    });
}

function insertInto() {
    var lName = document.getElementById("lName").value;
    var lat = document.getElementById("lat").value;
    var long = document.getElementById("long").value;
    if (lName && lat && long != "") {
        db.transaction(function (transaction) {
            var executeQuery = "INSERT INTO locations (loc, lon, lat) VALUES (?, ?, ?)";
            transaction.executeSql(executeQuery, [lName, lat, long],
                function (tx, result) {
                    alert("SUCCESSSSSSSS");
                },
                function (error) {
                    alert("ERRORE -ZES HAZ HAPPPPPENEDED");
                });
        });
    } else {
        alert("Please Fill In All Fields");
    }
}

function locList() {
    createDB();
    db.executeSql('SELECT * FROM locations', [], function (rs) {
        listItems(rs);//+ rs.rows.item(0).mycount);
    }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
    });
}

function listItems(rs) {
    var text = "";
    for (i = 0; i < rs.rows.length; i++) {
        text += '<li>"loc:""' + rs.rows.item(i).loc + '", "lat:""' + rs.rows.item(i).lat + '", "lon:""' + rs.rows.item(i).lon + "</li> ";
    }
    console.log(text);
    
    document.getElementById("dataList").innerHTML = text; 
}

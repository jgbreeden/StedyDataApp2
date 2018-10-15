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
        var executeQuery = "CREATE TABLE IF NOT EXISTS locations (loc, lat, lon, dstamp)";
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
    var dstamp = new Date();
    if (lName && lat && long != "") {
        db.transaction(function (transaction) {
            var executeQuery = "INSERT INTO locations (loc, lon, lat, dstamp) VALUES (?, ?, ?, ?)";
            transaction.executeSql(executeQuery, [lName, lat, long, dstamp],
                function (tx, result) {
                    document.getElementById("lat").value = "";
                    document.getElementById("long").value = "";
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
    //console.log("db");
    //createDB();
    db.executeSql('SELECT * FROM locations', [], function (rs) {
        listItems(rs);//+ rs.rows.item(0).mycount);
    }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
    });
}

function listItems(rs) {
    var text = "";
    for (i = 0; i < rs.rows.length; i++) {
        text += '<li>loc:' + rs.rows.item(i).loc +
            ', lat:' + rs.rows.item(i).lat +
            ', lon:' + rs.rows.item(i).lon +
            ', dstamp:' + rs.rows.item(i).dstamp + '</li> ';
    }
    console.log(text);
    $("#popup").css("display", "none");
    document.getElementById("list").style.display = "block";
    document.getElementById("dataList").innerHTML = text; 
}

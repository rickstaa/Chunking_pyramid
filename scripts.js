/**
 * Created by ricks on 09/06/2017.
 */

/** Print random pyramid to div **/
function create_pyramid() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.lines) {
            var lines = localStorage.lines;
        } else {
            var lines = "10";
        }
    } else {
        document.querySelector(".left_pyramid").innerHTML = "Sorry, your browser does not support web storage...";
        document.querySelector(".right_pyramid").innerHTML = "Sorry, your browser does not support web storage...";
    }

    document.querySelector(".left_pyramid").innerHTML = pyramid(lines);
    document.querySelector(".right_pyramid").innerHTML = pyramid(lines);

    // Set radio button to checked value
    switch (lines) {
        case "15":
            document.getElementById('button_B').checked = true;
            break;
        case "20":
            document.getElementById('button_C').checked = true;
            break;
        default:
            document.getElementById('button_A').checked = true;
    }
}

// Get user input
function store_input() {

    if (typeof(Storage) !== "undefined") {
        if (document.querySelector('input[name="lines"]:checked').value) {
            localStorage.lines = document.querySelector('input[name="lines"]:checked').value;
            var lines = localStorage.lines;
        } else {
            localStorage.lines = "10";
            var lines = localStorage.lines;
        }
    } else {
        document.querySelector(".left_pyramid").innerHTML = "Sorry, your browser does not support web storage...";
        document.querySelector(".right_pyramid").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


// Create random number pyramid
function pyramid(lines) {
    var html = '<div class="center">';
    for (var i = lines; i--;) {
        var char = "";
        for (n = 0; n <= (lines - i - 1) + 3; n++) {
            char += Math.floor((Math.random() * 9) + 1);
        }

        if (i & 1) {
            // ODD
            html += new Array(Math.floor(i + 1)).join(' ') + char + '<br />';
        }
        else {
            // EVEN
            html += new Array(Math.floor(i + 1)).join(' ') + char + '<br />';
        }
    }
    return html + '</div>';
}
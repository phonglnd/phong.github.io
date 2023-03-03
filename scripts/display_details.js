
import projects from '/data/projects.json' assert {type: 'json'};
import experiences from '/data/experiences.json' assert {type: 'json'};

var MONTH_MAPPING = {
    1: "01",
    2: "02",
    3: "03",
    4: "04",
    5: "05",
    6: "06",
    7: "07",
    8: "08",
    9: "09",
    10: "10",
    11: "11",
    12: "12",
}

var MONTH_NAME_MAPPING = {
    1: "JAN",
    2: "FEB",
    3: "MAR",
    4: "APR",
    5: "MAY",
    6: "JUN",
    7: "JUL",
    8: "AUG",
    9: "SEP",
    10: "OCT",
    11: "NOV",
    12: "DEC",
}

function generate_experiences_section(obj) {
    var tmp = '';
    obj.forEach(element => {
        if (element.visible != false) {
            tmp += '<div id="project" style="width:100%;height:auto;display:inline-block;padding-top:0.2em;padding-bottom:0.5em">';
            tmp += '<div style="width:15%;float:left;text-align:center;border-right:1px solid #d38c76;height:auto;">';
            if (element.to_year != undefined && element.to_year != "") {
                tmp += '<h2>';
                tmp += (element.to_month != undefined && element.to_month != "") ? MONTH_NAME_MAPPING[element.to_month] + " " + String(element.to_year) : String(element.to_year);
                tmp += '</h2>';
            } else {
                tmp += '<h2>NOW</h2>';
            }
            if (element.from_year != undefined && element.from_year != "") {
                tmp += '<h3>|</h3>';
                tmp += '<h2>';
                tmp += (element.from_month != undefined && element.from_month != "") ? MONTH_NAME_MAPPING[element.from_month] + " " + String(element.from_year) : String(element.from_year);
                tmp += '</h2>';
            }
            tmp += '</div><div style="width:75%;float:left;padding-left:3%">';
            tmp += '<h6 style="letter-spacing:0;">';
            tmp += (element.company != undefined && element.company != "") ? String(element.title) + "  |  " + element.company : String(element.title);
            tmp += (element.field != undefined && element.field != "") ? " in " + String(element.field) : "";
            tmp += '</h6><h7>';
            tmp += String(element.abstract).replace("\n", "</h7><h7>");
            tmp += '</h7></div></div><br/>';
        }
    });
    return tmp;
};

function generate_project_section(obj) {
    var tmp = '';
    obj.forEach(element => {
        if (element.visible != false) {
            tmp += '<div id="project" style="width:100%;height:auto;display:inline-block"><div style="width:10%;float:left;text-align:center;border-right:1px solid #d38c76;height:auto;">';
            tmp += '<div id="year"><h2>';
            tmp += String(element.to_year);
            tmp += '</h2></div></div>';
            tmp += '<div class="list-detail-item"><h6>';
            tmp += String(element.name);
            tmp += '</h6><h7>';
            tmp += String(element.abstract);
            tmp += '</h7></div></div><br/>';
        }
    });
    return tmp;
};

window.onload = function() {
    var project_section = document.getElementById('PROJECTS');
    var experience_section = document.getElementById('ACTIVITIES');
    var projects_html = generate_project_section(projects);
    var experiences_html = generate_experiences_section(experiences);
    project_section.innerHTML += projects_html;
    experience_section.innerHTML += experiences_html;
};

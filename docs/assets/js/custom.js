(function() {
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        $('.splash').css({
            'background-position': '0px -' + (top / 3).toFixed(2) + 'px'
        });
        if (top > 50)
            $('#home > .navbar').removeClass('navbar-transparent');
        else
            $('#home > .navbar').addClass('navbar-transparent');
    });

    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

    var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function() {
        var html = $(this).parent().html();
        html = cleanSource(html);
        $("#source-modal pre").text(html);
        $("#source-modal").modal();
    });

    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();

    $(".bs-component").hover(function() {
        $(this).append($button);
        $button.show();
    }, function() {
        $button.hide();
    });

    function cleanSource(html) {
        html = html.replace(/×/g, "&times;")
            .replace(/«/g, "&laquo;")
            .replace(/»/g, "&raquo;")
            .replace(/←/g, "&larr;")
            .replace(/→/g, "&rarr;");

        var lines = html.split(/\n/);

        lines.shift();
        lines.splice(-1, 1);

        var indentSize = lines[0].length - lines[0].trim().length,
            re = new RegExp(" {" + indentSize + "}");

        lines = lines.map(function(line) {
            if (line.match(re)) {
                line = line.substring(indentSize);
            }

            return line;
        });

        lines = lines.join("\n");

        return lines;
    }

})();

// api call
root = 'https://api.rootnet.in/covid19-in/stats';
$.ajax({
    url: root + '/latest/',
    method: 'GET'
}).then(function(response) {
    // console display cheyynn
    var data = JSON.stringify(response);
    var obj = JSON.parse(data);
    //   window.alert(obj.data.regional[0].loc)
    // console.log(data);
    console.log(data);

    $('#lastRefreshed').text(obj.lastRefreshed);
    $('#lastRefreshed1').text(obj.lastRefreshed);

    $('#total').text(obj.data.summary.total);
    $('#confirmedCasesIndian').text(obj.data.summary.confirmedCasesIndian);
    $('#discharged').text(obj.data.summary.discharged);
    $('#deaths').text(obj.data.summary.deaths);

    $('#location0').text(obj.data.regional[0].loc);
    $('#confirmedCasesIndian0').text(obj.data.regional[0].confirmedCasesIndian);
    $('#discharged0').text(obj.data.regional[0].discharged);
    $('#deaths0').text(obj.data.regional[0].deaths);

    $('#location1').text(obj.data.regional[1].loc);
    $('#confirmedCasesIndian1').text(obj.data.regional[1].confirmedCasesIndian);
    $('#discharged1').text(obj.data.regional[1].discharged);
    $('#deaths1').text(obj.data.regional[1].deaths);

    $('#location2').text(obj.data.regional[2].loc);
    $('#confirmedCasesIndian2').text(obj.data.regional[2].confirmedCasesIndian);
    $('#discharged2').text(obj.data.regional[2].discharged);
    $('#deaths2').text(obj.data.regional[2].deaths);

    $('#location3').text(obj.data.regional[3].loc);
    $('#confirmedCasesIndian3').text(obj.data.regional[3].confirmedCasesIndian);
    $('#discharged3').text(obj.data.regional[3].discharged);
    $('#deaths3').text(obj.data.regional[3].deaths);

    $('#location4').text(obj.data.regional[4].loc);
    $('#confirmedCasesIndian4').text(obj.data.regional[4].confirmedCasesIndian);
    $('#discharged4').text(obj.data.regional[4].discharged);
    $('#deaths4').text(obj.data.regional[4].deaths);

    $('#location5').text(obj.data.regional[5].loc);
    $('#confirmedCasesIndian5').text(obj.data.regional[5].confirmedCasesIndian);
    $('#discharged5').text(obj.data.regional[5].discharged);
    $('#deaths5').text(obj.data.regional[5].deaths);

    $('#location6').text(obj.data.regional[6].loc);
    $('#confirmedCasesIndian6').text(obj.data.regional[6].confirmedCasesIndian);
    $('#discharged6').text(obj.data.regional[6].discharged);
    $('#deaths6').text(obj.data.regional[6].deaths);

    $('#location7').text(obj.data.regional[7].loc);
    $('#confirmedCasesIndian7').text(obj.data.regional[7].confirmedCasesIndian);
    $('#discharged7').text(obj.data.regional[7].discharged);
    $('#deaths7').text(obj.data.regional[7].deaths);

    $('#location8').text(obj.data.regional[8].loc);
    $('#confirmedCasesIndian8').text(obj.data.regional[8].confirmedCasesIndian);
    $('#discharged8').text(obj.data.regional[8].discharged);
    $('#deaths8').text(obj.data.regional[8].deaths);

    $('#location9').text(obj.data.regional[9].loc);
    $('#confirmedCasesIndian9').text(obj.data.regional[9].confirmedCasesIndian);
    $('#discharged9').text(obj.data.regional[9].discharged);
    $('#deaths9').text(obj.data.regional[9].deaths);

    $('#location10').text(obj.data.regional[10].loc);
    $('#confirmedCasesIndian10').text(obj.data.regional[10].confirmedCasesIndian);
    $('#discharged10').text(obj.data.regional[10].discharged);
    $('#deaths10').text(obj.data.regional[10].deaths);

    $('#location11').text(obj.data.regional[11].loc);
    $('#confirmedCasesIndian11').text(obj.data.regional[11].confirmedCasesIndian);
    $('#discharged11').text(obj.data.regional[11].discharged);
    $('#deaths11').text(obj.data.regional[11].deaths);

    $('#location12').text(obj.data.regional[12].loc);
    $('#confirmedCasesIndian12').text(obj.data.regional[12].confirmedCasesIndian);
    $('#discharged12').text(obj.data.regional[12].discharged);
    $('#deaths12').text(obj.data.regional[12].deaths);

    $('#location13').text(obj.data.regional[13].loc);
    $('#confirmedCasesIndian13').text(obj.data.regional[13].confirmedCasesIndian);
    $('#discharged13').text(obj.data.regional[13].discharged);
    $('#deaths13').text(obj.data.regional[13].deaths);

    $('#location14').text(obj.data.regional[14].loc);
    $('#confirmedCasesIndian14').text(obj.data.regional[14].confirmedCasesIndian);
    $('#discharged14').text(obj.data.regional[14].discharged);
    $('#deaths14').text(obj.data.regional[14].deaths);

    $('#location15').text(obj.data.regional[15].loc);
    $('#confirmedCasesIndian15').text(obj.data.regional[15].confirmedCasesIndian);
    $('#discharged15').text(obj.data.regional[15].discharged);
    $('#deaths15').text(obj.data.regional[15].deaths);

    $('#location16').text(obj.data.regional[16].loc);
    $('#confirmedCasesIndian16').text(obj.data.regional[16].confirmedCasesIndian);
    $('#discharged16').text(obj.data.regional[16].discharged);
    $('#deaths16').text(obj.data.regional[16].deaths);

    $('#location17').text(obj.data.regional[17].loc);
    $('#confirmedCasesIndian17').text(obj.data.regional[17].confirmedCasesIndian);
    $('#discharged17').text(obj.data.regional[17].discharged);
    $('#deaths17').text(obj.data.regional[17].deaths);

    $('#location18').text(obj.data.regional[18].loc);
    $('#confirmedCasesIndian18').text(obj.data.regional[18].confirmedCasesIndian);
    $('#discharged18').text(obj.data.regional[18].discharged);
    $('#deaths18').text(obj.data.regional[18].deaths);

    $('#location19').text(obj.data.regional[19].loc);
    $('#confirmedCasesIndian19').text(obj.data.regional[19].confirmedCasesIndian);
    $('#discharged19').text(obj.data.regional[19].discharged);
    $('#deaths19').text(obj.data.regional[19].deaths);

    $('#location20').text(obj.data.regional[20].loc);
    $('#confirmedCasesIndian20').text(obj.data.regional[20].confirmedCasesIndian);
    $('#discharged20').text(obj.data.regional[20].discharged);
    $('#deaths20').text(obj.data.regional[20].deaths);

    $('#location21').text(obj.data.regional[21].loc);
    $('#confirmedCasesIndian21').text(obj.data.regional[21].confirmedCasesIndian);
    $('#discharged21').text(obj.data.regional[21].discharged);
    $('#deaths21').text(obj.data.regional[21].deaths);

    $('#location22').text(obj.data.regional[22].loc);
    $('#confirmedCasesIndian22').text(obj.data.regional[22].confirmedCasesIndian);
    $('#discharged22').text(obj.data.regional[22].discharged);
    $('#deaths22').text(obj.data.regional[22].deaths);

    $('#location23').text(obj.data.regional[23].loc);
    $('#confirmedCasesIndian23').text(obj.data.regional[23].confirmedCasesIndian);
    $('#discharged23').text(obj.data.regional[23].discharged);
    $('#deaths23').text(obj.data.regional[23].deaths);

    $('#location24').text(obj.data.regional[24].loc);
    $('#confirmedCasesIndian24').text(obj.data.regional[24].confirmedCasesIndian);
    $('#discharged24').text(obj.data.regional[24].discharged);
    $('#deaths24').text(obj.data.regional[24].deaths);

    $('#location25').text(obj.data.regional[25].loc);
    $('#confirmedCasesIndian25').text(obj.data.regional[25].confirmedCasesIndian);
    $('#discharged25').text(obj.data.regional[25].discharged);
    $('#deaths25').text(obj.data.regional[25].deaths);

    $('#location26').text(obj.data.regional[26].loc);
    $('#confirmedCasesIndian26').text(obj.data.regional[26].confirmedCasesIndian);
    $('#discharged26').text(obj.data.regional[26].discharged);
    $('#deaths26').text(obj.data.regional[26].deaths);

    $('#location27').text(obj.data.regional[27].loc);
    $('#confirmedCasesIndian27').text(obj.data.regional[27].confirmedCasesIndian);
    $('#discharged27').text(obj.data.regional[27].discharged);
    $('#deaths27').text(obj.data.regional[27].deaths);

    $('#location28').text(obj.data.regional[28].loc);
    $('#confirmedCasesIndian28').text(obj.data.regional[28].confirmedCasesIndian);
    $('#discharged28').text(obj.data.regional[28].discharged);
    $('#deaths28').text(obj.data.regional[28].deaths);

    $('#location29').text(obj.data.regional[29].loc);
    $('#confirmedCasesIndian29').text(obj.data.regional[29].confirmedCasesIndian);
    $('#discharged29').text(obj.data.regional[29].discharged);
    $('#deaths29').text(obj.data.regional[29].deaths);


    // for accesssing it in html 
    // $('#location').text(data);

});
// Read more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

//stateTable


function getStateTable() {

    var settings = {
      "url": "https://api.covid19india.org/state_district_wise.json",
      "method": "GET",
    
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      var data = JSON.stringify(response);
      var obj = JSON.parse(data);
      var dist = Object.keys(obj.Kerala.districtData);
      var stateTable = "<table class='table table-striped table-hover' style='margin-left: -16px;'> ";
      stateTable+="<tr><th>No</th><th>ജില്ല</th><th class='info'>സ്ഥിരീകരിച്ച കേസുകൾ</th></tr>"
      var confirmedCases;
      var delt
      for (i in dist) {
        confirmedCases = obj.Kerala.districtData[dist[i]].confirmed;
        delt = obj.Kerala.districtData[dist[i]].delta.confirmed;
    
        stateTable += "<tr><td>"+(parseInt(i)+1)+"</td><td class='text-left'>" + dist[i] + "</td><td style='color:rgb(248, 150, 3)'><span>" + confirmedCases + "</span><span>(&uArr;" + delt + ")</span></td></tr>";
    
    
      }
      stateTable += "</table>"
    
      document.getElementById("StateTable").innerHTML = stateTable;
    
    
    });
    }
    
    getStateTable();
    
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
    
        stateTable += "<tr><td>"+(parseInt(i)+1)+"</td><td class='text-left'>" + dist[i] + "</td><td style='color:rgb(248, 150, 3)'><span>" + confirmedCases + "</span><spanstyle='color:red;' >(&uArr;" + delt + ")</span></td></tr>";
    
    
      }
      stateTable += "</table>"
    
      document.getElementById("StateTable").innerHTML = stateTable;
    
    
    });
    }
    
    getStateTable();
    
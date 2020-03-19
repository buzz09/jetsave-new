// get data in the form of json from database

 $.getJSON("/blogarea/allblogarea", data => {
    project = data;
    console.log(data);
    fillDropDown("blogarea", data, "Choose Location", 0);
});

$.getJSON("/addtype/alltype", data => {
    project = data;
    console.log(data);
    a("typename", data, "Choose type", 0);
});

function fillDropDown(id, data, label, selectedid = 0) {
    $(`#${id}`).empty();
    $(`#${id}`).append(
        $("<option>")
            .val("null")
            .text(label)
    );
    $.each(data, (i, item) => {
        if (item.id == selectedid) {
            $(`#${id}`).append(
                $("<option selected>")
                    .val(item.id)
                    .text(item.blogareaname)
            );
        } else {
            $(`#${id}`).append(
                $("<option>")
                    .val(item.id)
                    .text(item.blogareaname)
            );
        }
    });
};

function a(id, data, label, selectedid = 0) {
    $(`#${id}`).empty();
    $(`#${id}`).append(
        $("<option>")
            .val("null")
            .text(label)
    );
    $.each(data, (i, item) => {
        if (item.id == selectedid) {
            $(`#${id}`).append(
                $("<option selected>")
                    .val(item.id)
                    .text(item.typename)
            );
        } else {
            $(`#${id}`).append(
                $("<option>")
                    .val(item.id)
                    .text(item.typename)
            );
        }
    });
};

// get data from the database
$('#blogarea').change(function () {
    const a = $('#blogarea').val()

    $.get('/myprofile/allblogarea', { a }, data => {
        console.log(data)
        let table = `<div id="blogbottom" class="container-fluid full-width">
    <div class="row proftrav full-width">`
        $.each(data, function (i, item) {
            table += `    <div class="col-sm-6 col-md-4 proftravinner proftravmar">
            <span id="proftravlbo">
                <img class="proftravblogimg" src="/images/${item.blogimage}" alt=""></a>

                <img class="proftravlbo-author" src="" alt=""
                 style="width:50px;" height="50px;" >
            </span>
            <span class="">
                <h4 class="proftophead">2019, July 14</h4>
                <h3 class="profbottomhead">${item.blogtext}</h3>
            </span>
        </div>`;

        })

        $('#result').html(table)
        $('.filtercity').hide()
        $('#result').show()
    })

})

$('.filtercity').show()


// get filter accounding to choice
$('#typename').change(function () {
    const b = $('#typename').val()
    const a = $('#blogarea').val()

    $.get('/myprofile/alltypename', { a, b }, data => {
        console.log(data)
        let table = `<div id="blogbottom" class="container-fluid full-width">
    <div class="row proftrav full-width">`
        $.each(data, function (i, item) {
            table += `    <div class="col-sm-6 col-md-4 proftravinner proftravmar">
            <span id="proftravlbo">
                <img class="proftravblogimg" src="/images/${item.blogimage}" alt=""></a>

                <img class="proftravlbo-author" src="" alt=""
                 style="width:50px;" height="50px;" >
            </span>
            <span class="">
                <h4 class="proftophead">2019, July 14</h4>
                <h3 class="profbottomhead">${item.blogtext}</h3>
            </span>
        </div>`;

        })

        $('#result').html(table)
        $('.filtercity').hide()
        $('#result').show()
    })

})

$('.filtercity').show()

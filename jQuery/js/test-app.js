
var testApp = function() {
    console.log("jQuery/vanilla JS",this);

    var form = document.getElementById("search-form");
    var template = document.getElementById("results-template");
    var container = document.querySelector(".results");

    template.parentNode.removeChild(template);

    var stack,
        cards,
        newCards;

    // event handlers
    var events = function() {
        //
        form.addEventListener("submit", search, false);
        $(document).on("dragstart","img",function(e) {
            e.preventDefault();
        });
    };

    var search = function(e) {
        //
        e.preventDefault();
        console.log("search time ",form);
        /*

        $.ajax({
            url: 'https://api.discogs.com/database/search',
            data: {
                key: 'CbmQBdMQZRkYcSwEbfBJ',
                secret: 'ICTZsmvsZVSWzhmxlDBYMKnePnDzcHZW',
                artist: form.querySelector('[name=artist-box]').value,
                release_title: form.querySelector('[name=album-box]').value
            },
            type: "GET",
            success: function(data) {
                console.log(data);
                processResults(data.results);
            },
            error: function(error) {
                console.log(error.responseText.message);
            }

        });
        */
        processResults(window.ganglionReef);
    };

    var processResults = function(r) {
        var el = template.cloneNode(true);
        // document.querySelector(".results").innerHTML = "";
        //
        for (var i = 0, len = r.length; i < len; i++) {
            //
            var thisEl = el.cloneNode(true);
            // thisEl.querySelector("img").src = r[i].thumb;
            thisEl.querySelector(".release-title").innerHTML = r[i].title;
            thisEl.querySelector(".year").innerHTML = r[i].year;
            thisEl.querySelector(".id").innerHTML = r[i].id;
            thisEl.id = i;
            // document.querySelector(".results").appendChild(thisEl);
            cards.push(thisEl);
        }
        // makeDeck();
        console.log(cards);
        dealCards();
    };

    var prepareDeck = function() {
        stack = gajus.Swing.Stack();
        cards = [];
    };

    var dealCards = function(addToTop) {
        if (addToTop === undefined) {
            addToTop = true;
        }
        cards.forEach(function (targetElement, i) {
            // console.log(targetElement, i, cards.length);
            container.appendChild(targetElement);
            // container.insertBefore(targetElement,container.firstChild);
            // debugger;
            stack.createCard(targetElement);
            // debugger;
        });
        cards = [];
    };

    var makeDeck = function() {
        cards = [].slice.call(document.querySelectorAll(".result"));
        console.log("cards: ",cards);
        stack = gajus.Swing.Stack();
        // console.log("stack: ",stack);
        cards.forEach(function (targetElement, i) {
            // console.log(targetElement, i, cards.length);
            stack.createCard(targetElement);
        });
        console.log("cards (reversed?): ",cards);
        stack.on('throwout', function(e) {
            console.log("swing out!");
        });
    };

    var init = function() {
        events()
        prepareDeck();
        processResults(window.demolitionPlot);
    };

    return {
        start: init
    };
}();

testApp.start();
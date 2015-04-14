
var SearchForm = React.createClass({
    submitSearch: function(e) {
        e.preventDefault();
        console.log("search time ",e.target);
        $.ajax({
            url: 'https://api.discogs.com/database/search',
            data: {
                key: 'CbmQBdMQZRkYcSwEbfBJ',
                secret: 'ICTZsmvsZVSWzhmxlDBYMKnePnDzcHZW',
                artist: e.target.querySelector('[name=artist-box]').value,
                release_title: e.target.querySelector('[name=album-box]').value
            },
            type: "GET",
            success: function(data) {
                console.log(data);
                // showResults(data.results);
                React.render(
                    <ResultsList items={data.results} />,
                    document.querySelector('.results')
                );
            },
            error: function(error) {
                console.log(error.responseText.message);
            }
        });
    },
    render: function() {
        console.log(this);
        return (
            <form id="search-form" onSubmit={this.submitSearch}>
              <input type="text" name="artist-box" placeholder="Artist" />
              <input type="text" name="album-box" placeholder="Album" />
              <input type="submit" value="Submit" className="button" />
            </form>
        );
    }
    //
});

var ResultsList = React.createClass({
    render: function() {
        return (
            <ul className="results-list">
            {
                this.props.items.map(function(item) {
                    return (
                        <ResultsItem item={item} />
                    )
                })
            }
            </ul>
        )
    }
});

var ResultsItem = React.createClass({
    render: function() {
        return (
            <li className="result">
              <img src={this.props.item.thumb} />
              <ul>
                <li className="release-title">{this.props.item.title}</li>
                <li className="year">{this.props.item.year}</li>
              </ul>
            </li>
        );
    }
});

React.render(
    <SearchForm />,
    document.querySelector('.search-form')
);
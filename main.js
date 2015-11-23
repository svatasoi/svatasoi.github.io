
var Player = React.createClass({
	render: function () {
		return (
			<div className="container">
			  <div className="card">
			    <div data-path={this.props.name} className='player face front'></div>
			    <div data-path={this.props.name} className="player face back">
					  <p>{this.props.name}</p>
			    </div>
			  </div>
			</div>
		);
	}
});

var players = {
	"Neymar": {name: "Neymar", front: "test.html", back: "test.html"}, 
	"Iniesta": {front: "test.html", back: "test.html"}
};

// var neymar = {name: "Neymar", front: "test.html", back: "test.html"};

var neymar = { name: 'Toast', price: 1499 };

React.render(<Player player={neymar} />, document.body, 
	function () {
		$(".player").css( "border", "3px solid red" );
		/*
		$(".player").each(function(index) {
			$(this).load($(this).attr("data-path"));
		});
		*/
	}				
);
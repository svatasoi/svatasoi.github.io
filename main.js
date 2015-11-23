
var Player = React.createClass({
	render: function () {
		return (
			<div className="container">
			  <div className="card">
			    <div data-path={this.props.front} className='player face front'></div>
			    <div data-path={this.props.back} className="player face back">
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

var neymar = {name: "Neymar", front: "test.html", back: "test.html"};

var comp = <Player name={neymar.name} back={neymar.back} front={neymar.front} />

React.render(comp, document.body, 
	function () {
		$(".player").css( "border", "3px solid red" );
		
		$(".player").each(function(index) {
			$(this).load($(this).attr("data-path"));
		});
	}				
);
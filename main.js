
var Player = React.createClass({
	render: function () {
		return (
			<div className="container">
			  <div className="card">
			    <div data-path={this.props.front} className='load face front'></div>
			    <div data-path={this.props.back} className="face back">
					  <p>{this.props.name}</p>
			    </div>
			  </div>
			</div>
		);
	}
});

var players = {
	"Neymar": {name: "Neymar", front: "test.html", back: "test.html"}, 
	"Iniesta": {name: "Iniesta", front: "test.html", back: "test.html"}
};

$(document).ready(function() {
	$(".player").each(function(index) {
		var playerName = $(this).attr("data-player-name");

		// add tooltip to body (div.id=playerName-index)
		var tooltipID = playerName + index;
    var selector = '#' + tooltipID;
		$("body").append("<div id='"+tooltipID+"' width='200px' style='display:none'></div>");

		var player = players[playerName];

		React.render(<Player name={player.name} back={player.back} front={player.front} />, 
			$(selector).get(0), 
			function () {
				$(".load").css( "border", "3px solid red" );
				
				$(".load").each(function(index) {
					$(this).load($(this).attr("data-path"));
				}); 
			}				
		);

    Tipped.create(this, $(selector)[0]);
	});
});
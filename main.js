
var Player = React.createClass({
	render: function () {
		return (
			<div className="container">
			  <div className="card">
			    <div data-path={this.props.front} className='load face front'></div>
			    <div data-path={this.props.back} className="load face back">
					  <p>{this.props.name}</p>
			    </div>
			  </div>
			</div>
		);
	}
});

var players = {
	"Neymar": {name: "Neymar", front: "test.html", back: "test.html"}, 
	"Isco": {name: "Isco", front: "Isco_front2.html", back: "Isco_back.html"}
};

$(document).ready(function() {
	$(".player").each(function(index) {
		var playerName = $(this).attr("data-player-name");

		// add tooltip to body (div.id=playerName-index)
		var tooltipID = playerName + index;
    var selector = '#' + tooltipID;
		$("body").append("<div id='"+tooltipID+"' style='display:none'></div>");

		var player = players[playerName];

		React.render(<Player name={player.name} back={player.back} front={player.front} />, 
			$(selector).get(0), 
			function () {				
				$(".load").each(function(index) {
					$(this).load($(this).attr("data-path"));
				}); 
			}				
		);

    Tipped.create(this, $(selector)[0]);

    
		$('.flipCap').on('click', function() {
			$(this).toggleClass('clicked');
		});
	});
});
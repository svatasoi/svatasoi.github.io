
var Player = React.createClass({
	render: function () {
		return (
			<div className="container">
			  <div className="card">
			    <div className='face front'>
			    	<div data-path={this.props.front} className='load'></div>
			    	<a className='flipCap'>(more info...)</a>
			    </div>

			    <div className='face back'>
			    	<div data-path={this.props.back} className="load"></div>
			    	<a className='flipCap'>(less info...)</a>
			    </div>
			  </div>
			</div>
		);
	}
});

var players = {
	"Neymar": {name: "Neymar", front: "neymar_front.html", back: "neymar_back.html"}, 
	"Isco": {name: "Isco", front: "Isco_front2.html", back: "Isco_back.html"},
	"Suarez": {name: "Suarez", front: "suarez_front.html", back: "suarez_back.html"}
};

function bindClick() {
	$('.flipCap').on('click', function() {
		$(this).parent().parent().toggleClass('clicked');
	});
}

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
	});

	bindClick();
});
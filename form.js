var Form = {

	var first_name = document.getElementById('first_name');
	var last_name = document.getElementById('last_name');
	var zip = document.getElementById('zip');

	"textNotEmpty" : function(){

		if ( first_name.value == "" ) {
			alert('You forgot to give us your first name.');
		}

		if ( last_name.value == "" ) {
			alert('You forgot to give us your last name.');
		}

		if ( zip.value == "" ) {
			alert('You forgot to give us your zip code.');
		}

		return false;

	},

	"nameLength" : function(){

		if ( text input == )
	},

	"zipnumbers" : function(){

		if( zip isNaN() ) {
			alert('Your zip code should be numbers only.');
		}
	},
};

ensure no fields are empty

		names between 3 and 50 chars

		zip code only numbers

		give useful feedback to user in #errors div

		do not allow page to refresh
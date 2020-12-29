	//title script (C) Jakub Chaber
		document.addEventListener("visibilitychange", function() {
	    if (document.hidden){
	    	// console.log();
	    	document.getElementById('title').innerHTML='I want to be the very best.';
	        ;
	    } else {
	        document.getElementById('title').innerHTML='Like no one ever was.';
	        // document.getElementById('cl').focus();
	    }
		});


		document.addEventListener("scroll", function() {
			document.getElementById('title').innerHTML='Jakub Chaber | Portfolio';
		});
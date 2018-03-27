$(document).on('ready', function() {
	$('.slider').slick({		// small sliders
		dots: false,
	    infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 780,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 550,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 350,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	    ]
	});

	$('.sl-big').slick({		// big slider
		infinite: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 6,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 750,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 500,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
	    ]
	})
});
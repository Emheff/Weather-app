

// YOUR SCRIPTS GO HERE

//Random Number Generator
var limit = 6;
var randNum = Math.floor(Math.random() * limit);
console.log(randNum); 

// Get random body class
// Change background color
$('body').addClass( 'bg' + randNum );


// Sidr Drawer
// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
});


// Spokane
$.simpleWeather({
    location: 99223,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      var iconCode = 'icon-' + weather.code;
      $('i').attr('class', iconCode );
      
    },
      
    
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Seattle
$.simpleWeather({
    location: 98105,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#seattle .temp').text(weather.temp);
      $('#seattle .city').text(weather.city);
      var iconCode = 'icon-' + weather.code;
      $('i').attr('class', iconCode );
      
    
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// New York
$.simpleWeather({
    location: 10001,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#new_york .temp').text(weather.temp);
      $('#new_york .city').text(weather.city);
      var iconCode = 'icon-' + weather.code;
      $('i').attr('class', iconCode );
      
    
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Paris
$.simpleWeather({
    location: 75001,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#paris .temp').text(weather.temp);
      $('#paris .city').text(weather.city);
      var iconCode = 'icon-' + weather.code;
      $('i').attr('class', iconCode );
      
    
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });


// Set up the text files to be used.
var theText = new Array() // do not change this


theText[0] = 'Hello and welcome!<br>';
theText[1] = '<p class="emphasis">Did you know:</p>A flock of crows is called a murder.';
theText[2] = 'Life is like a box of chocolates, you never know what youre gonna get.<br><p class="emphasis">Forrest Gump</p>';
theText[3] = '<strong>I AM THE ONE WHO KNOCKS</strong><br><p class="emphasis">Breaking Bad</p>';
theText[4] = 'Hey Jude, dont make it bad. Take a sad song and make it better.<br><p class="emphasis">The Beatles</p>';
theText[5] = 'Ravioli, ravioli, give me the formuoli!<br><p class="emphasis">Spongebob Squarepants</p>';
theText[6] = 'How many tickles does it take to make an octopus laugh?<br><p class="emphasis">Ten-tickles</p>';
theText[7] = 'What do you call a room full of disorganized cats?<br><p class="emphasis">A cat-astrophe!</p>';
theText[8] = 'What did the fish say when he hit the wall?<br><p class="emphasis">Well dam.</p>';
theText[9] = 'If youre going through hell, keep going.<br><p class="emphasis">- Winston Churchill</p>';
theText[10] = 'Give me six hours to chop down a tree, and I will spend the first four sharpening the ax.<br><p class="emphasis">- Abraham Lincoln</p>';
theText[11] = 'The most powerful element in advertising is the truth.<br><p class="emphasis">- William Bernbach</p>';
theText[12] = 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.<br><p class="emphasis">- Helen Keller</p>';
theText[13] = 'Life isnt about finding yourself, life is about creating yourself.<br><p class="emphasis">- George Bernard Shaw</p>';

// do not edit anything below this line

var j = 0
var p = theText.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Array()
   preBuffer[i].src = theText[i]
}
var whichText = Math.round(Math.random()*(p-1));
function showText(){
//This a wrapper for the text array it can be changed if need
document.write('<span class="interest">'+theText[whichText]+'</span>');
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $(".text")
      .tooltip({ content: '<b style="color: red">Tooltip</b> <i>text</i>' });

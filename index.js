// Generate Random Numbers
var arr_keys = [];
var level_count = 0;
var click_count = 0;

// var i = 0;
// while(i<100){
//   var generated_random_num = Math.ceil(Math.random()*4);
//   arr_keys.push(assign_color(generated_random_num));
//   i = i + 1;
//
// }
console.log(arr_keys);
var keys_index = 0;
var game_running = 0;



$(".btn").on("click", function(){
  if(game_running && arr_keys[keys_index] == this.id && click_count <= level_count){
    click_count = click_count + 1;
    keys_index = keys_index + 1;

    if(click_count == level_count){
      level_count = level_count + 1;
      $("h1").text("Level "+ level_count);

      new_color = assign_color(Math.ceil(Math.random()*4))
      arr_keys.push(new_color)

      setTimeout(function(){
        auto_click_button(arr_keys[level_count-1]);
      }, 500);

      click_count = 0;
      keys_index = 0;
    }


    button_clicked = this.id;
    var class_add = $(this);
    var audio = new Audio('sounds/' + button_clicked +".mp3");
    audio.play();

    class_add.toggleClass("pressed");

    setTimeout(function(){
      class_add.toggleClass("pressed");
    }, 100);

  }
  else{

    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").toggleClass("game-over");
    setTimeout(function(){
      $("body").toggleClass("game-over");
    }, 100);

    $("h1").text("Game Over, Press Any Key to Restart");

    ask_press = 1;
  }

})

var ask_press = 1;
$(document).keypress(function(){
  if(ask_press == 1){
    start_game();
  }
})

function start_game(){
  ask_press = 0;
  game_running = 1;
  level_count = 1;
  arr_keys_pressed = [];
  $("h1").text("Level "+ level_count);

  new_color = assign_color(Math.ceil(Math.random()*4))
  arr_keys.push(new_color)
  auto_click_button(arr_keys[0]);

  keys_index = 0;
  click_count = 0;

  }


function assign_color(num){
  switch (num) {
    case 1:
    return "green";
    case 2:
    return "red";
    case 3:
    return "yellow";
    case 4:
    return "blue";

  }
}


function auto_click_button(color){

  var audio = new Audio('sounds/' + color +".mp3");
  audio.play();

  var color = "#" + color;
  $(color).toggleClass("pressed");

  setTimeout(function(){
    $(color).toggleClass("pressed");
  }, 100);

}

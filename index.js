var list_of_words = [["сосредотОчение", "сосредоточЕние"],["вероисповЕдание", "вероисповедАние"],["апострОф", "апОстроф"],
["жалюзИ", "жАлюзи"], ["танцОвщица", "танцовщИца"], ["опОшлить", "опошлИть"],["квартАл", "квАртал"],["корЫсть", "кОрысть"],
["кУхонный", "кухОнный"],["прозорлИвый", "прозОрливый"],["слИвовый", "сливОвый"],["бралА", "брАла"],["кровоточИть", "кровотОчить"],
["диспансЕр", "диспАнсер"],["Иксы", "иксЫ"],["лОктя", "локтЯ"],["намЕрение", "намерЕние"],["тУфля", "туфлЯ"],
["красИвее", "красивЕе"],["оптОвый", "Оптовый"],["мозаИчный", "мозАичный"],["взялА", "взЯла"],
["понЯвший", "пОнявший"],["началА", "нАчала"],["снятА", "снЯта"],["окружИт", "окрУжит"],
["озлОбить", "озлобИть"],["сверлИт", "свЕрлит"],["чЕрпать", "черпАть"],["премировАть", "премИровать"],
["пломбировАть", "пломбИровать"],["освЕдомиться", "осведомИться"],["облегчИть", "облЕгчить"],["дозИровать", "дозировАть"],
["защемИт", "защЕмит"],["вручИт", "врУчит"],["тОрты", "тортЫ"],["мастерскИ", "мАстерски"],
["дешевИзна", "дешевизнА"],["лЕкторов", "лекторОв"],["вЕчеря", "вечЕря"],["ассиметрИя", "ассимЕтрия"],["докраснА", "дОкрасна"],
["добелА", "дОбела"],["дОнизу", "донИзу"],["знАмение", "знамЕние"],["издрЕвле", "Издревле"],["кАшлянуть", "кашлянУть"],
["коклЮш", "кОклюш"],["крАлась", "кралАсь"],["зубчАтый", "зУбчатый"],["валовОй", "вАловый"],["кремЕнь", "крЕмень"],
["обеспЕчение", "обеспечЕние"],["ходАтайство", "ходатАйство"],["молЯщий", "мОлящий"],["фетИш", "фЕтиш"],["грУшевый", "грушЁвый"],
];

function playsound(sound) {
  var audio = new Audio(sound);
  audio.play();
};

function resetbtn() {
  $(".right_word").off("click");
  $(".wrong_word").off("click");
  $(".l_btn").removeClass("right_word");
  $(".r_btn").removeClass("right_word");
  $(".l_btn").removeClass("wrong_word");
  $(".r_btn").removeClass("wrong_word");
};

function start() {
  $(".start_btn").addClass("hidden");
  $(".normal_btn").addClass("hidden");
  $(".game_cont").removeClass("hidden");
  $(".game_cont").addClass("visible");
};

function round() {

  has_game_ended = 0;

  if (unused_words.length > 0) {
    pare = Math.floor(Math.random() * unused_words.length);
    word = Math.round(Math.random());
    $(".l_btn").html(unused_words[pare][word]);
    $(".r_btn").html(unused_words[pare][1-word]);
  };


  resetbtn();

  if (word == 0) {
    $(".l_btn").addClass("right_word");
    $(".r_btn").addClass("wrong_word");
  } else {
    $(".r_btn").addClass("right_word");
    $(".l_btn").addClass("wrong_word");
  };

  $(".right_word").click( function() {
    if (is_game_endless == 0 && score == len-1) {
        $("h1").html("🎉 Победа! 🎉");
        playsound("export_ofoct.com.mp3");
        resetbtn();
        $(".game_cont").addClass("hidden");
        $(".game_cont").removeClass("visible");
        $(".win").removeClass("hidden");

    } else {
      score++;
      $("h1").html("Ваш счёт: " + score);
      if (is_game_endless == 0) {
          $("h1").html("Ваш счёт: " + score + " / " + len);
      };
      playsound("mixkit-correct-answer-tone-2870.mp3");
      if (is_game_endless == 0) {
        unused_words.splice(pare,1);
      };
      console.log(unused_words);
      round();

    };
  });

  $(".wrong_word").click( function() {
    if (score > record) {
      record = score;
    };

    $(".score").html("Ваш счет: " + score);
    $(".record").html("Ваш рекорд: " + record);

    $(".end_cont").removeClass("hidden");
    $(".end_cont").addClass("visible2");

    score = 0;

    $("h1").html("Игра окончена!");
    playsound("mixkit-failure-arcade-alert-notification-240.mp3");
    $("body").addClass("mistake");

    has_game_ended = 1;

    resetbtn();

    $(".game_cont").addClass("hidden");
    $(".game_cont").removeClass("visible");

    $(".gameover").removeClass("hidden");

    $(".score").removeClass("hidden");
    $(".record").removeClass("hidden");


    setTimeout(function() {
      $("body").removeClass("mistake");
    },800)
  });

};

var pare = 0;
var word = 0;
var score = 0;
var has_game_started = 0;
var has_game_ended = 0;
var record = 0;
var is_game_endless = 0;
var unused_words = [];
var len = list_of_words.length;

for (var i = 0; i < len; i++) {
  unused_words.push(list_of_words[i]);
};


$(".start_btn").click(function() {
  $("h2").addClass("hidden");
  $("h1").html("Ваш счёт: " + score);
  start();
  is_game_endless = 1;
  round();
});

$(".normal_btn").click(function() {
  $("h2").addClass("hidden");
  $("h1").html("Ваш счёт: " + score + " / " + len);
  start();
  is_game_endless = 0;
  round();
});

$(".end_btn").click(function() {
  $("h3").addClass("hidden");
  $("h1").html("Ваш счёт: " + score);
  if (is_game_endless == 0) {
      $("h1").html("Ваш счёт: " + score + " / 58");
  };
  $(".end_cont").addClass("hidden");
  $(".end_cont").removeClass("visible2");
  $(".game_cont").removeClass("hidden");
  $(".game_cont").addClass("visible");
  unused_words = [];
  for (var i = 0; i < len; i++) {
    unused_words.push(list_of_words[i]);
  };

  round();
});

console.log(len)

(function ($) {
    'use strict';
  
    //合計問題数
    let $questionTotalNum = 50;
  
    //質問をランダムにする
    function shuffleQuiz(array) {
      for (let i = (array.length - 1); 0 < i; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let selected = array[i];
        array[i] = array[random];
        array[random] = selected;
      }
      return array;
    }
    let quizId = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"];
    shuffleQuiz(quizId);
  
    //現在の質問数
    let $currentNum = 0;
  
    //得点
    let $pointPerCorrect = 1;
  
    let questionObject = (function () {
      let Obj = function ($target) {
  
        //質問文
        this.$questionName = $target.find('.quiz-question');

        //質問画像
        this.$questionImage = $target.find('.quiz-image');
  
        //選択肢ボタン
        this.$questionButton = $target.find('.quiz-button');
        this.$button01 = $target.find('.button01');
        this.$button02 = $target.find('.button02');
  
        //次へ
        this.$goNextButton = $target.find('.go-next');
  
        //解説文
        this.$explain = $target.find('.explain');
  
        //score
        this.$score = $target.find('.score-wrap .score');
  
        this.init();
      };
      Obj.prototype = {
        //初回設定
        init: function () {
          //イベント登録
          this.event();
        },
        event: function () {
          let _this = this;
          let score = 0;
  
          //ウインドウ読み込み時
          $(window).on('load', function () {
            //value取得
            let value = quizId[$currentNum]; //最初は0（1番目）
            //次の質問を取得
            let nextQuestion = _this.searchQuestion(value);
            //次の質問に切り替える
            _this.changeQuestion(nextQuestion);
          });
  
          //button クリック
          this.$questionButton.on("click", function () {
            //正誤表示
            if ($(this).hasClass('right')) {
              $(this).parents('.quiz-answer').addClass('is-correct');
              score = score + $pointPerCorrect;
            } else {
              $(this).parents('.quiz-answer').addClass('is-incorrect');
            }

            //次へボタン表示
            $('.go-next').css('display','block');

            //解説文表示
            $('.explain').css('visibility','visible');

            //クリック無効化
            $(this).addClass('is-checked');
            $('.button01').addClass('disable');
            $('.button02').addClass('disable');
            return false;
          });
  
          //button クリック
          this.$goNextButton.on("click", function () {
  
            if ($currentNum + 1 == $questionTotalNum) {
              //ポストURL挿入
              let result;
              switch (Math.floor(score/10)) {
                case 5: result = '満点！貴方はフランス識者と言っていいでしょう。Vive la France！';
                  break;
                case 4: result = '高得点！結構なフランス知識をお持ちのようです。目指せ満点！';
                  break;
                case 3: result = 'そこそこの点数ですね。勉強してフランス識者になりましょう！';
                  break;
                case 2: result = 'あまりフランスについては知らないようですね。これから知っていきましょう！';
                  break;
                case 1: result = '驚きの低さです。フランスについて色々と勘違いしているかも？';
                  break;
                case 0: result = '2択クイズでこの点数を取るということは、あなたはおそらくフランス識者のデバッガーでしょう';
                  break;
              }
              $('.x-post').attr('href','https://x.com/intent/post?url=https://aaartillery.github.io/henji-ha-oui/&text=返事はOui! フランス的なものクイズであなたは' + score + '点！' + result);
              $('.result').text(result);
              //合計点レイヤー表示
              $('.finish').addClass('is-show');
              $('.score-wrap .score').text(score);
            } else {
              //現在の数字の更新
              $currentNum = $currentNum + 1;

              //次の質問番号を取得
              let value = $currentNum + 1 == $questionTotalNum ? "00" : quizId[$currentNum];

              //次の質問を取得
              let nextQuestion = _this.searchQuestion(value);

              //次の質問に切り替える
              _this.changeQuestion(nextQuestion);

              //クラスを取る
              _this.$questionButton.removeClass('is-checked');
              _this.$button01.removeClass('disable');
              _this.$button02.removeClass('disable');
              $('.quiz-answer').removeClass('is-correct').removeClass('is-incorrect');
            }
            return false;
          });
        },
        searchQuestion: function (questionId) {
          let nextQuestion = null;
          quizlist.forEach(function (item) {
            if (item.id == questionId) {
              nextQuestion = item;
            }
          });
          return nextQuestion;
        },
        changeQuestion: function (nextQuestion) {
          let _this = this;
  
          //質問番号を1つ増やす＆質問文の入れ替え
          let numPlusOne = $currentNum + 1;
          _this.$questionName.text('Q' + numPlusOne + '/50: ' +nextQuestion.question);

          //選択肢の正解を設定
          $('.right').removeClass('right');
          if (nextQuestion.answer == '1') {
            _this.$button01.addClass('right');
          } else {
            _this.$button02.addClass('right');
          }

          //次へボタンを非表示
          _this.$goNextButton.css('display', 'none');

          //解説文の入れ替え
          _this.$explain.text(nextQuestion.explain);
          _this.$explain.css('visibility', 'hidden');

          //画像の入れ替え
          _this.$questionImage.attr('src', nextQuestion.image);

        },
      };
      return Obj;
    })();
  
    let quiz = $('.quiz');
    if (quiz[0]) {
      let queInstance = new questionObject(quiz);
    }
  
})(jQuery);
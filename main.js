$(document).ready(function() {
    var degree = 1800;
    var clicks = 0;
    var temas = ['Tema 1', 'Tema 2', 'Tema 3', 'Tema 4', 'Tema 5', 'Tema 5', 'Tema 5', 'Tema 5']; // Array com os nomes dos temas
    var posicoes = [23.83, 47.66, 71.49, 95.32, 119.15, 142.98, 166.81, 190.64]; // Array com as posições correspondentes aos temas
    var perguntas = {
      'Tema 1': [
        'Pergunta 1 do Tema 1',
        'Pergunta 2 do Tema 1',
        'Pergunta 3 do Tema 1',
        'Pergunta 4 do Tema 1',
        'Pergunta 5 do Tema 1',
        'Pergunta 6 do Tema 1',
        'Pergunta 7 do Tema 1',
        'Pergunta 8 do Tema 1',
        'Pergunta 9 do Tema 1',
        'Pergunta 10 do Tema 1'
      ],
      'Tema 2': [
        'Pergunta 1 do Tema 2',
        'Pergunta 2 do Tema 2',
        'Pergunta 3 do Tema 2',
        'Pergunta 4 do Tema 2',
        'Pergunta 5 do Tema 2',
        'Pergunta 6 do Tema 2',
        'Pergunta 7 do Tema 2',
        'Pergunta 8 do Tema 2',
        'Pergunta 9 do Tema 2',
        'Pergunta 10 do Tema 2'
      ],
      'Tema 3': [
        'Pergunta 1 do Tema 3',
        'Pergunta 2 do Tema 3',
        'Pergunta 3 do Tema 3',
        'Pergunta 4 do Tema 3',
        'Pergunta 5 do Tema 3',
        'Pergunta 6 do Tema 3',
        'Pergunta 7 do Tema 3',
        'Pergunta 8 do Tema 3',
        'Pergunta 9 do Tema 3',
        'Pergunta 10 do Tema 3'
      ],
      'Tema 4': [
        'Pergunta 1 do Tema 4',
        'Pergunta 2 do Tema 4',
        'Pergunta 3 do Tema 4',
        'Pergunta 4 do Tema 4',
        'Pergunta 5 do Tema 4',
        'Pergunta 6 do Tema 4',
        'Pergunta 7 do Tema 4',
        'Pergunta 8 do Tema 4',
        'Pergunta 9 do Tema 4',
        'Pergunta 10 do Tema 4'
      ],
      'Tema 5': [
        'Pergunta 1 do Tema 5',
        'Pergunta 2 do Tema 5',
        'Pergunta 3 do Tema 5',
        'Pergunta 4 do Tema 5',
        'Pergunta 5 do Tema 5',
        'Pergunta 6 do Tema 5',
        'Pergunta 7 do Tema 5',
        'Pergunta 8 do Tema 5',
        'Pergunta 9 do Tema 5',
        'Pergunta 10 do Tema 5'
      ],
      'Tema 5': [
        'Pergunta 1 do Tema 5',
        'Pergunta 2 do Tema 5',
        'Pergunta 3 do Tema 5',
        'Pergunta 4 do Tema 5',
        'Pergunta 5 do Tema 5',
        'Pergunta 6 do Tema 5',
        'Pergunta 7 do Tema 5',
        'Pergunta 8 do Tema 5',
        'Pergunta 9 do Tema 5',
        'Pergunta 10 do Tema 5'
      ],
      'Tema 5': [
        'Pergunta 1 do Tema 5',
        'Pergunta 2 do Tema 5',
        'Pergunta 3 do Tema 5',
        'Pergunta 4 do Tema 5',
        'Pergunta 5 do Tema 5',
        'Pergunta 6 do Tema 5',
        'Pergunta 7 do Tema 5',
        'Pergunta 8 do Tema 5',
        'Pergunta 9 do Tema 5',
        'Pergunta 10 do Tema 5'
      ],
      'Tema 5': [
        'Pergunta 1 do Tema 5',
        'Pergunta 2 do Tema 5',
        'Pergunta 3 do Tema 5',
        'Pergunta 4 do Tema 5',
        'Pergunta 5 do Tema 5',
        'Pergunta 6 do Tema 5',
        'Pergunta 7 do Tema 5',
        'Pergunta 8 do Tema 5',
        'Pergunta 9 do Tema 5',
        'Pergunta 10 do Tema 5'
      ]
    };
  
    $('#spin').click(function() {
      clicks++;
  
      var newDegree = degree * clicks;
      var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
      totalDegree = newDegree + extraDegree;
  
      $('#roleta .sec').each(function(index) {
        var t = $(this);
        var position = posicoes[index];
  
        var interval = setInterval(function() {
          var aoY = t.offset().top;
          $('#txt').html(aoY);
          console.log(aoY);
  
          if (aoY < position) {
            console.log('<<<');
            $('#spin').addClass('spin');
            setTimeout(function() {
              $('#spin').removeClass('spin');
              
              var selectedTheme = temas[index];
              var selectedPerguntas = getRandomPerguntas(perguntas[selectedTheme], 5);
              displayPerguntas(selectedTheme, selectedPerguntas);
            }, 100);
  
            clearInterval(interval);
          }
        }, 10);
  
        $('#interno-roleta').css({
          'transform': 'rotate(' + totalDegree + 'deg)'
        });
      });
    });
  
    function getRandomPerguntas(perguntasArray, numPerguntas) {
      var shuffled = perguntasArray.sort(function() {
        return 0.5 - Math.random();
      });
      return shuffled.slice(0, numPerguntas);
    }
  
    function displayPerguntas(theme, perguntasArray) {
      $('#perguntas h2').text('Perguntas do tema: ' + theme);
  
      $('#perguntas-tema').empty();
      for (var i = 0; i < perguntasArray.length; i++) {
        $('#perguntas-tema').append('<p>' + perguntasArray[i] + '</p>');
      }
    }
  });
  
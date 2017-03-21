(function(){
  var beep1 = new Audio('beep1.mp3');
  var beep2 = new Audio('beep2.mp3');
  responsiveVoice.setDefaultVoice("Korean Female");

  beep1.play();

  function hello(){
    beep2.play();
    result.innerHTML = '안녕하세요!';
    responsiveVoice.speak("안녕하세요 멋진 효린님!");
  }

  annyang.setLanguage('ko');
  annyang.debug();
  annyang.addCommands({
    '안녕': hello,
  });

  setTimeout(function(){
    annyang.start();  
  }, 100);
  

/*

annyang으로 listen - hosting은 github pages같은 곳?
명령을 받으면 telegram bot으로 전송
telegram bot은 listen하다가 명령이 들어오면 실행해 준다.
혹은 websocket을 이용한다?

/Users/grant/.localhost-ssl/cert.pem
/Users/grant/.localhost-ssl/key.pem

*/



})();
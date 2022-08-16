function totalopt() {
    let b = "";
    let total = opt1 + opt2 + opt3;
    b += total;
    console.log(b);
  
  
  
    function opt1() {
      let a = "";
      for (i = 0; i < 10; i++) {
        let result = Math.floor(Math.random() * 26);
        result += 65;
        a += String.fromCharCode(result);
      }
      console.log(a);
    }
  
  
  
  
    opt1();
  
    function opt2() {
      let a = "";
      for (i = 0; i < 10; i++) {
        let result = Math.floor(Math.random() * 26);
        result += 97;
        a += String.fromCharCode(result);
      }
      console.log(a);
    }
    opt2();
  
  
  
  
    function opt3() {
      let a = "";
      for (i = 0; i < 10; i++) {
        let result = Math.floor(Math.random() * 10)
  
        a += result;
  
      }
      console.log(a);
    }
    opt3();
  }
  
  
  
  totalopt();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
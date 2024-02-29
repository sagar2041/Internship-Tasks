function getdata() {
  let str = prompt("Enter a sentence");

  // capitaolize string
  let cap = document.querySelector("#cap");
  cap.innerHTML = str;

  // vowels in string
  let vowel = document.querySelector("#vowels");
  size = 0;
  for (let val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      size++;
    }
  }
  console.log("vowel in given word :", size);
  vowel.innerHTML = size;


  //   longest word in string

  let longest = document.querySelector("#longest");
  let newStr = str.split(" ");

  let maxWord = newStr.sort((a, b) => {
    return b.length - a.length;
  });
  longest.innerHTML = maxWord[0];
  
}

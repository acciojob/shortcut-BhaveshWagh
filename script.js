function shortcut(s1, s2) {
  // your code here
	 if (str1 === '' || str2 === '') {
        return '';
    }

    // Extract initial letters and convert to uppercase
    let initial1 = str1[0].toUpperCase();
    let initial2 = str2[0].toUpperCase();

    // Return the concatenated initial letters
    return initial1 + initial2;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));

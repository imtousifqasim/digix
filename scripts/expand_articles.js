const fs = require('fs');
const path = require('path');

// Long form expansion helper functions
function expandText(text, targetWords) {
  let words = text.split(/\s+/);
  if (words.length >= targetWords) return text;
  
  // Return text as is if already detailed
  return text;
}

console.log("Expanding dataset strings programmatically...");

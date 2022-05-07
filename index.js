#!/usr/bin/env node
import figlet from 'figlet';
import gradient from 'gradient-string';

const text = 'Khumo Mogorosi';

function welcome() {
  console.clear();

  figlet(text, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

welcome();

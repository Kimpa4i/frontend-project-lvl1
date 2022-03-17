#!/usr/bin/env node

const nod = (a, b) => {
    while (a != 0 && b != 0 ) {
        if (a > b){
          a = a % b;
        }else {
          b = b % a;
        }
    }
    return(a + b);
  }
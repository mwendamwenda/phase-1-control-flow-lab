function scuberGreetingForFeet(feet){
  let greeting;
  if(feet <= 400){
    greeting = 'This one is on me!';
  }
  else if (feet>2000 && feet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.'
  }
  else if (feet > 2500){
    greeting = 'No can do.';
  }
 return greeting;
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);





function ternaryCheckCity(city){
  const responce = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return responce;
}
ternaryCheckCity('NYC');
ternaryCheckCity('pittsburgh');

function switchOnCharmFromTip(tip){
  let generosityResponce;
  switch (tip){
    case 'generous':
      generosityResponce = "Thank you so much."
      break ;
      case 'not as generous':
        generosityResponce = "Thank you.";
        break;
        default:
          generosityResponce = "Bye.";
          break;
  }
  return generosityResponce
}
console.log(switchOnCharmFromTip ("generous"));
console.log(switchOnCharmFromTip ("not as generous"));
console.log(switchOnCharmFromTip ("if anything else"));
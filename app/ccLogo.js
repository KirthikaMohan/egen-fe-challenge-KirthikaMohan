
//returning the class name which in turn change the card type image
(function(){


angular.module('Filters', []).filter('ccLogo', [function () 
{
    return function (ccnumber) 
    {
	//checking for empty value
      if (!ccnumber) 
	  {
	  return "default-icon";
	  }
	  
        //Function to execute Luhn Check
          function validCreditCard(value) {
          // accept only digits, dashes or spaces
            if (/[^0-9-\s]+/.test(value)) return false;

            // The Luhn Algorithm.
            var nCheck = 0, nDigit = 0, bEven = false;
            value = value.replace(/\D/g, "");

            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n),
                      nDigit = parseInt(cDigit, 10);

                if (bEven) {
                    if ((nDigit *= 2) > 9) nDigit -= 9;
                }

                nCheck += nDigit;
                bEven = !bEven;
            }

            return (nCheck % 10) == 0;
        }

        
    if(ccnumber.length >= 14)
        var boolValue = validCreditCard(ccnumber);
     
        //check for credit card type
     if(boolValue) 
     {
          if(/^(34)|^(37)/.test(ccnumber)) 
          {
            cardType = "american-express";
          }

          if(/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(ccnumber)) 
          {
            cardType = "discover-card";
          }
          if(/^(5018)|^(5020)|^(5038)|^(5893)|^(6304)|^(6759)|^(6761)|^(6762)|^(6763)|^(0604)/.test(ccnumber)) 
          {
            cardType = "maestro";
          }
          if(/^5[1-5]/.test(ccnumber)) 
          {
            cardType = "master-card";
          }
          if (/^4/.test(ccnumber)) 
          {
            cardType = "visa";
          }
          
        return cardType;
     }
        
     else
     {
         return "default-icon";
            
     }
     
    };
}]);
    
    
})();
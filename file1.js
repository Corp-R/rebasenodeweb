// flat fees and taxes
var customsFee          = 5.5;
var immigrationFee      = 7;
var federalTransportTax = .025;

function calculateAirfare(baseFare) {
    var fare = baseFare;       
    fare +=customsFee;
    fare += immigrationFee;
    fare +=10;
    fare *= (1 + federalTransportTax);
    return fare;
}

function two(){
    var test = 'hi';
}

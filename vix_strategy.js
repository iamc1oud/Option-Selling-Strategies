// Enter nifty spot value
const indexSpot  = 41783;

// Enter india vix spot
const vixSpot = 15.92;

// Vix movement averages
const yearVixAvg = Math.sqrt(365).toFixed(2);
const weeklyVixAvg = Math.sqrt(52).toFixed(2);
const monthVixAvg = Math.sqrt(12).toFixed(2);

// In percentage
const vixMovementExpected = (vixSpot/weeklyVixAvg).toPrecision(2);

const upperLimit =  indexSpot + parseFloat(indexSpot*vixMovementExpected /100);
const lowerLimit = + indexSpot - parseFloat(indexSpot*vixMovementExpected /100);

console.log(`Current Nifty spot: ${indexSpot} & IndiaVix: ${vixSpot}`);
console.log(`Vix Avg: ${weeklyVixAvg}`);
console.log(`Index Average Movement in % either side: ${vixMovementExpected}`);
console.log(`Index upperlimit: ${upperLimit}`);
console.log(`Index lowerlimit: ${lowerLimit}`);
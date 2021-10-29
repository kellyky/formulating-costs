 // // VERSION 1: INPUT ALL DATA AS ARGUMENTS
// const productCostPerGram = (productName, itemCost, itemWeight, orderSubtotal, orderWeight, orderTax = 0, orderShippingCost = 0) => { 
 //  // Calculates price of item + tax
 //  const itemAfterTax = itemCost + ((itemCost / orderSubtotal) * orderTax);

 //  // Calculates price of shipping for the item
 //  const itemShippingCost = (itemWeight / orderWeight) * orderShippingCost;;

 //  // Converts to grams from ounces
 //  const itemWeightInGrams = itemWeight * 28.35;
  
 //  // Calculates raw price per gram but with lots of decimal places :-)
 //  const cost = (itemAfterTax + itemShippingCost) / itemWeightInGrams;

 //  // Converts to cents so we can round next
 //  const costInCents = 100 * cost; 

 //  costPerGram = (Math.round(costInCents)/100); 
 //  return `${productName}: $${costPerGram} per gram`;
// }

// // Just remember to enter all needed arguments ;-P
// // if orderShippingCost is 0; leave off this argument
// // if both orderShippingCost and orderTax are 0: omit both args
// // you canNOT omit tax only
// console.log(productCostPerGram("Silk Peptides", 1, 3, 55, 24, 5.55));

// // V. 2 >> ORDER INFO DECLARED GLOBALLY; ITEM INFO FED AS ARGUMENTS

// let orderSubtotal, orderWeight, orderTax, orderShippingCost;
// // Or use const if assiging values right away 

// const productCostPerGram = (productName, itemCost, itemWeight) => { 
 //  // Calculates price of item + tax
 //  const itemAfterTax = itemCost + ((itemCost / orderSubtotal) * orderTax);

 //  // Calculates price of shipping for the item
 //  const itemShippingCost = (itemWeight / orderWeight) * orderShippingCost;;

 //  // Converts to grams from ounces
 //  const itemWeightInGrams = itemWeight * 28.35;
  
 //  // Calculates raw price per gram but with lots of decimal places :-)
 //  const cost = (itemAfterTax + itemShippingCost) / itemWeightInGrams;

 //  // Converts to cents so we can round next
 //  const costInCents = 100 * cost; 

 //  costPerGram = (Math.round(costInCents)/100); 
 //  return `${productName}: $${costPerGram} per gram`;
// }

// console.log(productCostPerGram("emulsifying wax", 15, 4));


// VERSION 2B

let orderSubtotal=55, orderWeight=42, orderTax=3.47, orderShippingCost=19.75;
// Or use const if assiging values right away 
// I set values right away so I could try it out
const productCostPerGram = (productName, itemCost, itemWeight) => {
  rawCostPerGram = (itemCost + ((itemCost / orderSubtotal) * orderTax) + ((itemWeight / orderWeight)* orderShippingCost)) / (itemWeight * 28.35);
  roundedCostPerGramInCents = Math.round(rawCostPerGram * 100); // convert to cents
  costPerGram = roundedCostPerGramInCents / 100;
  return `${productName}: $${costPerGram} per gram`
}

console.log(productCostPerGram("Silk Peptides", 21, 2.11));

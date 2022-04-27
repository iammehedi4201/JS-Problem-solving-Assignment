

//Problem -1

function kilometerToMeter(noOfKilometer)
{
    let convertIntoMeter = noOfKilometer*1000; // We know That 1 kilo = 1000 meter;

    return convertIntoMeter;
    
}

let totalKilometer = 7

if (totalKilometer<=0)
{
     console.log("This is a unaccept value");
}
else
{
    let convertInToMeter = kilometerToMeter(totalKilometer);
    console.log("The converted Meter value is:",convertInToMeter);

}

//problem 2

function budgetCalculation(noClock,noPhone,noLaptop)
{
    let totalPriceOfClock = noClock*50; //Per clock cost is 50 Taka

    let totalPriceOfPhone = noPhone*100; //Per Phone cost is 100 Taka

    let totalPriceOfLaptop =noLaptop*500 //Per laptop cost is 500 Taka 
    
    let totalCostOFClockPhoneLaptop = totalPriceOfClock + totalPriceOfPhone+totalPriceOfLaptop;

    return totalCostOFClockPhoneLaptop;
}

let noClock =-10;

let noPhone =20;

let noLaptop =30;

if (noClock<=0 || noLaptop<=0 || noPhone<=0)
{

    console.log("This is unaccept Value");
    
}

else
{

    let totalCostOFClockPhoneLaptop =budgetCalculation(noClock,noPhone,noLaptop);

    console.log("The Total Budget is:",totalCostOFClockPhoneLaptop);

}



//Problem -3


function hotelCost(noOfDays)
{
    if (noOfDays<=10)
    {

        let totalRoomCost = noOfDays*100; //The first 10 Days hotel cost per day 100;

        return totalRoomCost;
        
    }

    else if(noOfDays>11 &&  noOfDays<=20)
    {

         //The first 10 day hotel cost calculation

         let first_10_DayTotalRoomCost =10*100;

         //The remaining Days is 

         let remainingDays = noOfDays-10;
         
         //The Remaining Days Hotel cost 

         let remainingDaysHotelCost = remainingDays*(100-20); //After 10 day then the per Day  cost 80 taka;

         //Total Hotel Cost 

         let totalHotelCost =first_10_DayTotalRoomCost + remainingDaysHotelCost;

         return totalHotelCost;

    }
    else
    {

        //The first 10 Days hotel cost 

        let first_10_DayTotalRoomCost =10*100;


       //After 10 day The second 10 day between 11 to 20 total Room cost 

       let After_10_DayTheRemainingDaysTotalRoomCost =10*(100-20) //After 10 day then the per Day  cost 80 taka;

      //After 20 day The Remaining Days

      let after_20_DayTheRemainingDays = noOfDays-20;

      //After 20 day The Remaining Days total Room cost \

      let After_20_DayTheRemainingDaysTotalRoomCost =after_20_DayTheRemainingDays*50;//After 20 day then the per day cost is 50 taka;

      let totalHotelCost =first_10_DayTotalRoomCost+After_10_DayTheRemainingDaysTotalRoomCost+After_20_DayTheRemainingDaysTotalRoomCost;

      return totalHotelCost;

    }
    
}


let totalDays = 15;

if (totalDays<=0)
{

    console.log("This is a Unacceptable value");
    
}
else
{
    let totalRoomCost = hotelCost(totalDays);
    
    console.log("The Total Room cost is:",totalRoomCost);
}


//Problem -4


function megaFriend(listOfName)
{
    let max =listOfName[0].length

    let largeValue;
    
    for (let i = 0; i <listOfName.length; i++) 
    {   
        

        const element = listOfName[i];

        if (max < element.length) 
        {
            max = element.length

            largeValue = element;
            
        }
        
    }

    return largeValue;
    
}

let containerOfName =["Tanim","Mehedid","Shoaibnnnnnn","Saif"]

let largeValue=megaFriend(containerOfName);

console.log("The large word is:",largeValue);
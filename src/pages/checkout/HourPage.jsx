import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import React, { useState } from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import ordersApiMethods from '../../services/ordersAPI';
import AuthApiMethods from '../../services/authAPI';

const HourPage = (props) => {

    // Current time
    let now = moment()
    // Current time + 30 minutes : the delay for the reservation
    let delayedTime = moment().add(1800000)

    // Var that will contain the orders found of the current day
    const [ordersOfTheDay, setOrdersOfTheDay] = useState([])

    // Var that will contain the corrected "freeHoursMinutes" after deleting the schedule of the orders from "orderOfTheDays"
    const [newFreeHoursMinutes, setNewFreeHoursMinutes] = useState({})

    // Fetches the orders
    const fetchOrdersOfTheDay = async () => {
        try{
          AuthApiMethods.setup()
          const data = await ordersApiMethods.findDaily(now.format("YYYY-MM-DD"))
          setOrdersOfTheDay(data)
        } catch(error){
          console.error(error)
        }
    }

    // The var that contains the disabled hours
    var bookedHours = [0,1,2,3,4,5,6,7,8,9,10,15,16,22,23]
    
    // The var that contains the minutes available for reservation
    var freeHoursMinutes = {
        11: [30,45],
        12: [0,15,30,45],
        13: [0,15,30,45],
        14: [0,15],
        17: [30,45],
        18: [0,15,30,45],
        19: [0,15,30,45],
        20: [0,15,30,45],
        21: [0,15,30,45],
    }

    // Method that disables the free schedule before "now" time
    const disableScheduleBeforeNow = () => {
      // For each of the free hours
      Object.keys(freeHoursMinutes).forEach((key) => {
        // If the hour "key" is lower that the hour of "now"
        if(parseInt(key) < delayedTime._d.getHours()){
          // Push the hour "key" in the disabled hours
          bookedHours.push(parseInt(key))
          // Disables the possibility to choose the minutes
          freeHoursMinutes[key] = [60]
        // If the hour "key" is equal to the hour of "now"
        } else if (parseInt(key) === delayedTime._d.getHours()){
          // For each of the free schedules
          freeHoursMinutes[key].forEach((freeHourMinutes)=>{
            // If the quarter is lower than the minutes "now"
            if(freeHourMinutes < delayedTime._d.getMinutes()){
              // Removes the quarter from its free array
              freeHoursMinutes[key].splice(freeHoursMinutes[key].indexOf(freeHourMinutes), 1)
            }
          })
        }
      })
    }
    
    // Method that disables the schedule for the orders that are already made
    const disableOrdersOfTheDay = () => {
      // For each order found
      ordersOfTheDay.forEach((bookedHour)=>{
          // Get the moment date from the JSON date value
          let dateOfOrder = moment(bookedHour.date)
          // Get the hour of the order
          let hour = dateOfOrder._d.getHours()
          // Get the minutes of the order
          let minutes = dateOfOrder._d.getMinutes()
          // Remove this schedule from the free array
          freeHoursMinutes[hour].splice(freeHoursMinutes[hour].indexOf(minutes), 1)
      })
      // Set the "newFreeHoursMinute" with the modified freeHoursMinutes in order to apply the difference
      setNewFreeHoursMinutes(freeHoursMinutes)
    }
    
    // UseEffect on load
    useEffect(()=>{
      fetchOrdersOfTheDay()
      disableScheduleBeforeNow()
    }, [])

    // UseEffect when "ordersOfTheDay" is defined
    useEffect(()=>{
      disableOrdersOfTheDay()
    }, [ordersOfTheDay])

    // Method for the "TimePicker" to get the disabled hours
    const disabledHours = () => {
      return bookedHours
    }
    
    // Method provided from "TimePicker" docs
    function generateOptions(length, excludedOptions) {
      const arr = [];
      for (let value = 0; value < length; value++) {
          if (excludedOptions.indexOf(value) < 0) {
          arr.push(value);
          }
      }
      return arr;
    }

  // Method for the "TimePicker" that sets the free schedules
    const disabledMinutes = (h) => {
      switch (h) {
        case 0:
          return generateOptions(60, [60]);
        case 1:
          return generateOptions(60, [60]);
        case 2:
          return generateOptions(60, [60]);
        case 3:
          return generateOptions(60, [60]);
        case 4:
          return generateOptions(60, [60]);
        case 5:
          return generateOptions(60, [60]);
        case 6:
          return generateOptions(60, [60]);
        case 7:
          return generateOptions(60, [60]);
        case 8:
          return generateOptions(60, [60]);
        case 9:
          return generateOptions(60, [60]);
        case 10:
          return generateOptions(60, [60]);
        case 11:
          return generateOptions(60, newFreeHoursMinutes[11]);
        case 12:
          return generateOptions(60, newFreeHoursMinutes[12]);
        case 13:
          return generateOptions(60, newFreeHoursMinutes[13]);
        case 14:
          return generateOptions(60, newFreeHoursMinutes[14]);
        case 15:
          return generateOptions(60, [60]);
        case 16:
          return generateOptions(60, [60]);
        case 17:
          return generateOptions(60, newFreeHoursMinutes[17]);
        case 18:
          return generateOptions(60, newFreeHoursMinutes[18]);
        case 19:
          return generateOptions(60, newFreeHoursMinutes[19]);
        case 20:
          return generateOptions(60, newFreeHoursMinutes[20]);
        case 21:
          return generateOptions(60, newFreeHoursMinutes[21]);
        case 22:
          return generateOptions(60, [60]);
        case 23:
          return generateOptions(60, [60]);
        default:
          return generateOptions(0, [0]);
      }
    }

    // Method that enables the "next button" when one of the two delivery option is selected
    const toggleNextButton = (removeDisableClass) => {
        if(removeDisableClass){
                document.querySelector(".next-button").classList.remove("next-button-disabled")
            } else {
                document.querySelector(".next-button").classList.add("next-button-disabled")
            }
        }

    // Method that verifies the selected time in the "TimePicker"
    const handleTime = (event) => {
        // If the event is not null : when the TimePicker is empty
        // && if the hour is valid : if the schedule selected is free
        if(event !== null && newFreeHoursMinutes[event._d.getHours()].includes(event._d.getMinutes()) ){
            // Enables the next button
            toggleNextButton(true)
            // JSON the selected schedule...
            let choosenHour = event["_d"].toJSON()
            // ... adds it to a new cart...
            let newCart = Object.assign({}, props.location.cart)
            newCart.date = choosenHour
            //... in order to update the current cart
            props.location.setCart(newCart)
        } else {
            // Disables the next button
            toggleNextButton(false)
            // Create a new car...
            let newCart = Object.assign({}, props.location.cart)
            // ... to reset the date value
            newCart.date = ""
            props.location.setCart(newCart)
        }
    }

    // When the TimePicker value changes
    const handleChange = (event) => {
        handleTime(event)
    }

    // On load & when the "newFreeHoursMinutes" is set, verifies if a date is already provided to the cart
    useEffect(()=>{
      if(props.location.cart.date !== "" && Object.entries(newFreeHoursMinutes).length > 0){
        handleTime(moment(props.location.cart.date))
      }
    }, [newFreeHoursMinutes])

    return ( 
<>
    <div className="container pizzles-first-container">
        <div className="row">
            <div className="pizzles-head-title mb-4 text-center">
                <h1><strong>Passer la commande</strong></h1>
            </div>
            <div className="col-12 col-lg-3 mt-4">
                <Link to="/delivery" className="pizzles-btn my-3 pizzles-btn-back"><i className="fas fa-chevron-circle-left"></i>Retour</Link>
            </div>
            <div className="col-12 col-lg-6 mt-4">
                <h2 className="pizzles-title text-center mx-auto my-3">Heure de réservation</h2>
            </div>
            <div className="col-12 my-5">
                <div className="pizzles-order-hour my-5 d-flex">
                    {(props.location.cart.date !== "" ? <TimePicker defaultValue={moment(props.location.cart.date)} onChange={handleChange} showSecond={false} minuteStep={15} disabledHours={disabledHours} disabledMinutes={disabledMinutes}  /> : <TimePicker onChange={handleChange} showSecond={false} minuteStep={15} disabledHours={disabledHours} disabledMinutes={disabledMinutes}  /> )}
                    
                </div>
            </div>
            <div className="col-12 my-3">
                <Link to="/summary" className="pizzles-btn pizzles-btn-red next-button next-button-disabled">Suivant<i className="fas fa-arrow-circle-right"></i></Link>
            </div>
        </div>
    </div>
</>
     );
}
 
export default HourPage;
import { useState } from "react";

function useAddPropValidation() {
  const [errors, setErrors] = useState({});

  const validateProperty = (propertyDetils) => {
    const newErrors = {};

    if (!propertyDetils.title) {
      console.error("Title is missing.");
      return;
    }
    if (!propertyDetils.offer) {
      console.error("offer is missing.");
      return;
    }
    if (!propertyDetils.unitType) {
      console.error("unitType is missing.");
      return;
    }
    if (!propertyDetils.area) {
      console.error("area are missing.");
      return;
    }
    if (
      propertyDetils.propType === "Residential" ||
      propertyDetils.propType === "Commercial"
    ) {
      if (!propertyDetils.rooms) {
        console.error("rooms are missing.");
        return;
      }
      if (!propertyDetils.bathRooms) {
        console.error("bathrooms are missing.");
        return;
      }
      if (!propertyDetils.finishingType) {
        console.error("finishingType is missing.");
        return;
      }
    }
    if (!propertyDetils.description) {
      console.error("description is missing.");
      return;
    }
    if (propertyDetils.offer == "For Rent") {
      if (!propertyDetils.rentalPeriod) {
        console.error("rentalPeriod is missing.");
        return;
      }
    }
    if (propertyDetils.offer === "For Sale") {
      if (propertyDetils.saleOption === "Cash") {
        if (!propertyDetils.price) {
          console.error("price is missing.");
          return;
        }
      } else {
        if (!propertyDetils.price) {
          console.error("price is missing.");
          return;
        }
        if (!propertyDetils.downPayment) {
          console.error("downPayment is missing.");
          return;
        }
        if (!propertyDetils.installmentOption.period) {
          console.error("period is missing.");
          return;
        }
        if (!propertyDetils.installmentOption.amount) {
          console.error("amount is missing.");
          return;
        }
      }
    }
    if (!propertyDetils.mainImage) {
      console.error("Main image is missing.");
      return;
    }

    if (!propertyDetils.multiImage || propertyDetils.multiImage.length < 4) {
      console.error("Multi-images are missing not be less than 4.");
      return;
    }
    if (!propertyDetils.address.name) {
      console.error("address is missing");
      return;
    }
    if (!propertyDetils.connectPhoneNumber) {
      console.error("connectPhoneNumber is missing");
      return;
    }
    if (!propertyDetils.appointments.from && !propertyDetils.appointments.to) {
      console.error("hours is missing");
      return;
    }
    if (!propertyDetils.appointments.allDays) {
      if (
        !propertyDetils.appointments.startDate &&
        !propertyDetils.appointments.startDate
      ) {
        console.error("days is missing");
        return;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateProperty };
}

export default useAddPropValidation;

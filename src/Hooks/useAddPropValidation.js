import { useState } from "react";

function useAddPropValidation() {
  const [errors, setErrors] = useState([]);

  const validateProperty = (propertyDetails) => {
    const newErrors = [];

    if (!propertyDetails.title) {
      newErrors.push("Title is missing.");
    }
    if (!propertyDetails.offer) {
      newErrors.push("Offer is missing.");
    }
    if (!propertyDetails.unitType) {
      newErrors.push("Unit Type is missing.");
    }
    if (!propertyDetails.area) {
      newErrors.push("Area is missing.");
    }
    if (
      propertyDetails.propType === "Residential" ||
      propertyDetails.propType === "Commercial"
    ) {
      if (!propertyDetails.rooms) {
        newErrors.push("Rooms are missing.");
      }
      if (!propertyDetails.bathRooms) {
        newErrors.push("Bathrooms are missing.");
      }
      if (!propertyDetails.finishingType) {
        newErrors.push("Finishing Type is missing.");
      }
    }
    if (!propertyDetails.description) {
      newErrors.push("Description is missing.");
    }
    if (propertyDetails.offer === "For Rent") {
      if (!propertyDetails.rentalPeriod) {
        newErrors.push("Rental Period is missing.");
      }
    }
    if (propertyDetails.offer === "For Sale") {
      if (propertyDetails.saleOption === "Cash") {
        if (!propertyDetails.price) {
          newErrors.push("Price is missing.");
        }
      } else {
        if (!propertyDetails.price) {
          newErrors.push("Price is missing.");
        }
        if (!propertyDetails.downPayment) {
          newErrors.push("Down Payment is missing.");
        }
        if (!propertyDetails.installmentOption.period) {
          newErrors.push("Period is missing.");
        }
        if (!propertyDetails.installmentOption.amount) {
          newErrors.push("Amount is missing.");
        }
      }
    }
    if (!propertyDetails.mainImage) {
      newErrors.push("Main image is missing.");
    }

    if (!propertyDetails.multiImage || propertyDetails.multiImage.length < 4) {
      newErrors.push("Multi-images are missing and should not be less than 4.");
    }
    if (!propertyDetails.address.name) {
      newErrors.push("Address is missing.");
    }
    if (!propertyDetails.connectPhoneNumber) {
      newErrors.push("Connect Phone Number is missing.");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  return { errors, validateProperty };
}

export default useAddPropValidation;

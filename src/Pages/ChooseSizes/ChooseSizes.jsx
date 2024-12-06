import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { XMarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

const ChooseSizes = () => {
  const location = useLocation();
  const { selectedImages, prevImages } = location.state || {}; // prevImages is used for image preview & selectedImages are the raw images
  const navigate = useNavigate();

  // State to keep track of selected size for each image
  const [images, setImages] = useState(selectedImages || []);
  const [selectedSizes, setSelectedSizes] = useState(
    selectedImages ? selectedImages.map(() => null) : [] // Initialize with null for each image
  );

  // Size options with corresponding integer IDs
  const sizeOptions = [
    { label: '6"x4" - S', id: 1 },
    { label: '7.5"x5" - M', id: 1 },
    { label: '9"x6" - L', id: 2 },
    { label: '12"x8" - XL', id: 3 },
    { label: '18"x12" - XXL', id: 4 },
  ];

  // Handle size selection for an image
  const handleSizeChange = (index, sizeId) => {
    const newSelectedSizes = [...selectedSizes];
    newSelectedSizes[index] = sizeId; // Set the selected size ID (integer) for the image at the specified index
    setSelectedSizes(newSelectedSizes);
  };

  // Handle remove image
  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedSizes = selectedSizes.filter((_, i) => i !== index);
    setImages(updatedImages);
    setSelectedSizes(updatedSizes);
  };

  // Handle continue button click
  const handleContinue = () => {
    if (selectedSizes.some((size) => size === null)) {
      alert("Please select a size for all images before continuing.");
      return;
    }
    // Pass selected images and sizes (with integer size IDs) to the next page
    navigate("/personal-info", {
      state: { selectedImages: images, selectedSizes },
    });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-monkwhite py-10 pt-32 min-h-screen">
        <div className="lg:w-[1180px] lg:mx-auto">
          <div className="mb-6">
            <p className="text-3xl font-bold text-monkblack">Choose Sizes</p>
            <p className="text-lg font-normal text-monkblack">
              Choose sizes for your photos
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Loop through selected images and display each with size options */}
            {images && images.length > 0 ? (
              prevImages.map((image, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-monkwhite shadow-sm p-4 rounded-lg relative"
                >
                  <div className="">
                    <img
                      className="rounded-md w-full h-60 object-cover"
                      src={image}
                      alt={`Selected Image ${index + 1}`}
                    />
                  </div>
                  <div className="flex flex-col gap-3 mt-3">
                    {/* Size options for each image */}
                    {sizeOptions.map((size) => (
                      <div
                        key={size.id}
                        className="flex items-center justify-start gap-2"
                      >
                        <input
                          type="radio"
                          name={`size-${index}`}
                          className="radio"
                          checked={selectedSizes[index] === size.id} // Check if this size ID is selected
                          onChange={() => handleSizeChange(index, size.id)} // Update the selected size ID (integer)
                        />
                        <p>{size.label}</p>
                      </div>
                    ))}
                  </div>
                  {/* Cross Icon to remove image */}
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 bg-[#DDDDDD] text-white rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    <XMarkIcon className="w-5 h-5 text-monkblack" />
                  </button>
                </div>
              ))
            ) : (
              <p>No images selected</p>
            )}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleContinue}
              className="bg-monkblack text-monkwhite flex items-center px-4 py-2 rounded-full"
            >
              Continue
              <ArrowLongRightIcon className="w-5 h-5 text-monkwhite" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseSizes;

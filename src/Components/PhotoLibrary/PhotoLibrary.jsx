import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { XMarkIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

const PhotoLibrary = () => {
  const [images, setImages] = useState([]);  // State to hold uploaded images
  const navigate = useNavigate();  // Initialize the navigate hook for navigation

  const handleFileUpload = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));  // Create object URLs for image preview
    setImages((prevImages) => [...prevImages, ...fileArray]);  // Add the new images to the state
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);  // Remove the image at the specified index
    setImages(updatedImages);
  };

  const handleContinue = () => {
    navigate('/choose-size', { state: { selectedImages: images } });  // Pass images to ChooseSizes route
  };

  return (
    <div className='bg-monkwhite py-10 pt-32 min-h-screen h-full'>
      <div className='lg:w-[1180px] lg:mx-auto'>
        <div className='mb-6'>
          <p className='text-3xl font-bold text-monkblack'>Photo Library</p>
          <p className='text-lg font-normal text-monkblack'>Below are your uploaded photos</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Image Preview Section */}
          {images.map((image, index) => (
            <div key={index} className='relative border-2 border-gray-300 rounded-lg w-full h-[320px]'>
              <img
                src={image}
                alt="Uploaded"
                className='w-full h-full object-cover rounded-lg'
              />
              {/* Cross Icon to remove image */}
              <button
                className='absolute top-2 right-2 bg-[#DDDDDD] text-white rounded-full w-8 h-8 flex items-center justify-center'
                onClick={() => handleRemoveImage(index)}
              >
                <XMarkIcon className="w-5 h-5 text-monkblack" />
              </button>
            </div>
          ))}

          {/* Upload Section */}
          <div className='flex flex-col items-center justify-center border-2 border-gray-300 p-1 rounded-lg w-full h-[320px]'>
            <img className="h-10 w-auto mb-4" src="/upload.svg" alt="Upload"  />
            <p className='text-sm text-monkblack font-normal mb-2 text-center'>Drag and drop to upload your file</p>
            <p className='text-[16px] text-monkblack font-normal mb-4'>Or</p>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className='hidden'
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className='text-[14px] font-normal bg-[#373737] px-4 py-3 rounded-full text-monkwhite cursor-pointer'
            >
              Upload from your device
            </label>
          </div>
        </div>

        <div className='mt-6'>
          <button
            onClick={handleContinue}  // Trigger the navigation on button click
            className='bg-monkblack text-monkwhite flex items-center justify-center gap-2 px-4 py-2 rounded-full'
          >
            Continue
            <ArrowLongRightIcon className="w-5 h-5 text-monkwhite" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoLibrary;

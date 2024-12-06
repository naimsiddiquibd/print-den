import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // Import the toast function
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Toaster } from 'react-hot-toast';

const PersonalInfo = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { selectedImages, selectedSizes } = location.state || {};

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        const { name, email, phone } = formData;
    
        if (!name || !email || !phone) {
            toast.error('Please fill in all fields.');
            return;
        }
    
        const formDataObj = new FormData();
        formDataObj.append('name', name);
        formDataObj.append('email', email);
        formDataObj.append('phone', phone);
        formDataObj.append('service_id', 1);
        formDataObj.append('album_id', 1);
    
        selectedImages.forEach((image, index) => {
            formDataObj.append(`documents[${index}][file]`, image);
            formDataObj.append(`documents[${index}][size_id]`, selectedSizes[index]);
            formDataObj.append(`documents[${index}][frame_id]`, null);
        });
    
        try {
            const response = await fetch('https://adminprintden.fatmonk.studio/api/service/submit', {
                method: 'POST',
                body: formDataObj,
            });
    
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to submit data.');
            }
    
            const result = await response.json();
            console.log('Submission successful:', result);
    
            // Show success notification
            toast.success('Upload successful! We’ll get back to you shortly.');
    
            // Add a delay before navigating to the home page
            setTimeout(() => {
                navigate('/');
            }, 3000); // Delay of 3 seconds (3000ms)
        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error(error.message || 'An error occurred while submitting the form.');
        }
    };
    

    useEffect(() => {
        console.log('Selected Images:', selectedImages);
        console.log('Selected Sizes:', selectedSizes);
    }, [selectedImages, selectedSizes]);

    return (
        <div>
            <Navbar />
            <div className="bg-monkwhite py-10 pt-32 min-h-screen">
                <div className="lg:w-[1180px] lg:mx-auto">
                    <div className="mb-6">
                        <p className="text-3xl font-bold text-monkblack">Personal Information</p>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-sm text-monkblack font-medium">Name</span>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Type your name"
                                    className="input input-bordered w-full bg-monkblack bg-opacity-5"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="flex gap-3 mt-3">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-sm text-monkblack font-medium">Phone number</span>
                                </div>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Type your phone number"
                                    className="input input-bordered w-full bg-monkblack bg-opacity-5"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-sm text-monkblack font-medium">Email</span>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Type your email"
                                    className="input input-bordered w-full bg-monkblack bg-opacity-5"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <button
                            className="bg-monkblack text-monkwhite flex items-center px-4 py-2 rounded-full"
                            onClick={handleSubmit}
                        >
                            Submit
                            <ArrowLongRightIcon className="w-5 h-5 text-monkwhite" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
            <div className='z-[99999999px]'>
                <Toaster />
            </div>
        </div>
    );
};

export default PersonalInfo;

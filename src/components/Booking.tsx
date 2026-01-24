'use client';

import React, { useState, useEffect } from 'react';
import { services, paymentOptions } from '@/data/services';
import { Service } from '@/types';

const Booking = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        notes: '',
    });

    const depositPercentage = 0.05;
    const depositAmount = selectedService ? (selectedService.price * depositPercentage).toFixed(2) : '0.00';

    const timeSlots = [
        '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
    ];

    const handleServiceSelect = (service: Service) => {
        setSelectedService(service);
        setStep(2);
    };

    const handleDateTimeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedDate && selectedTime) {
            setStep(3);
        }
    };

    const handleInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(4);
    };

    const handleBookingComplete = () => {
        // Logic to save booking and process payment
        alert(`Appointment successfully booked!\n\nService: ${selectedService?.name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nDeposit of £${depositAmount} paid.`);
        // Reset form
        setStep(1);
        setSelectedService(null);
        setSelectedDate('');
        setSelectedTime('');
        setFormData({ name: '', email: '', phone: '', notes: '' });
    };

    return (
        <section id="reservation" className="section relative">
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-[#D4AF37]/5 blur-[100px] rounded-full" />

            <div className="text-center mb-16">
                <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-semibold tracking-[4px]">Online Booking</span>
                <h2 className="mt-4 mb-4">Reserve Your <span className="gradient-text">Private Session</span></h2>
                <p className="text-gray-400 max-w-xl mx-auto">A 5% deposit is required to secure your appointment. The remaining balance will be paid at the salon.</p>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-12 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -z-10" />
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${step >= i ? 'bg-[#D4AF37] text-black shadow-glow' : 'bg-gray-800 text-gray-500'
                                }`}
                        >
                            {i}
                        </div>
                    ))}
                </div>

                {/* Step 1: Select Service */}
                {step === 1 && (
                    <div className="animate-fadeIn">
                        <h3 className="text-2xl mb-8 text-center">Choose Your Service</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    onClick={() => handleServiceSelect(service)}
                                    className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${selectedService?.id === service.id
                                        ? 'border-[#D4AF37] bg-white/5'
                                        : 'border-gray-800 hover:border-gray-600 bg-white/[0.02]'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-lg">{service.name}</h4>
                                        <span className="text-[#D4AF37] font-bold">£{service.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 line-clamp-2">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Select Date & Time */}
                {step === 2 && (
                    <div className="animate-fadeIn">
                        <h3 className="text-2xl mb-8 text-center">Date & Time</h3>
                        <form onSubmit={handleDateTimeSubmit} className="glass p-8 rounded-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Select a Date</label>
                                    <input
                                        type="date"
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Pick a Time Slot</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-2 text-sm rounded border transition-all ${selectedTime === time
                                                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                                                    : 'border-gray-800 text-gray-400 hover:border-gray-600'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
                                <button type="submit" disabled={!selectedDate || !selectedTime} className="btn-primary flex-1 disabled:opacity-50">Continue</button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Step 3: Client Info */}
                {step === 3 && (
                    <div className="animate-fadeIn">
                        <h3 className="text-2xl mb-8 text-center">Your Contact Details</h3>
                        <form onSubmit={handleInfoSubmit} className="glass p-8 rounded-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 lowercase tracking-widest">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2 lowercase tracking-widest">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="input-field"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-400 mb-2 lowercase tracking-widest">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+44 20 7123 4567"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="input-field"
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-400 mb-2 lowercase tracking-widest">Notes (Optional)</label>
                                <textarea
                                    rows={3}
                                    placeholder="Any additional info or queries..."
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    className="input-field"
                                />
                            </div>
                            <div className="flex gap-4">
                                <button type="button" onClick={() => setStep(2)} className="btn-secondary flex-1">Back</button>
                                <button type="submit" className="btn-primary flex-1">Review Summary</button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Step 4: Summary & Payment (5% Deposit) */}
                {step === 4 && (
                    <div className="animate-fadeIn">
                        <h3 className="text-2xl mb-8 text-center">Summary & Deposit</h3>
                        <div className="glass p-8 rounded-2xl border-2 border-[#D4AF37]/20 shadow-glow">
                            <div className="mb-8 p-6 bg-black/40 rounded-xl space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                                    <span className="text-gray-400">Selected Service</span>
                                    <span className="text-white font-semibold">{selectedService?.name}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                                    <span className="text-gray-400">Date and Time</span>
                                    <span className="text-white font-semibold">{selectedDate} at {selectedTime}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                                    <span className="text-gray-400">Total Price</span>
                                    <span className="text-white font-bold">£{selectedService?.price}</span>
                                </div>
                                <div className="flex justify-between items-center pt-4">
                                    <div className="flex flex-col">
                                        <span className="text-[#D4AF37] font-bold text-lg uppercase tracking-wider">Deposit Due (5%)</span>
                                        <span className="text-xs text-gray-500">Secure your appointment</span>
                                    </div>
                                    <span className="text-[#D4AF37] font-bold text-3xl">£{depositAmount}</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm text-gray-500 mb-4 text-center">Choose your secure payment method for the deposit:</p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {paymentOptions.map((opt) => (
                                        <div key={opt.id} className="p-4 border border-gray-800 rounded-lg flex flex-col items-center justify-center hover:border-[#D4AF37] cursor-pointer transition-all bg-white/[0.02]">
                                            <div className="w-10 h-10 bg-gray-700 rounded mb-2 flex items-center justify-center text-[10px] text-gray-400 font-bold uppercase">
                                                {opt.name}
                                            </div>
                                            <span className="text-[10px] uppercase font-bold text-gray-400">{opt.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button type="button" onClick={() => setStep(3)} className="btn-secondary flex-1">Modify</button>
                                <button onClick={handleBookingComplete} className="btn-primary flex-1 shadow-glow animate-pulse hover:animate-none">Pay Deposit & Confirm</button>
                            </div>
                            <p className="mt-6 text-[10px] text-center text-gray-500 italic">
                                By confirming, you agree to our terms and conditions. The deposit is refundable up to 24 hours before the appointment.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Booking;

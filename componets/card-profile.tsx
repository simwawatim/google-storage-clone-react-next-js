"use client"; // 👈 MUST be the very first line (no comments above)

import { useState } from 'react';

const CardProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Bonnie Green"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="flex mt-4 md:mt-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl dark:bg-gray-800 p-6">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Update Profile
                    </h3>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                        ✖
                    </button>
                    </div>

                    {/* Modal Body */}
                    <div className="space-y-4">
                    <label
                        htmlFor="file_input"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Upload profile picture
                    </label>
                    <input
                        id="file_input"
                        type="file"
                        className="block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0 file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                        dark:file:bg-gray-600 dark:file:text-gray-100 dark:hover:file:bg-gray-500
                        cursor-pointer border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                        aria-describedby="file_input_help"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400" id="file_input_help">
                        Accepted formats: JPG, PNG, GIF (max 800x400px)
                    </p>
                    </div>

                    {/* Modal Footer */}
                    <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                    >
                        Cancel
                    </button>
                    </div>
                </div>
                </div>

            )}
        </>
    );
};

export default CardProfile;

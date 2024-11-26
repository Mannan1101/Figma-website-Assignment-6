import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const ExploreCourses = () => {
    const categories = [
        {
            name: "Design & Development",
            courses: "50+ Courses Available",
            icon: "/dev.png",
        },
        {
            name: "Marketing",
            courses: "50+ Courses Available",
            icon: "/market.png",
        },
        {
            name: "Development",
            courses: "50+ Courses Available",
            icon: "/develp.png",
        },
        {
            name: "Communication",
            courses: "50+ Courses Available",
            icon: "/communi.png",
        },
        {
            name: "Digital Marketing",
            courses: "50+ Courses Available",
            icon: "/digital.png",
        },
        {
            name: "Self Development",
            courses: "50+ Courses Available",
            icon: "/self-dev.png",
        },
        {
            name: "Business",
            courses: "50+ Courses Available",
            icon: "/buiss.png",
        },
        {
            name: "Finance",
            courses: "50+ Courses Available",
            icon: "/fianance.png",
        },
        {
            name: "Consulting",
            courses: "50+ Courses Available",
            icon: "/consult.png",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold text-gray-950">
                    Explore Courses By Category
                </h3>
                <p className="text-gray-950 mt-2">
                    Discover a wide range of courses covering a variety of subjects,
                    taught by expert instructors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex items-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                        >

                            <Image
                                src={category.icon}
                                alt={`${category.name} icon`}
                                width={48}
                                height={48}
                                className="object-contain mr-4"
                            />

                            <div className="text-left">
                                <h4 className="text-lg font-bold text-gray-900">
                                    {category.name}
                                </h4>
                                <p className="text-gray-600 mt-1">{category.courses}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="mt-8 px-6 py-3 border-[1px] bg-gray-50 text-black rounded-lg hover:bg-gray-200 transition duration-300">
                    View All Courses
                </Button>
            </div>
        </section>
    );
};

export default ExploreCourses;
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch available courses from an API or define them statically
    const availableCourses = [
      { id: 1, title: "React Basics", description: "Learn the basics of React." },
      { id: 2, title: "Advanced React", description: "Dive deeper into React." },
      { id: 3, title: "JavaScript Essentials", description: "Master JavaScript fundamentals." },
    ];
    setCourses(availableCourses);

    // Fetch enrolled courses from local storage or an API
    const savedEnrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(savedEnrolledCourses);
  }, []);

  const handleEnroll = (course) => {
    if (enrolledCourses.find((c) => c.id === course.id)) {
      toast("You are already enrolled in this course.");
      return;
    }
    const updatedEnrolledCourses = [...enrolledCourses, course];
    setEnrolledCourses(updatedEnrolledCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedEnrolledCourses));
    toast("Successfully enrolled in the course!");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Available Courses</h1>
      <div className="w-full max-w-2xl space-y-4">
        {courses.map((course) => (
          <Card key={course.id} className="w-full">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
              <Button onClick={() => handleEnroll(course)} className="mt-4">Enroll</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
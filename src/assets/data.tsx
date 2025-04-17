import ourPrograms1 from "@/assets/landing-page/virtual-courses/our-programs/our-programs-slide-1.jpg";
import ourPrograms2 from "@/assets/landing-page/virtual-courses/our-programs/our-programs-slide-2.jpg";
import ourPrograms3 from "@/assets/landing-page/virtual-courses/our-programs/our-programs-slide-3.jpg";
import ourPrograms4 from "@/assets/landing-page/virtual-courses/our-programs/our-programs-slide-4.jpg";
import ourPrograms5 from "@/assets/landing-page/virtual-courses/our-programs/our-programs-slide-5.jpg";
import ourPrograms6 from "@/assets/landing-page/virtual-courses/our-programs/our-programs-slide-6.jpg";

import specialCourses1 from "@/assets/landing-page/virtual-courses/special-courses/special-courses-slide-1.jpg";
import specialCourses2 from "@/assets/landing-page/virtual-courses/special-courses/special-courses-slide-2.jpg";
import specialCourses3 from "@/assets/landing-page/virtual-courses/special-courses/special-courses-slide-3.jpg";
import specialCourses4 from "@/assets/landing-page/virtual-courses/special-courses/special-courses-slide-4.jpg";
import specialCourses5 from "@/assets/landing-page/virtual-courses/special-courses/special-courses-slide-5.jpg";
import specialCourses6 from "@/assets/landing-page/virtual-courses/special-courses/special-courses-slide-6.jpeg";

import freeCourses1 from "@/assets/landing-page/virtual-courses/free-courses/free-courses-slide-1.jpg";
import freeCourses2 from "@/assets/landing-page/virtual-courses/free-courses/free-courses-slide-2.jpg";
import freeCourses3 from "@/assets/landing-page/virtual-courses/free-courses/free-courses-slide-3.jpg";
import freeCourses4 from "@/assets/landing-page/virtual-courses/free-courses/free-courses-slide-4.jpg";
import freeCourses5 from "@/assets/landing-page/virtual-courses/free-courses/free-courses-slide-5.jpg";
import freeCourses6 from "@/assets/landing-page/virtual-courses/free-courses/free-courses-slide-6.jpg";

import testimonials1 from "@/assets/landing-page/testimonials/testimonial-1.jpeg";
import testimonials2 from "@/assets/landing-page/testimonials/testimonial-2.jpg";
import testimonials3 from "@/assets/landing-page/testimonials/testimonial-3.jpg";
import testimonials4 from "@/assets/landing-page/testimonials/testimonial-4.jpg";
import testimonials5 from "@/assets/landing-page/testimonials/testimonial-5.jpg";
import testimonials6 from "@/assets/landing-page/testimonials/testimonial-6.jpg";

import ourStats5 from "@/assets/landing-page/stats/certificate.json";
import ourStats3 from "@/assets/landing-page/stats/confidence-up.json";
import ourStats1 from "@/assets/landing-page/stats/kid-reading.json";
import ourStats2 from "@/assets/landing-page/stats/shake-hands.json";
import ourStats4 from "@/assets/landing-page/stats/students.json";

import popularArticle1 from "@/assets/landing-page/popular-articles/popular-articles-1.jpg";
import popularArticle2 from "@/assets/landing-page/popular-articles/popular-articles-2.jpg";
import popularArticle3 from "@/assets/landing-page/popular-articles/popular-articles-3.jpg";
import popularArticle4 from "@/assets/landing-page/popular-articles/popular-articles-4.jpg";
import popularArticle5 from "@/assets/landing-page/popular-articles/popular-articles-5.jpg";
import popularArticle6 from "@/assets/landing-page/popular-articles/popular-articles-6.jpg";
import popularArticle7 from "@/assets/landing-page/popular-articles/popular-articles-7.jpg";
import popularArticle8 from "@/assets/landing-page/popular-articles/popular-articles-8.jpg";
import popularArticle9 from "@/assets/landing-page/popular-articles/popular-articles-9.jpg";

import facebookLogo from "@/assets/footer/facebook-logo.svg";
import instagramLogo from "@/assets/footer/instagram-logo.svg";
import linkedinLogo from "@/assets/footer/linkedin-logo.svg";

import {
  FooterLink,
  FreeCoursesType,
  OurProgramsType,
  OurStatsType,
  PopularArticlesType,
  SpecialCoursesType,
  TestimonialsType,
} from "@/types";
import { MailIcon, MapPinnedIcon, PhoneIcon } from "lucide-react";

export const ourProgramsData: OurProgramsType[] = [
  {
    courseTitle: "English Proficiency & Literature",
    image: ourPrograms1,
    instructor: "Ms. Sarah Doe",
  },
  {
    courseTitle: "Mathematics Mastery",
    image: ourPrograms2,
    instructor: "Ms. Jane Doe",
  },
  {
    courseTitle: "Science Explorer (Physics, Chemistry, Biology)",
    image: ourPrograms3,
    instructor: "Mr. John Doe",
  },
  {
    courseTitle: "Global History & Social Studies",
    image: ourPrograms4,
    instructor: "Ms. Sarah Doe",
  },
  {
    courseTitle: "Chinese Language Mastery (HCL & CL)",
    image: ourPrograms5,
    instructor: "Ms. Jane Doe",
  },
  {
    courseTitle: "O-Level Express Science Bundle",
    image: ourPrograms6,
    instructor: "Mr. John Doe",
  },
];

export const specialCoursesData: SpecialCoursesType[] = [
  {
    courseTitle: "Young Innovators: STEM & Robotics",
    image: specialCourses1,
    instructor: "Ms. Sarah Doe",
  },
  {
    courseTitle: "Global Leadership & Public Speaking",
    image: specialCourses2,
    instructor: "Ms. Jane Doe",
  },
  {
    courseTitle: "Creative Digital Arts & Animation",
    image: specialCourses3,
    instructor: "Mr. John Doe",
  },
  {
    courseTitle: "Creative Writing & Storytelling",
    image: specialCourses4,
    instructor: "Ms. Sarah Doe",
  },
  {
    courseTitle: "Advanced Robotics & Engineering",
    image: specialCourses5,
    instructor: "Ms. Jane Doe",
  },
  {
    courseTitle: "Public Speaking & Debate Mastery",
    image: specialCourses6,
    instructor: "Mr. John Doe",
  },
];

export const freeCoursesData: FreeCoursesType[] = [
  {
    courseTitle: "Basic Coding for Beginners",
    image: freeCourses1,
    instructor: "Ms. Sarah Doe",
  },
  {
    courseTitle: "Financial Literacy for Kids & Teens",
    image: freeCourses2,
    instructor: "Ms. Jane Doe",
  },
  {
    courseTitle: "Environmental Awareness & Sustainability",
    image: freeCourses3,
    instructor: "Mr. John Doe",
  },
  {
    courseTitle: "Digital Art & Animation Basics",
    image: freeCourses4,
    instructor: "Ms. Sarah Doe",
  },
  {
    courseTitle: "Critical Thinking & Problem-Solving",
    image: freeCourses5,
    instructor: "Ms. Jane Doe",
  },
  {
    courseTitle: "Singapore History & Cultural Studies",
    image: freeCourses6,
    instructor: "Mr. John Doe",
  },
];

export const testimonialsData: TestimonialsType[] = [
  {
    image: testimonials1,
    name: "Maria D.",
    status: "Parent of a Grade 7 Student",
    testimony: `'VizSchool has been an amazing addition to my child’s education. The virtual classes and interactive lessons keep her engaged, and she’s learning skills beyond the regular school curriculum. The certificates she earns motivate her to keep going!'`,
  },
  {
    image: testimonials2,
    name: "Ethan L.",
    status: "Grade 8 Student",
    testimony: `"I love learning on VizSchool! The lessons are fun, and I can go at my own pace. I took a coding course and now I can build my own website! The best part is earning certificates after finishing a course!"`,
  },
  {
    image: testimonials3,
    name: "Jonathan R.",
    status: "Parent of a Grade 9 Student",
    testimony: `"As a busy parent, I love that my son can take extra courses at his own pace. VizSchool’s virtual classrooms and recorded lessons make learning so flexible. He’s even developed a new interest in digital art!"`,
  },
  {
    image: testimonials4,
    name: "Samantha P.",
    status: "Grade 6 Student",
    testimony: `"The virtual classrooms are amazing because I get to ask questions and interact with teachers. The lessons feel personal, and I never feel left behind. Plus, getting a certificate at the end makes me proud of my progress!"`,
  },
  {
    image: testimonials5,
    name: "Elaine W.",
    status: "Parent of a Grade 5 Student",
    testimony: `"VizSchool isn’t just another online learning platform—it’s a second school that helps my child grow beyond what’s taught in class. The extra courses have boosted her confidence in public speaking and math!"`,
  },
  {
    image: testimonials6,
    name: "Joshua M.",
    status: "Grade 10 Student",
    testimony: `"I used to think learning outside of school was boring, but VizSchool changed my mind! The lessons are interactive, and I can even see my progress. I just completed my first leadership course, and it was awesome!"`,
  },
];

export const ourStatsData: OurStatsType[] = [
  {
    description: "Students explore new skills",
    icon: ourStats1,
    stats: "95%",
  },
  {
    description: "Parents value the flexibility",
    icon: ourStats2,
    stats: "9 out of 10",
  },
  {
    description: "Students feel more confident",
    icon: ourStats3,
    stats: "85%",
  },
  {
    description: "Students take multiple courses",
    icon: ourStats4,
    stats: "4 out of 5",
  },
  {
    description: "Students earn certificates",
    icon: ourStats5,
    stats: "100%",
  },
];

export const popularArticlesData: PopularArticlesType[] = [
  {
    description:
      "Learn how to create a productive study environment, manage your time wisely, and stay motivated while learning from home.",
    duration: 5,
    image: popularArticle1,
    title: "How to Make the Most of Virtual Learning at Home",
  },
  {
    description:
      "From flashcard makers to homework helpers, here are ten awesome free tools that can level up your learning.",
    duration: 15,
    image: popularArticle2,
    title: "Top 10 Free Tools Every Student Should Know About",
  },
  {
    description:
      "Discover practical strategies for balancing schoolwork, hobbies, and rest so you never feel overwhelmed.",
    duration: 6,
    image: popularArticle3,
    title: "Mastering Time Management as a Student",
  },
  {
    description:
      "A sneak peek into the exclusive courses offered only to HFSE International School students on VizSchool.",
    duration: 7,
    image: popularArticle4,
    title: "What’s Inside an HFSE Special Course?",
  },
  {
    description: "Explore how games and interactivity help boost student engagement and performance.",
    duration: 12,
    image: popularArticle5,
    title: "Gamified Learning: Why It Works (And How We Do It)",
  },
  {
    description:
      " Step-by-step instructions on completing courses and showcasing your achievements with official VizSchool certificates.",
    duration: 18,
    image: popularArticle6,
    title: "How to Earn and Share Your Certificates on VizSchool",
  },
  {
    description: "Tips for studying smarter, avoiding distractions, and staying calm during online tests.",
    duration: 25,
    image: popularArticle7,
    title: "The Best Ways to Prepare for an Online Quiz",
  },
  {
    description: "Everything parents need to know about helping their child succeed in a virtual learning environment.",
    duration: 7,
    image: popularArticle8,
    title: `Parent's Guide to Supporting Your Child on VizSchool`,
  },
  {
    description:
      "Meet the team and discover how VizSchool was built to support modern learners and align with the HFSE vision.",
    duration: 5,
    image: popularArticle9,
    title: "Behind the Scenes: Building VizSchool with Students in Mind",
  },
];

export const footerLinks: FooterLink[] = [
  {
    title: "Get Started",
    items: [
      { name: "Why VizSchool?", link: "/about" },
      { name: "Courses", link: "/contact" },
      { name: "Tutors" },
      { name: "Student Reviews" },
      { name: "Pricing & Plans" },
      { name: "Blog" },
      { name: "Learning Resources" },
      { name: "Contact Us" },
    ],
  },
];

export const footerLinks2: FooterLink[] = [
  {
    title: "Primary Classes",
    items: [
      { name: "Primary 1", link: "/about" },
      { name: "Primary 2", link: "/contact" },
      { name: "Primary 3" },
      { name: "Primary 4" },
      { name: "Primary 5" },
      { name: "Primary 6" },
    ],
  },
  {
    title: "Secondary Classes",
    items: [
      { name: "Secondary 1", link: "/about" },
      { name: "Secondary 2", link: "/contact" },
      { name: "Secondary 3" },
      { name: "Secondary 4" },
    ],
  },
];

export const talkToUsLinks = [
  {
    icon: MailIcon,
    details: "care@vizschool.com",
  },
  {
    icon: PhoneIcon,
    details: "+65 6451 0080",
  },
  {
    icon: MapPinnedIcon,
    details: "223 Mountbatten Road, 03-08 223@Mountbatten Singapore 398008",
  },
];

export const socialMediaLinks = [
  {
    icon: facebookLogo,
    link: "#",
  },
  {
    icon: instagramLogo,
    link: "#",
  },
  {
    icon: linkedinLogo,
    link: "#",
  },
];

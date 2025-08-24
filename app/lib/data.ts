// This file will contain data fetching functions that can be connected to your CMS
// For now, it contains static data that you can replace with API calls

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface PageData {
  title: string;
  description: string;
  content: string;
}

// Static data - replace with CMS integration
export const getProjects = async (): Promise<Project[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern, scalable e-commerce solution built with Next.js and Stripe integration.",
      category: "Web Application",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with real-time transaction updates.",
      category: "Mobile App",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Professional corporate website with content management system and analytics.",
      category: "Website",
      technologies: ["Next.js", "Contentful", "Framer Motion", "Vercel"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Comprehensive analytics dashboard with real-time data visualization.",
      category: "Web Application",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 5,
      title: "Food Delivery App",
      description: "Full-stack food delivery platform with real-time tracking and payment processing.",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Google Maps", "Stripe"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Creative portfolio website with smooth animations and modern design.",
      category: "Website",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "/api/placeholder/400/300",
      link: "#"
    }
  ];
};

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in web development and digital strategy.",
      avatar: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Lead Developer",
      bio: "Full-stack expert specializing in React, Node.js, and cloud architecture.",
      avatar: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Design Director",
      bio: "Creative designer focused on user experience and modern interface design.",
      avatar: "/api/placeholder/150/150"
    }
  ];
};

export const getPageData = async (page: string): Promise<PageData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const pages = {
    home: {
      title: "Welcome to the Future",
      description: "Building exceptional digital experiences with cutting-edge technology and modern design principles.",
      content: "Your home page content here..."
    },
    about: {
      title: "About Us",
      description: "We're passionate about creating exceptional digital experiences that make a difference.",
      content: "Your about page content here..."
    },
    portfolio: {
      title: "Our Portfolio",
      description: "Showcasing our best work and the innovative solutions we've delivered for our clients.",
      content: "Your portfolio page content here..."
    }
  };
  
  return pages[page as keyof typeof pages] || pages.home;
};

// Example of how to integrate with a CMS like Contentful, Strapi, etc.
/*
export const getProjectsFromCMS = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${process.env.CMS_API_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects from CMS:', error);
    return [];
  }
};
*/

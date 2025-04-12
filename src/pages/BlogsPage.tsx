import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    slug: "smart-home-security-systems",
    title: "Advanced Smart Home Security Systems",
    excerpt: "Discover how our AI-powered security systems can transform your home safety with intelligent monitoring and instant alerts.",
    category: "Security",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1dc0abcd3f2398f0e903bea5bdcc2fe85960eb",
    date: "April 8, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "smart-thermostats-energy-saving",
    title: "How Smart Thermostats Save Energy and Money",
    excerpt: "Learn how our smart thermostats use AI to optimize heating and cooling, reducing energy consumption by up to 23% annually.",
    category: "Energy",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e404562a702956030c2cd024ba111daae94a22b6",
    date: "April 2, 2025",
    readTime: "4 min read"
  },
  {
    id: 3,
    slug: "voice-controlled-lighting-systems",
    title: "Voice-Controlled Lighting for Modern Homes",
    excerpt: "Explore the convenience and ambiance possibilities of our voice-controlled smart lighting systems for every room.",
    category: "Lighting",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/61be04c0bcf14e5af11f85f5d377d0be36f781a2",
    date: "March 28, 2025",
    readTime: "6 min read"
  },
  {
    id: 4,
    slug: "smart-robot-vacuum-cleaners",
    title: "Robotic Vacuum Cleaners: The Future of Home Cleaning",
    excerpt: "Our AI-powered robot vacuums map your home for optimal cleaning paths while learning your preferences over time.",
    category: "Cleaning",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3aec267c34f2c67c0cf2292b501bc08f86d08aa",
    date: "March 21, 2025",
    readTime: "4 min read"
  },
  {
    id: 5,
    slug: "water-leak-detection-systems",
    title: "Preventing Water Damage with Smart Sensors",
    excerpt: "How our intelligent water detection systems can save homeowners thousands in potential water damage repairs.",
    category: "Sensors",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1dc0abcd3f2398f0e903bea5bdcc2fe85960eb",
    date: "March 15, 2025",
    readTime: "5 min read"
  },
  {
    id: 6,
    slug: "smart-door-locks-home-security",
    title: "Keyless Entry: Smart Door Locks Explained",
    excerpt: "Discover the convenience and security benefits of our fingerprint and code-based smart door locks for your home.",
    category: "Security",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e404562a702956030c2cd024ba111daae94a22b6",
    date: "March 10, 2025",
    readTime: "7 min read"
  }
];

// Category filter options
const categories = ["All", "Security", "Energy", "Lighting", "Cleaning", "Sensors"];

const BlogsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set visible when component mounts
    setIsVisible(true);

    // Filter posts based on category and search query
    const filterPosts = () => {
      return blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    };

    setFilteredPosts(filterPosts());
  }, [activeCategory, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 12 
      }
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-[rgba(13,13,13,1)] min-h-screen">
      {/* Header section */}
      <motion.div 
        className="pt-32 pb-16 px-8 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Smart Home <span className="text-[rgba(208,255,0,1)]">Blog</span>
        </h1>
        <p className="text-[rgba(122,122,122,1)] text-xl max-w-3xl mx-auto">
          Explore the latest innovations, tips, and insights about our smart home products and technology
        </p>

        {/* Search input */}
        <div className="mt-12 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-[rgba(22,22,22,1)] border border-[rgba(38,38,38,1)] rounded-full py-3 px-6 pl-12 text-[rgba(204,204,204,1)] focus:outline-none focus:border-[rgba(208,255,0,0.5)]"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-[rgba(122,122,122,1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? "bg-[rgba(208,255,0,0.9)] text-black"
                  : "bg-[rgba(22,22,22,1)] text-[rgba(204,204,204,1)] border border-[rgba(38,38,38,1)]"
              }`}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: activeCategory !== category ? "rgba(30,30,30,1)" : "",
                borderColor: "rgba(208,255,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Blog grid */}
      <motion.div 
        className="max-w-7xl mx-auto px-8 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div 
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link to={`/blogs/${post.slug}`} className="block h-full">
                  <div className="bg-[rgba(22,22,22,0.8)] border border-[rgba(38,38,38,1)] rounded-2xl overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[rgba(208,255,0,0.9)] text-black text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-sm text-[rgba(122,122,122,1)] mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-[rgba(204,204,204,1)] text-xl font-bold mb-3 hover:text-[rgba(208,255,0,1)] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[rgba(122,122,122,1)] text-base mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-[rgba(208,255,0,1)] font-medium">
                        Read more
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-[rgba(204,204,204,1)] text-2xl font-bold mb-2">No results found</h3>
            <p className="text-[rgba(122,122,122,1)]">
              We couldn't find any blog posts matching your search criteria. Try adjusting your filters.
            </p>
            <button 
              className="mt-6 px-6 py-2 bg-[rgba(22,22,22,1)] border border-[rgba(38,38,38,1)] text-[rgba(204,204,204,1)] rounded-full hover:border-[rgba(208,255,0,0.5)]"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default BlogsPage;
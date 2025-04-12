import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Sample blog post data with full content - in a real app, this would come from an API or CMS
const blogPostsData = {
  "smart-home-security-systems": {
    id: 1,
    title: "Advanced Smart Home Security Systems",
    category: "Security",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1dc0abcd3f2398f0e903bea5bdcc2fe85960eb",
    date: "April 8, 2025",
    readTime: "5 min read",
    author: {
      name: "Michael Chen",
      role: "Security Technology Expert",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    content: [
      {
        type: "paragraph",
        content: "Smart home security has evolved dramatically in recent years. What once required professional installation and monitoring now sits comfortably in the DIY category, with intuitive systems that anyone can set up and manage."
      },
      {
        type: "subtitle",
        content: "AI-Powered Detection Systems"
      },
      {
        type: "paragraph",
        content: "Our security cameras utilize advanced AI algorithms to distinguish between humans, animals, and vehicles, dramatically reducing false alarms. The system learns over time, becoming more accurate at recognizing regular visitors versus unknown individuals."
      },
      {
        type: "image",
        url: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1dc0abcd3f2398f0e903bea5bdcc2fe85960eb",
        caption: "Our latest HD security camera with night vision and AI detection"
      },
      {
        type: "subtitle",
        content: "Integrated Ecosystem"
      },
      {
        type: "paragraph",
        content: "The true power of modern security systems lies in their connectivity. Door sensors, motion detectors, glass break sensors, and cameras all communicate with each other to provide comprehensive protection."
      },
      {
        type: "features",
        items: [
          "Real-time mobile alerts and notifications",
          "Facial recognition technology for family members",
          "Two-way audio communication",
          "Seamless integration with smart locks and lighting",
          "Encrypted cloud storage for event recording"
        ]
      },
      {
        type: "subtitle",
        content: "Setting Up Your System"
      },
      {
        type: "paragraph",
        content: "Installation is remarkably straightforward. Our wireless cameras connect to your home WiFi, and the magnetic door/window sensors require no tools to install. Follow these simple steps to set up your system:"
      },
      {
        type: "steps",
        items: [
          "Install the mobile app and create your account",
          "Connect the base station to your router",
          "Place sensors strategically around entry points",
          "Position cameras for optimal coverage",
          "Test the system and customize alert preferences"
        ]
      },
      {
        type: "paragraph",
        content: "Most customers complete the entire setup process in under 30 minutes, with no professional help required."
      },
      {
        type: "quote",
        content: "The peace of mind that comes from knowing our home is protected, even when we're away, is invaluable. The system has already deterred one potential break-in by triggering lights and an alarm when someone approached our back door at night.",
        author: "Emma & James, San Francisco"
      },
      {
        type: "subtitle",
        content: "Advanced Features"
      },
      {
        type: "paragraph",
        content: "For those seeking enterprise-grade security, our premium plan includes 24/7 professional monitoring, cellular backup in case of power or internet outages, and expanded cloud storage for event history."
      },
      {
        type: "subtitle",
        content: "Conclusion"
      },
      {
        type: "paragraph",
        content: "Modern smart home security systems have revolutionized how we protect our homes and families. With affordable pricing, straightforward installation, and powerful features, there's never been a better time to upgrade your home security. Browse our full range of security products to find the perfect solution for your needs."
      }
    ],
    relatedProducts: [
      {
        id: 101,
        name: "AI Security Camera Pro",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1dc0abcd3f2398f0e903bea5bdcc2fe85960eb",
        price: "$129.99"
      },
      {
        id: 102,
        name: "Smart Door/Window Sensor (3-pack)",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/61be04c0bcf14e5af11f85f5d377d0be36f781a2",
        price: "$49.99"
      },
      {
        id: 103,
        name: "Security System Hub",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e404562a702956030c2cd024ba111daae94a22b6",
        price: "$89.99"
      }
    ]
  },
  "smart-thermostats-energy-saving": {
    id: 2,
    title: "How Smart Thermostats Save Energy and Money",
    category: "Energy",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e404562a702956030c2cd024ba111daae94a22b6",
    date: "April 2, 2025",
    readTime: "4 min read",
    author: {
      name: "Sarah Johnson",
      role: "Energy Efficiency Specialist",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    content: [
      {
        type: "paragraph",
        content: "In today's eco-conscious world, homeowners are increasingly looking for ways to reduce their carbon footprint while also cutting down on utility bills. Smart thermostats represent one of the most effective and accessible ways to achieve both goals simultaneously."
      },
      {
        type: "subtitle",
        content: "The Intelligence Behind Smart Thermostats"
      },
      {
        type: "paragraph",
        content: "Unlike traditional programmable thermostats, smart models use a combination of sensors, weather forecasts, and learning algorithms to optimize your home's heating and cooling. After just a week of use, our thermostats begin to understand your schedule and preferences, making micro-adjustments that add up to significant savings."
      },
      {
        type: "image",
        url: "https://cdn.builder.io/api/v1/image/assets/TEMP/e404562a702956030c2cd024ba111daae94a22b6",
        caption: "Our EnergySmart Thermostat with smartphone control and energy usage reports"
      },
      {
        type: "subtitle",
        content: "Real Savings, Measurable Results"
      },
      {
        type: "paragraph",
        content: "Independent studies have confirmed that households using our smart thermostats save an average of 23% on heating and cooling costs annually. For the typical American home, this translates to approximately $280-$350 in savings each year."
      },
      {
        type: "features",
        items: [
          "Learning algorithms that adapt to your lifestyle",
          "Geofencing to adjust temperatures when you're away",
          "Monthly energy reports with conservation tips",
          "Smart scheduling that considers weather forecasts",
          "HVAC system monitoring to detect inefficiencies"
        ]
      },
      {
        type: "subtitle",
        content: "Installation and Setup"
      },
      {
        type: "paragraph",
        content: "Most homeowners can install our smart thermostats in under 30 minutes. The system is compatible with 95% of home HVAC systems, and our step-by-step app guides you through the entire process:"
      },
      {
        type: "steps",
        items: [
          "Turn off power to your HVAC system at the breaker",
          "Remove your old thermostat cover and take a photo of the wiring",
          "Label the wires using the included stickers",
          "Install the mounting plate and connect the wires",
          "Attach the thermostat display and restore power",
          "Follow the app setup instructions to connect to WiFi"
        ]
      },
      {
        type: "quote",
        content: "We installed the EnergySmart Thermostat last winter and immediately noticed a difference in our heating bills. The system quickly learned that we like the house cooler at night and warmer in the morning, and it manages the transitions perfectly.",
        author: "The Patel Family, Chicago"
      },
      {
        type: "subtitle",
        content: "Additional Benefits"
      },
      {
        type: "paragraph",
        content: "Beyond energy savings, smart thermostats offer convenience through voice assistant integration (compatible with Alexa, Google Assistant, and Siri), remote access via smartphone, and detailed insights into your energy usage patterns."
      },
      {
        type: "paragraph",
        content: "Many utility companies also offer rebates for smart thermostat installations, further offsetting the initial investment."
      },
      {
        type: "subtitle",
        content: "Conclusion"
      },
      {
        type: "paragraph",
        content: "A smart thermostat is one of the simplest yet most impactful upgrades you can make to improve your home's energy efficiency. With a typical ROI period of less than 18 months, it's an investment that quickly pays for itself while reducing your environmental impact. Explore our range of smart thermostats to find the perfect match for your home."
      }
    ],
    relatedProducts: [
      {
        id: 104,
        name: "EnergySmart Thermostat",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e404562a702956030c2cd024ba111daae94a22b6",
        price: "$149.99"
      },
      {
        id: 105,
        name: "Room Temperature Sensors (2-pack)",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1dc0abcd3f2398f0e903bea5bdcc2fe85960eb",
        price: "$39.99"
      },
      {
        id: 106,
        name: "Smart Vent Controller",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/61be04c0bcf14e5af11f85f5d377d0be36f781a2",
        price: "$79.99"
      }
    ]
  }
  // Additional blog posts would be defined here...
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching blog post data
    const fetchPost = () => {
      setLoading(true);
      
      // Wait for a short delay to simulate API fetch
      setTimeout(() => {
        const fetchedPost = blogPostsData[slug];
        
        if (fetchedPost) {
          setPost(fetchedPost);
          
          // Get some related posts
          // In a real app, you'd fetch related posts based on category, tags, etc.
          const sampleRelatedSlugs = Object.keys(blogPostsData).filter(postSlug => postSlug !== slug);
          const limitedRelatedSlugs = sampleRelatedSlugs.slice(0, 2); // Get 2 random related posts
          
          const relatedPostsData = limitedRelatedSlugs.map(relatedSlug => ({
            slug: relatedSlug,
            ...blogPostsData[relatedSlug]
          }));
          
          setRelatedPosts(relatedPostsData);
        }
        
        setLoading(false);
      }, 500);
    };

    fetchPost();
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [slug]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  if (loading) {
    return (
      <div className="bg-[rgba(13,13,13,1)] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[rgba(208,255,0,0.3)] border-t-[rgba(208,255,0,0.9)] rounded-full animate-spin"></div>
          <p className="mt-4 text-[rgba(204,204,204,1)]">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-[rgba(13,13,13,1)] min-h-screen px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[rgba(204,204,204,1)] mb-4">Article Not Found</h1>
          <p className="text-[rgba(122,122,122,1)] mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/blogs')}
            className="px-6 py-3 bg-[rgba(208,255,0,0.9)] text-black font-medium rounded-full hover:bg-[rgba(208,255,0,1)]"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Render content based on type
  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-[rgba(204,204,204,0.9)] mb-6 leading-relaxed">
            {item.content}
          </p>
        );
      case 'subtitle':
        return (
          <h3 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
            {item.content}
          </h3>
        );
      case 'image':
        return (
          <figure key={index} className="my-8">
            <img 
              src={item.url} 
              alt={item.caption || 'Blog image'} 
              className="w-full rounded-xl"
            />
            {item.caption && (
              <figcaption className="text-sm text-[rgba(122,122,122,1)] mt-2 text-center">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );
      case 'features':
        return (
          <ul key={index} className="mb-6 pl-5">
            {item.items.map((feature, i) => (
              <li key={i} className="text-[rgba(204,204,204,0.9)] mb-2 flex items-start">
                <span className="text-[rgba(208,255,0,1)] mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        );
      case 'steps':
        return (
          <ol key={index} className="mb-6 pl-5 list-decimal">
            {item.items.map((step, i) => (
              <li key={i} className="text-[rgba(204,204,204,0.9)] mb-3 pl-2">
                {step}
              </li>
            ))}
          </ol>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[rgba(208,255,0,0.7)] pl-5 py-2 my-8">
            <p className="text-[rgba(204,204,204,0.9)] italic">"{item.content}"</p>
            {item.author && (
              <footer className="text-sm text-[rgba(150,150,150,1)] mt-2">
                — {item.author}
              </footer>
            )}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="bg-[rgba(13,13,13,1)] min-h-screen pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero image */}
      <div className="w-full h-[50vh] relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Back button and category */}
        <div className="absolute top-8 left-8 flex items-center">
          <button 
            onClick={() => navigate('/blogs')}
            className="flex items-center text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full px-4 py-2 mr-4"
          >
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <span className="bg-[rgba(208,255,0,0.9)] text-black text-sm font-bold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        
        {/* Content container overlapping the hero image */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto bg-[rgba(13,13,13,1)] rounded-t-3xl px-8 pt-10 -mb-10">
            <div className="flex items-center text-sm text-[rgba(122,122,122,1)] mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            {/* Author info */}
            <div className="flex items-center mb-10">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full mr-4 border-2 border-[rgba(38,38,38,1)]"
              />
              <div>
                <div className="text-[rgba(204,204,204,1)] font-medium">
                  {post.author.name}
                </div>
                <div className="text-sm text-[rgba(122,122,122,1)]">
                  {post.author.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <motion.div 
        className="max-w-4xl mx-auto px-8 pt-16"
        variants={contentVariants}
      >
        {/* Article content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {post.content.map((item, index) => renderContent(item, index))}
        </article>
        
        {/* Related products section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-6">
            Related Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {post.relatedProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-[rgba(22,22,22,1)] border border-[rgba(38,38,38,1)] rounded-xl overflow-hidden hover:border-[rgba(208,255,0,0.5)] transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-[rgba(204,204,204,1)] font-medium mb-1">{product.name}</h4>
                  <p className="text-[rgba(208,255,0,1)] font-bold">{product.price}</p>
                  <button className="mt-3 w-full bg-[rgba(30,30,30,1)] border border-[rgba(38,38,38,1)] text-[rgba(204,204,204,1)] rounded-lg py-2 hover:bg-[rgba(35,35,35,1)] hover:border-[rgba(208,255,0,0.3)]">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related articles */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-6">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link 
                key={relatedPost.id}
                to={`/blogs/${relatedPost.slug}`}
                className="block"
              >
                <div className="bg-[rgba(22,22,22,0.8)] border border-[rgba(38,38,38,1)] rounded-xl overflow-hidden hover:border-[rgba(208,255,0,0.5)] transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[rgba(208,255,0,0.9)] text-black text-xs font-bold px-3 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-[rgba(122,122,122,1)] mb-2">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h4 className="text-lg font-bold text-[rgba(204,204,204,1)] hover:text-[rgba(208,255,0,1)] transition-colors">
                      {relatedPost.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Back to blog button */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center px-6 py-3 bg-[rgba(22,22,22,1)] border border-[rgba(38,38,38,1)] text-[rgba(204,204,204,1)] rounded-full hover:border-[rgba(208,255,0,0.5)]"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogDetailPage;
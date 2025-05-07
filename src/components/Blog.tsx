import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Search, Filter, X } from 'lucide-react';
import Fuse from 'fuse.js';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  readingTime: string;
  categories: string[];
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>(['All']);
  const [view, setView] = useState<'grid' | 'carousel'>('carousel');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [fuse, setFuse] = useState<Fuse<BlogPost> | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@avi.tech');
        const data = await response.json();
        
        const formattedPosts = data.items.map((post: any) => ({
          title: post.title,
          link: post.link,
          pubDate: new Date(post.pubDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          description: post.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          thumbnail: post.thumbnail || 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          readingTime: Math.ceil(post.description.split(' ').length / 200) + ' min read',
          categories: post.categories || ['Uncategorized']
        }));

        setPosts(formattedPosts);
        setFilteredPosts(formattedPosts);
        
        // Extract unique categories
        const allCategories = ['All', ...new Set(formattedPosts.flatMap(post => post.categories))];
        setCategories(allCategories);

        // Initialize Fuse.js for search
        setFuse(new Fuse(formattedPosts, {
          keys: ['title', 'description', 'categories'],
          threshold: 0.3
        }));

      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let result = [...posts];

    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.categories.includes(selectedCategory));
    }

    // Apply search
    if (searchQuery && fuse) {
      const searchResults = fuse.search(searchQuery);
      result = searchResults.map(result => result.item);
    }

    setFilteredPosts(result);
    setActiveIndex(0); // Reset carousel position
  }, [searchQuery, selectedCategory, posts, fuse]);

  const scrollToPost = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    const newScrollPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });

    const newIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1)
      : Math.min(filteredPosts.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
  };

  const BlogCard: React.FC<{ post: BlogPost; className?: string }> = ({ post, className = '' }) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`group relative ${className}`}
    >
      <a 
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="h-full bg-background-card border border-text-primary/10 
                      p-6 transition-all duration-300 hover:border-text-primary/30 
                      hover:shadow-lg rounded-xl flex flex-col">
          <div className="h-48 overflow-hidden rounded-lg mb-6">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mb-4">
            <span className="flex items-center gap-2 bg-text-primary/5 px-3 py-1 rounded-full">
              <Calendar size={14} />
              {post.pubDate}
            </span>
            <span className="flex items-center gap-2 bg-text-primary/5 px-3 py-1 rounded-full">
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold group-hover:text-text-primary transition-colors mb-4">
            {post.title}
          </h3>
          
          <p className="text-text-secondary flex-grow">
            {post.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            {post.categories.map((category, index) => (
              <span 
                key={index}
                className="text-sm bg-text-primary/5 text-text-secondary px-3 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-2 text-text-primary font-medium
                        group-hover:gap-3 transition-all mt-auto">
            Read Article
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </a>
    </motion.article>
  );

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Latest Articles
        </motion.h2>
        
        <motion.p 
          className="text-center text-text-secondary text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Exploring data science, machine learning, and technology through in-depth articles and tutorials
        </motion.p>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-background-card border border-text-primary/20 rounded-lg
                         text-text-primary placeholder-text-secondary/50 focus:border-text-primary/50
                         focus:ring-1 focus:ring-text-primary/50 outline-none transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="relative min-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 pl-12 appearance-none bg-background-card border border-text-primary/20 
                         rounded-lg text-text-primary focus:border-text-primary/50 focus:ring-1 
                         focus:ring-text-primary/50 outline-none transition-all cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setView('carousel')}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  view === 'carousel'
                    ? 'bg-text-primary text-background-dark border-text-primary'
                    : 'border-text-primary/20 text-text-secondary hover:border-text-primary/50'
                }`}
              >
                Carousel
              </button>
              <button
                onClick={() => setView('grid')}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  view === 'grid'
                    ? 'bg-text-primary text-background-dark border-text-primary'
                    : 'border-text-primary/20 text-text-secondary hover:border-text-primary/50'
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-text-primary"></div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center text-text-secondary py-12">
            <p className="text-xl mb-4">No articles found</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : view === 'carousel' ? (
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => scrollToPost('left')}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background-card border border-text-primary/20 
                         flex items-center justify-center rounded-full shadow-lg transition-all duration-300 
                         hover:bg-text-primary hover:text-background-dark ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              disabled={activeIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={() => scrollToPost('right')}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background-card border border-text-primary/20 
                         flex items-center justify-center rounded-full shadow-lg transition-all duration-300 
                         hover:bg-text-primary hover:text-background-dark ${
                           activeIndex === filteredPosts.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                         }`}
              disabled={activeIndex === filteredPosts.length - 1}
            >
              <ChevronRight size={20} />
            </button>

            {/* Posts Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredPosts.map((post, index) => (
                <div key={post.link} className="min-w-full snap-center px-4">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {filteredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!scrollContainerRef.current) return;
                    const container = scrollContainerRef.current;
                    container.scrollTo({
                      left: container.clientWidth * index,
                      behavior: 'smooth'
                    });
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                             ${index === activeIndex 
                               ? 'w-8 bg-text-primary' 
                               : 'bg-text-primary/20 hover:bg-text-primary/40'}`}
                  aria-label={`Go to article ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.link} post={post} />
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Blog;
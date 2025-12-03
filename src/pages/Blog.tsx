import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, User, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Hello!",
      date: "December 3, 2025",
      author: "Servers World network",
      comments: 1,
      excerpt: "Welcome elitec groups, we offer quality services tailored to your needs!",
      image: blog1,
      slug: "hello-world"
    },
    {
      id: 2,
      title: "How Often Should You Schedule Professional Grease Trap Cleaning?",
      date: "December 3, 2025",
      author: "Servers World network",
      comments: 0,
      excerpt: "Regular grease trap cleaning is essential for maintaining compliance and preventing costly backups. Learn about the recommended cleaning schedule for your facility.",
      image: blog2,
      slug: "how-often-should-you-schedule-professional-grease-trap-cleaning"
    },
    {
      id: 3,
      title: "How to Keep Your Commercial Kitchen Safe and Compliant",
      date: "December 3, 2025",
      author: "servers world network",
      comments: 0,
      excerpt: "Discover essential tips for maintaining a safe and compliant commercial kitchen, including proper grease trap maintenance and best practices.",
      image: blog3,
      slug: "how-to-keep-your-commercial-kitchen-safe-and-compliant"
    }
  ];

  const recentPosts = [
    {
      id: 2,
      title: "How Often Should You Schedule Professional",
      date: "December 3, 2025",
      image: blog2,
      slug: "how-often-should-you-schedule-professional-grease-trap-cleaning"
    },
    {
      id: 3,
      title: "How to Keep Your Home Safe",
      date: "December 3, 2025",
      image: blog3,
      slug: "how-to-keep-your-commercial-kitchen-safe-and-compliant"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Blog</h1>
          <div className="text-center text-white/80">
            <span>Home</span> <span className="mx-2">{">>"}</span> <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Blog Posts */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="border-accent/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments} Comment{post.comments !== 1 ? 's' : ''}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-navy mb-4">
                        <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right - Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <div className="relative">
                    <Input
                      placeholder="Search"
                      className="pr-12 border-accent/20"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-0 top-0 h-full rounded-l-none text-accent hover:text-white hover:bg-accent"
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent"></span>
                    Recent Post
                  </h3>
                  
                  <div className="space-y-6">
                    {recentPosts.map((post) => (
                      <Link 
                        key={post.id} 
                        to={`/blog/${post.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-20 h-20 rounded-full object-cover group-hover:opacity-80 transition-opacity"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-navy mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

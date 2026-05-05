const blogs = [
  {
    title: "The Magic of Brown Butter",
    excerpt: "Discover why we brown our butter and how it transforms a simple cookie into a rich, toffee-like experience.",
    date: "May 5, 2026",
    readTime: "3 min read",
  },
  {
    title: "Baking with Jaggery vs Refined Sugar",
    excerpt: "An inside look at why we chose jaggery for its earthy sweetness and the health benefits it brings to your daily treats.",
    date: "April 28, 2026",
    readTime: "4 min read",
  },
  {
    title: "Our Favorite Chai Pairings",
    excerpt: "Pairing our Mumbai Spice Brew cookie with different types of chai for the ultimate rainy day comfort.",
    date: "April 15, 2026",
    readTime: "2 min read",
  }
];

const Blog = () => (
  <section id="blog" className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">Our Stories</span>
        <h2 className="mt-4 text-4xl md:text-5xl text-balance">
          The Bakelette <em className="font-script text-primary">Blog</em>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
          Thoughts, recipes, and sweet ramblings from our kitchen to yours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <article 
            key={i} 
            className="group cursor-pointer flex flex-col h-full bg-gradient-card border border-border/60 rounded-3xl p-6 sm:p-8 hover:border-primary transition-colors shadow-soft hover:shadow-elegant fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-4">
              <span>{blog.date}</span>
              <span className="w-1 h-1 rounded-full bg-primary/40"></span>
              <span>{blog.readTime}</span>
            </div>
            <h3 className="text-2xl font-display text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
              {blog.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed flex-1">
              {blog.excerpt}
            </p>
            <div className="mt-6 font-semibold text-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Read More <span aria-hidden="true">→</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;

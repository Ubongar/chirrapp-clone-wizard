
export const Features = () => {
  const features = [
    {
      title: "Thread to Blog",
      description: "Convert your Twitter threads into beautiful blog posts with just a few clicks.",
    },
    {
      title: "Custom Formatting",
      description: "Customize your blog post's appearance with our intuitive editor.",
    },
    {
      title: "Share Anywhere",
      description: "Export your blog posts in multiple formats and share them anywhere.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-purple-50/50 to-white/50 backdrop-blur-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 gradient-text">Features that empower your writing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-in p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-purple-100 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

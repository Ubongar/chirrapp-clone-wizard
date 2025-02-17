
export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Write your thread",
      description: "Create your Twitter thread as you normally would.",
    },
    {
      number: "02",
      title: "Import to chirrapp",
      description: "Paste your thread URL or content into chirrapp.",
    },
    {
      number: "03",
      title: "Share your blog",
      description: "Customize and share your beautifully formatted blog post.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-purple-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 gradient-text">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in group" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-8xl font-bold text-purple-100 mb-4 transition-colors group-hover:text-purple-200">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

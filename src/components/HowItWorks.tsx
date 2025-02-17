
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
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-5xl font-bold text-gray-200 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

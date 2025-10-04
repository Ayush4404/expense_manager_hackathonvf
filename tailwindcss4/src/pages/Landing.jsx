import { useNavigate } from "react-router-dom";
import { DollarSign, CheckCircle, TrendingUp, Users } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-40 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-3xl bg-blue-600 shadow-xl">
            <DollarSign className="h-14 w-14 text-white" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Expense Management
            <span className="block text-blue-600 mt-2">Simplified</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            Revolutionize how your company handles employee expense reimbursements with our
            automated, transparent, and intelligent platform.
          </p>

          <div className="flex gap-5 justify-center md:justify-start mt-4">
            <button
              className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all font-medium"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </button>
            <button
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-xl shadow hover:bg-blue-50 transition-all font-medium"
              onClick={() => navigate("/login")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Optional Right Hero Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/R.png" // Replace with your SVG/PNG
            alt="Hero Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Features Section */}
      {/* Features Section */}
<div className="mt-20 px-6 max-w-6xl mx-auto">
  {/* Section Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our Platform?</h2>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Streamline your expense management with features designed for efficiency, transparency, and control.
    </p>
  </div>

  {/* Feature Cards */}
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        icon: <CheckCircle className="h-7 w-7 text-green-600" />,
        title: "Smart Approval Workflows",
        desc: "Define flexible approval rules with multi-level sequential or parallel workflows.",
        bg: "bg-green-100",
      },
      {
        icon: <TrendingUp className="h-7 w-7 text-blue-600" />,
        title: "Real-time Tracking",
        desc: "Complete visibility into expense status for all stakeholders at every step.",
        bg: "bg-blue-100",
      },
      {
        icon: <Users className="h-7 w-7 text-purple-600" />,
        title: "Role-based Access",
        desc: "Admin, Manager, and Employee roles with appropriate permissions and views.",
        bg: "bg-purple-100",
      },
    ].map((feature, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
      >
        <div className={`h-14 w-14 rounded-lg flex items-center justify-center mb-4 ${feature.bg}`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
        <p className="text-gray-600">{feature.desc}</p>
      </div>
    ))}
  </div>
</div>


      {/* Stats Section */}
      {/* Stats Section */}
<div className="mt-32 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 items-center ml-100">Business Impact</h2>
  <div className="bg-white rounded-3xl p-12 shadow-xl text-center">

    <div className="grid md:grid-cols-4 gap-10">
      {[
        { value: "70%", label: "Faster Processing", color: "text-blue-600" },
        { value: "90%", label: "Error Reduction", color: "text-green-600" },
        { value: "50%", label: "Time Saved", color: "text-purple-600" },
        { value: "80%", label: "Cycle Time Cut", color: "text-yellow-600" },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
        >
          <div className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* Testimonials Section */}
<div className="mt-32 px-6 max-w-6xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
    Trusted by hundreds of companies to streamline their expense management.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-12">
    {[
      { name: "Alice Johnson", role: "Finance Manager", quote: "This platform has revolutionized how we handle reimbursements!", img: "2.webp" },
      { name: "Mark Smith", role: "HR Lead", quote: "The approval workflows save us so much time every week.", img: "/1.webp" },
      { name: "Linda Brown", role: "Operations Head", quote: "Real-time tracking makes everything transparent and easy.", img: "/3.webp" },
    ].map((user, idx) => (
      <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
        <img src={user.img} alt={user.name} className="h-16 w-16 rounded-full mx-auto mb-4"/>
        <p className="text-gray-600 italic mb-4">"{user.quote}"</p>
        <h4 className="font-semibold text-gray-900">{user.name}</h4>
        <p className="text-gray-500 text-sm">{user.role}</p>
      </div>
    ))}
  </div>
</div>
{/* FAQ Section */}
<div className="mt-32 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
  <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
    Answers to some common questions about our platform.
  </p>

  <div className="mt-12 space-y-4">
    {[
      { q: "Can I try the platform for free?", a: "Yes! We offer a 14-day free trial with no credit card required." },
      { q: "Is my data secure?", a: "Absolutely. We follow strict security protocols including encryption and access control." },
      { q: "Can I upgrade my plan later?", a: "Yes! You can upgrade anytime without losing any data." },
    ].map((faq, idx) => (
      <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
        <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
        <p className="text-gray-600">{faq.a}</p>
      </div>
    ))}
  </div>
</div>
{/* CTA Section */}
<div className="mt-32 bg-blue-500 text-white py-20 text-center rounded-3xl mx-6 md:mx-auto max-w-6xl shadow-xl">
  <h2 className="text-3xl md:text-4xl font-bold">Ready to Simplify Expense Management?</h2>
  <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
    Join hundreds of companies already saving time and money.
  </p>
  <button
    className="mt-8 px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition-all"
    onClick={() => navigate("/auth")}
  >
    Get Started Now
  </button>
</div>



{/* Footer */}
<footer className="bg-gray-900 text-gray-300 mt-32">
  <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
    <div>
      <h3 className="text-white font-bold mb-4 text-lg">ExpenseManager</h3>
      <p className="text-gray-400 text-sm">
        Simplifying expense management for companies worldwide. Automate workflows, track
        expenses, and improve business efficiency.
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-4">Company</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold mb-4">Support</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
        <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Facebook</a>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
    &copy; {new Date().getFullYear()} ExpenseManager. All rights reserved.
  </div>
</footer>

    </div>
  );
};

export default Landing;

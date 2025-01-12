import * as React from "react";
// import { useTranslation } from "react-i18next";
import {
  Calendar,
  Users,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Star,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const HomePage: React.FC = () => {
  // const { t } = useTranslation("home");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8" />
            <span className="text-xl font-bold">EasyTurnos</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-white/80">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white/80">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-white/80">
              Pricing
            </a>
          </div>

          <Button className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors">
            Sign Up
          </Button>
        </nav>

        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Streamline Your Business Scheduling
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto">
            The all-in-one scheduling solution for beauty salons, clinics, and
            barbershops. Save time, reduce no-shows, and grow your business.
          </p>

          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors inline-flex items-center">
            Start Managing Your Schedule Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary-foreground">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BarChart3 className="h-10 w-10 text-primary" />,
                title: "Centralized Dashboard",
                description:
                  "Manage all your appointments, staff, and clients from one intuitive interface.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Easy Management",
                description:
                  "Effortlessly handle customers, specialists, and appointments with simple CRUD operations.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "WhatsApp Notifications",
                description:
                  "Automated reminders and confirmations to reduce no-shows and keep clients informed.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary-foreground">
            Loved by Businesses Like Yours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                business: "Beauty Salon Owner",
                image:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                quote:
                  "EasyTurnos transformed how we manage appointments. Our no-show rate dropped by 60%!",
              },
              {
                name: "John Smith",
                business: "Barbershop Manager",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                quote:
                  "The automated notifications alone saved us countless hours of phone calls.",
              },
              {
                name: "Sarah Chen",
                business: "Clinic Director",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
                quote:
                  "Simple to use yet powerful. It's exactly what our growing clinic needed.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-card-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
                <p className="text-card-foreground mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary-foreground">
            Get Started in Three Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Sign Up",
                description:
                  "Create your account and customize your business profile",
              },
              {
                step: "2",
                title: "Add Your Team",
                description: "Input your staff members and their schedules",
              },
              {
                step: "3",
                title: "Start Booking",
                description:
                  "Begin accepting appointments and growing your business",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary-foreground">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "29",
                features: [
                  "Up to 2 staff members",
                  "100 appointments/month",
                  "Basic notifications",
                  "Email support",
                ],
              },
              {
                name: "Professional",
                price: "79",
                features: [
                  "Up to 10 staff members",
                  "Unlimited appointments",
                  "WhatsApp notifications",
                  "Priority support",
                ],
              },
              {
                name: "Enterprise",
                price: "149",
                features: [
                  "Unlimited staff members",
                  "Advanced analytics",
                  "Custom features",
                  "24/7 support",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-card p-8 rounded-xl shadow-sm ${
                  index === 1 ? "border-2 border-primary relative" : ""
                }`}
              >
                {index === 1 && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-card-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-card-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold ${
                    index === 1
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  } transition-colors`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="h-6 w-6" />
                <span className="text-xl font-bold">EasyTurnos</span>
              </div>
              <p className="text-muted-foreground">
                Simplifying scheduling for growing businesses.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-secondary-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-secondary-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-card-foreground px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground px-6 rounded-r-lg hover:bg-primary/90 transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-left text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} EasyTurnos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

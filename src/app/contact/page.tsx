// src/app/contact/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    id: 1,
    Icon: Mail,
    title: "Email Us",
    description: "Reach out anytime for support or questions.",
    contact: "support@carentara.com",
  },
  {
    id: 2,
    Icon: Phone,
    title: "Call Us",
    description: "We're available by phone 9am–6pm local time.",
    contact: "+1 (555) 123-4567",
  },
  {
    id: 3,
    Icon: MapPin,
    title: "Head Office",
    description: "Visit us for in-person bookings and tours.",
    contact: "1234 Elm Street, Springfield",
  },
];

// Reusable contact card with hover animation
function ContactCard({
  Icon,
  title,
  description,
  contact,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
  contact: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Icon size={48} className="text-neutral-900 mb-4" />
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-center text-sm text-neutral-700 mb-3">{description}</p>
      <Link
        href={
          title === "Email Us"
            ? `mailto:${contact}`
            : title === "Call Us"
              ? `tel:${contact}`
              : "#"
        }
        className="text-neutral-500 font-medium hover:underline"
      >
        {contact}
      </Link>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
      {/* Intro Section */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Get in Touch with Carentara</h1>
          <p className="text-gray-700">
            Whether you have questions, need support, or want to partner with us, we’re here to help. Reach out via email, phone, or visit our head office.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/contact/office.jpg"
            alt="Carentara Office"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.section>

      {/* Contact Methods */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {contactMethods.map((method, idx) => (
          <ContactCard
            key={idx}
            Icon={method.Icon}
            title={method.title}
            description={method.description}
            contact={method.contact}
          />
        ))}
      </section>
    </main>
  );
}

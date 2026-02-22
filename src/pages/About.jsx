import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="container mx-auto p-12 bg-[#F0FFF4]">
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About Our Company
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We&apos;re on a mission to provide high-quality products with
            exceptional customer service.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
            <p className="text-gray-800">
              Founded in 2015, our journey began with a simple idea: to create
              products that combine quality, functionality, and style. What
              started as a small operation has grown into a trusted brand
              serving customers worldwide.
            </p>
            <p className="text-gray-800">
              Through the years, we've remained committed to our core values of
              quality, innovation, and customer satisfaction. Every product we
              offer is carefully selected and tested to ensure it meets our high
              standards.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src="https://dataoptin.com/wp-content/uploads/2021/05/AdobeStock_223290240-1-scaled.jpeg"
              alt="Our company story"
              className="object-cover"
            />
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-muted py-12 px-6 rounded-lg">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
            <p className="text-xl text-gray-800">
              "To provide exceptional products that enhance our customers' lives
              while maintaining the highest standards of quality, service, and
              environmental responsibility."
            </p>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-800">
              The passionate people behind our success. Our diverse team brings
              together expertise from various backgrounds to deliver the best
              experience for our customers.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image:
                  'https://img.freepik.com/premium-photo/business-attire_540381-6378.jpg',
              },
              {
                name: 'Michael Chen',
                role: 'Head of Product',
                image:
                  'https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg',
              },
              {
                name: 'Emma Rodriguez',
                role: 'Customer Experience',
                image:
                  'https://th.bing.com/th/id/OIP.RybniLLYLcwYS6tcBzEfwAHaGQ?w=1600&h=1353&rs=1&pid=ImgDetMain',
              },
              {
                name: 'David Kim',
                role: 'Lead Designer',
                image:
                  'https://th.bing.com/th/id/OIP.0L2Eq4jMlA1HpN8txrlJBwHaJn?rs=1&pid=ImgDetMain',
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className=" relative  ">
                  <img
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    className="object-cover w-72 h-72 rounded-full mx-auto" 
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-800">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Values Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
            <p className="mx-auto max-w-[700px] text-gray-800">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Quality',
                description:
                  "We're committed to excellence in everything we create and deliver.",
              },
              {
                title: 'Innovation',
                description:
                  'We continuously seek new ways to improve our products and services.',
              },
              {
                title: 'Sustainability',
                description:
                  'We strive to minimize our environmental impact in all operations.',
              },
              {
                title: 'Integrity',
                description:
                  'We conduct business with honesty, transparency, and ethical standards.',
              },
              {
                title: 'Customer Focus',
                description:
                  'We put our customers at the center of every decision we make.',
              },
              {
                title: 'Community',
                description:
                  'We believe in giving back and supporting the communities we serve.',
              },
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-800">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-800">
              Have questions or want to learn more about our company? We'd love
              to hear from you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full bg-muted p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Email Us</h3>
                <p className="text-sm text-gray-800">
                  Our friendly team is here to help.
                </p>
                <Link
                  to="mailto:hello@example.com"
                  className="text-sm font-medium underline"
                >
                  timilsinab22bi@gmail.com
                </Link>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full bg-muted p-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Visit Us</h3>
                <p className="text-sm text-gray-800">
                  Come say hello at our office.
                </p>
                <p className="text-sm">
                  Newroad street no:5
                  <br />
                  Pokhara
                </p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="rounded-full bg-muted p-3">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Call Us</h3>
                <p className="text-sm text-gray-800">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link
                  href="tel:+1234567890"
                  className="text-sm font-medium underline"
                >
                  +977 9812345678
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-12 px-6 rounded-lg text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">
            Ready to Shop?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-800">
            Explore our collection of high-quality products designed with you in
            mind.
          </p>
          <Button asChild size="lg">
            <Link href="/products" className="flex items-center gap-2">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}

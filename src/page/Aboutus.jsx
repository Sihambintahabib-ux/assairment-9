import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Aboutus = () => {
  // Hero Slides
  const heroSlides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=600&fit=crop",
      title: "Welcome to WarmPaws",
      subtitle: "Your trusted pet care partner",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=600&fit=crop",
      title: "Expert Winter Care",
      subtitle: "Keeping pets safe and warm",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1530041539828-114de669390e?w=1920&h=600&fit=crop",
      title: "Professional Team",
      subtitle: "Experienced veterinarians",
    },
  ];

  // Team Members
  const team = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Dr. James Cooper",
      role: "Head Veterinarian",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Pet Care Specialist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      role: "Senior Pet Care",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Jessica Thompson",
      text: "WarmPaws saved my dog's life during winter. Amazing service!",
      rating: 5,
    },
    {
      id: 2,
      name: "Robert Anderson",
      text: "Best pet grooming service. Highly professional team.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Garcia",
      text: "My pets love coming here. Great care and facilities.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-[500px]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
                <div className="text-white px-4">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-2xl">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* About Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About WarmPaws</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 text-lg mb-4">
              Founded in 2009, WarmPaws is dedicated to providing exceptional
              winter care for your beloved pets. With over 15 years of
              experience, we've served thousands of happy pet owners.
            </p>
            <p className="text-gray-700 text-lg">
              Our team of certified veterinarians and pet care specialists
              ensures your furry friends receive the best treatment, especially
              during harsh winter conditions.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop"
            alt="About Us"
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">10,000+</p>
            <p className="text-lg">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold">25,000+</p>
            <p className="text-lg">Pets Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold">15+</p>
            <p className="text-lg">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p className="text-lg">Safety Record</p>
          </div>
        </div>
      </section>

      {/* Team Slider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {team.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-orange-600">{member.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Client Testimonials
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;

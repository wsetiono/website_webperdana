import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe, Zap, Shield, Star } from "lucide-react"

export default function HomePage() {
  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Tampilan Menarik & Responsif",
      description: "Website dan aplikasi yang terlihat profesional di semua perangkat - desktop, tablet, dan mobile",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Loading Super Cepat",
      description: "Optimasi performa terbaik untuk memastikan website Anda loading dengan cepat",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Keamanan Terjamin",
      description: "Sistem keamanan berlapis untuk melindungi data dan informasi bisnis Anda",
    },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Fashion",
      category: "Website",
      image: "/modern-fashion-ecommerce.png",
      description: "Platform e-commerce modern untuk brand fashion lokal",
    },
    {
      id: 2,
      title: "Aplikasi Delivery Food",
      category: "Mobile App",
      image: "/food-delivery-app.png",
      description: "Aplikasi mobile untuk layanan delivery makanan",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      category: "Web App",
      image: "/business-analytics-dashboard.png",
      description: "Dashboard analytics untuk monitoring bisnis",
    },
    {
      id: 4,
      title: "Website Klinik",
      category: "Website",
      image: "/medical-clinic-website.png",
      description: "Website profesional untuk klinik kesehatan",
    },
    {
      id: 5,
      title: "Aplikasi Booking",
      category: "Mobile App",
      image: "/booking-appointment-mobile-app.jpg",
      description: "Aplikasi mobile untuk sistem booking appointment",
    },
    {
      id: 6,
      title: "Platform Learning",
      category: "Web App",
      image: "/online-learning-platform.png",
      description: "Platform pembelajaran online interaktif",
    },
  ]

  const testimonials = [
    {
      name: "Owner",
      company: "Toko Elektronik Maju",
      rating: 5,
      comment:
        "Website yang dibuat Web Perdana sangat membantu meningkatkan penjualan online kami. Desainnya menarik dan mudah digunakan!",
    },
    {
      name: "Owner",
      company: "Klinik Sehat Bersama",
      rating: 5,
      comment:
        "Aplikasi booking yang dibuat sangat memudahkan pasien untuk membuat janji. Tim Web Perdana sangat profesional!",
    },
    {
      name: "Strategic Business Manager",
      company: "Restoran Nusantara",
      rating: 5,
      comment: "Aplikasi delivery yang dikembangkan meningkatkan efisiensi bisnis kami. Highly recommended!",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Solusi Digital Terpercaya
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  Wujudkan Bisnis Digital Impian Anda Bersama <span className="text-primary">Web Perdana</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Kami menyediakan jasa pembuatan <span className="text-primary text-3xl font-bold">Website</span>, <span className="text-primary text-3xl font-bold">Web App</span>, dan <span className="text-primary text-3xl font-bold">Mobile App (Android/iOS)</span> dengan tampilan
                  menarik, loading cepat, dan keamanan terjamin untuk mengembangkan bisnis Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/kontak">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portofolio">Lihat Portofolio</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Klien Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">3+</div>
                  <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/modern-web-development-team-working.jpg"
                  alt="Tim Web Perdana sedang mengembangkan website dan aplikasi"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl"
                  priority
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 hero-gradient rounded-lg transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Mengapa Memilih Web Perdana?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami berkomitmen memberikan solusi digital terbaik untuk mengembangkan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Portofolio Terbaru Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lihat berbagai proyek website, web app, dan mobile app yang telah kami kerjakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} - ${item.description}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/portofolio">
                Lihat Semua Portofolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Apa Kata Klien Kami?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Siap Mengembangkan Bisnis Digital Anda?</h2>
              <p className="text-xl opacity-90">
                Konsultasikan kebutuhan website, web app, atau mobile app Anda dengan tim ahli kami. Dapatkan konsultasi
                gratis dan penawaran terbaik!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/kontak">
                    Hubungi Kami Sekarang
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  asChild
                >
                  <Link href="https://wa.me/62xxxxxxxxx">WhatsApp Kami</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

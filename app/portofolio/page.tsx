import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Globe, Smartphone, Monitor, Calendar, Users, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio Hasil Kerja Website & Mobile App - Web Perdana",
  description:
    "Lihat portfolio hasil kerja Web Perdana dalam pembuatan website, web app, dan mobile app untuk berbagai industri. Kualitas terjamin dan hasil memuaskan.",
  keywords:
    "portfolio web perdana, hasil kerja website, portfolio mobile app, contoh website, portfolio web development indonesia",
  openGraph: {
    title: "Portfolio Hasil Kerja Website & Mobile App - Web Perdana",
    description:
      "Lihat portfolio hasil kerja Web Perdana dalam pembuatan website, web app, dan mobile app untuk berbagai industri.",
    url: "https://webperdana.com/portofolio",
  },
}

export default function PortofolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Fashion Modern",
      category: "Website E-Commerce",
      type: "website",
      description:
        "Platform e-commerce fashion dengan fitur lengkap seperti payment gateway, inventory management, dan sistem review produk.",
      image: "/portofolio/ecommerce-system.png",
      technologies: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Payment Gateway Integration",
        "Inventory Management System",
        "Product Review & Rating",
        "Admin Dashboard",
        "Mobile Responsive",
      ],
      results: {
        performance: "95% PageSpeed Score",
        conversion: "40% Increase in Sales",
        traffic: "200% Traffic Growth",
      },
      year: "2024",
      client: "Fashion Boutique",
      url: "#",
    },
    {
      id: 2,
      title: "Food Delivery Mobile App",
      category: "Mobile Application",
      type: "mobile",
      description:
        "Aplikasi mobile food delivery dengan fitur real-time tracking, multiple payment options, dan sistem rating driver.",
      image: "/food-delivery-app.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Google Maps API"],
      features: [
        "Real-time Order Tracking",
        "Multiple Payment Methods",
        "Driver Rating System",
        "Push Notifications",
        "GPS Integration",
      ],
      results: {
        downloads: "50K+ Downloads",
        rating: "4.8/5 App Store Rating",
        orders: "10K+ Monthly Orders",
      },
      year: "2024",
      client: "Food Delivery Startup",
      url: "#",
    },
    {
      id: 3,
      title: "Business Analytics Dashboard",
      category: "Web Application",
      type: "webapp",
      description:
        "Dashboard analytics bisnis dengan visualisasi data real-time, reporting otomatis, dan integrasi dengan berbagai data source.",
      image: "/business-analytics-dashboard.png",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
      features: [
        "Real-time Data Visualization",
        "Automated Reporting",
        "Multi-source Integration",
        "Custom Dashboard Builder",
        "Export to PDF/Excel",
      ],
      results: {
        efficiency: "60% Time Savings",
        accuracy: "99% Data Accuracy",
        users: "500+ Active Users",
      },
      year: "2024",
      client: "Manufacturing Company",
      url: "#",
    },
    {
      id: 4,
      title: "Medical Clinic Website",
      category: "Website Company Profile",
      type: "website",
      description:
        "Website klinik medis dengan sistem appointment booking, informasi dokter, dan integrasi dengan sistem manajemen pasien.",
      image: "/medical-clinic-website.png",
      technologies: ["WordPress", "PHP", "MySQL", "Bootstrap", "jQuery"],
      features: [
        "Online Appointment Booking",
        "Doctor Profiles & Schedules",
        "Patient Portal",
        "Medical Services Info",
        "Contact & Location Maps",
      ],
      results: {
        appointments: "300% More Bookings",
        seo: "Top 3 Google Rankings",
        patients: "150+ New Patients/Month",
      },
      year: "2023",
      client: "Klinik Sehat Bersama",
      url: "#",
    },
    {
      id: 5,
      title: "Booking Appointment Mobile App",
      category: "Mobile Application",
      type: "mobile",
      description:
        "Aplikasi mobile untuk booking appointment berbagai layanan dengan sistem notifikasi dan reminder otomatis.",
      image: "/booking-appointment-mobile-app.jpg",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "FCM"],
      features: [
        "Multi-service Booking",
        "Calendar Integration",
        "Push Notifications",
        "Payment Integration",
        "Review & Rating System",
      ],
      results: {
        bookings: "5K+ Monthly Bookings",
        retention: "85% User Retention",
        satisfaction: "4.7/5 User Rating",
      },
      year: "2023",
      client: "Service Booking Platform",
      url: "#",
    },
    {
      id: 6,
      title: "Online Learning Platform",
      category: "Web Application",
      type: "webapp",
      description:
        "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, progress tracking, dan sertifikat digital.",
      image: "/online-learning-platform.png",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "AWS S3"],
      features: [
        "Video Streaming Platform",
        "Interactive Quizzes",
        "Progress Tracking",
        "Digital Certificates",
        "Discussion Forums",
      ],
      results: {
        students: "2K+ Active Students",
        completion: "78% Course Completion",
        satisfaction: "4.6/5 Student Rating",
      },
      year: "2023",
      client: "Educational Institution",
      url: "#",
    },
  ]

  const categories = ["Semua", "Website", "Web Application", "Mobile Application"]
  const stats = [
    { label: "Proyek Selesai", value: "100+", icon: <TrendingUp className="h-6 w-6" /> },
    { label: "Klien Puas", value: "95%", icon: <Users className="h-6 w-6" /> },
    { label: "Tahun Pengalaman", value: "5+", icon: <Calendar className="h-6 w-6" /> },
    { label: "Rating Rata-rata", value: "4.9/5", icon: <TrendingUp className="h-6 w-6" /> },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "website":
        return <Globe className="h-5 w-5" />
      case "webapp":
        return <Monitor className="h-5 w-5" />
      case "mobile":
        return <Smartphone className="h-5 w-5" />
      default:
        return <Globe className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Portfolio Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Hasil Kerja yang <span className="text-primary">Membanggakan</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lihat berbagai proyek website, web application, dan mobile app yang telah kami kerjakan dengan hasil yang
              memuaskan dan memberikan dampak positif bagi bisnis klien.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Portfolio Proyek Terbaru</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Setiap proyek dikerjakan dengan dedikasi tinggi dan teknologi terdepan untuk hasil yang optimal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getTypeIcon(item.type)}
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {item.year}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <p className="text-sm text-muted-foreground">Klien: {item.client}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Teknologi:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Fitur Utama:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {item.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">
                            • {feature}
                          </div>
                        ))}
                        {item.features.length > 3 && (
                          <div className="text-sm text-muted-foreground">+{item.features.length - 3} fitur lainnya</div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Hasil:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {Object.entries(item.results).map(([key, value], idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">
                            • {value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button size="sm" asChild>
                      <Link href="/kontak">
                        Diskusi Proyek Serupa
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={item.url}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Lihat Detail
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Apa Kata Klien Kami?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami dalam setiap proyek
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Owner",
                company: "Fashion Boutique",
                text: "Website e-commerce yang dibuat Web Perdana sangat membantu meningkatkan penjualan online kami. Desainnya menarik dan mudah digunakan.",
                rating: 5,
              },
              {
                name: "Strategic Business Manager",
                company: "Food Delivery Startup",
                text: "Aplikasi mobile yang dikembangkan sangat profesional dan sesuai dengan kebutuhan bisnis kami. Tim sangat responsif dan supportif.",
                rating: 5,
              },
              {
                name: "Owner",
                company: "Klinik Medis",
                text: "Website klinik kami menjadi lebih modern dan fungsional. Sistem booking online sangat memudahkan pasien untuk membuat janji.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">Siap Menjadi Bagian dari Portfolio Kami?</h2>
            <p className="text-xl opacity-90">
              Mari wujudkan proyek digital impian Anda bersama Web Perdana. Konsultasi gratis untuk membahas kebutuhan
              dan solusi terbaik untuk bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontak">
                  Mulai Proyek Anda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/layanan">Lihat Layanan Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

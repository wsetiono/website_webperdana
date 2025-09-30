import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  Zap,
  Shield,
  Users,
  Code,
  Palette,
  Search,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Layanan Jasa Website, Web App & Mobile App - Web Perdana",
  description:
    "Layanan lengkap pembuatan website, web app, dan mobile app (Android/iOS) dengan tampilan menarik, loading cepat, dan keamanan terjamin. Konsultasi gratis!",
  keywords:
    "jasa website, pembuatan website, web app development, mobile app android, mobile app ios, web development indonesia",
  openGraph: {
    title: "Layanan Jasa Website, Web App & Mobile App - Web Perdana",
    description:
      "Layanan lengkap pembuatan website, web app, dan mobile app (Android/iOS) dengan tampilan menarik, loading cepat, dan keamanan terjamin.",
    url: "https://webperdana.com/layanan",
  },
}

export default function LayananPage() {
  const services = [
    {
      id: "web-development",
      icon: <Globe className="h-8 w-8" />,
      title: "Pembuatan Website",
      subtitle: "Website Profesional & Load Secepat Kilat",
      description:
        "Kami membuat website yang tidak hanya terlihat menarik, tetapi juga dioptimalkan untuk mesin pencari dan performa tinggi.",
      features: [
        "Desain responsif untuk semua perangkat",
        "Load secepat kilat",
        "Loading cepat dengan teknologi terbaru",
        "Content Management System (CMS)",
        "SSL Certificate & keamanan berlapis",
        "Maintenance & support berkelanjutan",
      ],
      technologies: ["Next.js", "React", "WordPress", "HTML5", "CSS3", "JavaScript"],
      startingPrice: "Mulai dari Rp 500.000",
      image: "/web-development-service.jpg",
      examples: [
        "Website Company Profile",
        "Website E-commerce",
        "Website Portal Berita",
        "Website Landing Page",
        "Website Portofolio",
      ],
    },
    {
      id: "web-app",
      icon: <Monitor className="h-8 w-8" />,
      title: "Pengembangan Web App",
      subtitle: "Aplikasi Web Interaktif & Powerful",
      description:
        "Solusi web application yang kompleks dan interaktif untuk kebutuhan bisnis yang lebih advanced dengan fitur-fitur canggih.",
      features: [
        "Dashboard admin yang powerful",
        "Sistem user management",
        "Real-time data processing",
        "API integration",
        "Database optimization",
        "Cloud deployment & scaling",
      ],
      technologies: ["React", "Node.js", "Next.js", "PostgreSQL", "MongoDB", "AWS"],
      startingPrice: "Mulai dari Rp 1.500.000",
      image: "/web-app-development-service.jpg",
      examples: [
        "Sistem Manajemen Inventory",
        "Platform E-learning",
        "Aplikasi CRM",
        "Dashboard Analytics",
        "Sistem Booking Online",
      ],
    },
    {
      id: "mobile-app",
      icon: <Smartphone className="h-8 w-8" />,
      title: "Aplikasi Mobile (Android/iOS)",
      subtitle: "Native & Cross-Platform Mobile Apps",
      description:
        "Pengembangan aplikasi mobile untuk Android dan iOS dengan performa optimal dan user experience yang luar biasa.",
      features: [
        "Native Android & iOS development",
        "Cross-platform dengan React Native",
        "Push notification system",
        "Offline functionality",
        "App Store & Play Store submission",
        "Analytics & crash reporting",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
      startingPrice: "Mulai dari Rp 3.000.000",
      image: "/mobile-app-development-service.jpg",
      examples: [
        "Aplikasi E-commerce",
        "Aplikasi Delivery Food",
        "Aplikasi Booking Service",
        "Aplikasi Social Media",
        "Aplikasi Fintech",
      ],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Konsultasi & Analisis",
      description: "Diskusi mendalam tentang kebutuhan, target audience, dan goals bisnis Anda",
    },
    {
      step: "02",
      title: "Perencanaan & Desain",
      description: "Membuat wireframe, mockup, dan prototype sesuai dengan brand identity Anda",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Pengembangan dengan teknologi terbaru dan testing menyeluruh untuk memastikan kualitas",
    },
    {
      step: "04",
      title: "Launch & Maintenance",
      description: "Deploy ke production dan memberikan support berkelanjutan untuk performa optimal",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Teknologi Terdepan",
      description: "Menggunakan framework dan tools terbaru untuk hasil yang optimal",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Desain Menarik",
      description: "UI/UX design yang modern, intuitif, dan sesuai dengan brand Anda",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performa Tinggi",
      description: "Optimasi kecepatan dan performa untuk user experience terbaik",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Keamanan Terjamin",
      description: "Implementasi security best practices untuk melindungi data",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Semua Website, Web App dan Mobile App kami dirancang dengan responsive design in mind",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Support 24/7",
      description: "Tim support yang siap membantu kapan saja Anda membutuhkan",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              Layanan Profesional
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Layanan <span className="text-primary">Digital Solution</span> Terlengkap
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dari website company profile hingga aplikasi mobile yang kompleks, kami menyediakan solusi digital lengkap
              untuk mengembangkan bisnis Anda dengan teknologi terdepan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://wa.me/6285179552735">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/portofolio">Lihat Hasil Kerja Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                          {service.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{service.title}</h2>
                          <p className="text-lg text-primary font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                      <div className="text-2xl font-bold text-primary">{service.startingPrice}</div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Fitur Utama:</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Teknologi yang Digunakan:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">Contoh Proyek:</h3>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.examples.map((example, idx) => (
                            <div key={idx} className="text-muted-foreground">
                              • {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button size="lg" asChild>
                      <Link href="https://wa.me/6285179552735">
                        Diskusi Proyek Ini
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} - ${service.subtitle}`}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-2xl w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Proses Kerja Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodologi yang terstruktur untuk memastikan hasil yang optimal dan sesuai ekspektasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 relative">
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Mengapa Memilih Web Perdana?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk proyek digital Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Siap Memulai Proyek Digital Anda?</h2>
            <p className="text-xl opacity-90">
              Konsultasikan kebutuhan Anda dengan tim ahli kami. Dapatkan konsultasi gratis dan penawaran terbaik untuk
              proyek impian Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontak">
                  Mulai Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="https://wa.me/6285179552735">Chat WhatsApp</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

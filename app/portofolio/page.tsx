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
      title: "Ecommerce Electronic Website",
      category: "Website",
      type: "website",
      description:
        "Platform e-commerce electronik dengan  fitur lengkap seperti payment gateway, inventory management, dan sistem review produk.",
      image: "/portofolio/ecommerce-system.png",
      technologies: ["Next.js", "React", "Stripe", ".NET Core API", "Tailwind CSS"],
      features: [
        "Payment Gateway Integration",
        "Inventory Management System",
        "Product Review & Rating",
        "Admin Dashboard",
        "Mobile Responsive",
      ],
      year: "2024",
      url: "#",
    },
    {
      id: 2,
      title: "Sushi Website Restaurant",
      category: "Website",
      type: "website",
      description:
        "Website Restoran Sushi dengan fitur QR Menu, Online Reservation, Customer Loyalty Point. ",
      image: "/portofolio/website-restoran.png",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Responsive Design",
        "QR Menu",
        "Online Reservation",
        "Showcase Image Gallery",
        "Customer Loyalty Point",
      ],
      year: "2024",
      url: "#",
    },
    {
      id: 3,
      title: "Customer Loyalty Point",
      category: "Web App",
      type: "web app",
      description:
        "Customer Loyalty Point membuat customer merasa nyaman dalam belanja dengan system reward.",
      image: "/portofolio/customer-loyalty-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Responsive Design",
        "Loyalty Point Management",
        "Loyalty Point Reward",
      ],
      year: "2024",
      url: "#",
    },
    {
      id: 4,
      title: "Human Resource",
      category: "Web App",
      type: "web app",
      description:
        "HR System Web App membantu proses manajemen employee, perhitungan payroll, dan generate report.",
      image: "/portofolio/hr-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Responsive Design",
        "Manajement Employee",
        "Perhitungan Payroll",
        "Generate Report"
      ],
      year: "2024",
      url: "#",
    },
    {
      id: 5,
      title: "Inventory System",
      category: "Web App",
      type: "web app",
      description:
        "Inventory System Web App membantu proses manajemen produk, dashboard, low stock alert, category management.",
      image: "/portofolio/inventory-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Responsive Design",
        "Manajement Produk",
        "Dashboard",
        "Low Stock Alert"
      ],
      year: "2024",
      url: "#",
    },
    {
      id: 6,
      title: "Online Learning Platform",
      category: "Web Application",
      type: "web app",
      description:
        "Platform pembelajaran online dengan fitur dashboard, manajemen kursus, manajemen siswa, manajemen guru, assignment, penilaian",
      image: "/portofolio/learning-management-system.png",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Manajemen Kursus",
        "Manajemen Siswa",
        "Manajemen Guru",
        "Assignment",
      ],
      year: "2023",
      url: "#",
    },
    {
      id: 7,
      title: "Medical Clinic Website",
      category: "Web Application",
      type: "web app",
      description:
        "Website klinik medis dengan sistem appointment booking, informasi dokter, informasi pasien, report.",
      image: "/portofolio/medical-system.png",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Online Appointment Booking",
        "Doctor Profiles & Schedules",
        "Patient Information",
        "Report",
      ],
      year: "2023",
      url: "#",
    },   
    {
      id: 8,
      title: "POS System",
      category: "Web Application",
      type: "web app",
      description:
        "POS System dengan list produk, add to chart, checkout, search.",
      image: "/portofolio/pos-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "List Product",
        "Add to Cart",
        "Checkout",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 9,
      title: "QR Menu Restaurant",
      category: "Web Application",
      type: "web app",
      description:
        "QR Menu App dengan scan barcode, list menu, menu image.",
      image: "/portofolio/qr-menu-restaurant.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "QR Scanning",
        "List Menu",
        "Menu Image",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 10,
      title: "Website Bengkel",
      category: "Website",
      type: "website",
      description:
        "Website Bengkel dengan menu layanan, reservasi, poin loyalitas, tentang kami, kontak.",
      image: "/portofolio/website-bengkel.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Responsive View",
        "Reservasi Online",
        "Loyalty Poin",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 11,
      title: "Website Dealer Mobil",
      category: "Website",
      type: "website",
      description:
        "Website Bengkel dengan menu daftar mobil, reservasi, poin loyalitas, tentang kami, kontak.",
      image: "/portofolio/website-dealer-mobil.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Responsive View",
        "Reservasi Online",
        "Loyalty Poin",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 12,
      title: "Website Notaris",
      category: "Website",
      type: "website",
      description:
        "Website Notaris dengan menu layanan, tentang kami, testimoni, konsultasi.",
      image: "/portofolio/website-notaris.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Responsive View",
        "Menu Testimoni",
        "Menu Konsultasi",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 13,
      title: "Website Salon",
      category: "Website",
      type: "website",
      description:
        "Website Salon dengan menu Gaya Rambut, Stylist, Reservasi, loyalty point, tentang kami, kontak.",
      image: "/portofolio/website-salon.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Responsive View",
        "Reservasi",
        "Loyalty Poin",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 14,
      title: "Warehouse System",
      category: "Web Application",
      type: "web app",
      description:
        "Warehouse System dengan menu dashboard, inventory, movements.",
      image: "/portofolio/warehouse-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Inventory",
        "Movements",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 15,
      title: "Sales System",
      category: "Web Application",
      type: "web app",
      description:
        "Sales System dengan menu dashboard, Export document, report.",
      image: "/portofolio/sales-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Export Document",
        "Report",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 16,
      title: "Procurement System",
      category: "Web Application",
      type: "web app",
      description:
        "Procurement System dengan menu dashboard, purchase request, vendor, purchase order, budget tracking.",
      image: "/portofolio/procurement-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Purchase Request",
        "Purchase Order",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 17,
      title: "Manufacturing System",
      category: "Web Application",
      type: "web app",
      description:
        "Manufacturing System dengan menu dashboard, production order, inventory, quality control, report.",
      image: "/portofolio/manufacturing-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Production Order",
        "Report",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 18,
      title: "CRM System",
      category: "Web Application",
      type: "web app",
      description:
        "CRM System dengan menu dashboard, Lead, pipeline, interaction.",
      image: "/portofolio/crm-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Lead",
        "Interaction",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 18,
      title: "Appointment System",
      category: "Web Application",
      type: "web app",
      description:
        "Appointment System dengan menu dashboard, new appointment, track by calendar.",
      image: "/portofolio/appointment-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "New Appointment",
        "Track by Calendar",
      ],
      year: "2023",
      url: "#",
    }, 
    {
      id: 19,
      title: "Document Management System",
      category: "Web Application",
      type: "web app",
      description:
        "Document Management System dengan menu dashboard, documents, upload doc.",
      image: "/portofolio/document-management-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Document",
        "Upload Doc",
      ],
      year: "2023",
      url: "#",
    },   
    {
      id: 20,
      title: "Finance System",
      category: "Web Application",
      type: "web app",
      description:
        "Finance System dengan menu dashboard, invoice, payroll, expense, tax, report.",
      image: "/portofolio/finance-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Invoice",
        "Report",
      ],
      year: "2023",
      url: "#",
    },  
    {
      id: 21,
      title: "Project Management System",
      category: "Web Application",
      type: "web app",
      description:
        "Project Management System dengan menu dashboard, kanban board, calendar, report.",
      image: "/portofolio/project-management-system.PNG",
      technologies: ["Next.js", "React", ".NET Core API", "Tailwind CSS"],
      features: [
        "Dashboard",
        "Kanban Board",
        "Report",
      ],
      year: "2023",
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
                <div className="relative" style={{ height: 'auto' }}>
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
                        {/* {item.features.length > 3 && (
                          <div className="text-sm text-muted-foreground">+{item.features.length - 3} fitur lainnya</div>
                        )} */}
                      </div>
                    </div>

                    {/* <div>
                      <h4 className="font-semibold text-foreground mb-2">Hasil:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {Object.entries(item.results).map(([key, value], idx) => (
                          <div key={idx} className="text-sm text-muted-foreground">
                            • {value}
                          </div>
                        ))}
                      </div>
                    </div> */}
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

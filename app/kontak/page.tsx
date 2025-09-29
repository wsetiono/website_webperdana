import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Globe,
  Smartphone,
  Monitor,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak Kami - Web Perdana | Konsultasi Gratis Website & Mobile App",
  description:
    "Hubungi Web Perdana untuk konsultasi gratis pembuatan website, web app, dan mobile app. Tim ahli siap membantu mewujudkan proyek digital Anda.",
  keywords:
    "kontak web perdana, konsultasi website, konsultasi mobile app, jasa pembuatan website, hubungi web perdana",
  openGraph: {
    title: "Kontak Kami - Web Perdana | Konsultasi Gratis Website & Mobile App",
    description:
      "Hubungi Web Perdana untuk konsultasi gratis pembuatan website, web app, dan mobile app. Tim ahli siap membantu mewujudkan proyek digital Anda.",
    url: "https://webperdana.com/kontak",
  },
}

export default function KontakPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telepon",
      value: "+62 812-3456-7890",
      description: "Senin - Jumat, 09:00 - 18:00 WIB",
      href: "tel:+6281234567890",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      description: "Respon cepat 24/7",
      href: "https://wa.me/6281234567890",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "hello@webperdana.com",
      description: "Respon dalam 24 jam",
      href: "mailto:hello@webperdana.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Alamat",
      value: "Jakarta, Indonesia",
      description: "Meeting by appointment",
      href: "#",
    },
  ]

  const services = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Website Development",
      description: "Company profile, e-commerce, landing page",
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "Web Application",
      description: "Dashboard, CRM, sistem manajemen",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile App",
      description: "Android, iOS, cross-platform",
    },
  ]

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan website?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas. Website company profile 2-4 minggu, e-commerce 4-8 minggu, dan web app 8-16 minggu.",
    },
    {
      question: "Apakah ada garansi untuk website yang dibuat?",
      answer:
        "Ya, kami memberikan garansi 6 bulan untuk bug fixing dan 1 tahun untuk maintenance dengan syarat dan ketentuan yang berlaku.",
    },
    {
      question: "Bisakah website dibuat load secepat mungkin?",
      answer:
        "Tentu! Semua website yang kami buat sudah dioptimasi untuk loading cepat, dan mobile-friendly.",
    },
    {
      question: "Apakah bisa request revisi desain?",
      answer:
        "Ya, kami memberikan 3x revisi gratis untuk desain. Revisi tambahan akan dikenakan biaya sesuai kesepakatan.",
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
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Mari <span className="text-primary">Diskusikan</span> Proyek Anda
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Konsultasi gratis dengan tim ahli kami untuk membahas kebutuhan digital Anda. Kami siap membantu
              mewujudkan visi bisnis Anda dengan solusi teknologi terdepan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                    <p className="text-primary font-medium">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                  {info.href !== "#" && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={info.href}>Hubungi</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {/* <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Kirim Pesan</h2>
                <p className="text-muted-foreground">
                  Ceritakan tentang proyek Anda dan kami akan memberikan konsultasi terbaik untuk kebutuhan digital
                  Anda.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input id="name" placeholder="Masukkan nama lengkap" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Nama Perusahaan</Label>
                    <Input id="company" placeholder="Nama perusahaan (opsional)" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="nama@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor WhatsApp *</Label>
                    <Input id="phone" placeholder="+62 812-3456-7890" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Layanan yang Dibutuhkan *</Label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Pilih layanan</option>
                    <option value="website">Website Development</option>
                    <option value="webapp">Web Application</option>
                    <option value="mobile">Mobile App (Android/iOS)</option>
                    <option value="consultation">Konsultasi Teknologi</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimasi Budget</Label>
                  <select
                    id="budget"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Pilih range budget</option>
                    <option value="under-5m">Di bawah Rp 5 juta</option>
                    <option value="5m-15m">Rp 5 - 15 juta</option>
                    <option value="15m-30m">Rp 15 - 30 juta</option>
                    <option value="30m-50m">Rp 30 - 50 juta</option>
                    <option value="above-50m">Di atas Rp 50 juta</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Deskripsi Proyek *</Label>
                  <Textarea
                    id="message"
                    placeholder="Ceritakan detail tentang proyek yang ingin Anda kerjakan, fitur yang dibutuhkan, timeline, dan informasi lain yang relevan..."
                    rows={5}
                    required
                  />
                </div>

                <Button size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Kirim Pesan
                </Button>

                <p className="text-sm text-muted-foreground">
                  * Dengan mengirim pesan, Anda menyetujui bahwa kami akan menghubungi Anda untuk konsultasi lebih
                  lanjut.
                </p>
              </form>
            </div> */}

            {/* Services & Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Layanan Kami</h2>
                <p className="text-muted-foreground mb-6">
                  Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda berkembang.
                </p>

                <div className="space-y-4">
                  {services.map((service, index) => (
                    <Card key={index} className="p-4">
                      <CardContent className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-primary text-primary-foreground">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">Konsultasi Gratis</h3>
                  </div>
                  <p className="opacity-90">
                    Dapatkan konsultasi gratis untuk membahas kebutuhan proyek Anda. Tim ahli kami siap memberikan
                    solusi terbaik.
                  </p>
                  <div className="space-y-2 text-sm opacity-90">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Respon dalam 24 jam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>Diskusi via WhatsApp/Video Call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Proposal & estimasi gratis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Pertanyaan Umum</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="p-4">
                      <CardContent className="space-y-2">
                        <h4 className="font-medium text-foreground">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Siap Memulai Proyek Anda?</h2>
            <p className="text-xl text-muted-foreground">
              Jangan ragu untuk menghubungi kami. Tim Web Perdana siap membantu mewujudkan visi digital Anda dengan
              solusi terbaik dan harga yang kompetitif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://wa.me/6285179552735">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat WhatsApp Sekarang
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portofolio">
                  Lihat Portfolio Kami
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

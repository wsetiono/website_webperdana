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
  Users,
  Target,
  Award,
  Heart,
  Code,
  Lightbulb,
  Shield,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tentang Kami - Web Perdana | Software House Terpercaya Indonesia",
  description:
    "Kenali lebih dekat Web Perdana, software house terpercaya dengan pengalaman 5+ tahun dalam pembuatan website, web app, dan mobile app. Tim ahli dan berpengalaman.",
  keywords:
    "tentang web perdana, software house indonesia, tim developer, pengalaman web development, visi misi web perdana",
  openGraph: {
    title: "Tentang Kami - Web Perdana | Software House Terpercaya Indonesia",
    description:
      "Kenali lebih dekat Web Perdana, software house terpercaya dengan pengalaman 5+ tahun dalam pembuatan website, web app, dan mobile app.",
    url: "https://webperdana.com/tentang-kami",
  },
}

export default function TentangKamiPage() {
  const values = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Kualitas Terdepan",
      description:
        "Kami berkomitmen menggunakan teknologi terbaru dan best practices untuk menghasilkan produk berkualitas tinggi.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fokus pada Klien",
      description: "Kepuasan klien adalah prioritas utama. Kami mendengarkan kebutuhan dan memberikan solusi terbaik.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Inovasi Berkelanjutan",
      description: "Selalu mengikuti perkembangan teknologi dan tren terbaru untuk memberikan solusi yang inovatif.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Keamanan Terjamin",
      description: "Implementasi security best practices untuk melindungi data dan sistem dari berbagai ancaman.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Tepat Waktu",
      description: "Menghargai waktu klien dengan menyelesaikan proyek sesuai timeline yang telah disepakati.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion & Dedikasi",
      description: "Tim yang passionate dan berdedikasi tinggi untuk menghasilkan karya terbaik di setiap proyek.",
    },
  ]

  const team = [
    {
      name: "Ahmad Rizki",
      role: "Founder & Lead Developer",
      experience: "8+ tahun",
      expertise: ["Full-stack Development", "System Architecture", "Project Management"],
      image: "/professional-male-developer.jpg",
    },
    {
      name: "Sarah Putri",
      role: "UI/UX Designer",
      experience: "6+ tahun",
      expertise: ["User Interface Design", "User Experience", "Prototyping"],
      image: "/professional-female-designer.png",
    },
    {
      name: "Budi Santoso",
      role: "Mobile App Developer",
      experience: "5+ tahun",
      expertise: ["React Native", "Flutter", "iOS/Android Development"],
      image: "/professional-male-mobile-developer.jpg",
    },
    {
      name: "Dewi Lestari",
      role: "Frontend Developer",
      experience: "4+ tahun",
      expertise: ["React", "Next.js", "Frontend Optimization"],
      image: "/professional-female-frontend-developer.png",
    },
  ]

  const achievements = [
    { number: "100+", label: "Proyek Selesai", icon: <Target className="h-6 w-6" /> },
    { number: "95%", label: "Tingkat Kepuasan Klien", icon: <Star className="h-6 w-6" /> },
    { number: "5+", label: "Tahun Pengalaman", icon: <Award className="h-6 w-6" /> },
    { number: "50+", label: "Klien Terpercaya", icon: <Users className="h-6 w-6" /> },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Berdirinya Web Perdana",
      description: "Memulai perjalanan sebagai software house dengan fokus pada kualitas dan inovasi.",
    },
    {
      year: "2020",
      title: "Ekspansi Layanan",
      description: "Menambah layanan mobile app development dan memperluas tim developer.",
    },
    {
      year: "2021",
      title: "50+ Proyek Selesai",
      description: "Mencapai milestone 50 proyek dengan tingkat kepuasan klien 95%.",
    },
    {
      year: "2022",
      title: "Sertifikasi & Partnership",
      description: "Mendapat sertifikasi teknologi dan menjalin partnership dengan vendor terkemuka.",
    },
    {
      year: "2023",
      title: "100+ Proyek & Tim Berkembang",
      description: "Mencapai 100+ proyek selesai dan memperluas tim dengan talent terbaik.",
    },
    {
      year: "2024",
      title: "Inovasi & Ekspansi",
      description: "Mengembangkan solusi AI/ML dan memperluas jangkauan ke seluruh Indonesia.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Tentang Web Perdana
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Software House <span className="text-primary">Terpercaya</span> Indonesia
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dengan pengalaman lebih dari 5 tahun, Web Perdana telah membantu 50+ bisnis mengembangkan solusi digital
                yang inovatif dan berkualitas tinggi. Kami berkomitmen memberikan yang terbaik untuk setiap klien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/kontak">
                    Mulai Proyek Bersama Kami
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portofolio">Lihat Portfolio Kami</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-web-development-team-working.jpg"
                alt="Tim Web Perdana sedang bekerja"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto">
                  {achievement.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Visi Kami</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi software house terdepan di Indonesia yang dikenal karena inovasi, kualitas, dan kepercayaan
                  dalam mengembangkan solusi digital yang mengubah cara bisnis beroperasi dan berkembang.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Misi Kami</h2>
                <div className="space-y-3">
                  {[
                    "Memberikan solusi digital berkualitas tinggi yang sesuai kebutuhan klien",
                    "Menggunakan teknologi terdepan untuk hasil yang optimal",
                    "Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan",
                    "Terus berinovasi dan mengembangkan kemampuan tim",
                  ].map((mission, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{mission}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Nilai-Nilai Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap pekerjaan dan interaksi dengan klien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Tim Ahli Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesional berpengalaman yang berdedikasi untuk menghasilkan solusi digital terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience} pengalaman</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Keahlian:</h4>
                    <div className="space-y-1">
                      {member.expertise.map((skill, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground">
                          • {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Perjalanan Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestone penting dalam perjalanan Web Perdana menjadi software house terpercaya
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">Mari Berkolaborasi dengan Tim Terbaik</h2>
            <p className="text-xl opacity-90">
              Bergabunglah dengan 50+ klien yang telah mempercayakan proyek digital mereka kepada Web Perdana. Mari
              wujudkan visi digital Anda bersama tim ahli kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontak">
                  Mulai Diskusi Proyek
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

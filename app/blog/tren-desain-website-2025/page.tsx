import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Tren Desain Website 2025: Yang Perlu Anda Ketahui - Web Perdana",
  description:
    "Eksplorasi tren desain website terbaru di tahun 2025 yang akan membantu bisnis Anda tampil lebih modern dan menarik bagi pengunjung.",
  keywords: "tren desain website 2025, desain web modern, UI/UX design, web design trends",
  openGraph: {
    title: "Tren Desain Website 2025: Yang Perlu Anda Ketahui - Web Perdana",
    description:
      "Eksplorasi tren desain website terbaru di tahun 2025 yang akan membantu bisnis Anda tampil lebih modern dan menarik bagi pengunjung.",
    url: "https://webperdana.com/blog/tren-desain-website-2025",
    siteName: "Web Perdana",
    images: [
      {
        url: "/blog-design-trends.jpg",
        width: 1200,
        height: 630,
        alt: "Tren Desain Website 2025",
      },
    ],
    locale: "id_ID",
    type: "article",
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Navigation />

      {/* Back to Blog */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="outline">Design</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                10 Januari 2025
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />6 menit baca
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            Tren Desain Website 2025: Yang Perlu Anda Ketahui
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Dunia desain website terus berkembang dengan pesat. Tahun 2025 membawa berbagai tren menarik yang
            menggabungkan estetika modern dengan fungsionalitas yang optimal. Mari kita jelajahi tren-tren yang akan
            mendominasi industri web design.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-4xl">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/blog-design-trends.jpg"
              alt="Tren Desain Website 2025"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Tahun 2025 menandai era baru dalam desain website, di mana teknologi AI, sustainability, dan
                  pengalaman pengguna yang personal menjadi fokus utama. Sebagai bisnis yang ingin tetap relevan,
                  memahami tren-tren ini sangat penting untuk menarik dan mempertahankan pengunjung.
                </p>

                <p className="text-lg leading-relaxed">
                  Tim Web Perdana telah menganalisis berbagai tren global dan mengidentifikasi 6 tren utama yang akan
                  mendominasi desain website di tahun 2025:
                </p>
              </div>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. AI-Powered Personalization</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Personalisasi berbasis AI menjadi standar baru dalam desain website modern:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Konten yang menyesuaikan dengan preferensi pengguna</li>
                    <li className="list-disc">Rekomendasi produk/layanan yang cerdas</li>
                    <li className="list-disc">Chatbot AI yang lebih natural dan membantu</li>
                    <li className="list-disc">Layout yang beradaptasi dengan perilaku pengguna</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Insight: Website dengan personalisasi AI dapat meningkatkan conversion rate hingga 40%.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Sustainable & Eco-Friendly Design</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">Kesadaran lingkungan mendorong tren desain yang lebih sustainable:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Dark mode sebagai default untuk menghemat energi</li>
                    <li className="list-disc">Optimasi carbon footprint website</li>
                    <li className="list-disc">Penggunaan warna earth tone dan natural</li>
                    <li className="list-disc">Minimalis design untuk mengurangi resource usage</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Insight: Green hosting dan optimasi performa dapat mengurangi emisi karbon hingga 60%.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Immersive 3D & AR Experiences</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">Teknologi 3D dan AR semakin mudah diakses dan diimplementasikan:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">3D product visualization untuk e-commerce</li>
                    <li className="list-disc">AR try-on features untuk fashion dan furniture</li>
                    <li className="list-disc">Interactive 3D storytelling</li>
                    <li className="list-disc">WebGL dan WebXR untuk pengalaman immersive</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Insight: Website dengan 3D elements memiliki engagement rate 3x lebih tinggi.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Micro-Interactions & Advanced Animations</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">Animasi yang subtle namun meaningful menjadi kunci user experience:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Hover effects yang responsif dan smooth</li>
                    <li className="list-disc">Loading animations yang engaging</li>
                    <li className="list-disc">Scroll-triggered animations</li>
                    <li className="list-disc">Feedback animations untuk user actions</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Insight: Micro-interactions yang tepat dapat meningkatkan user satisfaction hingga 25%.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Voice User Interface (VUI)</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">Voice interaction menjadi bagian integral dari website modern:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Voice search optimization</li>
                    <li className="list-disc">Voice-controlled navigation</li>
                    <li className="list-disc">Audio content dan podcast integration</li>
                    <li className="list-disc">Accessibility improvements melalui voice</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Insight: 50% pencarian akan menggunakan voice search pada tahun 2025.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Neumorphism & Glassmorphism Evolution</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">Evolusi dari flat design menuju tekstur yang lebih natural:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Soft shadows dan subtle depth</li>
                    <li className="list-disc">Glass-like transparency effects</li>
                    <li className="list-disc">Organic shapes dan curved elements</li>
                    <li className="list-disc">Tactile user interface elements</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Insight: Neumorphic design dapat meningkatkan perceived value produk hingga 30%.
                  </p>
                </div>
              </Card>

              <div className="space-y-4 pt-8">
                <h2 className="text-2xl font-bold text-foreground">Implementasi Tren untuk Bisnis Anda</h2>
                <p className="text-lg leading-relaxed">
                  Tidak semua tren cocok untuk setiap bisnis. Kunci sukses adalah memilih tren yang selaras dengan brand
                  identity, target audience, dan tujuan bisnis Anda. Berikut panduan implementasi:
                </p>

                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <h3 className="text-xl font-semibold">Tips Implementasi:</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">
                      <strong>Start Small:</strong> Implementasikan satu tren terlebih dahulu
                    </li>
                    <li className="list-disc">
                      <strong>User Testing:</strong> Selalu test dengan target audience
                    </li>
                    <li className="list-disc">
                      <strong>Performance First:</strong> Pastikan tren tidak mengorbankan kecepatan
                    </li>
                    <li className="list-disc">
                      <strong>Brand Consistency:</strong> Sesuaikan dengan identitas brand
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <h2 className="text-2xl font-bold text-foreground">Kesimpulan</h2>
                <p className="text-lg leading-relaxed">
                  Tren desain website 2025 menunjukkan pergeseran menuju pengalaman yang lebih personal, sustainable,
                  dan immersive. Bisnis yang dapat mengadopsi tren-tren ini dengan bijak akan memiliki keunggulan
                  kompetitif yang signifikan.
                </p>

                <p className="text-lg leading-relaxed">
                  Yang terpenting adalah memahami bahwa desain website bukan hanya tentang estetika, tetapi tentang
                  menciptakan pengalaman yang meaningful bagi pengguna sambil mencapai tujuan bisnis Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation to Previous Article */}
      <section className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline">
              <Link href="/blog/cara-meningkatkan-kecepatan-website">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Artikel Sebelumnya
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog">
                Semua Artikel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
            Ingin Website dengan Desain Terdepan?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Tim Web Perdana siap membantu Anda mengimplementasikan tren desain terbaru yang sesuai dengan brand dan
            tujuan bisnis Anda.
          </p>
          <Button asChild size="lg">
            <Link href="/kontak">Konsultasi Desain Gratis</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

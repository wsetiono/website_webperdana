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
  title: "5 Cara Efektif Meningkatkan Kecepatan Website Anda - Web Perdana",
  description:
    "Pelajari teknik-teknik terbukti untuk mengoptimalkan performa website Anda dan meningkatkan pengalaman pengguna.",
  keywords: "optimasi kecepatan website, performa website, pengalaman pengguna, web optimization",
  openGraph: {
    title: "5 Cara Efektif Meningkatkan Kecepatan Website Anda - Web Perdana",
    description:
      "Pelajari teknik-teknik terbukti untuk mengoptimalkan performa website Anda dan meningkatkan pengalaman pengguna.",
    url: "https://webperdana.com/blog/cara-meningkatkan-kecepatan-website",
    siteName: "Web Perdana",
    images: [
      {
        url: "/blog-speed-optimization.jpg",
        width: 1200,
        height: 630,
        alt: "Optimasi Kecepatan Website",
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
            <Badge variant="outline">Performance</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                15 Januari 2025
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />8 menit baca
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            5 Cara Efektif Meningkatkan Kecepatan Website Anda
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Kecepatan website adalah faktor krusial yang mempengaruhi pengalaman pengguna. Dalam artikel
            ini, kami akan membahas 5 strategi yang telah terbukti efektif untuk meningkatkan performa website Anda.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-4xl">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/blog-speed-optimization.jpg"
              alt="Optimasi Kecepatan Website"
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
                  Di era digital saat ini, kecepatan website bukan lagi sekadar nice-to-have, melainkan kebutuhan
                  mutlak. Penelitian menunjukkan bahwa 53% pengunjung akan meninggalkan website jika loading time
                  melebihi 3 detik. Lebih dari itu, Google juga menggunakan kecepatan website sebagai salah satu faktor
                  ranking dalam algoritma pencarian.
                </p>

                <p className="text-lg leading-relaxed">
                  Sebagai penyedia jasa pengembangan website profesional, Web Perdana telah membantu ratusan klien
                  mengoptimalkan performa website mereka. Berikut adalah 5 strategi yang paling efektif:
                </p>
              </div>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Optimasi Gambar dan Media</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Gambar seringkali menjadi penyebab utama website lambat. Implementasikan strategi berikut:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Gunakan format gambar modern seperti WebP atau AVIF</li>
                    <li className="list-disc">Kompres gambar tanpa mengurangi kualitas visual</li>
                    <li className="list-disc">Implementasikan lazy loading untuk gambar</li>
                    <li className="list-disc">Gunakan responsive images dengan srcset</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Tip: Tools seperti TinyPNG atau ImageOptim dapat mengurangi ukuran file hingga 70% tanpa
                    kehilangan kualitas.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Minifikasi dan Kompresi Kode</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Kode yang tidak dioptimalkan dapat memperlambat loading website secara signifikan:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Minifikasi file CSS, JavaScript, dan HTML</li>
                    <li className="list-disc">Hapus kode yang tidak digunakan (dead code)</li>
                    <li className="list-disc">Aktifkan kompresi Gzip atau Brotli di server</li>
                    <li className="list-disc">Gabungkan file CSS dan JavaScript yang kecil</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Tip: Webpack, Vite, atau tools build modern lainnya dapat mengotomatisasi proses ini.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Implementasi Caching yang Efektif</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Caching adalah salah satu cara paling efektif untuk meningkatkan kecepatan website:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Browser caching untuk aset statis</li>
                    <li className="list-disc">Server-side caching untuk konten dinamis</li>
                    <li className="list-disc">CDN (Content Delivery Network) untuk distribusi global</li>
                    <li className="list-disc">Database query caching untuk aplikasi dinamis</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Tip: Cloudflare atau AWS CloudFront dapat meningkatkan kecepatan hingga 50% untuk pengunjung
                    global.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Optimasi Database dan Server</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">Performa server dan database sangat mempengaruhi kecepatan website:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Pilih hosting dengan spesifikasi yang memadai</li>
                    <li className="list-disc">Optimasi query database dan gunakan indexing</li>
                    <li className="list-disc">Implementasi connection pooling</li>
                    <li className="list-disc">Monitor dan optimasi penggunaan resource server</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Tip: SSD storage dan server dengan lokasi dekat target audience dapat meningkatkan performa
                    signifikan.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Monitoring dan Analisis Berkelanjutan</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Optimasi kecepatan website adalah proses berkelanjutan yang memerlukan monitoring:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="list-disc">Gunakan Google PageSpeed Insights untuk analisis</li>
                    <li className="list-disc">Monitor Core Web Vitals secara berkala</li>
                    <li className="list-disc">Implementasi real user monitoring (RUM)</li>
                    <li className="list-disc">Lakukan audit performa secara rutin</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    💡 Tip: Set up alerts untuk performa website agar dapat segera mengatasi masalah yang muncul.
                  </p>
                </div>
              </Card>

              <div className="space-y-4 pt-8">
                <h2 className="text-2xl font-bold text-foreground">Kesimpulan</h2>
                <p className="text-lg leading-relaxed">
                  Meningkatkan kecepatan website memerlukan pendekatan holistik yang mencakup optimasi frontend,
                  backend, dan infrastruktur. Dengan menerapkan 5 strategi di atas secara konsisten, Anda dapat
                  meningkatkan performa website hingga 70% dan memberikan pengalaman yang lebih baik bagi pengunjung.
                </p>

                <p className="text-lg leading-relaxed">
                  Ingat, optimasi kecepatan website bukan hanya tentang teknologi, tetapi juga tentang memahami
                  kebutuhan pengguna dan bisnis Anda. Setiap website memiliki karakteristik unik yang memerlukan
                  strategi optimasi yang disesuaikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation to Next Article */}
      <section className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Semua Artikel
              </Link>
            </Button>
            <Button asChild>
              <Link href="/blog/tren-desain-website-2025">
                Artikel Selanjutnya
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
            Butuh Website yang Cepat dan Optimal?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Tim Web Perdana siap membantu Anda membangun website dengan performa terbaik. Konsultasi gratis untuk
            mengetahui solusi optimasi yang tepat.
          </p>
          <Button asChild size="lg">
            <Link href="/kontak">Konsultasi Gratis Sekarang</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

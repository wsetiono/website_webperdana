import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog - Web Perdana | Tips & Insights Pengembangan Website",
  description:
    "Baca artikel terbaru tentang tips pengembangan website, tren teknologi, dan insights dari tim Web Perdana. Pelajari cara meningkatkan bisnis Anda dengan teknologi digital.",
  keywords: "blog web development, tips website, teknologi digital, pengembangan aplikasi, Web Perdana blog",
  openGraph: {
    title: "Blog - Web Perdana | Tips & Insights Pengembangan Website",
    description:
      "Baca artikel terbaru tentang tips pengembangan website, tren teknologi, dan insights dari tim Web Perdana.",
    url: "https://webperdana.com/blog",
    siteName: "Web Perdana",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Perdana Blog",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Web Perdana | Tips & Insights Pengembangan Website",
    description:
      "Baca artikel terbaru tentang tips pengembangan website, tren teknologi, dan insights dari tim Web Perdana.",
    images: ["/og-image.jpg"],
  },
}

const blogPosts = [
  {
    slug: "cara-meningkatkan-kecepatan-website",
    title: "5 Cara Efektif Meningkatkan Kecepatan Website Anda",
    description:
      "Pelajari teknik-teknik terbukti untuk mengoptimalkan performa website Anda dan meningkatkan pengalaman pengguna.",
    image: "/blog-speed-optimization.jpg",
    category: "Performance",
    readTime: "8 menit",
    publishDate: "15 Januari 2025",
    excerpt:
      "Kecepatan website adalah faktor krusial yang mempengaruhi pengalaman pengguna. Dalam artikel ini, kami akan membahas 5 strategi yang telah terbukti efektif untuk meningkatkan performa website Anda...",
  },
  {
    slug: "tren-desain-website-2025",
    title: "Tren Desain Website 2025: Yang Perlu Anda Ketahui",
    description:
      "Eksplorasi tren desain website terbaru di tahun 2025 yang akan membantu bisnis Anda tampil lebih modern dan menarik bagi pengunjung.",
    image: "/blog-design-trends.jpg",
    category: "Design",
    readTime: "6 menit",
    publishDate: "10 Januari 2025",
    excerpt:
      "Dunia desain website terus berkembang dengan pesat. Tahun 2025 membawa berbagai tren menarik yang menggabungkan estetika modern dengan fungsionalitas yang optimal. Mari kita jelajahi tren-tren yang akan mendominasi...",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Blog Web Perdana
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Tips & Insights Pengembangan Website
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Dapatkan wawasan terbaru tentang pengembangan website, tips optimasi, dan tren teknologi yang dapat membantu
            mengembangkan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12">
            {blogPosts.map((post, index) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 md:h-full ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.publishDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl md:text-3xl mb-3 text-balance">{post.title}</CardTitle>
                      <CardDescription className="text-base text-pretty leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Button asChild className="group">
                        <Link href={`/blog/${post.slug}`}>
                          Baca Selengkapnya
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Butuh Website Profesional untuk Bisnis Anda?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Tim Web Perdana siap membantu Anda membangun website yang cepat, responsif, dan aman. Konsultasi
            gratis untuk mengetahui solusi terbaik bagi bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://wa.me/6285179552735">Konsultasi Gratis</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/portofolio">Lihat Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

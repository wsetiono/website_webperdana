import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Web Perdana</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Solusi terpercaya untuk kebutuhan website, web app, dan mobile app bisnis Anda. Tampilan menarik, loading
              cepat, keamanan terjamin.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/webperdana"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/webperdana"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/webperdana"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/webperdana"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.youtube.com/webperdana"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/layanan#web-development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pembuatan Website
                </Link>
              </li>
              <li>
                <Link href="/layanan#web-app" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pengembangan Web App
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#mobile-app"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Aplikasi Mobile (Android/iOS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang-kami" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/portofolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Kontak</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@webperdana.com</li>
              <li>WhatsApp: +62 xxx xxxx xxxx</li>
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Web Perdana. Semua hak dilindungi.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

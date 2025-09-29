"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show WhatsApp button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "6285179552735"
  const defaultMessage = "Halo Web Perdana! Saya tertarik dengan layanan Anda. Bisakah kita diskusi lebih lanjut?"

  const quickMessages = [
    "Saya ingin membuat website company profile",
    "Berapa biaya untuk membuat e-commerce?",
    "Saya butuh aplikasi mobile untuk bisnis",
    "Konsultasi untuk web application",
  ]

  const handleQuickMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="mb-4 w-80 shadow-2xl animate-in slide-in-from-bottom-2">
            <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Web Perdana</h3>
                  <p className="text-xs opacity-90">Tim Customer Service</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4 space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  Halo! 👋 Selamat datang di Web Perdana. Ada yang bisa kami bantu untuk proyek digital Anda?
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Pesan Cepat:</p>
                {quickMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(message)}
                    className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border"
                  >
                    {message}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={() => handleQuickMessage(defaultMessage)}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Chat Sekarang
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">Biasanya membalas dalam beberapa menit</p>
            </CardContent>
          </Card>
        )}

        {/* WhatsApp Button */}
        <Button
          size="lg"
          /* className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl" */
          className="bg-green-500 hover:bg-green-600 text-white text-xl rounded-full w-44 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          Chat Whatsapp
        </Button>
      </div>
    </>
  )
}

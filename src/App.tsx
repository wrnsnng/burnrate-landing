import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { Providers } from './sections/Providers'
import { AppPreview } from './sections/AppPreview'
import { Download } from './sections/Download'
import { ReleaseNotes } from './sections/ReleaseNotes'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-primary text-text-primary">
      <Header />
      <main>
        <Hero />
        <Features />
        <Providers />
        <AppPreview />
        <Download />
        <ReleaseNotes />
      </main>
      <Footer />
    </div>
  )
}

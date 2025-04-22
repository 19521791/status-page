import Footer from '@components/layout/Footer'

const PublicLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-[#aeae9d]">
      {children}
      <Footer />
    </main>
  )
}

export default PublicLayout
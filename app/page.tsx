import { Users, GraduationCap, Building2 } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Kelas A2 Teknologi Informasi</h1>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                FIKTI (Fakultas Ilmu Komputer dan Teknologi Informasi)
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Selamat Datang di Kelas A2</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kelas A2 Teknologi Informasi merupakan bagian dari program studi yang berfokus pada pengembangan teknologi
              dan sistem informasi modern.
            </p>
          </div>

          {/* Student Count Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-emerald-600" />
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Total Mahasiswa/i</h3>

            <div className="relative">
              <div className="text-8xl md:text-9xl font-bold text-emerald-600 mb-4">30</div>
              <div className="absolute inset-0 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 font-medium">Mahasiswa/i Aktif</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-emerald-50 rounded-lg p-4">
                <Building2 className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-emerald-800">Fakultas</p>
                <p className="text-xs text-emerald-600">FIKTI</p>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4">
                <GraduationCap className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-emerald-800">Program Studi</p>
                <p className="text-xs text-emerald-600">Teknologi Informasi</p>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4">
                <Users className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-emerald-800">Kelas</p>
                <p className="text-xs text-emerald-600">A2</p>
              </div>
            </div>
          </div>

          {/* Relator Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Relator Kelas</h4>
            <p className="text-2xl font-bold text-emerald-600">Abdul Azis Lubis</p>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Visi Kelas A2</h4>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Menjadi kelas yang unggul dalam bidang teknologi informasi dengan menghasilkan lulusan yang kompeten,
              inovatif, dan siap menghadapi tantangan era digital.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Kelas A2 Teknologi Informasi - FIKTI</p>
        </div>
      </footer>
    </div>
  )
}

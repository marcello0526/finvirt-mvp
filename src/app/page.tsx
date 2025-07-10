import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 네비게이션 */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Finvirt</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-200">홈</Link>
            <Link href="/register" className="hover:text-blue-200">매물등록</Link>
            <Link href="/search" className="hover:text-blue-200">매물검색</Link>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            AI 기반 부동산 직거래 플랫폼
          </h2>
          <p className="text-xl text-gray-600">
            안전하고 투명한 부동산 거래를 위한 검증 시스템
          </p>
        </div>

        {/* 기능 카드들 */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">매물 등록</h3>
            <p className="text-gray-600 mb-4">
              부동산 매물을 등록하고 AI 기반 검증을 받아보세요.
            </p>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              등록하기
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">매물 검색</h3>
            <p className="text-gray-600 mb-4">
              검증된 매물을 검색하고 안전하게 거래하세요.
            </p>
            <Link
              href="/search"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              검색하기
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">검증 리포트</h3>
            <p className="text-gray-600 mb-4">
              AI 분석 결과와 위험도 평가를 확인하세요.
            </p>
            <Link
              href="/reports"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              확인하기
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
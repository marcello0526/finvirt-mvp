'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function SearchPage() {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProperties() {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('오류:', error)
      } else {
        setProperties(data || [])
      }
      setLoading(false)
    }

    fetchProperties()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Finvirt</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-200">홈</Link>
            <Link href="/register" className="hover:text-blue-200">매물등록</Link>
            <Link href="/search" className="hover:text-blue-200">매물검색</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">매물 검색</h1>
        
        {loading ? (
          <div className="text-center">매물을 불러오는 중...</div>
        ) : properties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">📍 {property.address}</p>
                <p className="text-lg font-bold text-blue-600 mb-2">
                  {property.price?.toLocaleString()}만원
                </p>
                <p className="text-sm text-gray-500">
                  면적: {property.area_sqm}㎡
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            등록된 매물이 없습니다.
          </div>
        )}
      </main>
    </div>
  )
}
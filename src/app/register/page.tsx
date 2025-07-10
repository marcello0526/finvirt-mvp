'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    price: '',
    area: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('properties')
        .insert([
          {
            title: formData.title,
            address: formData.address,
            price: parseInt(formData.price),
            area_sqm: parseFloat(formData.area)
          }
        ])

      if (error) throw error

      alert('매물이 성공적으로 등록되었습니다!')
      setFormData({ title: '', address: '', price: '', area: '' })
    } catch (error) {
      console.error('오류:', error)
      alert('등록 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

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

      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">매물 등록</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">매물 제목</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-3 border rounded"
              placeholder="예: 강남구 테헤란로 아파트"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">주소</label>
            <input
              type="text"
              required
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full p-3 border rounded"
              placeholder="예: 서울시 강남구 테헤란로 123"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">가격 (만원)</label>
            <input
              type="number"
              required
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full p-3 border rounded"
              placeholder="예: 50000"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">면적 (㎡)</label>
            <input
              type="number"
              step="0.01"
              required
              value={formData.area}
              onChange={(e) => setFormData({...formData, area: e.target.value})}
              className="w-full p-3 border rounded"
              placeholder="예: 84.5"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? '등록 중...' : '매물 등록'}
          </button>
        </form>
      </main>
    </div>
  )
}
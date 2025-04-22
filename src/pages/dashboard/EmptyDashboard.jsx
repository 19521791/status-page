import React from 'react'

const EmptyDashboard = ({ user }) => {
  return (
    <div>
      <p>👋 Xin chào, {user.name}</p>
      <p>Bạn chưa có monitor nào. </p>
      <p>🛰️  Hãy bắt đầu bằng cách tạo một monitor </p>
      <p>[➕ Tạo Monitor đầu tiên]</p>
      <p>Ví dụ: https://api.myshop.com/health</p>
      <p>Chúng tôi sẽ kiểm tra mỗi 15 phút.</p>
    </div>
  )
}

export default EmptyDashboard
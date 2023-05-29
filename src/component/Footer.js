import React from 'react'

const Footer = () => {
    const foot = ["Meta","Hakkında","Blog","İş Fırsatları", "Yardım","API","Gizlilik","Koşullar","Başlıca", "Hesaplar","Konumlar","Instagram Lite","Kişi Yükleme ve Hesabı Olmayan Kişiler","Meta Verified"]
  return (
    
         <div className="flex justify-center gap-3 cursor-pointer">
    {foot.map((item, index) => (
      <div key={index} className="text-sm">
        {item}
      </div>
     
    ))} 
    
   
  </div>
    
   
  )
}

export default Footer
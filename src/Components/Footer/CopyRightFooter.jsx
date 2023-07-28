import React from 'react'

function CopyRightFooter() {
  return (
   <>
     <footer className='py-4'>
        <div className="container--xxl">
          <div className="col-12">
            <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Powered by Eshop{""}</p>
          </div>
        </div>
      </footer>
   </>
  )
}

export default CopyRightFooter
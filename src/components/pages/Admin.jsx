import React from 'react'
import AdminProducts from '../AdminProducts'
import Footer from '../Footer'
import Navigation from '../Navigation'

export default function Admin() {
  return (
    <>
    <Navigation />
    <section id="admin">
        <div className="container p-5">
            <AdminProducts />
        </div>
    </section>
    <Footer />
    </>
  )
}

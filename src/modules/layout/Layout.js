
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(){

    return (
        <div className="container">
      {/* Header */}
        <Header />
      {/* Page content */}
      <main className="main">
        <Outlet /> {/* Child routes will render here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
    )
}